import SingleGroceryItem from "./SingleGroceryItem";
function GroceryList(props) {
    const renderArrayOfItems = props.groceryList.map((element)=>{
        return <SingleGroceryItem item={element} />
    })
    return( 
        <ul className="header">
            {renderArrayOfItems}
        </ul>
    );
}

export default GroceryList;