import React, { useState } from "react";

import "./Products.css";

const CATEGORIES = [
  "All",
  "Strength",
  "Cardio",
  "Recovery",
  "Apparel"
];

function StarRating({ rating }) {

  return (

    <div className="star-rating">

      {"★".repeat(Math.round(rating))}
      {"☆".repeat(5 - Math.round(rating))}

      <span className="star-rating__num">
        {rating}
      </span>

    </div>

  );

}

export default function Products({
  products,
  onAddToCart,
  cartItems,
  removeFromCart,
  deleteProduct,
  editProduct
}) {

  const [activeCategory, setActiveCategory] = useState("All");

  const [added, setAdded] = useState({});
  const role = localStorage.getItem("role");
  const getQuantity = (id) => {

  const item = cartItems.find(
    (item) => item._id === id
  );

  return item ? item.quantity : 0;

};

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter(
          (p) => p.category === activeCategory
        );

  const handleAdd = (product) => {

    setAdded((prev) => ({
      ...prev,
      [product._id]: true
    }));

    onAddToCart(product);

    setTimeout(() => {

      setAdded((prev) => ({
        ...prev,
        [product._id]: false
      }));

    }, 1500);

  };

  return (

    <section className="products" id="products">

      <div className="section-inner">

        <div className="products__header">

          <div>

            <div className="section-tag">
              Shop
            </div>

            <h2 className="section-title">
              OUR COLLECTION
            </h2>

          </div>

          <p className="section-sub">
            Performance gear trusted by professional athletes and weekend warriors alike.
          </p>

        </div>

        <div className="products__filters">

          {CATEGORIES.map((cat) => (

            <button
              key={cat}
              className={`products__filter ${
                activeCategory === cat
                  ? "products__filter--active"
                  : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>

          ))}

        </div>

        <div className="products__grid">

          {filtered.map((product) => (

            <div
              key={product._id}
              className="product-card"
            >

              <div className="product-card__img">

              <img
  src={
    product.image && product.image.trim() !== ""
      ? product.image
      : "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  }
  alt={product.name}
  className="product-card__image"
  style={{
    objectFit:
      product.imageFit || "cover"
  }}
/>

              </div>

              <div className="product-card__body">

                <div className="product-card__cat">
                  {product.category || "Fitness"}
                </div>

                <h3 className="product-card__name">
                  {product.name}
                </h3>

                <StarRating
                  rating={product.rating || 4.5}
                />

                <div className="product-card__reviews">
                  ({product.reviews || 100} reviews)
                </div>

                <div className="product-card__footer">

                  <div className="product-card__pricing">

                    <span className="product-card__price">
                      ₹{product.price}
                    </span>

                    {product.oldPrice && (

                      <span className="product-card__old-price">
                        ₹{product.oldPrice}
                      </span>

                    )}

                  </div>
                  {
                    role !== "admin" && (
                      <div className="product-card__cart-controls">

                        {
                          getQuantity(product._id) === 0 ? (

                            <button
                              className="product-card__btn"
                              onClick={() => handleAdd(product)}
                            >
                              + Cart
                            </button>
      

                          ) : (

                            <div className="product-card__quantity">

                              <button
                                className="product-card__qty-btn"
                                onClick={() =>
                                  removeFromCart(product._id)
                                }
                              >
                                -
                              </button>

                              <span className="product-card__qty">

                                {getQuantity(product._id)}

                              </span>

                              <button
                                className="product-card__qty-btn"
                                onClick={() =>
                                  handleAdd(product)
                                }
                              >
                                +
                              </button>

                            </div>

                          )
                        }

                      </div>
                    )
                  }
                </div>

                {
                  role === "admin" && (

                    <div className="product-card__admin">

                      <button
  type="button"
  className="product-card__edit"
  onClick={() => editProduct(product)}
>
  Edit
</button>

                      <button
                        className="product-card__delete"
                        onClick={() =>
                          deleteProduct(product._id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  )
                }

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}