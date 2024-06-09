import { MenuItem } from "./components/MenuItem";
import { menuItems } from "./database/data";
import { useOrder } from "./hooks/useOrder";

function App() {
  //cumstom hook
  const { addItem } = useOrder();

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
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="">
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
