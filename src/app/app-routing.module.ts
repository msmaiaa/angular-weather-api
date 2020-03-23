import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { MainSearchComponent } from './main-search/main-search.component'
import { GraphicsComponent } from './graphics/graphics.component'

const routes:Routes = [
    {path: '', component: MainSearchComponent},
    {path: 'graficos', component: GraphicsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}