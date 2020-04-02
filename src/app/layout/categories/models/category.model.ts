export class Category {
    id: number;
    name: string;
    icon: string;

    constructor(private categoryResponse: any) {
        this.id = categoryResponse.id;
        this.name = categoryResponse.name;
        this.icon = categoryResponse.icon;
    }
}
