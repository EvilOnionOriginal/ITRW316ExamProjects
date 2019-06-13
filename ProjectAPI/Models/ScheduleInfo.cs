using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectAPI.Models
{
    public class ScheduleInfo
    {

        public int q1 { get; set; }
        public int q2 { get; set; }
        public int q3 { get; set; }

        public Process[] Processes { get; set; }

    }
}