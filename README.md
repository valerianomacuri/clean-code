# Principios SOLID y Clean Code

## Capítulo 1: Clean Code y Deuda Técnica

### La deuda técnica

La deuda técnica es la falta de calidad de nuestro código o de algun proceso en nuestro de desarrollo de software, no necesariamente código, puede ser que falto documentación, pruebas o una refactorización principal en nuestro código. La deuda técnica se paga con una refactorización.

La deuda técnica es la falta de calidad de nuestro código, que genera una deuda que repercutirá en costos futuros. En general, costos económicos.

* Tiempo en realizar mantenimientos
* Tiempo en refactoriazar código
* Tiempo e comprender código
* Tiempo adicional en la tranferencia de código

### Esquema de deuda técnica de Martin Fowler

| Tipo        | Definición                                        |
| ----------- | ------------------------------------------------- |
| Imprudente  | No hay tiempo, sólo copia y pega eso de nuevo     |
| Inadvertido | “¿Qué son patrones de diseños?”                   |
| Prudente    | Tenemos que entregar rápido, ya refactorizaremos. |
|             | “Ahora sabemos cómo lo deberíamos haber hecho”    |

La deuda técnica se paga con refactorización.


### Refactorización

Es simplemente un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios. Usualmente para que una refactorización fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automáticas.

La mala calidad en el software siempre la acaba pagando o asumiendo alguien. Ya sea el cliente, el proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo programando sobre un sistema frágil.

### Clean Code

> Código Limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda.
>
> — **Autor**, *Carlos Blé*


### Nombres pronunciables y expresivos


```typescript
// Mal
const tx = 0.15
const cat = "T-Shirts"
const ddmmyyyy = new Date("August 15, 1965 00:00:00")
```

```typescript
// Mejor
const tax = 0.15
const category = "T-Shirts"
const birthDate = new Date("August 15, 1965 00:00:00")
```

### Ausencia de información técnica en nombres

```typescript
// Mal
class UserImplementation {}
interface UserInterface {}
```

```typescript
// Mejor
class User {}
interface User {}
```

### Nombres según el tipo de dato

### Arreglos - Arrays

```typescript
// malo
const fruit = ["manzana", "platano", "fresa"]

// regular
const fruitList = ["manzana", "platano", "fresa"]

// bueno
const fruits = ["manzana", "platano", "fresa"]

// mejor
const fruitNames = ["manzana", "platano", "fresa"]

```

### Booleanos - Booleans

```typescript
// mal
const open = true
const write = true
const fruit = true
const active = false
const noValues = true
const notEmpty = true
```

```typescript
// mejor
const isOpen = true
const canWrite = true
const hasFruit = true
const isActive = false
const hasValues = true
const isEmpty = true
```

### Números

```typescript
// bad
const fruits = 3
const cars = 10
```


```typescript
// better
const maxFruits = 5
const totalOfCars = 10
```

### Funciones

```typescript
// mal
createUserIfNotExists()
updateUserIfNotEmpty()
sendEmailIfFieldsValid()
```

```typescript
// mejor
createUser()
updateUser()
sendEmai()
```
### Clases

```typescript
// Malos
class Manager {}
class Data {}
class Info {}
class Individual {}
class Processor {}
```

### Parámetros y argumentos

Limitar a 3 parámetros posicionales.

```typescript
// Bien
function sendEmail(toWhom: string, from: string, body: string) {
}
```

```typescript
// Bien
function sendEmail(toWhom: string, from: string, body: string, subject: string, apiKey: string) {
}
```

### Otras Recomendaciones

* Simplicidad es fundamental
* Funciones de tamaño reducido
* Funciones de una sola línea sin causar complejidad
* Menos de 20 líneas
* Evita el uso del `else`
* Prioriza el uso de la condicional ternaria

### Principo DRY

Don't Repeat Yourself

* Simplemente es evitar tener duplicidad de código
* Simplifica pruebas
* Ayuda a centralizar procesos
* Aplicar el principio DRY, usualmente lleva a refactorizar


