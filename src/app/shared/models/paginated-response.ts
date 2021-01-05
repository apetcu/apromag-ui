export class PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;

  constructor(response) {
    this.data = response.data;
    this.pagination = new Pagination(response.pagination);
  }
}

class Pagination {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  lastPage: number;

  constructor(props) {
    this.totalCount = props.totalCount;
    this.pageSize = props.pageSize;
    this.currentPage = props.currentPage;
    this.lastPage = props.lastPage;
  }
}
