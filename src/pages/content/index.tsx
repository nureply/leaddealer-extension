(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const btn = document.createElement("button");
  const drawer = document.createElement("div");
  btn.textContent = "Dealer";
  btn.classList.add("my-btn");
  drawer.classList.add("my-drawer");

  btn.addEventListener("click", () => {
    drawer.classList.toggle("open");
    btn.classList.toggle("hidden");
  });

  const closeDrawer = () => {
    drawer.classList.remove("open");
    btn.classList.remove("hidden");
  };

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", closeDrawer);
  drawer.appendChild(closeBtn);

  drawer.appendChild(document.createTextNode("Drawer content"));
  document.body.appendChild(btn);
  document.body.appendChild(drawer);
})();
