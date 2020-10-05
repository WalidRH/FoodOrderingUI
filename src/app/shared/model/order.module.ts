import { MenuData } from './MenuData.module';
import { User } from './User.module';
export interface Order {
  ref: number;
  quantity: number;
  trackingStatus: string;
  orderDate: string;
  totalPrice: number;
  serveDate?: string;
  nbPreson?: string;
  client?: User;
  menu?: MenuData;
}
