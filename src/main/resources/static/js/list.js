const products = [
  // HOA HỒNG
  {
    name: "Hoa Hồng Đỏ Ecuador",
    price: 450000,
    type: "hoa",
    category: "valentine",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1518709414768-a88981a4515d",
  },
  {
    name: "Hồng Ohara Nhật",
    price: 850000,
    type: "hoa",
    category: "ky-niem",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1563897539633-7374c276c212",
  },
  {
    name: "Hoa Hồng Pastel",
    price: 380000,
    type: "hoa",
    category: "8-3",
    style: "vintage",
    img: "https://images.unsplash.com/photo-1522771930-78848d9293e8",
  },

  // HOA TULIP
  {
    name: "Tulip Hà Lan Đỏ",
    price: 350000,
    type: "hoa",
    category: "valentine",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
  },
  {
    name: "Tulip Vàng Hà Lan",
    price: 340000,
    type: "hoa",
    category: "8-3",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd",
  },

  // HOA LY
  {
    name: "Hoa Ly Trắng",
    price: 420000,
    type: "hoa",
    category: "tham-benh",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d",
  },
  {
    name: "Ly Oriental",
    price: 480000,
    type: "hoa",
    category: "sinh-nhat",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1471286274405-579f8d7132d8",
  },

  // HOA HƯỚNG DƯƠNG
  {
    name: "Hướng Dương Vàng",
    price: 280000,
    type: "hoa",
    category: "sinh-nhat",
    style: "rustic",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    name: "Hướng Dương Mini",
    price: 250000,
    type: "hoa",
    category: "khai-truong",
    style: "rustic",
    img: "https://images.unsplash.com/photo-1597437893808-f5a04b3a9e7d",
  },

  // LAN HỒ ĐIỆP
  {
    name: "Lan Hồ Điệp Tím",
    price: 1200000,
    type: "hoa",
    category: "khai-truong",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1551388584-e7c6c27ef722",
  },
  {
    name: "Lan Trắng 5 Cành",
    price: 980000,
    type: "hoa",
    category: "ky-niem",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1487070183336-b863922373d4",
  },

  // CẨM CHƯỚNG
  {
    name: "Cẩm Chướng Hồng",
    price: 180000,
    type: "hoa",
    category: "ngay-me",
    style: "vintage",
    img: "https://images.unsplash.com/photo-1587814213271-74b8e290f0e3",
  },
  {
    name: "Cẩm Chướng Mix",
    price: 220000,
    type: "hoa",
    category: "20-10",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },

  // CẨM TÚ CẦU
  {
    name: "Cẩm Tú Cầu Xanh",
    price: 320000,
    type: "hoa",
    category: "sinh-nhat",
    style: "vintage",
    img: "https://images.unsplash.com/photo-1594671233837-f2ce0ce9258a",
  },
  {
    name: "Cẩm Tú Cầu Hồng",
    price: 340000,
    type: "hoa",
    category: "ngay-me",
    style: "vintage",
    img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a",
  },

  // HOA BABY
  {
    name: "Baby Trắng",
    price: 120000,
    type: "phukien",
    category: "tot-nghiep",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11",
  },
  {
    name: "Baby Rainbow",
    price: 150000,
    type: "phukien",
    category: "sinh-nhat",
    style: "vintage",
    img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321",
  },

  // HOA CƯỚI
  {
    name: "Cầm Tay Cô Dâu Hồng",
    price: 850000,
    type: "hoa",
    category: "cuoi",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1464297162577-f5295c892194",
  },
  {
    name: "Cầm Tay Vintage",
    price: 720000,
    type: "hoa",
    category: "cuoi",
    style: "vintage",
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364",
  },

  // CÂY CẢNH
  {
    name: "Cây Xương Rồng",
    price: 150000,
    type: "cay",
    category: "de-ban",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295",
  },
  {
    name: "Kim Tiền Phong Thủy",
    price: 450000,
    type: "cay",
    category: "phong-thuy",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
    name: "Sen Đá Mini Set",
    price: 180000,
    type: "cay",
    category: "de-ban",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
  },
  {
    name: "Cây Lọc Không Khí",
    price: 280000,
    type: "cay",
    category: "noi-that",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
  },
  {
    name: "Tài Lộc Phong Thủy",
    price: 520000,
    type: "cay",
    category: "phong-thuy",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f",
  },

  // COMBO
  {
    name: "Combo Hoa + Cây Giảm 30%",
    price: 680000,
    type: "phukien",
    category: "combo",
    style: "rustic",
    img: "https://images.unsplash.com/photo-1588181754513-c5e0c1ec6c96",
  },

  // HOA TẾT
  {
    name: "Mai Vàng Tết",
    price: 1500000,
    type: "cay",
    category: "tet",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00",
  },
  {
    name: "Đào Phai Tết",
    price: 1200000,
    type: "cay",
    category: "tet",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f",
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

  // Scroll to sticky search bar
  const stickySearch = document.getElementById("stickySearch");
  if (stickySearch) {
    const offsetTop = stickySearch.offsetTop - 150; // -20px để có khoảng cách
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  setTimeout(() => {
    updateDisplay(true, true);
  }, 300);
}

const filterSidebar = document.getElementById("filterSidebar");
const filterToggleBtn = document.getElementById("filterToggleBtn");
const closeFilterBtn = document.getElementById("closeFilterBtn");
const filterOverlay = document.getElementById("filterOverlay");
const filterCount = document.getElementById("filterCount");
const productsSection = document.getElementById("productsSection");
const stickySearch = document.getElementById("stickySearch");

// Toggle Filter Sidebar
filterToggleBtn.addEventListener("click", () => {
  filterSidebar.classList.toggle("show");
  filterOverlay.classList.toggle("show");
  document.body.style.overflow = filterSidebar.classList.contains("show")
    ? "hidden"
    : "auto";
});

closeFilterBtn.addEventListener("click", () => {
  filterSidebar.classList.remove("show");
  filterOverlay.classList.remove("show");
  document.body.style.overflow = "auto";
});

filterOverlay.addEventListener("click", () => {
  filterSidebar.classList.remove("show");
  filterOverlay.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Update Filter Count
function updateFilterCount() {
  const checkedCount = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  const hasPrice = parseInt(range.value) < 1000000;
  const hasSort = document.getElementById("sortSelect").value !== "";
  const total = checkedCount + (hasPrice ? 1 : 0) + (hasSort ? 1 : 0) - 3; // -3 vì mặc định có 3 checkbox checked
  filterCount.textContent = Math.max(0, total);
}

// Listen to filter changes
document
  .querySelectorAll('input[type="checkbox"], #priceRange, #sortSelect')
  .forEach((el) => {
    el.addEventListener("change", updateFilterCount);
  });

// Sticky search on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 100) {
    stickySearch.classList.add("scrolled");
  } else {
    stickySearch.classList.remove("scrolled");
  }
  lastScrollTop = scrollTop;
});

// Initialize
updateFilterCount();
// ========== RENDER & FILTER LOGIC ==========
function getFilters() {
  const types = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((cb) => cb.value);
  const maxPrice = parseInt(range.value);
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const sortBy = document.getElementById("sortSelect").value;

  return { types, maxPrice, searchQuery, sortBy };
}

function filterProducts() {
  const { types, maxPrice, searchQuery, sortBy } = getFilters();

  let filtered = products.filter((p) => {
    const matchType = types.includes(p.type);
    const matchPrice = p.price <= maxPrice;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery) ||
      p.type.toLowerCase().includes(searchQuery);
    return matchType && matchPrice && matchSearch;
  });

  // Sort
  if (sortBy === "asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "desc") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "name")
    filtered.sort((a, b) => a.name.localeCompare(b.name));

  return filtered;
}

function updateDisplay(animated = false, keepPage = false) {
  const startTime = performance.now();

  if (animated) showSkeleton();

  setTimeout(
    () => {
      const filtered = filterProducts();
      const paged = paginate(filtered, currentPage);

      grid.innerHTML = paged.map(createCard).join("");

      // Update results count
      document.getElementById("resultsCount").textContent = filtered.length;
      const endTime = performance.now();
      const timeMs = (endTime - startTime).toFixed(0);
      document.getElementById("searchTime").textContent = `(${timeMs}ms)`;

      renderPagination(filtered.length);

      // Close filter sidebar on mobile after apply
      filterSidebar.classList.remove("show");
      filterOverlay.classList.remove("show");
      document.body.style.overflow = "auto";
    },
    animated ? 400 : 0
  );
  // Đồng bộ hiển thị sidebar & overlay khi lọc xong
  filterSidebar.classList.remove("show");
  filterOverlay.classList.remove("show");
  document.body.style.overflow = "auto";
}

// ========== PRICE RANGE ==========
range.addEventListener("input", () => {
  priceVal.textContent = parseInt(range.value).toLocaleString() + "đ";
});

// ========== SEARCH & SUGGESTIONS ==========
const searchInput = document.getElementById("search");
const suggestionsList = document.getElementById("suggestions");
const clearSearchBtn = document.getElementById("clearSearchBtn");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

  // Show/hide clear button
  clearSearchBtn.classList.toggle("show", query.length > 0);

  if (query.length === 0) {
    suggestionsList.classList.remove("active");
    return;
  }

  // Filter products matching query
  const matches = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.type.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    suggestionsList.innerHTML = `
      <div class="search-empty">
        <div class="search-empty-icon">🔍</div>
        <div>Không tìm thấy sản phẩm</div>
      </div>
    `;
    suggestionsList.classList.add("active");
    return;
  }

  // Highlight matching text
  const highlightText = (text, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  suggestionsList.innerHTML = `
    <div class="suggestion-section">
      <div class="suggestion-header">🌸 Sản phẩm gợi ý</div>
      ${matches
        .slice(0, 5)
        .map(
          (p) => `
        <li onclick="selectSuggestion('${p.name}')">
          <div class="suggestion-icon">${
            p.type === "hoa" ? "🌼" : p.type === "cay" ? "🌿" : "💧"
          }</div>
          <div class="suggestion-content">
            <div class="suggestion-name">${highlightText(p.name, query)}</div>
            <div class="suggestion-price">${p.price.toLocaleString()}đ</div>
          </div>
        </li>
      `
        )
        .join("")}
    </div>
  `;
  suggestionsList.classList.add("active");
});

