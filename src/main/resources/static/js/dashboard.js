let products = [
  {
    id: 1,
    name: "Hoa Hồng Đỏ",
    sku: "HOA-001",
    price: 450000,
    stock: 45,
    type: "hoa",
    category: "valentine",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1518709414768-a88981a4515d",
    status: "active",
    description: "Hoa hồng đỏ tươi nhập khẩu",
  },
  {
    id: 2,
    name: "Hồng Ohara",
    sku: "HOA-002",
    price: 850000,
    stock: 28,
    type: "hoa",
    category: "ky-niem",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1563897539633-7374c276c212",
    status: "active",
    description: "Hồng Ohara cao cấp",
  },
  {
    id: 3,
    name: "Tulip Đỏ",
    sku: "HOA-003",
    price: 350000,
    stock: 60,
    type: "hoa",
    category: "valentine",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
    status: "active",
    description: "Tulip Hà Lan nhập khẩu",
  },
  {
    id: 4,
    name: "Hoa Ly Trắng",
    sku: "HOA-004",
    price: 420000,
    stock: 35,
    type: "hoa",
    category: "tham-benh",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d",
    status: "active",
    description: "Ly trắng thanh khiết",
  },
  {
    id: 5,
    name: "Hướng Dương",
    sku: "HOA-005",
    price: 280000,
    stock: 52,
    type: "hoa",
    category: "sinh-nhat",
    style: "rustic",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    status: "active",
    description: "Hướng dương tươi sáng",
  },
  {
    id: 6,
    name: "Lan Hồ Điệp",
    sku: "HOA-006",
    price: 1200000,
    stock: 8,
    type: "hoa",
    category: "khai-truong",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1551388584-e7c6c27ef722",
    status: "active",
    description: "Lan hồ điệp cao cấp",
  },
  {
    id: 7,
    name: "Cẩm Chướng",
    sku: "HOA-007",
    price: 180000,
    stock: 75,
    type: "hoa",
    category: "ngay-me",
    style: "vintage",
    img: "https://images.unsplash.com/photo-1587814213271-74b8e290f0e3",
    status: "active",
    description: "Cẩm chướng nhiều màu",
  },
  {
    id: 8,
    name: "Baby Trắng",
    sku: "PK-001",
    price: 120000,
    stock: 5,
    type: "phukien",
    category: "tot-nghiep",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11",
    status: "active",
    description: "Baby trắng điểm nhấn",
  },
  {
    id: 9,
    name: "Cầm Tay Cô Dâu",
    sku: "HOA-008",
    price: 850000,
    stock: 12,
    type: "hoa",
    category: "cuoi",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1464297162577-f5295c892194",
    status: "active",
    description: "Hoa cưới đặc biệt",
  },
  {
    id: 10,
    name: "Cây Xương Rồng",
    sku: "CAY-001",
    price: 150000,
    stock: 88,
    type: "cay",
    category: "de-ban",
    style: "hien-dai",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295",
    status: "active",
    description: "Xương rồng mini",
  },
  {
    id: 11,
    name: "Kim Tiền",
    sku: "CAY-002",
    price: 450000,
    stock: 6,
    type: "cay",
    category: "phong-thuy",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
    status: "inactive",
    description: "Cây kim tiền phong thủy",
  },
  {
    id: 12,
    name: "Mai Vàng Tết",
    sku: "CAY-003",
    price: 1500000,
    stock: 3,
    type: "cay",
    category: "tet",
    style: "sang-trong",
    img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00",
    status: "inactive",
    description: "Mai vàng đón Tết",
  },
];

let currentFilter = "all";
let currentStatusFilter = null;
let currentStockFilter = null;
let editingId = null;
let selectedProducts = new Set();
let currentPage = 1;
let itemsPerPage = 10;
let currentSort = { column: null, direction: "asc" };

