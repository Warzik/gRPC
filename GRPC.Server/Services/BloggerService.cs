using AutoMapper;
using AutoMapper.QueryableExtensions;
using Google.Protobuf.Collections;
using Grpc.Core;
using GRPC.Server.Persistence;
using GRPC.Server.Protos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GRPC.Server.Services
{
    public class BloggerService : Blogger.BloggerBase
    {
        private readonly ILogger<BloggerService> _logger;
        private readonly IMapper _mapper;
        private readonly BloggingContext _context;

        public BloggerService(ILogger<BloggerService> logger, IMapper mapper, BloggingContext context)
        {
            _logger = logger;
            _mapper = mapper;
            _context = context;
        }

        public override async Task<BlogResponse> GetBlogs(BlogRequest request, ServerCallContext context)
        {
            var result = new BlogResponse();

            var blogs = await _context.Blogs
                .Take(request.Count)
                .Include(x => x.Posts)
                .ToListAsync(); 

            result.Blogs.AddRange(_mapper.Map<List<BlogDto>>(blogs));

            return result;
        }
    }
}