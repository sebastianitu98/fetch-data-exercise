const Browser = ( props ) => {
    //to display the title for the Browser element we have to access props.query.meta.title
    const browsers = props.data.data.query.meta

    return(
        <ul className="browser-el">
            {/* {browsers.map(({ key, title }) => {
                return <li key={key}>{title}</li>
            })} */}
        </ul>
    )
}

export default Browser