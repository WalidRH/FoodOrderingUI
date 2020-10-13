import { MenuData } from './MenuData.module';
import { User } from './User.module';
export class Order {
  constructor(
  public ref: number,
  public quantity: number,
  public trackingStatus: string,
  public orderDate: string,
  public totalPrice: number,
  public serveDate?: string,
  public nbPreson?: string,
  public client?: User,
  public menu?: MenuData
  ){}
}
