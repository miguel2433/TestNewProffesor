using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca
{
    public class kaiju
    {
        public string Nombre {get;set;}
        public List<Habilidad> Habilidades { get; set; } = new List<Habilidad>();
        public int Peso {get;set;}
        public int Dureza {get;set;}
        public int Vida {get;set;}
        public int Tamaño {get;set;}
        public int Categoria {get;set;}
        public kaiju(string Nombre,List<Habilidad> Habilidades,int Peso, int dureza, int vida, int tamaño, int categoria){
            this.Nombre = Nombre;
            this.Habilidades = Habilidades;
            this.Peso = Peso;
            this.Dureza = dureza;
            this.Vida = vida;
            this.Tamaño = tamaño;
            this.Categoria = categoria;
        }

        public void HabilidadesKaiju(string NombreKaiju){
            if(NombreKaiju == this.Nombre){
                Console.WriteLine($"las habilidades de {Nombre} son: {Habilidades}");
            }
            else{
                Console.WriteLine("Este kaiju no tiene habilidades o no existe");
            }
        }

        public void DañoPorHabilidad(string NombreKaiju){
            if(Habilidades.Count != 0){
                for (int i = 0; i < Habilidades.Count; i++){
                    Console.WriteLine($"{Habilidades[i].Nombre} hace {Habilidades[i].Daño}");
                }
            }
            else{
                Console.WriteLine($"{NombreKaiju} no tiene habilidades");
            }
        }

                public void DañoTotal(string NombreKaiju){
            if(Habilidades.Count != 0){
                int acum = 0;
                for (int i = 0; i < Habilidades.Count; i++){
                    acum += Habilidades[i].Daño;
                    Console.WriteLine($"El kaiju {NombreKaiju} hace un daño total de: {acum}");
                }
            }
            else{
                Console.WriteLine($"{NombreKaiju} no tiene habilidades");
            }
        }
    }
}