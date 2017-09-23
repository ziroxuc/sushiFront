import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

//import { ResultadoComponent } from './components/resultado/resultado.component';

//import { PageNotFoundComponent } from './';

const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    //{ path: 'resultado/:text', component: ResultadoComponent },
    { path: '**', pathMatch:'full',redirectTo:'menu' }

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);