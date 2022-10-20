import { getMin , getMax } from '../../Services/GetMinAndMax/getMinAndMax'
import { formatNumber } from '../../Services/FormatNumbers/formatNumbers'

const DisplayValues = ( props ) => {

    //initializing an empty array where i'll push all values from each browser
    let values = [];
    //declared an array where i'll store all browser data objects
    let dataArr = props.data.data.query.data;
    //pushing NetImpressions corresponding values from dataArr to values
    dataArr.map( element => values.push(element[0].v))
    
    //Get min and max values for the plot
    let min = formatNumber( getMin(values) );
    let max = formatNumber( getMax(values) );


    return (
        <div className="entire-block">
            <div className="values-col">

            </div>
            <div className="plot-col">

            </div>
            
        </div>
        
    )
}

export default DisplayValues