document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("rr-marketplace-list");

  const mockProducts = [
    {
      title: "Midnight Runner",
      artist: "Royal Ghost",
      price: "$19",
      type: "Beat"
    },
    {
      title: "Copper Skyline",
      artist: "RR House",
      price: "$9",
      type: "Single"
    }
  ];

  if (list) {
    mockProducts.forEach((p) => {
      const card = document.createElement("article");
      card.className = "rr-panel";
      card.style.padding = "14px 16px";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; gap:12px; align-items:center;">
          <div>
            <div style="font-weight:600;">${p.title}</div>
            <div style="font-size:0.8rem; color:var(--rr-text-muted);">${p.artist} · ${p.type}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.9rem; color:var(--rr-copper-soft);">${p.price}</div>
            <button class="rr-btn secondary" style="margin-top:6px;">View</button>
          </div>
        </div>
      `;
      list.appendChild(card);
    });
  }
});
