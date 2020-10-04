import { MenuData } from './MenuData.module';
import { User } from './User.module';
export interface Order {
  ref: number;
  quantity: number;
  trackingStatus: number;
  orderDate: string;
  serveDate?: string;
  nbPreson?: string;
  client?: User;
  menu?: MenuData;
}
