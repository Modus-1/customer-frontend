import { useState, useEffect } from "react";
import "../Styling/CategoryTopBar.css";
import { getAllCategories } from "./services/MenuServices";

function CategoryTopBar(filtermethod) {
  const Filtermthd = filtermethod.filtermethod;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    SetAllCategories();
  }, []);

  async function SetAllCategories() {
    const allItemsCategory = [{id: '0', name: 'All'}];
    const getCategories = await getAllCategories()
    const combinedCategories = allItemsCategory.concat(getCategories);

    if (combinedCategories.length !== 0) {
      setCategories(combinedCategories);
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
