

export type MenuList= {
  id: number;
  name: string;
  price: number;
}
export type OrderItem={
  quantity?:number;
  
}

export type OrderCumstom={
  addItem: (item:MenuList) => void;
}