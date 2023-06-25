import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../actions/items";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.jpg";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./Navigation.css";
import CartModal from "../CartModal";

const Navigation = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSearchClick = (e) => {
    e.preventDefault();
    dispatch(getItems(`searchAttribute=${searchText}`));
  };

  useEffect(() => {
    if (searchText === "") {
      dispatch(getItems());
    }
  }, [searchText, dispatch]);

  return (
    <Nav
      className="Nav-Container"
      variant="tabs"
      defaultActiveKey={"/"}
      as="ul"
    >
      <Image
        className="Logo"
        src={logo}
        alt="Text"
        width="120px"
        height="inherit"
      />
      <div className="Search-Box-Container">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="Input-Name"
          type="text"
          value={searchText}
          placeholder={'Search'}
        />
        <Button className="Search-Button" onClick={handleSearchClick}>
          Search
        </Button>
      </div>
      <Button
        className="Cart-Modal-Button"
        variant="dark"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Cart <Badge bg="danger">{cartItems.length}</Badge>
      </Button>
      {isModalOpen ? (
        <CartModal
          isModalOpen={isModalOpen}
          onCloseModal={() => {
            setIsModalOpen(false);
          }}
        />
      ) : null}
    </Nav>
  );
};

export default Navigation;
