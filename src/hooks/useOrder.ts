import { useState } from "react";
import { MenuList, OrderItem } from "../types/tipos";

// export const useOrder =  <T extends Object | T extends Array>() => {
export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);


  const addItem = (item: MenuList) => {
    const itemExist = order.find(orderItem=>orderItem.id===item.id);
    if (itemExist) {
      const updateOrder=order.map((orderItem) => orderItem.id===item.id ?{...orderItem,quantity:orderItem.quantity +1} :orderItem);
      console.log('itemExist', itemExist)
      setOrder(updateOrder);
    }else {

      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };


  console.log(order);

  return {
    addItem,
  };
};
