import "../Styling/MenuPage.css";

function MenuItem(dish) {
  return (
    <ul className="MenuCard">
      <li>{dish.id}</li>
      <li>{dish.name}</li>
      <li>{dish.description}</li>
    </ul>
  );
}

export default MenuItem;
