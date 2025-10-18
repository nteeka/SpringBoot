const products = [
  {
    name: "Hoa Hồng Đỏ",
    price: 450000,
    type: "hoa",
    category: "valentine",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1518709414768-a88981a4515d",
  },
  {
    name: "Hồng Ohara",
    price: 850000,
    type: "hoa",
    category: "ky-niem",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1563897539633-7374c276c212",
  },
  {
    name: "Tulip Đỏ",
    price: 350000,
    type: "hoa",
    category: "valentine",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
  },
  {
    name: "Hoa Ly Trắng",
    price: 420000,
    type: "hoa",
    category: "tham-benh",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d",
  },
  {
    name: "Hướng Dương",
    price: 280000,
    type: "hoa",
    category: "sinh-nhat",
    style: "rustic",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    name: "Lan Hồ Điệp",
    price: 1200000,
    type: "hoa",
    category: "khai-truong",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1551388584-e7c6c27ef722",
  },
  {
    name: "Cẩm Chướng",
    price: 180000,
    type: "hoa",
    category: "ngay-me",
    style: "vintage",
    img: "https://images.unsplash.com/photo-1587814213271-74b8e290f0e3",
  },
  {
    name: "Baby Trắng",
    price: 120000,
    type: "phukien",
    category: "tot-nghiep",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11",
  },
  {
    name: "Cầm Tay Cô Dâu",
    price: 850000,
    type: "hoa",
    category: "cuoi",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1464297162577-f5295c892194",
  },
  {
    name: "Cây Xương Rồng",
    price: 150000,
    type: "cay",
    category: "de-ban",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295",
  },
  {
    name: "Kim Tiền",
    price: 450000,
    type: "cay",
    category: "phong-thuy",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
    name: "Mai Vàng Tết",
    price: 1500000,
    type: "cay",
    category: "tet",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00",
  },
];

const grid = document.getElementById("productGrid");
const pagination = document.getElementById("pagination");
const range = document.getElementById("priceRange");
const priceVal = document.getElementById("priceVal");
const searchInput = document.getElementById("search");
const suggestionsList = document.getElementById("suggestions");
const clearSearchBtn = document.getElementById("clearSearchBtn");

let currentPage = 1;
const itemsPerPage = 6;
let activeFilters = { occasion: [], style: [], priceRange: [] };

// Debounce & Throttle
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Create card
function createCard(p) {
  const typeLabel =
    { hoa: "🌼 Hoa", cay: "🌿 Cây cảnh", phukien: "💐 Phụ kiện" }[p.type] || "";
  return `<div class="card fade-enter"><div class="card-img"><img src="${
    p.img
  }" alt="${
    p.name
  }" loading="lazy" /><div class="card-overlay"><button class="btn-view">👁 Xem chi tiết</button><button class="btn-add" onclick="flyToCart(event, '${
    p.img
  }')">🛒 Thêm vào giỏ</button></div></div><div class="info"><div class="product-type">${typeLabel}</div><h4>${
    p.name
  }</h4><div class="price">${p.price.toLocaleString()}đ</div></div></div>`;
}

function paginate(list, page = 1) {
  const start = (page - 1) * itemsPerPage;
  return list.slice(start, start + itemsPerPage);
}

function makeBtn(text, fn, disabled = false, active = false) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.disabled = disabled;
  if (active) btn.classList.add("active");
  if (!disabled) btn.onclick = fn;
  return btn;
}

function renderPagination(total) {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(total / itemsPerPage);
  if (totalPages <= 1) return;
  pagination.append(
    makeBtn("←", () => changePage(currentPage - 1), currentPage === 1)
  );
  for (let i = 1; i <= totalPages; i++) {
    pagination.append(
      makeBtn(i, () => changePage(i), false, i === currentPage)
    );
  }
  pagination.append(
    makeBtn("→", () => changePage(currentPage + 1), currentPage === totalPages)
  );
}