## Capítulo 2: Clean Code - Clases y Comentarios

### [Herencia - Problemática](./src/clean-code/06-classes-b.ts)

### [Principio de responsabilidad única](./src/clean-code/06-classes-c.ts)

### Estructura recomendada de una clase

#### Comenzar con lista de propiedades

1. Propiedades estáticas
2. Propiedades públicas de último

#### Métodos

1. Empezando por los constructores estáticos
2. Luego el constructor.
3. Seguidamente métodos estáticos.
4. Métodos privados
5. Resto de métodos de instancia ordenados de mayor a menor importancia
6. Getters y Setters al final

```typescript
class HtmlElement {
    public static domReady: boolean = false;

    private _id: string;
    private type: string;
    private updatedAt: number;

    static createInput(id: string) {
        return new HtmlElement(id, "input");
    }

    constructor(id: string, type: string) {
        this._id = id;
        this.type = type;
        this.updatedAt = Date.now();
    }

    setType(type: string) {
        this.type = type;
        this.updatedAt = Date.now()
    }

    get id(): string {
        return this.id;
    }
}
```

### Comentarios

Evita usar comentarios, pero...

> Cuando usamos librerías de terceros, APIS, frameworks, etc. nos encontraremos ante situaciones en las que escribir un comentarios será mejor que dejar una solución compleja o un hack sin explicación.
>
> — **Autor**, *Fernando Herrera*

Los comentarios deberían de ser la excepción, no la regla.

> No comentes el código mal escrito, reescríbelo
>
> — **Autor**, *Brian w. Kernighan*

Recuerda: Nuestro código debe de ser suficientemente auto explicativo. Pero a veces es necesario comentarlo.

#### ¿El por qué? En lugar del ¿qué? o ¿cómo?

>El ¿cómo? es el codigo, el ¿qué? no es necesario, ya que estamos excribiendo codigo autoexplicativo. El ¿por qué? has decidido resolver algo de cierta manera, a pesar de otras posibles soluciones, eso si debe ser explicado
>
> — **Autor**, *Fernando Herrera*

### Uniformidad en el proyecto

* Estructura de directorios
* Indentación

## Capítulo 3: Acrónimo - STUPID

6 Code Smells que debemos evitar.

* Singleton: patrón singleton
* Tight Coupling: alto acoplamiento
* Untestability: código no probable (unit test)
* Prematura optimization: optimizaciones prematuras
* Indescriptive: nombres poco descriptivos
* Duplication: duplicidad de código, no aplicar el principio DRY

### Patrón Singleton

#### Pros:

* Garantiza una única instancia de la clase a lo largo de toda la aplicación.

#### Cons:

* Vive en el contexto global
* Puede ser modificado por cualquiera y en cualquier momento
* No es rastreable
* Difícil de testear debido a su ubicación

### Alto acoplamiento

Lo ideal es tener bajo acoplamiento y buena cohesión.

#### Desventajas

* Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos
* El ensamblaje de módulos puede requerir más ezfuerzo y/o tiempo debido a la mayor dependencia entre módulos
* Un módulo en particular pueder ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes

#### Posibles soluciones

* "A" tiene un atributo que se refiere a "B"
* "A" llama a los servicios de un objeto "B"
* "A" tiene un método que hace referencia a "B" (a través del tipo de retorno o parámetro)
* "A" es una subclase de (o implementa) la clase "B"

>Queremos diseñar componentes que sean auto-contenidos, auto suficientes e independientes. Con un objetivo y un propósito bien definido
>
> — **The Pragmatic Programmmer**

#### Cohesión

* **Se refiere a lo qe la clase (o módulo) puede hacer**
* La baja cohesión significaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer
* Alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase


#### Acoplamiento

* **Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí**
* **En bajo acomplamiento,** cambiar algo importante en una clase no debería afectar a la otra
* **En alto acoplamiento,** dificultaría el cambio y mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema
* **Un buen diseño de software tiene alta cohesión y bajo acoplamiento**

