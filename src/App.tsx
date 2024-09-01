import { useState } from "react"
import { menuItemsInit } from "./data/db"
import MenuItemComponent from "./components/MenuItemComponent"
import useOrder from "./hooks/useOrder"
import OrderItemComponent from "./components/OrderItemComponent"
import OrderTotalComponent from "./components/OrderTotalsComponent"
import TipComponent from "./components/TipComponent"

function App() {

  const [menuItems] = useState(menuItemsInit)
  const {
    addItem,
    removeItem,
    order,
    propina,
    setTip,
    total,
    subtotal,
    save
  } = useOrder()

  return (
    <>
      <header className="bg-slate-500 py-5">
        <h1 className="text-3xl font-bold text-center">Calculadora de propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto pt-2 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl text-black font-bold">
            Menú
          </h2>
          <div className="space-y-3 mt-5">

            {
              menuItems.map(item => (
                <MenuItemComponent key={item.id} item={item} onClick={addItem} />
              ))
            }
          </div>
        </div>
        {

          <div className="border border-dashed border-slate-400 p-5">
            {
              order.length ?
                (
                  <>
                    <OrderItemComponent order={order} removeItem={removeItem} />
                    <TipComponent setTip={setTip} />
                    <OrderTotalComponent total={total} subtotal={subtotal} propina={propina} save={save} />
                  </>
                ) :
                <p className="text-center">La orden está vacía</p>

            }

          </div>
        }

      </main>

    </>
  )
}

export default App