function selectSuggestion(name) {
  searchInput.value = name;
  suggestionsList.classList.remove("active");
  clearSearchBtn.classList.add("show");
  currentPage = 1;
  updateDisplay(true);
}

// Clear search
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearSearchBtn.classList.remove("show");
  suggestionsList.classList.remove("active");
  currentPage = 1;
  updateDisplay(true);
});

// Close suggestions when click outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box-enhanced")) {
    suggestionsList.classList.remove("active");
  }
});

// ========== VOICE SEARCH ==========
const voiceSearchBtn = document.getElementById("voiceSearchBtn");
let recognition;

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";
  recognition.continuous = false;

  voiceSearchBtn.addEventListener("click", () => {
    recognition.start();
    voiceSearchBtn.classList.add("listening");
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript.replace(/\./g, "");
    voiceSearchBtn.classList.remove("listening");
    currentPage = 1;
    updateDisplay(true);
    clearSearchBtn.classList.add("show");
  };

  recognition.onerror = () => {
    voiceSearchBtn.classList.remove("listening");
    showToast("Không thể nhận diện giọng nói", "remove");
  };

  recognition.onend = () => {
    voiceSearchBtn.classList.remove("listening");
  };
} else {
  voiceSearchBtn.style.display = "none";
}

// ========== QUICK SEARCH TAGS ==========
document.querySelectorAll(".search-tag").forEach((tag) => {
  tag.addEventListener("click", () => {
    const query = tag.getAttribute("data-query");
    searchInput.value = query;
    clearSearchBtn.classList.add("show");
    currentPage = 1;
    updateDisplay(true);
  });
});

