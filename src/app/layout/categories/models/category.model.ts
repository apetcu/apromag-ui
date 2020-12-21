import { Utils } from '../../../shared/services/utils/utils';

export class Category {
  id: number;
  name: string;
  hasProducts: boolean;
  productCount: number;
  description: string;
  imageUrl: string = 'assets/images/food-recipe/08.png';
  urlSlug: string;
  homepage: boolean;
  children: Array<Category>;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    if (props.imageUrl) {
      this.imageUrl = props.imageUrl;
    }
    this.homepage = !!props.homepage;
    this.hasProducts = props.productCount !== 0;
    this.productCount = props.productCount;

    this.urlSlug = Category.generateUrlSlug(this.name, this.id);

    if (props.children) {
      this.children = props.children.map((entry) => new Category(entry));
    } else {
      this.children = [];
    }
  }

  private static generateUrlSlug(name: string, id: number): string {
    return `/categories/${Utils.convertStringToSlug(name)}/${id}`; // Trim - from end of text
  }
}
