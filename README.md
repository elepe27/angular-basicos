## Curso de Angular

En esta parte ire colocando mi avance de los cursos de Angular, especificamente en la sección 4 del curso de Fernando Herrera de Udemy

# ngFor 21/03/2021

Para cargar una lista se debe utilizar un `ngFor="let variable of objeto"` esto con el objetivo de repetir los `tags` en el archivo html, y para poder mostrarlos se utiliza `{{variable.propiedadObjeto}}` dentro de los `tags` del archivo `html`

# FormsModule 19/03/2021

Se debe importar el `FormsModule` en el modulo donde se esta trabajando, y para utilizarlo en el `form` se debe especificar un `(ngSubmit)="funcion()"` y en los `input` se debe especificar el `[(ngModel)]="objeto.propiedad"` para poder enviar los datos requeridos.