// Render products with pagination
function renderProducts() {
  const tbody = document.getElementById("productsTableBody");
  tbody.innerHTML = "";

  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();

  let filtered = products.filter((p) => {
    const matchFilter = currentFilter === "all" || p.type === currentFilter;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery) ||
      p.sku.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery);
    const matchStatus =
      !currentStatusFilter || p.status === currentStatusFilter;
    const matchStock =
      !currentStockFilter || getStockLevel(p.stock) === currentStockFilter;
    return matchFilter && matchSearch && matchStatus && matchStock;
  });

  // Apply sorting
  if (currentSort.column) {
    filtered.sort((a, b) => {
      let aVal = a[currentSort.column];
      let bVal = b[currentSort.column];
      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      if (currentSort.direction === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  const fragment = document.createDocumentFragment();

  paginated.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="checkbox-cell">
        <input type="checkbox" ${
          selectedProducts.has(p.id) ? "checked" : ""
        } onchange="toggleSelectProduct(${p.id})">
      </td>
      <td><img src="${p.img}" class="product-img" alt="${p.name}"></td>
      <td><div class="product-name">${p.name}</div></td>
      <td><span class="badge badge-${p.type}">${getTypeLabel(
      p.type
    )}</span></td>
      <td><strong>${p.price.toLocaleString()}đ</strong></td>
      <td><span class="stock-badge ${getStockLevel(p.stock)}">${
      p.stock
    }</span></td>
      <td>${p.category}</td>
      <td><span class="status-badge ${p.status}">${
      p.status === "active" ? "✅ Đang bán" : "❌ Tạm ngưng"
    }</span></td>
      <td>
        <div class="action-btns">
          <button class="icon-btn view" onclick="viewProduct(${
            p.id
          })">👁️</button>
          <button class="icon-btn edit" onclick="editProduct(${
            p.id
          })">✏️</button>
          <button class="icon-btn duplicate" onclick="duplicateProduct(${
            p.id
          })">📋</button>
          <button class="icon-btn delete" onclick="deleteProduct(${
            p.id
          })">🗑️</button>
        </div>
      </td>`;
    fragment.appendChild(tr);
  });

  tbody.appendChild(fragment); // ✅ 1 lần append, không lag

  updateStats();
  updatePagination(filtered.length, totalPages);
  updateBulkActions();
  document.getElementById("displayCount").textContent = filtered.length;
}

function getTypeLabel(type) {
  const labels = {
    hoa: "🌼 Hoa",
    cay: "🌿 Cây",
    phukien: "💐 Phụ kiện",
  };
  return labels[type] || type;
}

function getStockLevel(stock) {
  if (stock > 50) return "high";
  if (stock >= 10) return "medium";
  return "low";
}

function updateStats() {
  document.getElementById("totalProducts").textContent = products.length;
  document.getElementById("activeProducts").textContent = products.filter(
    (p) => p.status === "active"
  ).length;
  document.getElementById("lowStockProducts").textContent = products.filter(
    (p) => p.stock < 10
  ).length;

  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  document.getElementById("totalValue").textContent =
    (totalValue / 1000000).toFixed(1) + "M";
}

function updatePagination(totalItems, totalPages) {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  document.getElementById(
    "pageInfo"
  ).textContent = `${startIndex}-${endIndex} của ${totalItems}`;
  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled =
    currentPage === totalPages || totalPages === 0;

  // Render page numbers
  const pageNumbers = document.getElementById("pageNumbers");
  let pages = "";
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages += `<button class="page-btn ${
        i === currentPage ? "active" : ""
      }" onclick="goToPage(${i})">${i}</button>`;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pages += `<span style="padding: 0.5rem;">...</span>`;
    }
  }
  pageNumbers.innerHTML = pages;
}

function changePage(delta) {
  currentPage += delta;
  renderProducts();
}

function goToPage(page) {
  currentPage = page;
  renderProducts();
}

// Sorting
function sortTable(column) {
  if (currentSort.column === column) {
    currentSort.direction = currentSort.direction === "asc" ? "desc" : "asc";
  } else {
    currentSort.column = column;
    currentSort.direction = "asc";
  }

  // Update table headers
  document.querySelectorAll("th.sortable").forEach((th) => {
    th.className = "sortable";
  });
  event.target.className = `sortable sorted-${currentSort.direction}`;

  renderProducts();
}

