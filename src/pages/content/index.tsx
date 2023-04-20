(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // creating elements
  const logo = document.createElement("img");
  const brand = document.createElement("img");
  const newDrawer = document.createElement("div");
  const thumb = document.createElement("button");

  //adding classes and properties
  newDrawer.classList.add("new-drawer");
  thumb.classList.add("thumb");
  logo.src = chrome.runtime.getURL("/nureplyLogo.png");
  logo.classList.add("my-img");
  brand.src = chrome.runtime.getURL("/rotated.png");
  brand.classList.add("brand");

  // adding event listeners
  thumb.addEventListener("click", () => {
    newDrawer.classList.toggle("slide-in");
    thumb.classList.toggle("slide-in");
  });

  // appending elements
  thumb.textContent = "Thumb";
  newDrawer.textContent = "New Drawer";

  //adding the elements to the DOM
  document.body.appendChild(newDrawer);
  document.body.appendChild(thumb);
})();
