using Biblioteca;

var raleigh = new Piloto { Nombre = "Raleigh Becket", Rango = "Veterano" };
var hermano = new Piloto { Nombre = "Yancy Becket", Rango = "Veterano" };
var mako = new Piloto { Nombre = "Mako Mori", Rango = "Aprendiz" };
var pentecost = new Piloto { Nombre = "Stacker Pentecost", Rango = "Comandante" };

var codoCohete = new Habilidad { Nombre = "Codo de cohete", Daño = 90 };
var cannonPlasma = new Habilidad { Nombre = "Cañón de plasma", Daño = 120 };
var espada = new Habilidad { Nombre = "Espada", Daño = 100 };

var gipsy = new Jaeger {
    Nombre = "Gipsy Danger",
    Pilotos = new Piloto[] { raleigh, hermano },
    Habilidades = new List<Habilidad> { codoCohete, cannonPlasma, espada }
};

var rayoPlasma = new Habilidad { Nombre = "Rayo de plasma", Daño = 130 };
var pulsoEMP = new Habilidad { Nombre = "Pulso electromagnético", Daño = 70 };
var garraCortante = new Habilidad { Nombre = "Garra cortante", Daño = 80 };

var knifehead = new kaiju(
    "Knifehead",
    new List<Habilidad> { rayoPlasma, pulsoEMP, garraCortante },
    Peso: 3000,
    dureza: 80,
    vida: 500,
    tamaño: 95,
    categoria: 4
);


knifehead.DañoPorHabilidad(knifehead.Nombre);
knifehead.DañoTotal(knifehead.Nombre);
knifehead.HabilidadesKaiju(knifehead.Nombre);