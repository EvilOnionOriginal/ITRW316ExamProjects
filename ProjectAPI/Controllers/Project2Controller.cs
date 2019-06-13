using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectAPI.Controllers
{
    public class Project2Controller : ApiController
    {
        [HttpGet]
        public IEnumerable<Process> GetProcesses(string userName)
        {
            return DataAccess.DatabaseTools.GetProcesses(userName);
        }

        [HttpPost]
        public void SetProcesses([FromBody] IEnumerable<Process> processes)
        {
            DataAccess.DatabaseTools.SetProcesses(processes);
        }

        [HttpPost]
        public string GetSchedule(ScheduleInfo scheduleInfo)
        {
            return DataAccess.Scheduler.GetSchedule(scheduleInfo);
        }

    }
}
