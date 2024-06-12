import { Dispatch } from 'react';
import { OrderActions } from '../reducers/orderReducer';


export type MenuList= {
  id: number;
  name: string;
  price: number;
}
export type OrderItem = MenuList & {
  quantity:number;
  
}

export type OrderContentsProps={
  order:OrderItem[];
  dispatch: Dispatch<OrderActions>
}

export type OrderCumstom={
  addItem: (item:MenuList) => void;
}