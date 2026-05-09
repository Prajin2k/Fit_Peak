import "./AdminProductForm.css";

export default function AdminProductForm({
  name,
  setName,
  price,
  setPrice,
  category,
  setCategory,
  image,
  setImage,
  addProduct,
  isEditing,
  updateProduct,
imageFit,
setImageFit
}) {

  return (

    <section
  id="admin-form"
  className="admin-form"
>

      <div className="section-inner">

        <h2 className="admin-form__title">
          {isEditing ? "UPDATE PRODUCT" : "ADD PRODUCT"}
        </h2>

        <div className="admin-form__grid">

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <select
  value={imagePosition}
  onChange={(e) =>
    setImagePosition(e.target.value)
  }
>

  <option value="top">
    Top
  </option>

  <option value="center">
    Center
  </option>

  <option value="bottom">
    Bottom
  </option>

</select>
<select
  value={imageFit}
  onChange={(e) =>
    setImageFit(e.target.value)
  }
>

  <option value="cover">
    Cover
  </option>

  <option value="contain">
    Contain
  </option>

</select>
       <div className="admin-form__actions">

  <button
    type="button"
    onClick={() => {

      if (isEditing) {

        updateProduct();

      } else {

        addProduct();

      }

    }}
  >
    {isEditing ? "Update Product" : "Add Product"}
  </button>

  {
    isEditing && (

      <button
        type="button"
        className="admin-form__cancel"
        onClick={() => {

          setName("");

          setPrice("");

          setCategory("");

          setImage("");

          window.location.reload();

        }}
      >
        Cancel
      </button>

    )
  }

</div>

        </div>

      </div>

    </section>

  );

}