function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = deliveryFee + price;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage('Australia', 120, 150));
console.log(getShippingMessage('Canada', 100, 60));
console.log(getShippingMessage('Germany', 80, 40));