function changePage(p) {
  currentPage = p;
  updateDisplay();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function getFilters() {
  const types = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((cb) => cb.value);
  const maxPrice = parseInt(range.value);
  const searchQuery = searchInput.value.toLowerCase();
  const sortBy = document.getElementById("sortSelect").value;
  return { types, maxPrice, searchQuery, sortBy };
}

function filterProducts() {
  const { types, maxPrice, searchQuery, sortBy } = getFilters();
  let filtered = products.filter((p) => {
    const matchType = types.includes(p.type);
    const matchPrice = p.price <= maxPrice;
    const matchSearch = p.name.toLowerCase().includes(searchQuery);
    return matchType && matchPrice && matchSearch;
  });

  if (activeFilters.occasion.length > 0) {
    filtered = filtered.filter((p) =>
      activeFilters.occasion.includes(p.category)
    );
  }
  if (activeFilters.style.length > 0) {
    filtered = filtered.filter((p) => activeFilters.style.includes(p.style));
  }
  if (activeFilters.priceRange.length > 0) {
    filtered = filtered.filter((p) =>
      activeFilters.priceRange.some((range) => {
        if (range === "0-500k") return p.price < 500000;
        if (range === "500k-1tr") return p.price >= 500000 && p.price < 1000000;
        if (range === "1tr-2tr") return p.price >= 1000000 && p.price < 2000000;
        if (range === "2tr+") return p.price >= 2000000;
        return false;
      })
    );
  }

  if (sortBy === "asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "desc") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "name")
    filtered.sort((a, b) => a.name.localeCompare(b.name));

  return filtered;
}

// Update display - INSTANT
function updateDisplay() {
  const filtered = filterProducts();
  const paged = paginate(filtered, currentPage);
  grid.innerHTML = paged.map(createCard).join("");
  document.getElementById("resultsCount").textContent = filtered.length;
  renderPagination(filtered.length);
  document.getElementById("filterSidebar").classList.remove("show");
  document.getElementById("filterOverlay").classList.remove("show");
  document.body.style.overflow = "auto";
}

function updateFilterCount() {
  const checkedCount = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  const hasPrice = parseInt(range.value) < 1000000;
  const hasSort = document.getElementById("sortSelect").value !== "";
  const total = checkedCount + (hasPrice ? 1 : 0) + (hasSort ? 1 : 0) - 3;
  document.getElementById("filterCount").textContent = Math.max(0, total);
}

// Price range
range.addEventListener(
  "input",
  debounce(() => {
    priceVal.textContent = parseInt(range.value).toLocaleString() + "đ";
    updateFilterCount();
  }, 150)
);

// Search
searchInput.addEventListener(
  "input",
  debounce((e) => {
    const query = e.target.value.toLowerCase().trim();
    clearSearchBtn.classList.toggle("show", query.length > 0);
    if (query.length === 0) {
      suggestionsList.classList.remove("active");
      return;
    }
    const matches = products.filter((p) =>
      p.name.toLowerCase().includes(query)
    );
    if (matches.length === 0) {
      suggestionsList.innerHTML =
        '<div class="search-empty"><div class="search-empty-icon">🔍</div><div>Không tìm thấy sản phẩm</div></div>';
      suggestionsList.classList.add("active");
      return;
    }
    suggestionsList.innerHTML = `<div class="suggestion-section"><div class="suggestion-header">🌸 Sản phẩm gợi ý</div>${matches
      .slice(0, 5)
      .map(
        (p) =>
          `<li onclick="selectSuggestion('${
            p.name
          }')"><div class="suggestion-icon">${
            p.type === "hoa" ? "🌼" : p.type === "cay" ? "🌿" : "💐"
          }</div><div class="suggestion-content"><div class="suggestion-name">${
            p.name
          }</div><div class="suggestion-price">${p.price.toLocaleString()}đ</div></div></li>`
      )
      .join("")}</div>`;
    suggestionsList.classList.add("active");
  }, 200)
);

function selectSuggestion(name) {
  searchInput.value = name;
  suggestionsList.classList.remove("active");
  clearSearchBtn.classList.add("show");
  currentPage = 1;
  updateDisplay();
}

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearSearchBtn.classList.remove("show");
  suggestionsList.classList.remove("active");
  currentPage = 1;
  updateDisplay();
});

document.addEventListener(
  "click",
  (e) => {
    if (!e.target.closest(".search-box-enhanced")) {
      suggestionsList.classList.remove("active");
    }
  },
  { passive: true }
);

// Quick tags
document.querySelectorAll(".search-tag").forEach((tag) => {
  tag.addEventListener(
    "click",
    () => {
      searchInput.value = tag.getAttribute("data-query");
      clearSearchBtn.classList.add("show");
      currentPage = 1;
      updateDisplay();
    },
    { passive: true }
  );
});

