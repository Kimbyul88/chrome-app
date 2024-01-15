// const title = document.getElementById("title");
// console.dir(title); // 디렉토리를 보여줌.

const title = document.querySelector(".hello h1:first-child");
let click_num = 0;

console.dir(title);

function handleTitleClick() {
  const activeClassName = "active";
  //   if (title.classList.contains(activeClassName)) {
  //     title.classList.remove(activeClassName);
  //   } else {
  //     title.classList.add(activeClassName);
  //   }
  title.classList.toggle(activeClassName);
}

title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseout", handleMouseOut);
// title.addEventListener("drag", handleDrag);
// title.addEventListener("dragleave", handleDragLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleCopyevent);
// window.addEventListener("offline", handleWidowOffline);
