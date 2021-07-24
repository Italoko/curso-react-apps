export default props =>{
    if(props.operation)
        return <>{props.label}</>
    else
        return <strong>{props.label}</strong>
}
