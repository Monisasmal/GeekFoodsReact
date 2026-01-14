
// import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="logo">
          <img
            src="./geekfood-logo.svg"
            alt="logo"
            className="logo-image"
          />GeekFoods</div>
            <div className='menuBar'>
            <i className="fas fa-bars"></i>
         </div>
      <nav>
        <ul className="nav-links">
         <li><a href="/">Home</a></li>
        <li><a
      href="https://geek-food-quote-react.vercel.app/"
      rel="noopener noreferrer"
    >
      Quote
    </a></li>
        <li><a href="https://geekfood-resturant.vercel.app/">Restaurants</a></li>
          <li><a href="/foods">Foods</a></li>
          <li><a href="/contact">Contact</a></li>
      </ul>
        
      </nav>
    
      <button className="get-started-btn">Get started</button>
    </header>
  );
};

export default Navbar;
