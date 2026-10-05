export function showToast(message, type) {
  const toastContainer = document.getElementById("ToastContainer");

  if (!toastContainer) {
    console.error("Toast container not found.");
    return;
  }

  const toast = document.createElement("div");

  toast.classList.add("toast", type);
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
