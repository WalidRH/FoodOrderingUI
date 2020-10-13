export class User{
 constructor(
  public firstName: string,
  public lastName: string,
  public email: string,
  public role: string,
  private _password?: string,
  private _idclient?: string,
  // tslint:disable-next-line: variable-name
  private _token?: string
 ){}

  get token(): string{
    return this._token;
  }

  get password(): string{
    return this.password;
  }

  set password(password: string){
    this._password = password;
  }

  get idclient(): string{
    return this._idclient;
  }
}
