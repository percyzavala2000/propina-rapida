import { useReducer } from 'react';
import { MenuItem } from "./components/MenuItem";
import { OrderContents } from './components/OrderContents';
import { OrderTotal } from './components/OrderTotal';
import { PropinaPorcentageForm } from './components/PropinaPorcentageForm';
import { menuItems } from "./database/data";
import { initialState, orderReducer } from './reducers/orderReducer';

function App() {
  //cumstom hook
 const [state,dispatch]=useReducer(orderReducer,initialState);

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">Propina Rapida</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">menu</h2>

          <div className=" space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          {state.order.length>0 ? (
            <>
            <OrderContents  order={state.order} dispatch ={dispatch } />
           <PropinaPorcentageForm propina={state.propina} dispatch={dispatch}/>
            <OrderTotal order={state.order} propina={state.propina} dispatch={dispatch} />
            </>
        ):
        (
          <p className="text-center">La orden esta vacia</p>
        )
      }
        </div>
      </main>
    </>
  );
}

export default App;
