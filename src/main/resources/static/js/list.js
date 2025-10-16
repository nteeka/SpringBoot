const products = [
  {
    name: "Hoa Tulip",
    price: 350000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cây Xương Rồng",
    price: 150000,
    type: "cay",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hồng Đỏ",
    price: 450000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1563897539633-7374c276c212?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hướng Dương",
    price: 400000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Tulip",
    price: 350000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cây Xương Rồng",
    price: 150000,
    type: "cay",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hồng Đỏ",
    price: 450000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1563897539633-7374c276c212?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hướng Dương",
    price: 400000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Tulip",
    price: 350000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cây Xương Rồng",
    price: 150000,
    type: "cay",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hồng Đỏ",
    price: 450000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1563897539633-7374c276c212?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hướng Dương",
    price: 400000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Tulip",
    price: 350000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cây Xương Rồng",
    price: 150000,
    type: "cay",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hồng Đỏ",
    price: 450000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1563897539633-7374c276c212?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hướng Dương",
    price: 400000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Tulip",
    price: 350000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cây Xương Rồng",
    price: 150000,
    type: "cay",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hồng Đỏ",
    price: 450000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1563897539633-7374c276c212?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoa Hướng Dương",
    price: 400000,
    type: "hoa",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
];

const grid = document.getElementById("productGrid");
const pagination = document.getElementById("pagination");
const range = document.getElementById("priceRange");
const priceVal = document.getElementById("priceVal");
const resetBtn = document.getElementById("resetFilters");
const quickButtons = document.querySelectorAll(".quick-filters button");
let currentPage = 1,
  itemsPerPage = 6;

function showSkeleton() {
  const s = `<div class="card skeleton"><div class="skeleton-img"></div><div class="skeleton-text"></div><div class="skeleton-text"></div></div>`;
  grid.innerHTML = s.repeat(itemsPerPage);
}

function createCard(p) {
  const typeLabel =
    {
      hoa: "🌼 Hoa",
      cay: "🌿 Cây cảnh",
      phukien: "💧 Phụ kiện",
    }[p.type] || "";

  return `
<div class="card fade-enter">
<div class="card-img">
  <img src="${p.img}" alt="${p.name}" />
  <div class="card-overlay">
    <button class="btn-view">👁 Xem chi tiết</button>
    <button class="btn-add" onclick="flyToCart(event, '${
      p.img
    }')">🛒 Thêm vào giỏ</button>
  </div>
</div>
<div class="info">
  <div class="product-type">${typeLabel}</div>
  <h4>${p.name}</h4>
  <div class="price">${p.price.toLocaleString()}đ</div>
</div>
</div>`;
}

function paginate(list, page = 1) {
  const s = (page - 1) * itemsPerPage;
  return list.slice(s, s + itemsPerPage);
}
function makeBtn(text, fn, dis = false, act = false) {
  const b = document.createElement("button");
  b.textContent = text;
  b.disabled = dis;
  if (act) b.classList.add("active");
  if (!dis) b.onclick = fn;
  return b;
}
function renderPagination(total) {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(total / itemsPerPage);
  if (totalPages <= 1) return;
  pagination.append(
    makeBtn("←", () => changePage(currentPage - 1), currentPage === 1)
  );
  for (let i = 1; i <= totalPages; i++)
    pagination.append(
      makeBtn(i, () => changePage(i), false, i === currentPage)
    );
  pagination.append(
    makeBtn("→", () => changePage(currentPage + 1), currentPage === totalPages)
  );
}
function changePage(p) {
  currentPage = p;
  updateDisplay(true, true);
}

function filterProducts() {
  const search = document.getElementById("search").value.toLowerCase();
  const checked = [
    ...document.querySelectorAll("input[type=checkbox]:checked"),
  ].map((e) => e.value);
  const max = parseInt(range.value);
  const sort = document.getElementById("sortSelect").value;
  let result = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search) &&
      checked.includes(p.type) &&
      p.price <= max
  );
  if (sort === "asc") result.sort((a, b) => a.price - b.price);
  if (sort === "desc") result.sort((a, b) => b.price - a.price);
  if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}

function updateDisplay(animate = false, scrollTop = false) {
  showSkeleton();
  if (scrollTop) window.scrollTo({ top: 350, behavior: "smooth" });
  setTimeout(() => {
    const filtered = filterProducts();
    const pageItems = paginate(filtered, currentPage);
    grid.innerHTML = pageItems.map(createCard).join("");
    renderPagination(filtered.length);
  }, 500);
}

range.oninput = () =>
  (priceVal.textContent = parseInt(range.value).toLocaleString() + "đ");
document.getElementById("applyFilters").onclick = () => {
  currentPage = 1;
  updateDisplay(false, true);
};
resetBtn.onclick = () => {
  document
    .querySelectorAll("input[type=checkbox]")
    .forEach((cb) => (cb.checked = true));
  range.value = 1000000;
  priceVal.textContent = "1.000.000đ";
  document.getElementById("sortSelect").value = "";
  document.getElementById("search").value = "";
  currentPage = 1;
  updateDisplay(false, true);
};
quickButtons.forEach((btn) => {
  btn.onclick = () => {
    quickButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const type = btn.dataset.type;
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((cb) => (cb.checked = cb.value === type));
    updateDisplay(false, true);
  };
});

updateDisplay();

const searchInput = document.getElementById("search");
const suggestionBox = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    suggestionBox.style.display = "none";
    return;
  }

  // Gợi ý theo tên hoặc loại
  const matches = products
    .filter(
      (p) => p.name.toLowerCase().includes(query) || p.type.includes(query)
    )
    .slice(0, 6);

  if (matches.length === 0) {
    suggestionBox.innerHTML = `<li><em>Không tìm thấy kết quả</em></li>`;
  } else {
    suggestionBox.innerHTML = matches
      .map((p) => {
        const nameHighlighted = p.name.replace(
          new RegExp(query, "gi"),
          (match) => `<span class="highlight">${match}</span>`
        );
        return `<li data-name="${p.name}">${nameHighlighted}</li>`;
      })
      .join("");
  }
  suggestionBox.style.display = "block";
});

// Khi chọn gợi ý
suggestionBox.addEventListener("click", (e) => {
  if (e.target.tagName === "LI" || e.target.closest("li")) {
    const li = e.target.closest("li");
    const value = li.dataset.name;
    if (value) {
      searchInput.value = value;
      suggestionBox.style.display = "none";
      updateDisplay(false, true);
    }
  }
});

// Ẩn gợi ý khi click ra ngoài
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) suggestionBox.style.display = "none";
});