// ========== APPLY & RESET FILTERS ==========
document.getElementById("applyFilters").addEventListener("click", () => {
  currentPage = 1;
  updateDisplay(true);
  updateFilterCount();
});

resetBtn.addEventListener("click", () => {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((cb) => (cb.checked = true));
  range.value = 1000000;
  priceVal.textContent = "1.000.000đ";
  document.getElementById("sortSelect").value = "";
  searchInput.value = "";
  clearSearchBtn.classList.remove("show");
  currentPage = 1;
  updateDisplay(true);
  updateFilterCount();
});
// ========== ADVANCED FILTERS MODAL ==========
const filterModals = {
  occasion: {
    title: "🎉 Chọn Dịp Lễ",
    options: [
      { id: "valentine", icon: "💕", name: "Valentine", count: 189 },
      { id: "sinh-nhat", icon: "🎂", name: "Sinh nhật", count: 247 },
      { id: "8-3", icon: "🌹", name: "8/3 Quốc tế Phụ nữ", count: 167 },
      { id: "20-10", icon: "💐", name: "20/10 Phụ nữ VN", count: 145 },
      { id: "ngay-me", icon: "👩", name: "Ngày của Mẹ", count: 134 },
      { id: "tot-nghiep", icon: "🎓", name: "Tốt nghiệp", count: 98 },
      { id: "ky-niem", icon: "💑", name: "Kỷ niệm", count: 112 },
      { id: "cuoi", icon: "💒", name: "Cưới hỏi", count: 176 },
      { id: "khai-truong", icon: "🎊", name: "Khai trương", count: 156 },
      { id: "tham-benh", icon: "🏥", name: "Thăm bệnh", count: 87 },
      { id: "tet", icon: "🧧", name: "Tết", count: 198 },
    ],
  },
  "flower-type": {
    title: "🌸 Chọn Loại Hoa",
    options: [
      { id: "hong", icon: "🌹", name: "Hoa Hồng", count: 284 },
      { id: "lan", icon: "🦋", name: "Lan Hồ Điệp", count: 156 },
      { id: "tulip", icon: "🌷", name: "Tulip", count: 92 },
      { id: "ly", icon: "🤍", name: "Hoa Ly", count: 118 },
      { id: "huong-duong", icon: "🌻", name: "Hướng Dương", count: 105 },
      { id: "cam-tu-cau", icon: "💙", name: "Cẩm Tú Cầu", count: 89 },
      { id: "cam-chuong", icon: "🌺", name: "Cẩm Chướng", count: 142 },
      { id: "baby", icon: "☁️", name: "Hoa Baby", count: 67 },
    ],
  },
  style: {
    title: "🎨 Chọn Phong Cách",
    options: [
      { id: "sang-trong", icon: "👑", name: "Sang trọng", count: 78 },
      { id: "vintage", icon: "🕰️", name: "Vintage", count: 94 },
      { id: "hien-dai", icon: "✨", name: "Hiện đại", count: 112 },
      { id: "rustic", icon: "🌿", name: "Rustic", count: 86 },
    ],
  },
  "price-range": {
    title: "💰 Chọn Mức Giá",
    options: [
      { id: "0-500k", icon: "💸", name: "Dưới 500k", count: 234 },
      { id: "500k-1tr", icon: "💵", name: "500k - 1tr", count: 198 },
      { id: "1tr-2tr", icon: "💴", name: "1tr - 2tr", count: 142 },
      { id: "2tr+", icon: "💎", name: "Trên 2tr", count: 89 },
    ],
  },
};

