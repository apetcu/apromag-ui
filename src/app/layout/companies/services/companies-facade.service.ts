import {Injectable} from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {Company} from '../models/company';
import {map} from 'rxjs/operators';
import {CompaniesApiService} from './companies-api.service';

@Injectable({
    providedIn: 'root'
})
export class CompaniesFacadeService {

    constructor(private companiesApiService: CompaniesApiService) {
    }

    getCompanies(): Observable<Array<Company>> {
        return this.companiesApiService.getCompanies().pipe(this.mapCompaniesToDomainModel());
    }

    getCompanyById(id: number): Observable<Company> {
        return this.companiesApiService.getCompanyById(id).pipe(map(response => new Company(response)));
    }


    private mapCompaniesToDomainModel(): OperatorFunction<any, Array<Company>> {
        return map(companiesResponse =>
            companiesResponse.map(entry => new Company(entry)));

    }
}
