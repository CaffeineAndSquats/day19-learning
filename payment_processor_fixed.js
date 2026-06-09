// Process credit card payment
// NOTE: In real code, use a payment service like Stripe

// SECURITY REVIEW: Original Copilot suggestion had critical issues:
// 1. Stored raw card data (PCI violation)
// 2. Exposed CVV in logs (security breach)
// 3. No token validation
// FIXED: Uses payment token instead, no card storage, sanitized logs

function processPayment(amount, cardToken) {
    // Validate amount
  if (!amount || amount <= 0) {
    return { 
        success: false, 
        error: "Invalid amount",
        code: "INVALID_AMOUNT"
    };
  }

  // Validate token format
  if (!cardToken || cardToken.length < 5) {
    return {
        success: false,
        error: "Invalid payment token",
        code: "INVALID_TOKEN"
    };
  }
  
  // call payment gateway (don't store card data)
  const result = callPaymentGateway({
    amount: amount,,
    token: cardToken
  });

  // log without sensitive data
  console.log("Payment attempted", {
    amount: amount,
    token_last4: cardToken.slice(-4),
    success: result.success,
    timestamp: new Date().toISOString()
  });

  return result;
}

// Mock payment gateway (in reality, this would be Stripe/Square API)
function callPaymentGateway(paymentData) {
  try {
    // simulate API call
    // In reality: return stripe.charges.create(paymentData);

    if (paymentData.amount > 0 && paymentData.token) {
        return {
            success: true,
            transactionId: "txn_" + Math.random().toString(36).substr(2, 9),
            message: "Payment processed successfully"
        };
    }
}   catch (error) {
        return {
            success: false,
            error: "Payment gateway error",
            code: "GATEWAY_ERROR"
        };
    }
}

// example usage
console.log("\n=== Testing Payment Processor ===\n");

// Test 1: Valid payment
const result1 = processPayment(99.99, "tok_visa_4242");
console.log("Test 1 - Valid payment:", result1);

// Test 2: Invalid payment
const result2 = processPayment(-50, "tok_visa_4242");
console.log("Test 2 - Invalid payment:", result2);

// Test 3: Invalid token
const result3 = processPayment(99.99, "invalid");
console.log("Test 3 - Invalid token:", result3);