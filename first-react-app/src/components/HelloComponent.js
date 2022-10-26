function HelloComponent(props) {
    return( 
        <div className="header">
            {/* Happy */}
            {props.mood === "happy" && <p>Hey, you seem pretty happy!</p>}
            {/* Sad */}
            {props.mood === "sad" &&<p>Hey, you seem pretty down, is everything ok?</p>}
            {/* Frustrated */}
            {props.mood === "frustrated" &&<p>Is everything ok? Did your code crash again?</p>}
        </div>
    );
}

export default HelloComponent;