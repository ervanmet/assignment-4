export default function home() {
  return `
    <section class="page">
      <h1>Welcome to User Feedback</h1>

      <p>
        This website demonstrates different types of feedback
        messages that can be shown to users.
      </p>

      <button id="successBtn">Success Message</button>
      <button id="errorBtn">Error Message</button>
      <button id="infoBtn">Information Message</button>
      <button id="loadingBtn">Loading Message</button>
    </section>
  `;
}
