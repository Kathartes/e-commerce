import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div  className="greeting-container">
           
            <p  className="greeting">{greeting}</p>
           
        </div>
    );
};

export default ItemListContainer;