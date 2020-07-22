using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AplicacaoTesteAvaliacao.Modal;
using AplicacaoTesteAvaliacao.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace AplicacaoTesteAvaliacao.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionariosController : ControllerBase
    {
        private readonly IFuncionarioService funcionarioService;
        public FuncionariosController(IFuncionarioService funcionarioService)
        {
            this.funcionarioService = funcionarioService;
        }
        // GET: api/<FuncionariosController>
        [HttpGet]
        public IEnumerable<Funcionario> Get()
        {
            return this.funcionarioService.VerFuncionarios();
        }

        // POST api/<FuncionariosController>
        [HttpPost]
        public void Post([FromBody] Funcionario funcionario)
        {
            this.funcionarioService.Criar(funcionario);
        }

        // PUT api/<FuncionariosController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Funcionario funcionario)
        {
            this.funcionarioService.Editar(funcionario);
        }

        // DELETE api/<FuncionariosController>/5
        [HttpDelete("{id}")]
        public void Delete(Funcionario func)
        {
            this.funcionarioService.Apagar(func);
        }
    }
}
