import DisplayValues from "../DisplayValues/DisplayValues"

const NetImpressions = ( props ) => {

    return(
        <>
            <p>Net Impressions</p>
            <DisplayValues data = { props.data }/>
        </>
    )
}

export default NetImpressions