using AplicacaoTesteAvaliacao.Modal;
using AplicacaoTesteAvaliacao.Repository.Conexao;
using AplicacaoTesteAvaliacao.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacaoTesteAvaliacao.Repository
{
    public class RepositorioFuncionario : IRepositorioFuncionario
    {
        private readonly SqlConnection conn;
        public RepositorioFuncionario()
        {
            this.conn = new ConexaoSql().Conectar();
        }
        public void Deletar(Funcionario funcionario)
        {
            try
            {
                this.conn.Open();
                string sql = "Delete from Funcionario where id_funcionario = @id";

                var comando = new SqlCommand(sql, this.conn);
                comando.Parameters.AddWithValue("@id", funcionario.Id);

                comando.ExecuteNonQuery();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                this.conn.Close();
            }

        }

        public void Editar(Funcionario funcionario)
        {
            try
            {
                this.conn.Open();
                string sql = "update Funcionario set nome = @nome, set nasc = @nasc, email= @email, sexo= @sexo, habilidade = @habilidade" +
                    " set ativado =@ativado where id_funcionario = @id";

                var comando = new SqlCommand(sql, this.conn);
                comando.Parameters.AddWithValue("@id", funcionario.Id);
                comando.Parameters.AddWithValue("@nome", funcionario.Nome);
                comando.Parameters.AddWithValue("@nasc", funcionario.DataNacimento);
                comando.Parameters.AddWithValue("@email", funcionario.Email);
                comando.Parameters.AddWithValue("@sexo", funcionario.Sexo);
                comando.Parameters.AddWithValue("@habilidade", funcionario.Habilidade);
                comando.Parameters.AddWithValue("@@ativado", funcionario.Ativado);

                comando.ExecuteNonQuery();


            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                this.conn.Close();
            }
        }

        public void Salvar(Funcionario funcionario)
        {
            try
            {
                this.conn.Open();
                string sql = "Insert into Funcionario (nome, nasc, email, sexo, habilidade, ativado) values(@nome, @nasc, @email,@sexo, @habilidade, @ativado)";

                var comando = new SqlCommand(sql, this.conn);
                comando.Parameters.AddWithValue("@nome", funcionario.Nome);
                comando.Parameters.AddWithValue("@nasc", funcionario.DataNacimento);
                comando.Parameters.AddWithValue("@email", funcionario.Email);
                comando.Parameters.AddWithValue("@sexo", funcionario.Sexo);
                comando.Parameters.AddWithValue("@habilidade", funcionario.Habilidade);
                comando.Parameters.AddWithValue("@habilidade", funcionario.Habilidade);
                comando.Parameters.AddWithValue("@ativado", funcionario.Ativado);

                comando.ExecuteNonQuery();

                
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                this.conn.Close();
            }

        }

        public List<Funcionario> VerTodos()
        {
            var listafunc = new List<Funcionario>();
            try
            {
                this.conn.Open();
                string sql = "Select * from Funcionario";

                var comando = new SqlCommand(sql, this.conn);
                SqlDataReader ler = comando.ExecuteReader();

                while (ler.Read()) { }
                {
                    var id = int.Parse(ler["id_funcionario"].ToString());
                    var nome = ler["nome"].ToString();
                    var idade = DateTime.Parse(ler["nasc"].ToString());
                    var email = ler["email"].ToString();
                    var sexo = bool.Parse(ler["sexo"].ToString());
                    var hab = ler["habilidade"].ToString();
                    var ativado = bool.Parse(ler["ativado"].ToString());
                    var func = new Funcionario(id,nome,idade,email,sexo,hab, ativado);
                    listafunc.Add(func);
                }

                return listafunc;
                

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                this.conn.Close();
            }
            return null;
        }
    }
}
