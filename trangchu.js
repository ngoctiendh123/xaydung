document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuSection = document.getElementById("menu-section");

    // 👉 Toggle hiển thị menu
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Ngăn sự kiện lan ra ngoài để tránh auto-close
        menuSection.classList.toggle("menu-active");
    });

    // 👉 Ẩn menu nếu bấm ra ngoài
    document.addEventListener("click", (event) => {
        if (!menuSection.contains(event.target) && !menuToggle.contains(event.target)) {
            menuSection.classList.remove("menu-active");
        }
    });


  
});
