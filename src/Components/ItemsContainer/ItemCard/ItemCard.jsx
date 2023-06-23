import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCard.css';
import Strings from './Strings';
import MODEL_ATTRIBUTES from '../../../constants/model-attributes';
import { addToCart, removeFromCart } from '../../../actions/cart';
import { useDispatch } from 'react-redux';

const ItemCard = ({itemData, isCart = false}) => {
    const dispatch = useDispatch();
    
    const handleClick = (itemData) => {
       const action = isCart ? removeFromCart : addToCart;
         dispatch(action(itemData));
    }

    return (
        <Card className={"Item-Card"}>
                    <Card.Img className='Card-Image' variant="top" src={itemData[MODEL_ATTRIBUTES.IMAGE_SRC] || Strings.DefaultImage} />
                    <Card.Body>
                        <Card.Title className="Title">{itemData[MODEL_ATTRIBUTES.TITLE] || Strings.DefaultTitle}</Card.Title>
                        <div className='Card-Body'>
                            <Card.Text className='Text'>{itemData[MODEL_ATTRIBUTES.BODY] || Strings.DefaultBody}</Card.Text>
                            <div className='Item-Card-Footer'>
                                <Card.Text className="Price">{`$${itemData[MODEL_ATTRIBUTES.VARIANT_PRICE] || 0}`}</Card.Text>
                                <Button onClick={() => {handleClick(itemData)}} variant="primary">{isCart ? 'Remove' : 'Add To Cart'}</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
    )
};

export default ItemCard