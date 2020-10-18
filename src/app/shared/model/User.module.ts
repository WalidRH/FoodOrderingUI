export class User{
 constructor(
  public firstName: string,
  public lastName: string,
  public email: string,
  public role: string,
  public phone: string,
  private password?: string,
  private _idclient?: string,
  // tslint:disable-next-line: variable-name
  private _token?: string
 ){}

  get token(): string{
    return this._token;
  }

  get _password(): string{
    return this.password;
  }

  set _password(pass: string){
    this.password = pass;
  }

  get idclient(): string{
    return this._idclient;
  }
}
