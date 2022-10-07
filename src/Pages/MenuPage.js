import "../Styling/MenuPage.css";

function RenderMenuItems() {
  const menuItems = [
    {
      id: "1",
      name: "Nasi",
    },
    {
      id: "2",
      name: "Bami",
    },
    {
      id: "3",
      name: "Mihoen",
    },
    {
      id: "4",
      name: "Pabi Pangang",
    },
  ];

  const itemList = menuItems.map((item) => {
    return (
      <ul className="Card">
        <li>{item.id}</li>
        <li>{item.name}</li>
      </ul>
    );
  });

  return <div>{itemList}</div>;
}

function MenuPage() {
  return (
    <div>
      <div>
        <RenderMenuItems />
      </div>
    </div>
  );
}

export default MenuPage;
