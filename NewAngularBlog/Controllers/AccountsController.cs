using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NewAngularBlog.DAL;
using NewAngularBlog.DAL.Entities;
using ViewModels.Models;

namespace NewAngularBlog.Controllers
{
  [Route("api/[controller]")]
  public class AccountsController : Controller
  {
    private readonly ApplicationDbContext _appDbContext;
    private readonly UserManager<AppUser> _userManager;
    private readonly IMapper _mapper;

    public AccountsController(UserManager<AppUser> userManager, IMapper mapper, ApplicationDbContext appDbContext)
    {
      _userManager = userManager;
      _mapper = mapper;
      _appDbContext = appDbContext;
    }

    // POST api/accounts
    [HttpPost]
    public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      IdentityUser existingUser = _appDbContext.Users.Where(p => p.Email == model.Email).FirstOrDefault();

      if (existingUser != null)
      {
        model.Exist = true;
        return Ok(model);
      }



      var userIdentity = new AppUser();

      userIdentity.Email = model.Email;
      userIdentity.UserName = model.Email;

      userIdentity.Name = model.Name;

      


     var result = await _userManager.CreateAsync(userIdentity, model.Password);


      if (result.Succeeded)
      {
        await _userManager.AddToRoleAsync(userIdentity, "user");
      }



      await _appDbContext.JobSeekers.AddAsync(new JobSeeker { IdentityId = userIdentity.Id, Location = model.Location });
      await _appDbContext.SaveChangesAsync();

      return Ok(model);
    }
  }
}
