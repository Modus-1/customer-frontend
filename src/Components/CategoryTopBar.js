import { useState, useEffect } from "react";
import "../Styling/CategoryTopBar.css";
import { getAllCategories } from "./Services";

function CategoryTopBar() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Placeholder 1",
    },
    {
      id: 2,
      name: "Placeholder 2",
    },
    {
      id: 3,
      name: "Placeholder 3",
    },
  ]);

  useEffect(() => {
    GetAllCategories();
  }, []);

  async function GetAllCategories() {
    let catstuff = await getAllCategories();

    if (catstuff.length !== 0) {
      setCategories(catstuff);
    }
  }

  return (
    <div className="tb-main-content">
      {categories.map((category) => (
        <div className="tb-category" key={category.id}>
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default CategoryTopBar;
