using ProjectAPI.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectAPI.Controllers
{
    public class Project3Controller : ApiController
    {
        [HttpGet]
        public ulong GetSystemRam()
        {
            return FileTools.GetRAMAmount();
        }

    }
}
