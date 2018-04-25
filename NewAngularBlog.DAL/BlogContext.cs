using Microsoft.EntityFrameworkCore;
using NewAngularBlog.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NewAngularBlog.DAL
{
   public class BlogContext : DbContext
    {
        public DbSet<Post> Post { get; set; }
        public DbSet<Comment> Comment { get; set; }


        public BlogContext(DbContextOptions<BlogContext> options) : base(options) { }
    }
}
