document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rr-upload-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("In production, this would request a presigned URL from RR and upload to Cloudflare R2.");
  });
});
