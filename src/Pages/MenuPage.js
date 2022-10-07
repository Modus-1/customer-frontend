import { useState } from "react";
import "../Styling/MenuPage.css";
import ResponsiveAppBar from "../Components/CategoryTopBar";

function RenderMenuItems() {
  const [menuItems, setMenuItems] = useState([
    {
      id: "1",
      name: "Nasi",
      description: "lol",
    },
    {
      id: "2",
      name: "Bami",
      description: "lol",
    },
    {
      id: "3",
      name: "Mihoen",
      description: "lol",
    },
    {
      id: "4",
      name: "Babi Pangang",
      description: "lol",
    },
    {
      id: "5",
      name: "Stokbrood",
      description: "lol",
    },
  ]);

  const itemList = menuItems.map((item) => {
    return (
      <ul className="MenuCard">
        <li>{item.id}</li>
        <li>{item.name}</li>
        <li>{item.description}</li>
      </ul>
    );
  });

  return <div>{itemList}</div>;
}

function MenuPage() {
  return (
    <div>
      <h1 className="Header">Menu Page</h1>
      <ResponsiveAppBar />
      <RenderMenuItems />
    </div>
  );
}

export default MenuPage;