// Voice search
const voiceSearchBtn = document.getElementById("voiceSearchBtn");
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";
  recognition.continuous = false;
  voiceSearchBtn.addEventListener("click", () => {
    recognition.start();
    voiceSearchBtn.classList.add("listening");
  });
  recognition.onresult = (event) => {
    searchInput.value = event.results[0][0].transcript.replace(/\./g, "");
    voiceSearchBtn.classList.remove("listening");
    currentPage = 1;
    updateDisplay();
    clearSearchBtn.classList.add("show");
  };
  recognition.onerror = () => {
    voiceSearchBtn.classList.remove("listening");
    showToast("Không thể nhận diện giọng nói", "remove");
  };
  recognition.onend = () => voiceSearchBtn.classList.remove("listening");
} else {
  voiceSearchBtn.style.display = "none";
}

// Sidebar
document.getElementById("filterToggleBtn").addEventListener(
  "click",
  () => {
    const sidebar = document.getElementById("filterSidebar");
    const overlay = document.getElementById("filterOverlay");
    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
    document.body.style.overflow = sidebar.classList.contains("show")
      ? "hidden"
      : "auto";
  },
  { passive: true }
);

document.getElementById("closeFilterBtn").addEventListener(
  "click",
  () => {
    document.getElementById("filterSidebar").classList.remove("show");
    document.getElementById("filterOverlay").classList.remove("show");
    document.body.style.overflow = "auto";
  },
  { passive: true }
);

document.getElementById("filterOverlay").addEventListener(
  "click",
  () => {
    document.getElementById("filterSidebar").classList.remove("show");
    document.getElementById("filterOverlay").classList.remove("show");
    document.body.style.overflow = "auto";
  },
  { passive: true }
);

document.getElementById("applyFilters").addEventListener(
  "click",
  () => {
    currentPage = 1;
    updateDisplay();
    updateFilterCount();
  },
  { passive: true }
);

document.getElementById("resetFilters").addEventListener(
  "click",
  () => {
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach((cb) => (cb.checked = true));
    range.value = 1000000;
    priceVal.textContent = "1.000.000đ";
    document.getElementById("sortSelect").value = "";
    searchInput.value = "";
    clearSearchBtn.classList.remove("show");
    activeFilters = { occasion: [], style: [], priceRange: [] };
    currentPage = 1;
    updateDisplay();
    updateFilterCount();
  },
  { passive: true }
);

document
  .querySelectorAll('input[type="checkbox"], #sortSelect')
  .forEach((el) => {
    el.addEventListener("change", updateFilterCount, { passive: true });
  });

// Scroll optimization
const handleScroll = throttle(() => {
  const scrollTop = window.pageYOffset;
  const stickySearch = document.getElementById("stickySearch");
  if (scrollTop > 100) {
    stickySearch.classList.add("scrolled");
  } else {
    stickySearch.classList.remove("scrolled");
  }
}, 100);

window.addEventListener("scroll", handleScroll, { passive: true });

// Advanced filters
const filterModals = {
  occasion: {
    title: "🎉 Chọn Dịp Lễ",
    options: [
      { id: "valentine", icon: "💕", name: "Valentine", count: 2 },
      { id: "sinh-nhat", icon: "🎂", name: "Sinh nhật", count: 1 },
      { id: "cuoi", icon: "💒", name: "Cưới hỏi", count: 1 },
    ],
  },
  style: {
    title: "🎨 Chọn Phong Cách",
    options: [
      { id: "sang-trong", icon: "👑", name: "Sang trọng", count: 6 },
      { id: "vintage", icon: "🕰️", name: "Vintage", count: 2 },
      { id: "hien-dai", icon: "✨", name: "Hiện đại", count: 3 },
    ],
  },
  "price-range": {
    title: "💰 Chọn Mức Giá",
    options: [
      { id: "0-500k", icon: "💸", name: "Dưới 500k", count: 7 },
      { id: "500k-1tr", icon: "💵", name: "500k - 1tr", count: 3 },
      { id: "1tr-2tr", icon: "💴", name: "1tr - 2tr", count: 2 },
    ],
  },
};

