import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../../interfaces';

@Component({
    selector: 'user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
    @Input()
    public readonly user: User;
}
