
type Props = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipComponent({ setTip }: Props) {

    const tipOptions = [
        {
            id: 'tip-10',
            value: 10,
            label: '10'
        },
        {
            id: 'tip-20',
            value: 20,
            label: '20'
        },
        {
            id: 'tip-50',
            value: 50,
            label: '50'
        },
    ]

    return (
        <div>
            <h3 className="font-black text-2xl">Propina</h3>
            <form>
                {
                    tipOptions.map(tip => (
                        <div key={tip.id}>
                            <label htmlFor="">{tip.label}% </label>
                            <input type="radio" id={tip.id} value={tip.value} name="tip" onChange={(e) => setTip(+e.target.value)} />
                        </div>
                    ))
                }
            </form>
        </div>
    )

}