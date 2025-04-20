// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
   return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  orders.push({
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Mennunggu"
  })

  return orders;
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const indexItem = orders.findIndex(order => order.id === orderId);
  
  indexItem !== -1 ? orders[indexItem].status = status : null;

  return;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const totalRevenue = orders.filter(order => {
    return order.status === "Selesai"
  }).reduce((total, order) => total + order.totalPrice, 0);

  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);

  return orders;
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };

