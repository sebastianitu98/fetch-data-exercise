const Browser = ( props ) => {
    //to display the title for the Browser element we have to access props.query.meta.title
    const browsers = props.data.data.query.meta

    return(
        <ul className="browser-el flex flex-col gap-2.5 justify-end">
            {browsers.map(({ key, title }) => {
                return <li key={key} className='truncate'> {title} </li>
                })}
        </ul>
    )
}

export default Browser