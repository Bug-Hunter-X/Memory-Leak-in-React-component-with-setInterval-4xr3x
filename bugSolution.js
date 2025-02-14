```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // Correct: cleanup function
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```