const PlotValue = (props) => {
    
    return(
        <li className='bg-gray-200 w-full h-auto relative'>

            {(props.min == props.value) &&
              <span className='dot absolute left-0'>

              </span>
            }

            {(props.max == props.value) &&  
                <span className="dot absolute left-full">

                </span>
            }

            {((props.min != props.value) && (props.max != props.value)) &&
             <span className="plot-dot dot absolute" style={{left:`${(((props.value - props.min)/(props.max - props.min))*100)}%`}}>

             </span>
            }

        </li>
    )
}

export default PlotValue

// 