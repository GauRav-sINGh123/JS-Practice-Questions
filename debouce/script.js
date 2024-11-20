// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer); // Clear previous timer
      timer = setTimeout(() => func(...args), delay); // Set a new timer
    };
  }
  
  // Function to update the output
  function updateOutput(event) {
    const output = document.getElementById('output');
    output.textContent = `You typed: "${event.target.value}"`;
  }
  
  // Select the input field
  const inputField = document.getElementById('input-field');
  
  // Attach the debounced function to the input event
  const debouncedUpdate = debounce(updateOutput, 500);
  inputField.addEventListener('input', debouncedUpdate);
  