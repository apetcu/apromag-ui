export class PaginationInfo {
  pageNo: number;
  pageSize: number;
  sortBy: string;

  constructor(pageNo: number = 1, pageSize: number = 10, sortBy: string = '') {
    this.pageNo = pageNo - 1;
    this.pageSize = pageSize;
    this.sortBy = sortBy;
  }
}
