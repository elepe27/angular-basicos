# Curso de Angular

En esta parte ire colocando mi avance de los cursos de Angular, especificamente en la sección 4 del curso de Fernando Herrera de Udemy

## Ejercicio 22/03/2021

Crear un componente para agregar o nuevo
1.- Nuevo componente agregar (agregarComponent)

R.- Se crea el componente `ng g c dbz/agregar --skipTest -is`

2.- `<h3> agregar hasta </form>`

R.- Se realiza copia de los `tags` al componente `agregar.component.html`

![tag](https://i.ibb.co/5GNRZyF/ejercicio1.png)

3.- Mover personaje y el metodo de agregar

R.- Se mueve personaje y metodo agregar al `agregar.component.ts`

4.- @Input personaje

R.- se define el `@input` del componente hijo el cual recibira la información del `main-page.component.ts`



![comphijo](https://i.ibb.co/P9DGnFR/comphijo.png)

5.- @Input nuevo

R.- `@Input('nuevo') nuevo :Personaje={
    nombre:'',
    poder:0
  }`

6.- `<app-agregar [nuevo]="nuevo"></app-agregar>`

Para que un componente hijo se comunique con un componente padre, se utiliza `@Output` y se debe importar de `@angular/core`, este se debe crear de la siguiente manera `@Output() OnNuevoPersonaje:EventEmitter<personaje>= new EventEmitter();` 


![eventEmitter](https://i.ibb.co/VxCzQPy/event-emitter.png)

al usar el metodo OnNuevoPersonaje dejara utilizar diversas opciones y la que utilizaremos se llama `emit` y dejará usar 2 tipos, y como es de tipo personaje, admite utilizar el `this.nuevo` siendo también el de tipo `personaje` en el `tag` del componente hijo mirado desde el componente padre se utilizar llamar el evento que se creo en el hijo entre parentesis `(OnNuevoPersonaje)="agregarNuevoPersonaje($event)"` en la que vendra el nuevo Personaje, y por parte del `main-page.component.ts`  se crea la función esperando el argumento de tipo personaje y se agrega al objeto.

![eventemitter1](https://i.ibb.co/xmJXT8K/1.png)

![eventemitter2](https://i.ibb.co/74HG991/2.png)



## Crear componente hijo 21/03/2021

Para crear un nuevo componente, se hace de la misma manera que los demás, `ng g c carpeta/nombre --skipTests -is` la finalidad de esto es para no tener un código muy extenso en el html, y tener todo más ordenado.
Luego al generarlo se debe insertar el selector que posee el componente hijo, en el caso del proyecto se usa el `app-personaje`, sin embargo este no posee la lista de personajes, por lo tanto se debe pasar información de un componente padre a un componente hijo con el decorador `@input` exportado de `@angular/core` y en el `tag` donde se quiere enviar la información del componente padre se utilizar `[personaje]="personajes"` con el nombre de la lista, y el nombre de la lista que se creo en el componente hijo.
Para poder respetar el tipado en el componente hijo, podemos crear una `interface` en la que se define el tipo de dato que recibira el personaje, en este caso un `string` y un `number`, y para poder exportarlos se debe colocar la palabra `export` antes de `interface`, y así podemos respetar el tipado en cualquier componente que se utilice el `personaje`.

Archivo HTML

![ComponenteHijo1](https://i.ibb.co/VQYqPyg/componentehijo1.png)

Archivo component.ts

![componenteHijo2](https://i.ibb.co/kKc1qcB/componentehijo2.png)

Archivo interface

![interface](https://i.ibb.co/4RWsZRW/Interface.png)

## ngFor 21/03/2021

Para cargar una lista se debe utilizar un `ngFor="let variable of objeto"` esto con el objetivo de repetir los `tags` en el archivo html, y para poder mostrarlos se utiliza `{{variable.propiedadObjeto}}` dentro de los `tags` del archivo `html`.

![ngFor](https://i.ibb.co/Tkw4Qw0/ngFor.png)

## FormsModule 19/03/2021

Se debe importar el `FormsModule` en el modulo donde se esta trabajando, y para utilizarlo en el `form` se debe especificar un `(ngSubmit)="funcion()"` y en los `input` se debe especificar el `[(ngModel)]="objeto.propiedad"` para poder enviar los datos requeridos.

![FormsModule, ngSubmit, ngModel](https://i.ibb.co/ncpxRFD/forms-ngmodel-ngsubmit.png)

