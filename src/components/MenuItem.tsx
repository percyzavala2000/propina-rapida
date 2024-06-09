import { MenuList } from '../types/tipos';

interface item {
  item:MenuList;
  addItem:(item:MenuList) => void;
  
  
}

export const MenuItem = ({item,addItem}:item) => {
  
  
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between" onClick={()=>addItem(item)}>
    <p>{item.name}</p>
    <p>S/. {item.price}</p>


    </button>
  )
}