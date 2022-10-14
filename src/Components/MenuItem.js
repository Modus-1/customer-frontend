import "../Styling/MenuPage.css";

function MenuItem(dish) {
  const { id, name, shortDescription, longDescription } = dish.dish;
  const foodItem = dish.dish;
  console.log(dish);
  return (
    <ul className="MenuCard">
      <li>{id}</li>
      <li>{name}</li>
      <li>{shortDescription}</li>
      <li>{longDescription}</li>
    </ul>
  );
}

export default MenuItem;
