onmessage = function(event) {
    // Perform some computation here
    const result = event.data * 2; // Example: Double the received number
    postMessage(result);
  };