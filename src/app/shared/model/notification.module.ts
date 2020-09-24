export class NotificationModule {
  constructor(private _message: string, private _status: string) {}

  get message(): string{
    return this._message;
  }

  get status(): string{
    return this._status;
  }
}
