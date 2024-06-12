import { Dispatch } from 'react';
import { OrderActions } from '../reducers/orderReducer';
import { MenuList } from "../types/tipos";

interface item {
  item: MenuList;
  dispatch: Dispatch<OrderActions>
}

export const MenuItem = ({ item, dispatch }: item) => {



  
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => dispatch({type:'add-item',payload:{item}})}
    >
      <p>{item.name}</p>
      <p>S/. {item.price}</p>
    </button>
  );
};
