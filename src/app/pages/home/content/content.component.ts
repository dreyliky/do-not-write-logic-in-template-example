import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User, UserService } from '@features/user';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {
    public users: User[];
    
    constructor(
        private readonly userService: UserService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.initUsers();
    }

    private initUsers(): void {
        this.userService.getAll()
            .subscribe((users) => {
                this.users = users;

                this.changeDetector.detectChanges();
            });
    }
}