let activeFilters = {
  occasion: [],
  flowerType: [],
  style: [],
  priceRange: [],
};

// Create modal HTML
const modalHTML = `
<div class="filter-modal" id="filterModal">
  <div class="filter-modal-content">
    <div class="filter-modal-header">
      <div class="filter-modal-title" id="modalTitle"></div>
      <button class="close-modal-btn" id="closeModalBtn">✕</button>
    </div>
    <div class="filter-options-grid" id="filterOptionsGrid"></div>
    <div class="filter-modal-actions">
      <button class="filter-clear-btn" id="filterClearBtn">🧹 Xóa bộ lọc</button>
      <button class="filter-apply-btn" id="filterApplyBtn">🔍 Áp dụng</button>
    </div>
  </div>
</div>
`;

document.body.insertAdjacentHTML("beforeend", modalHTML);

const filterModal = document.getElementById("filterModal");
const modalTitle = document.getElementById("modalTitle");
const filterOptionsGrid = document.getElementById("filterOptionsGrid");
const closeModalBtn = document.getElementById("closeModalBtn");
const filterApplyBtn = document.getElementById("filterApplyBtn");
const filterClearBtn = document.getElementById("filterClearBtn");

let currentFilterType = null;

// Open modal
document.querySelectorAll(".advanced-filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilterType = btn.dataset.filter;
    const filterData = filterModals[currentFilterType];

    modalTitle.textContent = filterData.title;
    filterOptionsGrid.innerHTML = filterData.options
      .map(
        (opt) => `
      <div class="filter-option-card" data-id="${opt.id}">
        <div class="filter-option-icon">${opt.icon}</div>
        <div class="filter-option-name">${opt.name}</div>
        <div class="filter-option-count">${opt.count} SP</div>
      </div>
    `
      )
      .join("");

    filterModal.classList.add("active");

    // Add click handlers
    document.querySelectorAll(".filter-option-card").forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("selected");
      });
    });
  });
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  filterModal.classList.remove("active");
});

filterModal.addEventListener("click", (e) => {
  if (e.target === filterModal) {
    filterModal.classList.remove("active");
  }
});

// Apply filters
filterApplyBtn.addEventListener("click", () => {
  const selectedOptions = Array.from(
    document.querySelectorAll(".filter-option-card.selected")
  ).map((card) => card.dataset.id);

  if (currentFilterType === "occasion") {
    activeFilters.occasion = selectedOptions;
  } else if (currentFilterType === "flower-type") {
    activeFilters.flowerType = selectedOptions;
  } else if (currentFilterType === "style") {
    activeFilters.style = selectedOptions;
  } else if (currentFilterType === "price-range") {
    activeFilters.priceRange = selectedOptions;
  }

  filterModal.classList.remove("active");
  updateDisplay(true);
  showActiveFilters();
  showToast("Đã áp dụng bộ lọc! 🎯", "add");
});

