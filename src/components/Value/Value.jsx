import { formatNumber, formatNumberForPercentage } from "../../Services/FormatNumbers/formatNumbers"

const Value = ( props ) => {
    return (
        <>
        {(props.colNumber < 3) && <li className='h-1/5 my-2 h-4 text-sm'>{formatNumber(props.value, 1)}</li>}
        {(props.colNumber == 3) && <li className='h-1/5 my-2 h-4 text-sm'>{formatNumberForPercentage(props.value,0)}</li>}
        </>
    )
}

export default Value