using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualBasic.Devices;

namespace ProjectAPI.DataAccess
{
    public class FileTools
    {

        public static string ReadFile(string fileName)
        {
            return File.ReadAllText(fileName);
        }

        public static void WriteFile(string fileName, string text)
        {
            File.WriteAllText(fileName, text);
        }

        public static ulong GetRAMAmount()
        {
            ComputerInfo t = new ComputerInfo();
            return t.TotalPhysicalMemory;
        }

    }
}
