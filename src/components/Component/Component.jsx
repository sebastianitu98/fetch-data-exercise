import Browser from '../Browser/Browser'
import ColumnComponent from '../ColumnComponent/ColumnComponent'


const Component = ( props ) => {
    
    /** 
     *the colNumber attribute represents the 
     *column position in the array i'll iterate later
    */

    return(
        <div className='flex my-4 mx-4'>
            <Browser data={ props.data }/>
            <ColumnComponent colConfig={props.colConfig} data={ props.data } colNumber={1} name={'Net Impressions'} />
            <ColumnComponent colConfig={props.colConfig} data={ props.data } colNumber={2} name={'Ad Slots'} />
            <ColumnComponent colConfig={props.colConfig} data={ props.data } colNumber={3} name={'Fill Rate'} />
        </div>
    )
}

export default Component