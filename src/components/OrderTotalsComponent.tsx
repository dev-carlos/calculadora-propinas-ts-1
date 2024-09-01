
import { formatCurrency } from "../helpers/utils"

type Props = {
    subtotal: number,
    propina: number,
    total: number,
    save: () => void
}

export default function OrderTotalComponent({ subtotal, propina, total, save }: Props) {

    const disabled = total === 0;

    return (
        <>
            <div className="space-y-3 my-5">
                <h2 className="font-black text-2xl">Total y propinas</h2>
                <p className="font-black">Subtotal: {formatCurrency(subtotal)}</p>
                <p className="font-black">Propina: {formatCurrency(propina)}</p>
                <p className="font-black">TOTAL: {formatCurrency(total)}</p>
            </div>
            <button onClick={save} className="w-full bg-black uppercase text-white py-4 disabled:opacity-20"
                disabled={disabled}>
                Guardar pedido
            </button>
        </>
    )

}