import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Category.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { HiUserGroup } from "react-icons/hi";
import { SharedContext } from "../../AuthContext/AuthContext";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const {user} = useContext(SharedContext)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:5000/allcategory", { signal })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        // console.log(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // console.log("cancelled");
        } else {
          //handling error
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <div className="my-5 container d-md-none d-flex justify-content-between align-items-center">
        <p className="fs-1 fw-bold">Post</p>
        <div className="">
          <DropdownButton id="dropdown-basic-button" title="Filter:All">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="my-5 container d-xxs-none d-md-block">
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

          <div className="bg-gray fw-bold ms-auto">
            <DropdownButton
              className=""
              id="dropdown-basic-button"
              title="Write a Post"
            ></DropdownButton>
          </div>
          <div>
            {user?.uid ? (
              <button className="border p-2 fs-6 d-flex align-items-center gap-2">
                <HiUserGroup /> Leave Group
              </button>
            ) : (
              <button className="border bg-darkBlue border-0 text-white p-2 fs-6 d-flex align-items-center gap-2">
                <HiUserGroup /> Join Group
              </button>
            )}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Category;
