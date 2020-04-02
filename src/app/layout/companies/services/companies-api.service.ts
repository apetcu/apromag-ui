import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../shared/services/api/api.service';

@Injectable({
    providedIn: 'root'
})
export class CompaniesApiService {

    constructor(private api: ApiService) {
    }

    getCompanies(): Observable<any> {
        return this.api.get('companies');
    }

    getCompanyById(id: number): Observable<any> {
        const company = mockCompaniesResponse.find(entry => entry.id === id);
        return of(company);
    }
}

const mockCompaniesResponse = [
    {
        id: 1,
        name: 'Endava',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        employees: 2000,
        logo: 'https://media.glassdoor.com/sqll/233751/endava-squarelogo-1481094843829.png',
        location: 'Romania',
        industries: []
    },
    {
        id: 2,
        name: 'IBM',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        employees: 1500,
        logo: 'https://s3.amazonaws.com/questoracle-staging/wordpress/uploads/2018/04/24113902/989f637ee538476c42f14b610fdbe2f0-mega-ibm-square-logo.jpg',
        location: 'Romania',
        industries: []
    },
    {
        id: 3,
        name: 'Alro',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        employees: 2000,
        logo: 'https://lh3.googleusercontent.com/proxy/RqtWk5tgpM5lpIk8BlMf8dE70VVoFjbHuwwflKHTAOw3nJrfkpgTRNrYmJhh0tq0pRUxMURQXJoAcubUJqyNMrE9P8ozmGnVNmYzOcQ5JBHM0po',
        location: 'Romania',
        industries: []
    },
    {
        name: 'Endava',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        employees: 2000,
        logo: 'https://media.glassdoor.com/sqll/233751/endava-squarelogo-1481094843829.png',
        location: 'Romania',
        industries: []
    },
    {
        name: 'Endava',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        employees: 2000,
        logo: 'https://media.glassdoor.com/sqll/233751/endava-squarelogo-1481094843829.png',
        location: 'Romania',
        industries: []
    },
    {
        name: 'Endava',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        employees: 2000,
        logo: 'https://media.glassdoor.com/sqll/233751/endava-squarelogo-1481094843829.png',
        location: 'Romania',
        industries: []
    }
];
