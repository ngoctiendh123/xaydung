document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu-section");
    menu.classList.toggle("menu-active"); // Sử dụng class để điều khiển hiển thị
  });
  
  function toggleDetail(item) {
    const detail = item.querySelector(".detail");
    detail.style.display = detail.style.display === "block" ? "none" : "block";
  }
  
