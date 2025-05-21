using Biblioteca;

Tienda tienda = new Tienda();

while(true){
    Console.WriteLine("1. Agregar Producto");
    Console.WriteLine("2. Modificar Producto");
    Console.WriteLine("3. Eliminar Producto");
    Console.WriteLine("4. Listar Productos");
    Console.WriteLine("5. Salir");
    Console.Write("Seleccione una opción: ");
    
    int opcion = int.Parse(Console.ReadLine());

    switch(opcion){
        case 1:
            Console.Write("Nombre del producto: ");
            string nombre = Console.ReadLine();
            if(string.IsNullOrEmpty(nombre)){
                Console.WriteLine("El nombre no puede estar vacío.");
                continue;
            }
            Console.Write("Cantidad: ");
            int cantidad = int.Parse(Console.ReadLine());
            if(cantidad <= 0){
                Console.WriteLine("La cantidad debe ser mayor a cero.");
                continue;
            }
            Console.Write("Precio Unitario: ");
            int precioUnitario = int.Parse(Console.ReadLine());
            if(precioUnitario <= 0){
                Console.WriteLine("El precio unitario debe ser mayor a cero.");
                continue;
            }
            tienda.AgregarProducto(new Producto(nombre, cantidad, precioUnitario));
            break;
        case 2:
            Console.Write("Nombre del producto a modificar: ");
            string nombreModificar = Console.ReadLine();
            if(string.IsNullOrEmpty(nombreModificar)){
                Console.WriteLine("Debe poner un nombre para que podamos modificar el producto.");
                continue;
            }
            Console.Write("Nuevo Nombre (dejar vacío para no modificar): ");
            string nuevoNombre = Console.ReadLine();
            Console.Write("Nueva Cantidad (dejar vacío para no modificar): ");
            string nuevaCantidadStr = Console.ReadLine();
            int nuevaCantidad = string.IsNullOrEmpty(nuevaCantidadStr) ? 0 : int.Parse(nuevaCantidadStr);
            Console.Write("Nuevo Precio Unitario (dejar vacío para no modificar): ");
            string nuevoPrecioStr = Console.ReadLine();
            int nuevoPrecioUnitario = string.IsNullOrEmpty(nuevoPrecioStr) ? 0 : int.Parse(nuevoPrecioStr);
            
            tienda.ModificarProducto(nombreModificar, new Producto(nuevoNombre, nuevaCantidad, nuevoPrecioUnitario));
            break;
        case 3:
            Console.Write("Nombre del producto a eliminar: ");
            string nombreEliminar = Console.ReadLine();
            if(string.IsNullOrEmpty(nombreEliminar)){
                Console.WriteLine("Debe poner un nombre para que podamos eliminar el producto.");
                continue;
            }
            tienda.EliminarProducto(nombreEliminar);
            break;
        case 4:
            Console.WriteLine("Lista de Productos:");
            tienda.ListarProductos();
            break;
        case 5:
            return;
        default:
            Console.WriteLine("Opción no válida.");
            break;
    }
}