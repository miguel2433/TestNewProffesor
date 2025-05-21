using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca
{
    public class Tienda
    {
        public List<Producto> Productos { get; set; }
        public Tienda()
        {
            Productos = new List<Producto>();
        }

        public void AgregarProducto(Producto producto)
        {
            Productos.Add(producto);
        }

        public void ModificarProducto(string nombre, Producto producto)
        {
            var prod = Productos.FirstOrDefault(p => p.Nombre == nombre);
            if (prod != null)
            {
                prod.ModificarProducto(producto);
            }
        }
        public void EliminarProducto(string nombre)
        {
            var prod = Productos.FirstOrDefault(p => p.Nombre == nombre);
            if (prod != null)
            {
                Productos.Remove(prod);
            }
        }
        public void ListarProductos()
        {
            if(Productos.Count == 0)
            {
                Console.WriteLine("No hay productos en la tienda.");
                return;
            }
            foreach (var producto in Productos)
            {
                Console.WriteLine($"Nombre: {producto.Nombre}, Cantidad: {producto.Cantidad}, Precio Unitario: {producto.PrecioUnitario}");
            }
        }
    }
}