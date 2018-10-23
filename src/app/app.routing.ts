import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent} from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CargarRefComponent } from './cargarRef/cargarRef.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'cargaRef', component: CargarRefComponent },
    { path: 'home', component: HomeComponent },
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
