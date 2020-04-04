export interface ProductListConfig {
  totalPages: number;
  totalRecords: number;
  currentPage: number;
  defaultDisplayMode: ProductListDisplayModes;
  displayHeader: boolean;
  paginated: boolean;
}

export enum ProductListDisplayModes {
  GRID = 'grid',
  LIST = 'list'
}
