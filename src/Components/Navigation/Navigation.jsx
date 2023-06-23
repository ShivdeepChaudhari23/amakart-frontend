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
  const [searchMode, setSearchMode] = useState("");
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (searchMode === '') {
      alert('Please Select Search Mode first');
      return;
    }
    dispatch(getItems(`${searchMode}=${searchText}`));
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
        <div className="Search-Mode-Choice">
          <div className="Search-Mode-Title-Container">
            <input
              type="radio"
              value="Title"
              onChange={() => setSearchMode("Title")}
              name="Title"
              checked={searchMode === "Title"}
            />
            <label className="Title-Label">Name</label>
          </div>
          <div>
            <input
              type="radio"
              value="Variant SKU"
              onChange={() => setSearchMode("Variant SKU")}
              name="SKU"
              checked={searchMode === "Variant SKU"}
            />
            <label className="Title-Label">SKU</label>
          </div>
        </div>
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
