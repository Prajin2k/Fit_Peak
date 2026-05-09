import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AdminProductForm from "./components/AdminProductForm";

import "./styles/globals.css";

export default function App() {
  const [imagePosition, setImagePosition] = useState("center");
  const [imageFit, setImageFit] = useState("cover");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const role = localStorage.getItem("role");
  const handleAddToCart = (product) => {

  setCartItems((prev) => {

    const existingItem = prev.find(
      (item) => item._id === product._id
    );

    if (existingItem) {

      return prev.map((item) =>

        item._id === product._id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item

      );

    }

    return [

      ...prev,

      {
        ...product,
        quantity: 1
      }

    ];

  });

};
const removeFromCart = (id) => {

  setCartItems((prev) =>

    prev
      .map((item) =>

        item._id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item

      )
      .filter((item) => item.quantity > 0)

  );

};

const deleteFromCart = (id) => {

  setCartItems((prev) =>

    prev.filter(
      (item) => item._id !== id
    )

  );

};

  const fetchProducts = async () => {

    try {

      const response = await fetch("http://localhost:5000/products");

      const data = await response.json();

      setProducts(data);

    } catch (error) {

      console.log(error);

    }

  };

  const addProduct = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/add-product",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            price,
            category,
            image,
            imageFit,
            imagePosition
          }),
        }
      );

      const data = await response.text();

      console.log(data);

      fetchProducts();

      setName("");
      setPrice("");
      setCategory("");
      setImage("");

    } catch (error) {

      console.log(error);

    }

  };

  const deleteProduct = async (id) => {

    try {

      await fetch(
        `http://localhost:5000/delete-product/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchProducts();

    } catch (error) {

      console.log(error);

    }

  };
const editProduct = (product) => {

  setName(product.name);

  setPrice(product.price);

  setCategory(product.category);

  setImage(product.image);

  setEditingId(product._id);

  setIsEditing(true);
setImageFit(product.imageFit || "cover");

setImagePosition(
  product.imagePosition || "center"
);
  

};

  const updateProduct = async () => {

    try {

      await fetch(
        `http://localhost:5000/update-product/${editingId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
  name,
  price,
  category,
  image,
  imageFit,
  imagePosition
}),
        }
      );

      fetchProducts();

      setName("");
      setPrice("");
      setCategory("");
      setImage("");

      setTimeout(() => {

  setIsEditing(false);

}, 200);
      
    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  return (

    <div className="app">

      <Navbar
  cartCount={cartItems.length}
  setShowCart={setShowCart}
/>

      <Hero />

      {
  role === "admin" && !isEditing && (

    <AdminProductForm
  name={name}
  setName={setName}
  price={price}
  setPrice={setPrice}
  category={category}
  setCategory={setCategory}
  image={image}
  setImage={setImage}
  addProduct={addProduct}
  isEditing={isEditing}
  updateProduct={updateProduct}
  imageFit={imageFit}
  setImageFit={setImageFit}
  imagePosition={imagePosition}
  setImagePosition={setImagePosition}
/>

  )
}
 {
  showCart && cartItems.length > 0 && (

    <div id="cart" className="cart-section">

      <h2>
        Shopping Cart
      </h2>
    <button
  onClick={() => setShowCart(false)}
>
  Close
</button>
      {
        cartItems.map((item) => (

          <div
            key={item._id}
            className="cart-item"
          >

            <img
              src={item.image}
              alt={item.name}
              width="80"
            />

            <div>

              <h3>
                {item.name}
              </h3>

              <p>
                ₹{item.price}
              </p>

              <p>
                Quantity: {item.quantity}
              </p>

            </div>

            <div>

              <button
                onClick={() =>
                  handleAddToCart(item)
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  removeFromCart(item._id)
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  deleteFromCart(item._id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))
      }

    </div>

  )
}

      <Products
        products={products}
        onAddToCart={handleAddToCart}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
{
  isEditing && (

    <div className="edit-popup">

      <div className="edit-popup__content">

        <AdminProductForm
  name={name}
  setName={setName}
  price={price}
  setPrice={setPrice}
  category={category}
  setCategory={setCategory}
  image={image}
  setImage={setImage}
  addProduct={addProduct}
  isEditing={isEditing}
  updateProduct={updateProduct}
  imageFit={imageFit}
  setImageFit={setImageFit}
  imagePosition={imagePosition}
  setImagePosition={setImagePosition}
/>

      </div>

    </div>

  )
}
      <WhyUs />

      <Testimonials />

      <CTA />

      <Footer />

    </div>

  );

}