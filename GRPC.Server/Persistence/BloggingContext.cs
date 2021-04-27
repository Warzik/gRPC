using GRPC.Server.Entities;
using Microsoft.EntityFrameworkCore;

namespace GRPC.Server.Persistence
{
    public class BloggingContext : DbContext
    {
        protected BloggingContext() : base()
        {
        }

        public BloggingContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
    }
}