import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@features/user';

@Component({
    selector: 'app-users-total-age',
    templateUrl: './users-total-age.component.html',
    styleUrls: ['./users-total-age.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTotalAgeComponent {
    @Input()
    public set users(users: User[]) {
        this.usersTotalAge = this.calculateUsersTotalAge(users);
    }

    public usersTotalAge: number;

    private calculateUsersTotalAge(users: User[]): number {
        return users.reduce((accumulator, user) => {
            return accumulator + user.age;
        }, 0);
    }
}
