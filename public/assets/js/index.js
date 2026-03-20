document.addEventListener("DOMContentLoaded", () => {
  const artistBtn = document.getElementById("rr-get-started");
  const marketBtn = document.getElementById("rr-browse-marketplace");

  if (artistBtn) {
    artistBtn.addEventListener("click", () => {
      window.location.href = "/pages/signup.html?role=artist";
    });
  }

  if (marketBtn) {
    marketBtn.addEventListener("click", () => {
      window.location.href = "/pages/marketplace.html";
    });
  }
});
