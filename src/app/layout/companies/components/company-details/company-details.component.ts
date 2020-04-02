import {Component, OnInit} from '@angular/core';
import {CompaniesFacadeService} from '../../services/companies-facade.service';
import {Company} from '../../models/company';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-company-details',
    templateUrl: './company-details.component.html',
    styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
    company: Company;

    constructor(private companiesFacadeService: CompaniesFacadeService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.getCompanyDetails(parseInt(params.companyId, 10));
        });
    }

    private getCompanyDetails(id: number) {
        this.companiesFacadeService.getCompanyById(id).subscribe(data => {
            this.company = data;
        });
    }

}
