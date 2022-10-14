import "../Styling/MenuPage.css";

function MenuItem(dish) {
  const { id, name, shortDescription, longDescription } = dish.dish;
  return (
    <ul className="MenuCard" data-testid={`mItem-${id}`}>
      <li>{id}</li>
      <li>{name}</li>
      <li>{shortDescription}</li>
      <li>{longDescription}</li>
    </ul>
  );
}

export default MenuItem;
