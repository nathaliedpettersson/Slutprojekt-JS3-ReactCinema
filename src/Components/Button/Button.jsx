
const Button = (props) => {
    return (
        <>
        <button className="component-btn" onClick={props.handleClick}>{props.btnText}</button>
        </>
    )
}

export default Button;