const modalHTML = `<div class="filter-modal" id="filterModal"><div class="filter-modal-content"><div class="filter-modal-header"><div class="filter-modal-title" id="modalTitle"></div><button class="close-modal-btn" id="closeModalBtn">✕</button></div><div class="filter-options-grid" id="filterOptionsGrid"></div><div class="filter-modal-actions"><button class="filter-clear-btn" id="filterClearBtn">🧹 Xóa bộ lọc</button><button class="filter-apply-btn" id="filterApplyBtn">🔍 Áp dụng</button></div></div></div>`;
document.body.insertAdjacentHTML("beforeend", modalHTML);

const filterModal = document.getElementById("filterModal");
let currentFilterType = null;

document.querySelectorAll(".advanced-filter-btn").forEach((btn) => {
  btn.addEventListener(
    "click",
    () => {
      currentFilterType = btn.dataset.filter;
      const filterData = filterModals[currentFilterType];
      document.getElementById("modalTitle").textContent = filterData.title;
      document.getElementById("filterOptionsGrid").innerHTML =
        filterData.options
          .map(
            (opt) =>
              `<div class="filter-option-card" data-id="${opt.id}"><div class="filter-option-icon">${opt.icon}</div><div class="filter-option-name">${opt.name}</div><div class="filter-option-count">${opt.count} SP</div></div>`
          )
          .join("");
      filterModal.classList.add("active");
      document.querySelectorAll(".filter-option-card").forEach((card) => {
        card.addEventListener(
          "click",
          () => card.classList.toggle("selected"),
          { passive: true }
        );
      });
    },
    { passive: true }
  );
});

document
  .getElementById("closeModalBtn")
  .addEventListener("click", () => filterModal.classList.remove("active"), {
    passive: true,
  });
filterModal.addEventListener(
  "click",
  (e) => {
    if (e.target === filterModal) filterModal.classList.remove("active");
  },
  { passive: true }
);

document.getElementById("filterApplyBtn").addEventListener(
  "click",
  () => {
    const selected = Array.from(
      document.querySelectorAll(".filter-option-card.selected")
    ).map((c) => c.dataset.id);
    if (currentFilterType === "occasion") activeFilters.occasion = selected;
    else if (currentFilterType === "style") activeFilters.style = selected;
    else if (currentFilterType === "price-range")
      activeFilters.priceRange = selected;
    filterModal.classList.remove("active");
    currentPage = 1;
    updateDisplay();
    showToast("Đã áp dụng bộ lọc! 🎯", "add");
  },
  { passive: true }
);

document.getElementById("filterClearBtn").addEventListener(
  "click",
  () => {
    document
      .querySelectorAll(".filter-option-card.selected")
      .forEach((c) => c.classList.remove("selected"));
  },
  { passive: true }
);

// Fly to cart
function flyToCart(event, imgSrc) {
  event.stopPropagation();
  const soundAdd = document.getElementById("soundAdd");
  if (soundAdd) soundAdd.play();
  showToast("Đã thêm vào giỏ hàng! 🛒", "add");
  const btn = event.target;
  const rect = btn.getBoundingClientRect();
  const flyImg = document.createElement("img");
  flyImg.src = imgSrc;
  flyImg.style.cssText = `position:fixed;top:${rect.top}px;left:${rect.left}px;width:60px;height:60px;object-fit:cover;border-radius:50%;z-index:9999;pointer-events:none;transition:all 0.8s cubic-bezier(0.25,0.46,0.45,0.94);box-shadow:0 4px 15px rgba(0,0,0,0.3);`;
  document.body.appendChild(flyImg);
  setTimeout(() => {
    flyImg.style.top = "20px";
    flyImg.style.left = "calc(100% - 80px)";
    flyImg.style.width = "30px";
    flyImg.style.height = "30px";
    flyImg.style.opacity = "0";
  }, 10);
  setTimeout(() => flyImg.remove(), 850);
}

// Toast
function showToast(message, type = "add") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${
    type === "add" ? "✅" : "❌"
  }</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// View toggle
document.querySelectorAll(".view-btn").forEach((btn, idx) => {
  btn.addEventListener(
    "click",
    () => {
      document
        .querySelectorAll(".view-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      grid.style.gridTemplateColumns =
        idx === 0 ? "repeat(auto-fill, minmax(260px, 1fr))" : "1fr";
    },
    { passive: true }
  );
});

// Initialize
updateFilterCount();
updateDisplay();

// Disable smooth scroll
document.documentElement.style.scrollBehavior = "auto";
