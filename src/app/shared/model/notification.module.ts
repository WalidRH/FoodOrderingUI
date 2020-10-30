export class NotificationModule {
  public static STATUS_SUCCESS = 'SUCCESS';
  public static STATUS_FAILED = 'FAILED';
  constructor(private _message: string, private _status: string) {}

  get message(): string{
    return this._message;
  }

  get status(): string{
    return this._status;
  }
}
