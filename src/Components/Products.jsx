import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="search products" />
      </div>
      <nav>
        <Link to="featured">featured</Link>
        <Link to="new">New</Link>
      </nav>
    </>
  );
};
