const ORDER_API_ENDPOINT = "https://localhost:7116";

const jsonPostOrFail = async (endpoint, body, method = "POST") => {
  const req = await fetch(ORDER_API_ENDPOINT + endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const resp = await req.json();

  // Check if request was successful
  if(!req.ok)
    throw new Error(resp.message || `Request error @ ${endpoint}`);

  return resp;
}

/**
 * Creates a new order with the specified items.
 * @param {*[]} items 
 */
async function createOrder(items) {
  let totalPrice = 0; // Total order price
  let orderItems = [];

  // Process menu order items and make them compatible with the order-api
  // Also count the total price
  for(let item of items) {
    totalPrice += item.totalPrice;
    orderItems.push({
      id: item.id,
      amount: item.amount,
      name: item.name
    })
  }

  // Create the order and get the state
  let orderState = await jsonPostOrFail("/Order/Create", {
    totalPrice,
    tableId: Math.floor(Math.random() * 1000), // TODO Not implemented
    note: "string"
  });

  // Put the items
  orderState = await jsonPostOrFail(`/Order/${orderState.data.id}/item`, orderItems);

  // Return the order state
  return orderState.data;
}

/**
 * Checks if the specified order ID is valid.
 * @param {string} id The ID of the order to check.
 */
async function isValidOrder(id) {
  try {
    const req = await fetch(`${ORDER_API_ENDPOINT}/Order/${id}`);
    return req.ok;
  } catch(e) {
    return false;
  }
}

export { createOrder, isValidOrder }