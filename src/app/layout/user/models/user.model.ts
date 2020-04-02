class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    dateRegistered: Date;
    userType: UserType;

    constructor(accountResponse: any) {
        this.id = accountResponse.id;
        this.name = accountResponse.name;
        this.surname = accountResponse.surname;
        this.email = accountResponse.email;
        this.phone = accountResponse.phone;
        this.dateRegistered = new Date(accountResponse.dateRegistered);
        this.userType = accountResponse.userType;
    }

    isUserC
}


enum UserType {
    COMPANY = 'company',
    USER = 'user'
}
