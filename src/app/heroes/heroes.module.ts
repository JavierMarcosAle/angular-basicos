import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent 
    ],
    exports: [
        //HACEMOS PÚBLICO
        ListadoComponent
    ],
    imports: [
        //VAN SOLO MÓDULOS
        CommonModule
    ]
})
export class HeroesModule {

}