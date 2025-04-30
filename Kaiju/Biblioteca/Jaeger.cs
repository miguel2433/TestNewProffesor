using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace Biblioteca
{
    public class Jaeger
    {
        public Piloto[] Pilotos { get; set; } = new Piloto[2];
        public string Nombre { get; set; }
        public List<Habilidad> Habilidades { get; set; } = new List<Habilidad>();

        public void QuienManeja(string NombreJaeger){
            if(NombreJaeger == this.Nombre){
                Console.WriteLine($"Los pilotos son: {Pilotos}");
            }
            else{
                Console.WriteLine("Este Jaeger no tiene pilotos o no existe");
            }
        }
    }

}