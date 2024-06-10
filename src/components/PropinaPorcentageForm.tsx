import { Dispatch } from 'react';

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
interface PropinaPorcentageForm {
  setPropina:Dispatch<React.SetStateAction<number>>
  propina:number;
}
export const PropinaPorcentageForm = ({setPropina,propina}:PropinaPorcentageForm ) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((propinaOption) => (
          <div key={propinaOption.id} className="flex gap-2">
            <label htmlFor={propinaOption.id}> {propinaOption.label} </label>
            <input
              id={propinaOption.id}
              type="radio"
              name="tip"
              value={propinaOption.value}
              onChange={e=>setPropina(+e.target.value)}
              checked={propinaOption.value===propina}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
