import { useEffect, useState, useRef } from "react";
import "../Styling/MenuPage.css";
import ResponsiveAppBar from "../Components/CategoryTopBar";
import MenuItem from "../Components/MenuItem";
import { getAllMenuItems } from "../Components/Services";

// function RenderMenuItems() {
//   const [menuItems, setMenuItems] = useState([]);

//   const menuRef = useRef([]);

//   var itemList = [];

//   // const MapMenuItems = useCallback(() => {
//   //   menuRef.current = menuItems;
//   //   //console.log(menuRef.current);
//   //   if (menuRef.current.length > 0) {
//   //     itemList = menuRef.current.map((item) => {
//   //       //console.log(item);
//   //       return <MenuItem key={item.id} dish={item} />;
//   //     });
//   //     console.log(itemList);
//   //     return <div>{itemList}</div>;
//   //   }
//   // }, [menuItems]);

//   useEffect(() => {
//     GetMenuItems();
//     // menuRef.current = menuItems;
//   }, []);

//   // useEffect(() => {
//   //   MapMenuItems();
//   // }, [menuItems, MapMenuItems]);

//   async function GetMenuItems() {
//     var menustuff = await getAllMenuItems();
//     //console.log(menustuff);
//     setMenuItems(menustuff);
//   }
// }

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  const menuRef = useRef([]);

  useEffect(() => {
    GetMenuItems();
    menuRef.current = menuItems;
  }, [menuItems]);

  async function GetMenuItems() {
    var menustuff = await getAllMenuItems();
    //console.log(menustuff);
    setMenuItems(menustuff);
  }

  return (
    <div>
      <ResponsiveAppBar />
      {/* <RenderMenuItems /> */}
      {menuRef.current.map((item) => (
        <MenuItem key={item.id} dish={item} />
      ))}
    </div>
  );
}

export default MenuPage;