// Selection
function toggleSelectAll() {
  const checkbox = document.getElementById("selectAll");
  if (checkbox.checked) {
    products.forEach((p) => selectedProducts.add(p.id));
  } else {
    selectedProducts.clear();
  }
  renderProducts();
}

function toggleSelectProduct(id) {
  if (selectedProducts.has(id)) {
    selectedProducts.delete(id);
  } else {
    selectedProducts.add(id);
  }
  renderProducts();
}

function updateBulkActions() {
  const count = selectedProducts.size;
  document.getElementById("selectedCount").textContent = `${count} đã chọn`;
  document.getElementById("bulkDeleteBtn").style.display =
    count > 0 ? "flex" : "none";
  document.getElementById("bulkStatusBtn").style.display =
    count > 0 ? "flex" : "none";
  document.getElementById("selectAll").checked =
    count > 0 && count === products.length;
}

function bulkDelete() {
  if (
    confirm(`Bạn có chắc muốn xóa ${selectedProducts.size} sản phẩm đã chọn?`)
  ) {
    products = products.filter((p) => !selectedProducts.has(p.id));
    selectedProducts.clear();
    renderProducts();
    showToast(`Đã xóa ${selectedProducts.size} sản phẩm!`, "success");
  }
}

function bulkUpdateStatus() {
  const newStatus = confirm("Chọn OK để bật, Cancel để tắt")
    ? "active"
    : "inactive";
  products.forEach((p) => {
    if (selectedProducts.has(p.id)) {
      p.status = newStatus;
    }
  });
  selectedProducts.clear();
  renderProducts();
  showToast("Đã cập nhật trạng thái!", "success");
}

// Biến lưu trạng thái filter
let activeFilters = {
  priceMin: null,
  priceMax: null,
  stockLevel: null,
  category: null,
  style: null,
  status: null,
  sortBy: null,
};

// Toggle Advanced Filters với animation
function toggleAdvancedFilters() {
  const panel = document.getElementById("advancedFilters");
  const icon = document.getElementById("collapseIcon");

  panel.classList.toggle("show");
  icon.textContent = panel.classList.contains("show") ? "▲" : "▼";
}

