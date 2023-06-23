import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ItemCard from "./ItemCard/ItemCard";
import "./ItemsContainer.css";

const ItemsContainer = () => {
  const items = useSelector((state) => state.items);

  return (
    items.length ? 
    <Container className="Items-Container">
        {items.map((item) => {
            return <ItemCard itemData={item} />;
        })}
    </Container>
    :
    <Spinner />
  );
};

export default ItemsContainer;
