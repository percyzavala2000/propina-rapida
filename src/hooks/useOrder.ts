import { useState } from 'react';
import {  MenuList, OrderItem } from '../types/tipos';

// export const useOrder =  <T extends Object | T extends Array>() => {
export const useOrder =  () => {
const [order, setOrder] = useState<OrderItem []>([]);

  const addItem = (item:MenuList) => { 
    const newItem={...item,quantity:1}
setOrder([...order, newItem])
   }
 console.log(order);
 
  
  return {

    addItem
  }
  
}