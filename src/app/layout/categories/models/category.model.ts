export class Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  children: Array<Category>;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.imageUrl = props.imageUrl;

    if (props.children) {
      this.children = props.children.map((entry) => new Category(entry));
    }
  }
}
