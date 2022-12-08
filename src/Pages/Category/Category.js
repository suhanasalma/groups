import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Category.css'

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:5000/allcategory", { signal })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("cancelled");
        } else {
          //handling error
        }
      });

    return () => {
      controller.abort();
    };
  }, []);



  return (
    <div className="my-5 container ">
      <div className="hstack gap-3 d-flex justify-content-between fs-5">
        {categories.map((category) => (
          <NavLink
            to={`/categories/${category.id}`}
            className="text-decoration-none text-black"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}

        <div className="bg-light border ms-auto">
          <button>Write a Post</button>
        </div>
        <div classname="bg-light border">
          <button>Join Group</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Category;