#### [Alto acoplamiento - Problema](./src/code-smells/02-high-coupling.ts)

#### [Alto acoplamiento - Solución](./src/code-smells/02-low-coupling.ts)

### Código no problable

* Código con alto acoplamiento
* Código con muchas dependencias no inyectadas
* Dependencias en el contexto global (Tipo Singleton)

### Optimizaciones prematuras

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevacia a lo que es más importante en una aplicación.

No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

#### Complejidad accidental

Cuando implementamos una solución compleja a la mínima indispensable.

#### Complejidad esencial

La complejidad es inherente al problema.

### Nombres poco descriptivos

* Nombres de variables mal nombradas
* Nombres de clases genéricas
* Nombres de funciones mal nombradas
* Ser muy especifico o demasiado genérico

### Duplicidad de Código

No aplicar el principio DRY

#### Real

* Código es idéntico y cumple la misma función
* Un cambio implicaría actualizar todo el código idéntico en varios lugares
* Incrementa posibilidades de error humano al olvidar una parte para actualizar
* Mayor cantidad de pruebas innecesarias

#### Accidental

* Código luce similar pero cumple funciones distintas
* Cuando hay un cambio, sólo hay que modificar un sólo lugar
* Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones

## Capítulo 4: Principios SOLID

Los principios de SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

Los 5 principios S.O.L.I.D. de diseño de software son:


* Single Responsibility Principle (SRP)

* Open/Closed Principle (OCP)

* Liskov Substitution Principle (LSP)

* Interface Segregation Principle (ISP)

* Dependency Inversion Principle (DIP)

Son principios, no reglas. Son recomendaciones que te ayudan a hacer mejor las cosas.

### SRP - Principio de responsabilidad única

>Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo
>
> — **Autor**, *Robert C. Martin*

### SRP - Detectar violaciones

* Nombres de clases y módulos demasiado genéricos
* Cambios en el código suelen afectar la clase o módulo
* La clase involucra mútiples capas
* Número elevado de importaciones
* Cantidad elevada de métodos públicos
* Excesivo número de líneas de código

### Principio de Abierto y Cerrado

Es un principo que depende mucho del contexto.

Establece que la entidades del software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.

La forma más sencilla de demostrar este principio es considerar un método que hace una cosa.

El principio de abierto y cerrado tambié se puede lograr de muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia.

### Detectar violaciones de OCP

* Cambios normalmente afectan nuestra clase o módulo
* Cuando una clase o módulo afecta muchas capas. (Presentación, alamacenamiento, etc.)

### Principio de Substitución de Liskov

>Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo.
>
> — **Autor**, *Robert C. Martin*

> Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema.
>
> — **Autor**, *Fernando Herrera*

### Principio de segregación de interfaz

>Los clientes no deberían estar obligados a depender de interfaces que no utilicen.
>
> — **Autor**, *Robert C. Martin*

### Detectar violaciones ISP

* Si las interfaces que diseñamos nos obligan a violar principios de responsabilidad única y substitución de Liskov.

### Principio de inversión de dependencias

>Los módulos de alto nivel no deben depender de módulos de abjo nivel. Ambos deben depender de abstracciones. Las abstracciones de deben depender de concreciones. Los detalles deben depender de abstracciones.
>
> — **Autor**, *Robert C. Martin*

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.

Los menos importantes son los que estan próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistenca, la comunicación con API externas, etc.

### Depender de abstracciones

Nos estamos refiriendo a clases abstractas o interfaces.

Unos de los motivos más importantes por el cual las reglas de negocio o capa de doinio deben depender de estas y no de concreciones es que aumenta la tolerancia al cambio.

### ¿Por qué obtenemos este beneficio?

Cada cambio en un componente abstracto implica un cambio en su implementación.

Por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren cambios en las interfaces que implementa.

### Inyección de dependencias

Dependencia en programación, significa que un módulo o componente require de otro para poder realizar su trabajo.
