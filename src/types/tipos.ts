

export type MenuList= {
  id: number;
  name: string;
  price: number;
}
export type OrderItem = MenuList & {
  quantity:number;
  
}

export type OrderCumstom={
  addItem: (item:MenuList) => void;
}