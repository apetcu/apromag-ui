import { Vendor } from '../../vendor/models/vendor';
import { Product } from '../../product/models/product';

export interface VendorProductsGroup {
  vendor: Vendor;
  products: Array<Product>;
}
