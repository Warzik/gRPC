using AutoMapper;
using Google.Protobuf.Collections;
using GRPC.Server.Entities;
using GRPC.Server.Protos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace GRPC.Server.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Post, PostDto>()
                .ReverseMap();

            CreateMap<Blog, BlogDto>()
                .ReverseMap();
        }
    }
}