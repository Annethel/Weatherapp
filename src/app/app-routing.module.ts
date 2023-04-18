import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstContainerComponent } from './first-container/first-container.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [ 
  {path:'', component:LandingpageComponent},
  {path:'home', component:FirstContainerComponent},
  {path:'back', component:LandingpageComponent},
];
const appRoute: Routes =[
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

  
}
