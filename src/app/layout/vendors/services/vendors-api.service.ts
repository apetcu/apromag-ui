import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../shared/services/api/api.service';

@Injectable({
    providedIn: 'root'
})
export class VendorsApiService {

    constructor(private api: ApiService) {
    }

    getAll(): Observable<any> {
        return of(mockCompaniesResponse)
       // return this.api.get('vendors');
    }

    getById(id: number): Observable<any> {
        const company = mockCompaniesResponse.find(entry => entry.id === id);
        return of(company);
    }
}

const mockCompaniesResponse = [
    {
        id: 1,
        name: 'Buleanu gigi',
        location: 'Videle',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        phohtos: []
    },

    {
        id: 2,
        name: 'Pulica franaru',
        location: 'Videle',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        phohtos: []
    },

    {
        id: 3,
        name: 'Popescu Mariusica',
        location: 'Videle',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        phohtos: []
    },

    {
        id: 4,
        name: 'Vanzatoru ambulant',
        location: 'Videle',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        phohtos: []
    },

    {
        id: 1,
        name: 'Buleanu gigi',
        location: 'Videle',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        phohtos: []
    },

    {
        id: 1,
        name: 'Buleanu gigi',
        location: 'Videle',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        phohtos: []
    },

    {
        id: 1,
        name: 'Buleanu gigi',
        location: 'Videle',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        phohtos: []
    },

];
