import React, { useState } from 'react';
import { items } from './Data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Searchitem from './Searchitem';
import { FaCartArrowDown } from 'react-icons/fa';


function Navbar({ cart, setData }) {
  //  console.log(useLocation().pathname)
  const location = useLocation().pathname
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate();

  const filterBtCategory = (category) => {
    const filteredItems = items.filter((product) => product.category === category);
    console.log(category);
    console.log(filteredItems);
    setData(filteredItems);
  };

  const filterByPrice = (price) => {
    const pricedItem = items.filter((product) => product.price >= price);
    console.log(price)
    console.log(pricedItem)
    setData(pricedItem)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("");
  }

  return (
    <>
      <header className='sticky-top'>
        <div className="navbar">
          <Link to={'/'} className="brand">Brand</Link>
          <form
            onSubmit={handleSubmit}
            className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)
              }
              type="text" placeholder='Search Product' />
          </form>
          <Link to={'/cart'} className="cart">
            <button type="button" class="btn btn-primary position-relative">
              <FaCartArrowDown style={{ fontSize: '1.5rem' }} />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {
          location == '/' && <div className="navbarWrapper">
            <div className="item">Filter By {"->"}</div>
            <div
              onClick={() => setData(items)}
              className="item">No Filter</div>
            <div onClick={() => filterBtCategory("mobiles")} className="item">Mobiles</div>
            <div onClick={() => filterBtCategory("laptops")} className="item">Laptop</div>
            <div onClick={() => filterBtCategory("tablets")} className="item">Tablet</div>
            <div
              onClick={() =>
                filterByPrice(29999)
              }
              className="item">{">="}29999</div>
            <div
              onClick={() =>
                filterByPrice(49999)
              }
              className="item">{">="}49999</div>
            <div
              onClick={() =>
                filterByPrice(69999)
              }
              className="item">{">="}69999</div>
            <div
              onClick={() =>
                filterByPrice(89999)
              }
              className="item">{">="}89999</div>
          </div>
        }
      </header>
    </>
  );
}

export default Navbar;
