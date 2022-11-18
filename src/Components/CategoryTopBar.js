import { useState, useEffect } from "react";
import "../Styling/CategoryTopBar.css";
import { getAllCategories } from "./Services";

function CategoryTopBar(filtermethod) {
  const Filtermthd = filtermethod.filtermethod;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetAllCategories();
  }, []);

  async function GetAllCategories() {
    let catstuff = await getAllCategories();

    if (catstuff.length !== 0) {
      setCategories(catstuff);
    }
  }

  function FilterHandeler(filter) {
    Filtermthd(filter.id);
  }
  return (
    <div className="tb-main-content">
      {categories.map((category) => (
        <button
          className="tb-category"
          key={category.id}
          onClick={() => FilterHandeler(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryTopBar;
