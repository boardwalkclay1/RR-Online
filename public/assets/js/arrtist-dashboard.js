document.addEventListener("DOMContentLoaded", () => {
  const stats = document.getElementById("rr-artist-stats");
  if (!stats) return;

  const mock = {
    totalSales: "$1,240",
    totalOrders: 73,
    platformFee: "$124",
    artistTake: "$1,116"
  };

  stats.innerHTML = `
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:12px;">
      <div class="rr-panel">
        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--rr-text-muted);">
          Gross sales
        </div>
        <div style="font-size:1.2rem; margin-top:4px;">${mock.totalSales}</div>
      </div>
      <div class="rr-panel">
        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--rr-text-muted);">
          Orders
        </div>
        <div style="font-size:1.2rem; margin-top:4px;">${mock.totalOrders}</div>
      </div>
      <div class="rr-panel">
        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--rr-text-muted);">
          Platform 10%
        </div>
        <div style="font-size:1.2rem; margin-top:4px;">${mock.platformFee}</div>
      </div>
      <div class="rr-panel">
        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--rr-text-muted);">
          Your take
        </div>
        <div style="font-size:1.2rem; margin-top:4px;">${mock.artistTake}</div>
      </div>
    </div>
  `;
});
