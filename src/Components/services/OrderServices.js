import axios from "axios";

export async function MakeOrder(ordernote, totalPrice) {
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const bodyFormData = {
    totalPrice: 0,
    tableId: 0,
    note: ordernote,
  };

  const response = await axios.post(
    "http://localhost:9002/Order/create/",
    bodyFormData,
    customConfig
  );
  return response.data.data;
}

export async function AddItemsToOrder(orderid, orderitems) {
  let bodyFormData = [];
  orderitems.map((item) =>
    bodyFormData.push({
      id: item.id,
      amount: item.amount,
      name: item.name,
    })
  );

  const response = await axios.post(
    `http://localhost:9002/Order/${orderid}/item`,
    bodyFormData
  );
}
