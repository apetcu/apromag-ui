export class PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  first: boolean;
  empty: boolean;
  numberOfElements: number;
  pageable: Pageable;
  sort: Sort;

  constructor() {}

  getData(): Array<T> {
    return this.content;
  }
}

class Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

class Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
