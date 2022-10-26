//We can pass in a name, and render that name with the html tags

function HelloName(props) {
    return( 
        <div className="header">
            <p>Hello, {props.name}!</p>
            <p>How is everyone?</p>
        </div>
    );
}

export default HelloName;