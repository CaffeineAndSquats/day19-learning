// Process credit card payment
function processPayment(amount, cardNumber, expiry, cvv) {
  if (amount <= 0) {
    return { success: false, message: "Invalid amount" };
  }
  
  // Store card details (DON'T DO THIS IN REAL CODE!)
  const payment = {
    amount: amount,
    card: cardNumber,
    expiry: expiry,
    cvv: cvv,
    timestamp: new Date()
  };
  
  // Send to payment gateway
  console.log("Processing payment:", payment);
  
  return { success: true, message: "Payment processed" };
}