import { NgModule } from '@angular/core';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import {
    ContentComponent,
    UsersTotalAgeComponent,
    UsersCardsComponent
} from './content';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        UsersTotalAgeComponent,
        UsersCardsComponent
    ],
    imports: [
        FeaturesModule,
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}
