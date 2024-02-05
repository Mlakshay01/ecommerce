let category = document.getElementById("category");
let catDropdown = document.getElementById("catDropdown");

category.addEventListener("mouseenter", toggleCatDropdown);

function toggleCatDropdown() {
    if (catDropdown.style.display === "none") {
      catDropdown.style.display = "flex";
    } else {
      catDropdown.style.display = "none";
    }
  }

  catDropdown.addEventListener('mouseleave', () => {
    catDropdown.style.display = 'none';
  });

