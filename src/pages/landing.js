import '../css/landing.css';

function Landing() {
  return (
    <div className="main">
      <Title />
      <div className="content">
        <Left />
        <Right />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="title">
      <div className="image">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="DIKKO Online Shopping" />
      </div>
      <div className="content">
        <h1>DIKKO Online Shopping Ethiopia</h1>
        <p>Welcome to the ultimate online shopping experience in Ethiopia. Explore our wide range of products and enjoy convenient shopping from the comfort of your home.</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="left">
      <h2>Categories</h2>
      <ul>
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Home & Kitchen</li>
        <li>Beauty & Health</li>
      </ul>
    </div>
  );
}

function Right() {
  return (
    <div className="right">
      <h2>Featured Products</h2>
      <div className="product">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Product 1" />
        <div className="product-info">
          <h3>Product 1</h3>
          <p>Description of Product 1</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="product">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Product 2" />
        <div className="product-info">
          <h3>Product 2</h3>
          <p>Description of Product 2</p>
          <button >Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
