```javascript
import React, { useState, useEffect } from 'react';

function MyComponent({ someProp }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct conditional rendering logic
    if (someProp && count > 5) {
      console.log('Count is greater than 5 and someProp is defined');
    }
  }, [count, someProp]); // Added someProp dependency

  return (
    <div>
      <p>Count: {count}</p>
      <p>someProp: {someProp}</p>      
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent; 
```