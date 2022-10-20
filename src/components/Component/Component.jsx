import Browser from '../Browser/Browser'
import NetImpressions from '../NetImpressions/NetImpressions'
import AdSlots from '../AdSlots/AdSlots'
import FillRate from '../FillRate/FillRate'


const Component = ( props ) => {
    return(
        <div className='grid grid-cols-4 my-4'>
            <Browser data={ props.data }/>
            <NetImpressions data={ props.data }/>
            <AdSlots data={ props.data }/>
            <FillRate data={ props.data }/>
        </div>
    )
}

export default Component