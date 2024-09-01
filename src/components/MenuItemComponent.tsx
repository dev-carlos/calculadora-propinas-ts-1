import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    onClick: (item: MenuItem) => void
}

export default function MenuItemComponent({ item, onClick }: MenuItemProps) {

    return (
        <button onClick={() => onClick(item)}
            className="border-2 border-slate-400 w-full p-10 hover:bg-gray-100"
        >
            <div className="flex justify-between ">
                <p>{item.name}</p>
                <p className="font-bold text-right">{item.price} €</p>
            </div>

        </button>
    )
}