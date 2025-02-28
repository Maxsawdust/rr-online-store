import "./Welcome.css";

export default function Welcome({ name }) {
  return (
    //
    <div className="Welcome">
      <div id="welcome-text">
        <h1>Hello, {name}!</h1>
        <h2>Welcome to Saunders' superstore!</h2>
      </div>
    </div>
  );
}
