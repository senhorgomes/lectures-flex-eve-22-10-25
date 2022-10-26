function SingleGroceryItem(props) {
    return( 
        <li>
            {/* Bread */}
            <p>{props.item}</p>
        </li>
    );
}

export default SingleGroceryItem;