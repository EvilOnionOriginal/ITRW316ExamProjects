using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectAPI.Models
{
    public class Process
    {

        public int ProcessID { get; set; }

        public string Name { get; set; }

        public string User { get; set; }

        public int Arrival { get; set; }

        public int Length { get; set; }

    }
}