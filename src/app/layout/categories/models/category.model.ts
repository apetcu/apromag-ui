import { Utils } from '../../../shared/services/utils/utils';

export class Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  urlSlug: string;
  children: Array<Category>;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.imageUrl = props.imageUrl;

    this.urlSlug = Category.generateUrlSlug(this.name, this.id);

    if (props.children) {
      this.children = props.children.map((entry) => new Category(entry));
    }
  }

  private static generateUrlSlug(name: string, id: number): string {
    return `/categories/${Utils.convertStringToSlug(name)}/${id}`; // Trim - from end of text
  }
}
