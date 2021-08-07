import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { User } from '../interfaces';
import { UserAdapter } from '../adapters';
import { UserApiService } from './user-api.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private readonly userApiService: UserApiService,
        private readonly userAdapter: UserAdapter
    ) {}

    public getMe(): Observable<User> {
        return this.userApiService.getMe()
            .pipe(
                map((userResponseInfo) => this.userAdapter.adaptFromUserResponseInfo(userResponseInfo))
            );
    }

    public getAll(): Observable<User[]> {
        return this.userApiService.getAll()
            .pipe(
                mergeMap((usersResponseInfo) => usersResponseInfo),
                map((userResponseInfo) => this.userAdapter.adaptFromUserResponseInfo(userResponseInfo)),
                toArray()
            );
    }
}
