import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../shared/services/api/api.service';

@Injectable({
    providedIn: 'root'
})
export class CategoriesApiService {

    constructor(private api: ApiService) {
    }

    getCategories(): Observable<any> {
        return this.api.get('categories');
    }
}
