import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPageEnum } from '@core';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: AppPageEnum.Home,
        component: AppComponent,
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: '**',
        redirectTo: AppPageEnum.Home,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
