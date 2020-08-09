import { VideoComponent } from './components/video/video.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component';


const routes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'videos',component:VideoComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}]

    @NgModule({
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule],
        providers:[]
    })

    export class AppRoutingModule{}