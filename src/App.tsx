import { menuItems } from './database/data';


function App() {
  console.log(menuItems);
  
  

  return (
    <>
    <header className=" bg-teal-400 py-5">
      <h1 className=" text-center text-4xl font-black">Propina Rapida</h1>
    </header>
    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="">
        <h2>menu</h2>
      </div>
      <div className="">
        <h2>Consumo</h2>
      </div>
      
    </main>
    </>
  )
}

export default App