// Apply Sort Filter
function applySortFilter(sortType) {
  // Remove active class from all sort buttons
  document.querySelectorAll(".sort-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to clicked button
  event.target.classList.add("active");

  const [column, direction] = sortType.split("-");
  currentSort = { column, direction };

  activeFilters.sortBy = sortType;
  renderProducts();
  showToast(`Đã sắp xếp theo ${getSortLabel(sortType)}`, "success");
}

function getSortLabel(sortType) {
  const labels = {
    "name-asc": "Tên A→Z",
    "name-desc": "Tên Z→A",
    "price-asc": "Giá thấp→cao",
    "price-desc": "Giá cao→thấp",
    "stock-asc": "Tồn kho tăng dần",
    "stock-desc": "Tồn kho giảm dần",
  };
  return labels[sortType] || sortType;
}

// Apply All Filters
function applyFilters() {
  activeFilters.priceMin = document.getElementById("priceMin").value || null;
  activeFilters.priceMax = document.getElementById("priceMax").value || null;
  activeFilters.category =
    document.getElementById("categoryFilter").value || null;
  activeFilters.style = document.getElementById("styleFilter").value || null;

  currentPage = 1;
  renderProducts();

  const filterCount = Object.values(activeFilters).filter(
    (v) => v !== null
  ).length;
  showToast(`Đã áp dụng ${filterCount} bộ lọc!`, "success");
}

// Clear All Filters
function clearFilters() {
  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";
  document.getElementById("stockFilter").value = "";
  document.getElementById("categoryFilter").value = "";
  document.getElementById("styleFilter").value = "";
  document.getElementById("statusFilterSelect").value = "all";

  // Reset active sort buttons
  document.querySelectorAll(".sort-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  currentStatusFilter = null;
  currentStockFilter = null;
  currentSort = { column: null, direction: "asc" };
  activeFilters = {
    priceMin: null,
    priceMax: null,
    stockLevel: null,
    category: null,
    style: null,
    status: null,
    sortBy: null,
  };

  currentPage = 1;
  renderProducts();
  showToast("Đã xóa tất cả bộ lọc!", "success");
}

// Enhanced renderProducts với advanced filters
function renderProducts() {
  const tbody = document.getElementById("productsTableBody");
  tbody.innerHTML = "";

  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();

  let filtered = products.filter((p) => {
    const matchFilter = currentFilter === "all" || p.type === currentFilter;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery) ||
      p.sku.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery);
    const matchStatus =
      !currentStatusFilter || p.status === currentStatusFilter;
    const matchStock =
      !currentStockFilter || getStockLevel(p.stock) === currentStockFilter;

    // Advanced filters
    const matchPriceMin =
      !activeFilters.priceMin || p.price >= parseInt(activeFilters.priceMin);
    const matchPriceMax =
      !activeFilters.priceMax || p.price <= parseInt(activeFilters.priceMax);
    const matchCategory =
      !activeFilters.category || p.category === activeFilters.category;
    const matchStyle = !activeFilters.style || p.style === activeFilters.style;

    return (
      matchFilter &&
      matchSearch &&
      matchStatus &&
      matchStock &&
      matchPriceMin &&
      matchPriceMax &&
      matchCategory &&
      matchStyle
    );
  });

  // Apply sorting
  if (currentSort.column) {
    filtered.sort((a, b) => {
      let aVal = a[currentSort.column];
      let bVal = b[currentSort.column];
      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      if (currentSort.direction === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  const fragment = document.createDocumentFragment();

  paginated.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="checkbox-cell">
        <input type="checkbox" ${selectedProducts.has(p.id) ? "checked" : ""} 
               onchange="toggleSelectProduct(${p.id})">
      </td>
      <td><img src="${p.img}" class="product-img" alt="${p.name}"></td>
      <td><div class="product-name">${p.name}</div></td>
      <td><span class="badge badge-${p.type}">${getTypeLabel(
      p.type
    )}</span></td>
      <td><strong>${p.price.toLocaleString()}đ</strong></td>
      <td><span class="stock-badge ${getStockLevel(p.stock)}">${
      p.stock
    }</span></td>
      <td>${p.category}</td>
      <td><span class="status-badge ${p.status}">${
      p.status === "active" ? "✅ Đang bán" : "⏸️ Tạm ngưng"
    }</span></td>
      <td>
        <div class="action-btns">
          <button class="icon-btn view" onclick="viewProduct(${
            p.id
          })">👁️</button>
          <button class="icon-btn edit" onclick="editProduct(${
            p.id
          })">✏️</button>
          <button class="icon-btn duplicate" onclick="duplicateProduct(${
            p.id
          })">📋</button>
          <button class="icon-btn delete" onclick="deleteProduct(${
            p.id
          })">🗑️</button>
        </div>
      </td>`;
    fragment.appendChild(tr);
  });

  tbody.appendChild(fragment);

  updateStats();
  updatePagination(filtered.length, totalPages);
  updateBulkActions();
  document.getElementById("displayCount").textContent = filtered.length;
}
// Modal functions
function openModal(mode, id = null) {
  const modal = document.getElementById("productModal");
  const title = document.getElementById("modalTitle");
  const form = document.getElementById("productForm");

  if (mode === "add") {
    title.textContent = "Thêm sản phẩm mới";
    form.reset();
    document.getElementById("imagePreview").classList.remove("show");
    editingId = null;
  } else {
    const product = products.find((p) => p.id === id);
    title.textContent = "Chỉnh sửa sản phẩm";
    document.getElementById("productName").value = product.name;
    document.getElementById("productSku").value = product.sku;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productStock").value = product.stock;
    document.getElementById("productType").value = product.type;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productStyle").value = product.style;
    document.getElementById("productImg").value = product.img;
    document.getElementById("productStatus").value = product.status;
    document.getElementById("productDescription").value =
      product.description || "";

    const preview = document.getElementById("imagePreview");
    preview.src = product.img;
    preview.classList.add("show");

    editingId = id;
  }

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("productModal").classList.remove("active");
  editingId = null;
}

// function previewImage() {
//   const url = document.getElementById("productImg").value;
//   const preview = document.getElementById("imagePreview");
//   if (url) {
//     preview.src = url;
//     preview.classList.add("show");
//   }
// }

function selectImageOption(mode) {
  const uploadContainer = document.getElementById("uploadContainer");
  const urlContainer = document.getElementById("urlContainer");

  // Reset preview & dữ liệu
  removeImage();

  // Toggle giao diện nút chọn
  document
    .getElementById("optionUpload")
    .classList.toggle("active", mode === "upload");
  document
    .getElementById("optionUrl")
    .classList.toggle("active", mode === "url");

  // Hiện/ẩn container tương ứng
  uploadContainer.style.display = mode === "upload" ? "block" : "none";
  urlContainer.style.display = mode === "url" ? "block" : "none";
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("imagePreview");
  const removeBtn = document.getElementById("removeImageBtn");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.classList.add("show");
      preview.style.display = "block";
      removeBtn.style.display = "inline-block";
    };
    reader.readAsDataURL(file);
  }
}

function previewImage() {
  const url = document.getElementById("productImg").value;
  const preview = document.getElementById("imagePreview");
  const removeBtn = document.getElementById("removeImageBtn");

  if (url) {
    preview.src = url;
    preview.classList.add("show");
    preview.style.display = "block";
    removeBtn.style.display = "inline-block";
  }
}

function removeImage() {
  const preview = document.getElementById("imagePreview");
  const removeBtn = document.getElementById("removeImageBtn");
  const fileInput = document.getElementById("productImgUpload");
  const urlInput = document.getElementById("productImg");

  preview.src = "";
  preview.style.display = "none";
  removeBtn.style.display = "none";
  fileInput.value = "";
  urlInput.value = "";
}

// CRUD operations
function viewProduct(id) {
  const product = products.find((p) => p.id === id);
  alert(
    `Thông tin sản phẩm:\n\nTên: ${product.name}\nSKU: ${
      product.sku
    }\nGiá: ${product.price.toLocaleString()}đ\nTồn kho: ${
      product.stock
    }\nMô tả: ${product.description || "Chưa có"}`
  );
}

function editProduct(id) {
  openModal("edit", id);
}

function duplicateProduct(id) {
  const product = products.find((p) => p.id === id);
  const newProduct = {
    ...product,
    id: Math.max(...products.map((p) => p.id)) + 1,
    name: product.name + " (Copy)",
    sku: product.sku + "-COPY",
  };
  products.push(newProduct);
  renderProducts();
  showToast("Đã nhân bản sản phẩm!", "success");
}

function deleteProduct(id) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    products = products.filter((p) => p.id !== id);
    renderProducts();
    showToast("Đã xóa sản phẩm thành công!", "success");
  }
}

// Form submit
document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("productName").value,
    sku: document.getElementById("productSku").value,
    price: parseInt(document.getElementById("productPrice").value),
    stock: parseInt(document.getElementById("productStock").value),
    type: document.getElementById("productType").value,
    category: document.getElementById("productCategory").value,
    style: document.getElementById("productStyle").value,
    img: document.getElementById("productImg").value,
    status: document.getElementById("productStatus").value,
    description: document.getElementById("productDescription").value,
  };

  if (editingId) {
    const index = products.findIndex((p) => p.id === editingId);
    products[index] = { ...products[index], ...formData };
    showToast("Cập nhật sản phẩm thành công!", "success");
  } else {
    const newProduct = {
      id: Math.max(...products.map((p) => p.id)) + 1,
      ...formData,
    };
    products.push(newProduct);
    showToast("Thêm sản phẩm thành công!", "success");
  }

  closeModal();
  renderProducts();
});

// Export/Import functions
function exportToExcel() {
  showToast("Đang xuất file Excel...", "success");
  // Export logic here
}

function importFromExcel() {
  showToast("Chức năng nhập Excel đang phát triển...", "error");
}

// Search
document.getElementById("searchInput").addEventListener("input", () => {
  currentPage = 1;
  renderProducts();
});

// Toast notification
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const icon = document.getElementById("toastIcon");
  const msg = document.getElementById("toastMessage");

  icon.textContent = type === "success" ? "✅" : "❌";
  msg.textContent = message;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Close modal on outside click
document.getElementById("productModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Initial render
renderProducts();
