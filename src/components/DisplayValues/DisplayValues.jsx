import { getMin , getMax } from '../../Services/GetMinAndMax/getMinAndMax'
import { formatNumber, formatNumberForPercentage } from '../../Services/FormatNumbers/formatNumbers'
import PlotValue from '../PlotValue/PlotValue';
import Value from '../Value/Value';

const DisplayValues = ( props ) => {

    //initializing an empty array where i'll push all values from each browser
    let values = [];
    
    //declared an array where i'll store all browser data objects
    let dataArr = props.data.data.query.data;
    
    //pushing NetImpressions corresponding values from dataArr to values
    dataArr.map( element => values.push(element[props.colNumber-1].v))
    
    //create an array based on i'll create the span elements indicating the value for each browser
    let elArr = []
    dataArr.map(element => elArr.push(element[props.colNumber-1]))
        
    //Get min and max values for the plot
    //I have to consider that percentage values will be formatted with another function
    /** I will write a function to chech which column is populated
     *  In case the "Fill rate column will be populated I'll use the formatPercentage" function
     *  Otherwise I ll use "formatNumber" function to format the numbers
     */
    if (props.colNumber-1 > 1){
        var min = formatNumberForPercentage( getMin(values), 2 )
        var max = formatNumberForPercentage( getMax(values), 2 )
    } else {
        var min = formatNumber( getMin(values) )
        var max = formatNumber( getMax(values) )
    }

    return (
        <div className="entire-block flex h-full w-full" style={{'flex-direction': props.colConfig[props.colNumber-1].showPlot? 'row' : 'row-reverse' }}>
            {/* values block with flex-direction column */}
            <div className="values-col flex flex-col  h-full mr-1" style={{display: props.colConfig[props.colNumber-1].showValue? 'inline-block' : 'none'}}>
                <br />
                <ul className='flex flex-col justify-end h-full mr-1'>
                    {elArr.map(({k,v}) => {return <Value key={k} value={v} colNumber={props.colNumber}/>})}
                </ul>
            </div>

            <div className="plot-col w-full" style={{display: props.colConfig[props.colNumber-1].showPlot? 'inline-block' : 'none'}}>
                
                <div className='plot-area w-full flex flex-col h-full'>
                    <div className='min-max-values w-full flex justify-between'>
                        <span className='inline-block min-value'> {min} </span>
                        <span className='inline-block max-value'> {max} </span>
                    </div>
                    
                    {/* creating the plot */}
                    <ul className='w-full h-full grid grid-cols-1 gap-y-1'>
                        {elArr.map(({k,v}) => {return <PlotValue key={k} value={v} min={getMin(values)} max={getMax(values)}/>})}
                    </ul>
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default DisplayValues