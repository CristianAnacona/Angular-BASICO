import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{
nombre:string = 'Cristian'
edad  :number = 32

get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
}

obtenerNombre(): string{
    return `${ this.nombre} - ${this.edad}`;
}

cambiarNombre():void{
 this.nombre = 'Fernado';
}
cambiarEdad():void{
    this.edad = 45;
}

}