﻿using FullStack.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStack.Api.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }
    }
}
