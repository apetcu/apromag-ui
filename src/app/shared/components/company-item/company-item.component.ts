import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../layout/companies/models/company';
import {Router} from '@angular/router';

@Component({
    selector: 'app-company-item',
    templateUrl: './company-item.component.html',
    styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {
    @Input() company: Company;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    viewCompanyPage(companyId: number) {
        this.router.navigate(['/app/companies/details/' + companyId]);
    }

}
