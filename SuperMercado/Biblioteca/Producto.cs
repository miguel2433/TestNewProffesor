using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca
{
    public class Producto
    {
        public string Nombre {get ;set ;}
        public int Cantidad {get;set;}
        public int PrecioUnitario {get;set;}

        public Producto(string nombre, int cantidad, int precioUnitario){
            Nombre = nombre;
            Cantidad = cantidad;
            PrecioUnitario = precioUnitario;
        }

        public void ModificarProducto(Producto producto)
        {
            // Si el nombre es nulo, se mantiene el valor actual
            Nombre = string.IsNullOrEmpty(producto.Nombre) ? Nombre : producto.Nombre;

            // Si la cantidad es 0 o menor, se mantiene el valor actual
            Cantidad = producto.Cantidad > 0 ? producto.Cantidad : Cantidad;

            // Si el precio unitario es 0 o menor, se mantiene el valor actual
            PrecioUnitario = producto.PrecioUnitario > 0 ? producto.PrecioUnitario : PrecioUnitario;
        }
    }
}