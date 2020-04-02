import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = '/api/';

    constructor(private http: HttpClient) {
    }

    get(url: string): Observable<any> {
        return this.http.get(this.baseUrl + url);
    }

    post(url: string, data: any): Observable<any> {
        return this.http.post(this.baseUrl + url, data);
    }
}
