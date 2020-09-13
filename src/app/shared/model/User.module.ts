export class User{
 constructor(
  firstName: string,
  lastName: string,
  role: string,
  email: string,
  // tslint:disable-next-line: variable-name
  private _token?: string
 ){}

  get token(): string{
    return this._token;
  }
}