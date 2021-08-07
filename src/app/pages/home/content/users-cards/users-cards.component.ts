import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@features/user';

@Component({
    selector: 'app-users-cards',
    templateUrl: './users-cards.component.html',
    styleUrls: ['./users-cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersCardsComponent implements OnInit {
    @Input()
    public readonly users: User[];

    public sortedUsers: User[];

    public ngOnInit(): void {
        this.initSortedUsers();
    }

    private initSortedUsers(): void {
        this.sortedUsers = this.users
            .sort((userA, userB) => userA.age - userB.age);
    }
}
