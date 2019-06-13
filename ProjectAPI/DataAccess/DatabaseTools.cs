using MySql.Data.MySqlClient;
using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace ProjectAPI.DataAccess
{
    public class DatabaseTools
    {

        /// <summary>
        /// Connection string used to connect to the mySQL DB.
        /// </summary>
        const string CONSTR = "Server=sql7.freemysqlhosting.net; Port=3306; Database=sql7295118; Uid=sql7295118; Pwd=nqJTIjFizf;";

        public static IEnumerable<Process> GetProcesses(string userName)
        {

            // Load data from the database into a table.
            var table = FillTable(string.Format("SELECT * FROM Processes WHERE User = '{0}'", userName));

            // Empty list to store processes in.
            List<Process> theList = new List<Process>();

            // Loop through all the rows in the DB.
            foreach (DataRow row in table.Rows)
            {
                // Create a temp process with it attributes mapped to the row values.
                Process t = new Process()
                {
                    ProcessID = int.Parse(row.ItemArray[0].ToString()),
                    Name = row.ItemArray[1].ToString(),
                    User = row.ItemArray[2].ToString(),
                    Arrival = int.Parse(row.ItemArray[3].ToString()),
                    Length = int.Parse(row.ItemArray[4].ToString()),
                };
                // Add the temp value to the processes list.
                theList.Add(t);
            }

            // Return the full processes list.
            return theList;

        }

        public static int SetProcesses(IEnumerable<Process> processes)
        {

            // Number of rowws changed.
            int count = 0;
            // The first process in the list. Used to get userName of processes.
            Process firstProcess = processes.FirstOrDefault();

            // Remove any processes by that user from the DB.
            if (firstProcess != null)
            {
                count += ExecuteNonQuery(string.Format("DELETE FROM Processes WHERE User = '{0}'", firstProcess.User));
            }

            // Add the new processes in.
            foreach (Process process in processes)
            {
                count += ExecuteNonQuery(string.Format("INSERT INTO Processes (Name, User, Arrival, Length) VALUES ('{0}', '{1}', {2}, {3})", process.Name, process.User, process.Arrival, process.Length));
            }

            // Return the number of rows changed.
            return count;

        }

        public static DataTable FillTable(string commandText)
        {

            MySqlConnection con = new MySqlConnection(CONSTR);
            MySqlCommand com = new MySqlCommand(commandText, con);

            MySqlDataAdapter adt = new MySqlDataAdapter(com);

            DataTable tbl = new DataTable();

            try
            {
                con.Open();
                adt.Fill(tbl);
            }
            catch (Exception)
            {
            }

            con.Close();
            return tbl;

        }

        public static int ExecuteNonQuery(string commandText)
        {

            MySqlConnection con = new MySqlConnection(CONSTR);
            MySqlCommand com = new MySqlCommand(commandText, con);

            int count = 0;

            try
            {
                con.Open();
                count = com.ExecuteNonQuery();
            }
            catch (Exception)
            {
            }

            con.Close();
            return count;

        }

    }
}
