export class UpdateRequestDTO {
  constructor(model) {
    this.requestId = model.requestId;
    this.token = model.uri;
    this.title = model.title;
  }
  readonly requestId: number;
  readonly title: string;
  readonly token: string;
}
