export class User{
 constructor(
  public firstName: string,
  public lastName: string,
  public email: string,
  public role: string,
  private password?: string,
  // tslint:disable-next-line: variable-name
  private _token?: string
 ){}

  get token(): string{
    return this._token;
  }

  get _password(): string{
    return this.password;
  }
}