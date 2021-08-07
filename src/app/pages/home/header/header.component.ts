import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from '@features/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    public currentUser$: Observable<User>;

    constructor(
        private readonly userService: UserService
    ) {}

    public ngOnInit(): void {
        this.currentUser$ = this.userService.getMe();
    }
}
