// LiveWires additions: category filter on the Works page.
(function () {
  var bar = document.querySelector(".lw-filter");
  if (!bar) return;

  var chips = Array.prototype.slice.call(bar.querySelectorAll(".lw-filter-chip"));
  var items = Array.prototype.slice.call(document.querySelectorAll(".work-item[data-category]"));
  var empty = document.querySelector(".lw-filter-empty");
  var status = document.querySelector(".lw-filter-status");
  var keys = chips.map(function (c) { return c.getAttribute("data-filter"); });

  function apply(key, animate) {
    if (keys.indexOf(key) < 0) key = "all";
    var shown = 0;

    chips.forEach(function (chip) {
      var active = chip.getAttribute("data-filter") === key;
      chip.setAttribute("aria-pressed", String(active));
      // On narrow screens the bar scrolls sideways; keep the active chip visible.
      if (active && bar.scrollWidth > bar.clientWidth) {
        bar.scrollTo({ left: chip.offsetLeft - bar.offsetLeft - 16, behavior: animate ? "smooth" : "auto" });
      }
    });

    items.forEach(function (item) {
      var match = key === "all" || item.getAttribute("data-category").split(" ").indexOf(key) >= 0;
      item.classList.remove("lw-in");
      item.hidden = !match;
      if (match) {
        if (animate) {
          item.style.setProperty("--lw-i", String(Math.min(shown, 8)));
          void item.offsetWidth; // restart the entrance animation
          item.classList.add("lw-in");
        }
        shown++;
      }
    });

    if (empty) empty.hidden = shown > 0;
    if (status) {
      var label = chips[keys.indexOf(key)].firstChild.textContent;
      status.textContent = shown + (shown === 1 ? " project" : " projects") + (key === "all" ? "" : " in " + label);
    }
  }

  bar.addEventListener("click", function (e) {
    var chip = e.target.closest(".lw-filter-chip");
    if (!chip) return;
    var key = chip.getAttribute("data-filter");
    apply(key, true);
    // Keep the choice in the URL so a filtered view can be shared (works.html#software).
    if (history.replaceState) history.replaceState(null, "", key === "all" ? location.pathname : "#" + key);
  });

  apply(decodeURIComponent(location.hash.slice(1)) || "all", false);
})();
