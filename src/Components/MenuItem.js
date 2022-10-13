import "../Styling/MenuPage.css";

function MenuItem(dish) {
  const foodItem = dish.dish;
  console.log(dish);
  return (
    <ul className="MenuCard">
      <li>{foodItem.id}</li>
      <li>{foodItem.name}</li>
      <li>{foodItem.shortDescription}</li>
      <li>{foodItem.longDescription}</li>
    </ul>
  );
}

export default MenuItem;
