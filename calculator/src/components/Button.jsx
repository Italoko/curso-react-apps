import './Button.css'
import Bold from './Bold'


export default props => {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button className={classes} onClick={e => props.click(props.label)}>
            <Bold operation={props.operation} label={props.label} />
        </button>
    )
}
