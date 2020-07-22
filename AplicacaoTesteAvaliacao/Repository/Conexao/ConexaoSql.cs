using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacaoTesteAvaliacao.Repository.Conexao
{
    public class ConexaoSql
    {

        private readonly SqlConnection conn;
        private string conectionString = "Server=192.168.0.7;Database=myDBTeste;User Id=teste;Password=123456789@teste;";
        public ConexaoSql()
        {
            this.conn = new SqlConnection(conectionString);
        }

        public SqlConnection Conectar()
        {
            try
            {
                return this.conn;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

    }
}
