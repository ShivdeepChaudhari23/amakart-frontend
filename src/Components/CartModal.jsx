import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import ItemCard from "./ItemsContainer/ItemCard/ItemCard";
import './CartModal.css'
import MODEL_ATTRIBUTES from "../constants/model-attributes";

const CartModal = ({ isModalOpen, onCloseModal }) => {
  const cartItems = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const grandTotal = cartItems.reduce((total, item) => {
      const price = item[MODEL_ATTRIBUTES.VARIANT_PRICE] || 0;
      return total + price;
    }, 0);

    setTotal(grandTotal.toFixed(2));
  }, [cartItems.length, cartItems]);

  return (
    <>
      <Modal show={isModalOpen} onHide={onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="Cart-Modal-Header">{`Cart (${cartItems.length})`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="Grand-Total-Header">{cartItems.length ? `Total : $${total}` : `Your Cart is Empty`}</h4>
          <div className="Cart-Item-Container">
            {!cartItems.length ? (
              null
            ) : (
              cartItems.map((item) => {
                return <ItemCard itemData={item} isCart />;
              })
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartModal;
