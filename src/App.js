import React, { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./Components/productlist";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductListHeading from "./Components/productheading";
import SearchBox from "./Components/searchBox";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const getProductRequest = async (search) => {
    const url = `https://product-api-11.herokuapp.com/product?search=${search}`;
    const reponse = await fetch(url);
    const resJSON = await reponse.json();

    if (resJSON) {
      setProducts(resJSON);
    }
  };

  useEffect(() => {
    getProductRequest(search);
  }, [search]);

  return (
    <>
      <div className="App">
        {/* <SearchBar placeholder="Enter a Product Name..." data={BookData} /> */}
        <div class="cards-list">
          {/* <div class="card 1">
            <div class="card_image">
              {" "}
              <img src="" />{" "}
            </div>
            <div class="card_title title-white">
              <p>Card Title</p>
            </div>
          </div> */}

          {/* <div class="card 2">
            <div class="card_image">
              <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
            </div>
            <div class="card_title title-white">
              <p>Card Title</p>
            </div>
          </div> */}

          {/* 
          <div class="card 4">
            <div class="card_image">
              <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
            </div>
            <div class="card_title title-black">
              <p>Card Title</p>
            </div>
          </div> */}

          <div className="body">
            <div className="container-fluid product-app">
              <div className=" d-flex align-items-center mt-4 mb-4">
                <ProductListHeading heading="Products" />
                <SearchBox search={search} setSearch={setSearch} />
              </div>
              <div>
                <ProductList products={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
