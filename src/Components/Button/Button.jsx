// Create reusable button just like the modal component

// Import and reuse this button on files where we need buttons for navigation

const Button = (props) => {
    return (
        <>
        <button onClick={props.handleClick}>{props.btnText}</button>
        </>
    )
}

export default Button;