import './Button.css'

export default props => {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    console.log(classes)
    return (
        <button className={classes} onClick={e=>props.click(props.label)}>
            {props.label}
        </button>
    )
}