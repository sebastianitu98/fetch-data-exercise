import DisplayValues from "../DisplayValues/DisplayValues"

const ColumnComponent = ( props ) => {

    // the colNumber attribute represents the object position in the array i'll iterate

    return(
        <div className={'mx-3 h-fit'}  style={{display: props.colConfig[props.colNumber-1].isHidden? 'none' : 'inline-block', width: props.colConfig[props.colNumber-1].showPlot? '100%' : 'fit-content'}}>
            <p className="font-semibold whitespace-nowrap">{props.name}</p>
            <DisplayValues colConfig={props.colConfig} data= {props.data} colNumber={props.colNumber}/>
        </div>
    )
}

export default ColumnComponent