// Clear filters in modal
filterClearBtn.addEventListener("click", () => {
  document.querySelectorAll(".filter-option-card.selected").forEach((card) => {
    card.classList.remove("selected");
  });
});

// Show active filter tags
function showActiveFilters() {
  let existingContainer = document.querySelector(".active-filters");
  if (existingContainer) existingContainer.remove();

  const allActiveFilters = [
    ...activeFilters.occasion,
    ...activeFilters.flowerType,
    ...activeFilters.style,
    ...activeFilters.priceRange,
  ];

  if (allActiveFilters.length === 0) return;

  const container = document.createElement("div");
  container.className = "active-filters";

  allActiveFilters.forEach((filterId) => {
    const filterInfo = findFilterInfo(filterId);
    if (filterInfo) {
      const tag = document.createElement("div");
      tag.className = "active-filter-tag";
      tag.innerHTML = `
        ${filterInfo.icon} ${filterInfo.name}
        <button class="remove-filter-btn" data-filter="${filterId}">✕</button>
      `;
      container.appendChild(tag);
    }
  });

  document.querySelector(".compact-search-wrapper").appendChild(container);

  // Add remove handlers
  document.querySelectorAll(".remove-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterId = btn.dataset.filter;
      removeActiveFilter(filterId);
      updateDisplay(true);
      showActiveFilters();
    });
  });
}

function findFilterInfo(id) {
  for (const filterType in filterModals) {
    const option = filterModals[filterType].options.find(
      (opt) => opt.id === id
    );
    if (option) return option;
  }
  return null;
}

function removeActiveFilter(filterId) {
  activeFilters.occasion = activeFilters.occasion.filter((f) => f !== filterId);
  activeFilters.flowerType = activeFilters.flowerType.filter(
    (f) => f !== filterId
  );
  activeFilters.style = activeFilters.style.filter((f) => f !== filterId);
  activeFilters.priceRange = activeFilters.priceRange.filter(
    (f) => f !== filterId
  );
}

// Override filterProducts to include advanced filters
const baseFilterProducts = filterProducts;
filterProducts = function () {
  let filtered = baseFilterProducts();

  // Apply occasion filter
  if (activeFilters.occasion.length > 0) {
    filtered = filtered.filter((p) =>
      activeFilters.occasion.includes(p.category)
    );
  }

  // Apply style filter
  if (activeFilters.style.length > 0) {
    filtered = filtered.filter((p) => activeFilters.style.includes(p.style));
  }

  // Apply price range filter
  if (activeFilters.priceRange.length > 0) {
    filtered = filtered.filter((p) => {
      return activeFilters.priceRange.some((range) => {
        if (range === "0-500k") return p.price < 500000;
        if (range === "500k-1tr") return p.price >= 500000 && p.price < 1000000;
        if (range === "1tr-2tr") return p.price >= 1000000 && p.price < 2000000;
        if (range === "2tr+") return p.price >= 2000000;
        return false;
      });
    });
  }

  return filtered;
};
// ========== FLY TO CART ANIMATION ==========
function flyToCart(event, imgSrc) {
  event.stopPropagation();

  // Play sound
  const soundAdd = document.getElementById("soundAdd");
  if (soundAdd) soundAdd.play();

  // Show toast notification
  showToast("Đã thêm vào giỏ hàng! 🛒", "add");

  // Create flying image
  const btn = event.target;
  const rect = btn.getBoundingClientRect();
  const flyImg = document.createElement("img");
  flyImg.src = imgSrc;
  flyImg.style.cssText = `
    position: fixed;
    top: ${rect.top}px;
    left: ${rect.left}px;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 9999;
    pointer-events: none;
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(flyImg);

  // Animate to cart icon (top right corner)
  setTimeout(() => {
    flyImg.style.top = "20px";
    flyImg.style.left = "calc(100% - 80px)";
    flyImg.style.width = "30px";
    flyImg.style.height = "30px";
    flyImg.style.opacity = "0";
  }, 10);

  setTimeout(() => flyImg.remove(), 850);
}

// ========== TOAST NOTIFICATION ==========
function showToast(message, type = "add") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icon = type === "add" ? "✅" : "❌";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3200);
}

// ========== VIEW TOGGLE ==========
const viewBtns = document.querySelectorAll(".view-btn");
viewBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    viewBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (idx === 0) {
      grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(260px, 1fr))";
    } else {
      grid.style.gridTemplateColumns = "1fr";
    }
  });
});

// ========== INITIAL LOAD ==========
updateDisplay(true);
