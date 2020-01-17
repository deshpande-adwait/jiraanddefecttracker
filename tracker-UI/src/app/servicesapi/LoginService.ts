import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { LOGIN_SERVICE } from '../common/Constants';
import { ServerSideResponse } from '../common/ServerSideResponse';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(payLoad): Observable<ServerSideResponse> {
        return this.http.post<ServerSideResponse>(LOGIN_SERVICE, payLoad);
    }
}