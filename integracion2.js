/* Nombre: Daniela Ponce 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO
function encontrarMultiplos(numero, limite) {
    const multiplos = [];
    
    for (let i = numero; i < limite; i++) {
      if (i % numero === 0) {
        multiplos.push(i);
      }
    }
    
    return multiplos;
  }
  
  const multiplosDe5 = encontrarMultiplos(5, 50);
  console.log(multiplosDe5);  

/* 
Punto 2: Arreglos y Objetos
 Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes

const estudiantes = [
    {
      nombre: "Estudiante 1",
      notas: [80, 85, 75, 90],
      aprobado: false,
    },
    {
      nombre: "Estudiante 2",
      notas: [60, 45, 70, 55],
      aprobado: false,
    },
    {
      nombre: "Estudiante 3",
      notas: [90, 95, 85, 80],
      aprobado: false,
    },
    {
      nombre: "Estudiante 4",
      notas: [50, 65, 60, 75],
      aprobado: false,
    }
  ];
  
// Función para calcular el promedio de notas

function calcularPromedio(notas) {
    const sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    return sumaNotas / notas.length;
  }
  
// Función para determinar si el estudiante aprobó

function determinarAprobacion(promedio) {
    return promedio >= 70;
  }
  
// Calcular si los estudiantes aprobaron o no

estudiantes.forEach(estudiante => {
    const promedio = calcularPromedio(estudiante.notas);
    estudiante.aprobado = determinarAprobacion(promedio);
  });
  
// Imprimir estado de aprobación de los estudiantes

estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre} - Aprobado: ${estudiante.aprobado}`);
  });

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

//CODIGO

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let indice = 0;
let sumaPares = 0;

while (indice < numeros.length) {
  const numero = numeros[indice];
  
  if (numero % 2 === 0) {
    sumaPares += numero;
  }
  
  indice++;
}

console.log("La suma de los números pares es:", sumaPares);


/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

//CODIGO

function productoNumerosImpares(arr) {
    let producto = 1;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        producto *= arr[i];
      }
    }
  
    return producto;
  }
  
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = productoNumerosImpares(num);
  
  console.log("El producto de los números impares es:", resultado);

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

//CODIGO

const vehiculo = {
    marca: "Toyota",
    modelo: "Camry",
    anio: 2015,
    precio: 20000,
    calcularImpuesto: function() {
      if (this.anio < 2010) {
        return this.precio * 0.1; // 10% del precio
      } else {
        return this.precio * 0.05; // 5% del precio
      }
    }
  };
  
  console.log("Impuesto a pagar:", vehiculo.calcularImpuesto());
  