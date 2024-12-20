export function TestComponent() {
  return (
    <div>
      <h1>Test Component</h1>
      <p>This is a test component</p>
      {Array.from([1, 2, 3], (x) => (
        <div key={x}>{x}</div>
      ))}
    </div>
  );
}
