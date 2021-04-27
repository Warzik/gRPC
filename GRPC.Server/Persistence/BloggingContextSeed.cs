using GRPC.Server.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GRPC.Server.Persistence
{
    public static class BloggingContextSeed
    {
        public static async Task SeedBlogsAsync(BloggingContext context)
        {
            if (!context.Blogs.Any())
            {
                context.Blogs.AddRange(new List<Blog>()
                {
                    new() { Url="blog1.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog2.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog3.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog4.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog5.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog6.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog7.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog8.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog9.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog10.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog11.com", Posts = new List<Post>(){ new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog12.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog13.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog14.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog15.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog16.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog17.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog18.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog19.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                    new() { Url="blog20.com", Posts = new List<Post>() { new(){ Title="Title1" , Content="Content1"}, new(){ Title="Title2" , Content="Content2"} ,new(){ Title="Title2" , Content="Content2"} } },
                });

                await context.SaveChangesAsync();
            }
        }
    }
}