const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const header = item.querySelector("h2").textContent;
  console.log(`Category: ${header}`);

  const list = item.querySelectorAll("ul li").length;
  console.log(`Elements: ${list}`);
});
