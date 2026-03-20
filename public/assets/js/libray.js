document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("rr-library-list");
  if (!list) return;

  const mock = [
    { title: "Midnight Runner", artist: "Royal Ghost" },
    { title: "Copper Skyline", artist: "RR House" }
  ];

  mock.forEach((item) => {
    const row = document.createElement("div");
    row.className = "rr-panel";
    row.style.marginTop = "10px";
    row.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
        <div>
          <div style="font-weight:600;">${item.title}</div>
          <div style="font-size:0.8rem; color:var(--rr-text-muted);">${item.artist}</div>
        </div>
        <div>
          <button class="rr-btn secondary" style="margin-right:6px;">Stream</button>
          <button class="rr-btn">Download</button>
        </div>
      </div>
    `;
    list.appendChild(row);
  });
});
