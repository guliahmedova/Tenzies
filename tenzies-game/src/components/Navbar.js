export default function Navbar(props) {
    console.log(props.checked)
    return (
        <nav className="nav--container" style={{background: props.checked ? "black" : ""}}>
            <ul className="nav--list">
                <li className="darkMode--container">
                    <span style={{ color: props.checked ? "white" : "yellow" }}><i className="fa-solid fa-sun"></i></span>
                    <label className="switch">
                        <input type="checkbox" checked={props.checked} onChange={props.onChange} />
                        <span className="slider round"></span>
                    </label>
                    <span style={{ color: props.checked ? "white" : "gray" }}><i className="fa-solid fa-moon"></i></span>
                </li>
                <li className="animate__animated animate__flipInY item">Score: {props.count}</li>
                {/* <li className="animate__animated animate__flipInY item">Time: {props.changeTime}</li> */}
            </ul>
        </nav>
    )
}