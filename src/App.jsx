import "./App.css";

function App() {
  return (
    <div className="app__container">
      <div className="app__container-left">
        <img
          src="image-product-desktop.jpg"
          alt="product"
          className="app__container-left__img_desktop"
        />
        <img
          src="image-product-mobile.jpg"
          alt="product"
          className="app__container-left__img_mobile"
        />
      </div>
      <div className="app__container-right">
        <div className="app__container-right__detail space__padding">
          <h2>Perfume</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="app__container-right__detail__price">
            <span>$149.99</span>
            <span>$169.99</span>
          </div>
        </div>
        <div className="app__container-right__button">
          <button>
            <img src="icon-cart.svg" alt="cart" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
