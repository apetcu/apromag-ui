export class Company {
    id: number;
    name: string;
    description: string;
    logo: string;
    employees: number;
    location: string;
    dateJoined: Date;

    constructor(companyResponse: any) {
        this.id = companyResponse.id;
        this.name = companyResponse.name;
        this.description = companyResponse.description;
        this.logo = companyResponse.logo;
        this.employees = companyResponse.employees;
        this.location = companyResponse.location;
        this.dateJoined = new Date(companyResponse.dateJoined);
    }

}
