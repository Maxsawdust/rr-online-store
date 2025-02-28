export default function ErrorMessage({ message }) {
  return (
    <div id="error-message">
      <p id="error">ERROR:</p>
      <p id="message">{message}</p>
    </div>
  );
}
