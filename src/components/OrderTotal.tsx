import { useMemo } from 'react';
import {  OrderItem } from '../types/tipos';
import { formatCurrency } from '../helpers';

type OrderTotalProp={
  order:OrderItem []
  propina:number;
  placeOrder:()=>void
}
export const OrderTotal = ({order,propina,placeOrder}:OrderTotalProp) => {

  const subtotalAmout=useMemo(() => order.reduce((total,item)=>total+(item.quantity*item.price),0), [order]);
  const propinaAmout=useMemo(() =>subtotalAmout * propina , [propina,order])
  const totalPagar=useMemo(()=> subtotalAmout+propinaAmout,[propina,order]);







  return (
    <>
    <div className="space-y-3">
      <h2 className="font-black">Totales y Propina:</h2>
      <p>Subtotal a pagar: { " "} <span className="font-bold">{formatCurrency(subtotalAmout)}</span></p>
      <p>Propina : { " "} <span className="font-bold">{formatCurrency(propinaAmout)}</span></p>
      <p>Total a pagar: { " "} <span className="font-bold">{formatCurrency(totalPagar)}</span></p>
    </div>
    <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={totalPagar===0} onClick={placeOrder}>Guardar orden</button>
    
    </>
  )
}