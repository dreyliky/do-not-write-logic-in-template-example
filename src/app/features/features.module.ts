import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UserAvatarComponent, UserCardComponent } from './user';

@NgModule({
    declarations: [
        UserAvatarComponent,
        UserCardComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        UserAvatarComponent,
        UserCardComponent
    ]
})
export class FeaturesModule {}
