import { MenuList } from '../types/tipos';

interface item {
  item:MenuList
}

export const MenuItem = ({item}:item) => {
  console.log("desde menu item",item);
  
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
    <p>{item.name}</p>
    <p>S/. {item.price}</p>


    </button>
  )
}