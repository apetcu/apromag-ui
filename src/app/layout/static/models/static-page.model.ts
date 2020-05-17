export class StaticPage {
  id: number;
  title: string;
  content: string;

  constructor(pageResponse: any) {
    this.id = pageResponse.id;
    this.title = pageResponse.title;
    this.content = pageResponse.content;
  }
}
