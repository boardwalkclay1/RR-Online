document.addEventListener("DOMContentLoaded", () => {
  const summary = document.getElementById("rr-admin-summary");
  if (!summary) return;

  const mock = {
    artists: 24,
    fans: 310,
    tracks: 142,
    orders: 201,
    platformRevenue: "$2,340"
  };

  summary.innerHTML = `
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:12px;">
      ${Object.entries(mock)
        .map(
          ([label, value]) => `
        <div class="rr-panel">
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--rr-text-muted);">
            ${label}
          </div>
          <div style="font-size:1.1rem; margin-top:4px;">${value}</div>
        </div>`
        )
        .join("")}
    </div>
  `;
});
