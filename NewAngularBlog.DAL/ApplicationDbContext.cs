using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NewAngularBlog.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NewAngularBlog.DAL
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<JobSeeker> JobSeekers { get; set; }
    }
}
