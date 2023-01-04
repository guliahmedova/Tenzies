export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "yellow" : "white"
    }
    return (
        <div className={props.holldDice ? "animate__animated animate__rotateIn die-face" : "die-face"} style={styles} onClick={props.holldDice}>
            {
                props.dot ?
                    <img className="animate__animated animate__rotateIn die-dot" src={`./images/${props.value}.png`} alt="photo" />
                    :
                    <h1 className="die-num">{props.value}</h1>
            }
        </div>
    )
}