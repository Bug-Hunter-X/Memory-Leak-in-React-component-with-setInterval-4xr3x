# React setInterval Memory Leak

This example demonstrates a common mistake when using `setInterval` within a React component's `useEffect` hook, leading to a memory leak.  The provided solution demonstrates the correct usage to prevent this.

## Bug
The original code creates a memory leak because the interval is never cleared when the component unmounts.  Even after the component is removed from the DOM, `setInterval` continues running in the background.