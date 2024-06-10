

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
  removeItem :(item:MenuList['id'])=>void
}

export type OrderCumstom={
  addItem: (item:MenuList) => void;
}