# Curso de Angular

En esta parte ire colocando mi avance de los cursos de Angular, especificamente en la sección 4 del curso de Fernando Herrera de Udemy

## Crear componente hijo 21/03/2021

Para crear un nuevo componente, se hace de la misma manera que los demás, `ng g c carpeta/nombre --skipTests -is` la finalidad de esto es para no tener un código muy extenso en el html, y tener todo más ordenado.
Luego al generarlo se debe insertar el selector que posee el componente hijo, en el caso del proyecto se usa el `app-personaje`, sin embargo este no posee la lista de personajes, por lo tanto se debe pasar información de un componente padre a un componente hijo con el decorador `@input` exportado de `@angular/core` y en el `tag` donde se quiere enviar la información del componente padre se utilizar `[personaje]="personajes"` con el nombre de la lista, y el nombre de la lista que se creo en el componente hijo.
Para poder respetar el tipado en el componente hijo, podemos crear una `interface` en la que se define el tipo de dato que recibira el personaje, en este caso un `string` y un `number`, y para poder exportarlos se debe colocar la palabra `export` antes de `interface`, y así podemos respetar el tipado en cualquier componente que se utilice el `personaje`.

Archivo HTML
![ComponenteHijo1](https://i.ibb.co/VQYqPyg/componentehijo1.png)
Archivo component.ts
![componenteHijo2](https://i.ibb.co/kKc1qcB/componentehijo2.png)
Archiv interface
![interface](https://i.ibb.co/4RWsZRW/Interface.png)

## ngFor 21/03/2021

Para cargar una lista se debe utilizar un `ngFor="let variable of objeto"` esto con el objetivo de repetir los `tags` en el archivo html, y para poder mostrarlos se utiliza `{{variable.propiedadObjeto}}` dentro de los `tags` del archivo `html`.

![ngFor](https://i.ibb.co/Tkw4Qw0/ngFor.png)

## FormsModule 19/03/2021

Se debe importar el `FormsModule` en el modulo donde se esta trabajando, y para utilizarlo en el `form` se debe especificar un `(ngSubmit)="funcion()"` y en los `input` se debe especificar el `[(ngModel)]="objeto.propiedad"` para poder enviar los datos requeridos.

![FormsModule, ngSubmit, ngModel](https://i.ibb.co/ncpxRFD/forms-ngmodel-ngsubmit.png)

