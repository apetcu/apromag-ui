export interface ProductListConfig {
  totalPages: number;
  totalRecords: number;
  currentPage: number;
  defaultDisplayMode: ProductListDisplayModes;
  displayHeader: boolean;
  paginated: boolean;
  itemsPerRow?: number;
}

export enum ProductListDisplayModes {
  GRID = 'grid',
  LIST = 'list'
}
