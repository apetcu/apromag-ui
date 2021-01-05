export class PaginationInfo {
  pageNo: number;
  pageSize: number;
  orderBy: string;
  orderDir: string;

  constructor(pageNo: number = 1, pageSize: number = 10, orderBy: string = '', orderDir: string = 'asc') {
    this.pageNo = pageNo;
    this.pageSize = pageSize;
    this.orderBy = orderBy;
    this.orderDir = orderDir;
  }
}
