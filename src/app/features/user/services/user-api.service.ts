import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserResponseInfo, UsersResponseInfo } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    constructor(
        private readonly httpService: HttpClient
    ) {}

    public getMe(): Observable<UserResponseInfo> {
        return this.httpService.get<UsersResponseInfo>('https://randomuser.me/api/?seed=dreyliky&inc=name,dob&nat=us')
            .pipe(
                map((response) => response.results[0])
            );
    }

    public getAll(): Observable<UserResponseInfo[]> {
        return this.httpService.get<UsersResponseInfo>('https://randomuser.me/api/?inc=name,dob&results=10&nat=us')
            .pipe(
                map((response) => response.results)
            );
    }
}
