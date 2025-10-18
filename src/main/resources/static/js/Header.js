//cart
function flyToCart(event, imgSrc) {
  const cart = document.getElementById("cartIcon");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.className = "fly-img";
  document.body.appendChild(img);

  // Lấy vị trí của nút và giỏ hàng
  const rect = event.target.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  img.style.left = rect.left + rect.width / 2 - 30 + "px";
  img.style.top = rect.top + rect.height / 2 - 30 + "px";

  // Sử dụng JS animation để bay về vị trí giỏ hàng
  const deltaX = cartRect.left - rect.left;
  const deltaY = cartRect.top - rect.top;

  img.animate(
    [
      { transform: `translate(0, 0) scale(1)`, opacity: 1 },
      {
        transform: `translate(${deltaX}px, ${deltaY}px) scale(0.3)`,
        opacity: 0.3,
      },
    ],
    { duration: 900, easing: "ease-in-out" }
  );

  setTimeout(() => {
    img.remove();
    cart.classList.add("shake");
    // ✅ Cập nhật giỏ hàng
    const card = event.target.closest(".card");
    const name = card.querySelector("h4").textContent;
    const price = parseInt(
      card.querySelector(".price").textContent.replace(/\D/g, "")
    );
    addToCart(name, price, imgSrc);
    setTimeout(() => cart.classList.remove("shake"), 500);
  }, 900);
}

let cartItems = [];
const miniCart = document.getElementById("miniCart");
const miniCartItems = document.getElementById("miniCartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartBtn = document.getElementById("cartIcon");
const cartCountEl = document.getElementById("cartCount");

cartBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // tránh đóng khi bấm vào chính nó
  miniCart.classList.toggle("hidden");
});

// Đóng khi click ra ngoài
document.addEventListener("click", (e) => {
  if (
    !miniCart.classList.contains("hidden") &&
    !e.target.closest(".mini-cart") &&
    !e.target.closest("#cartIcon")
  ) {
    miniCart.classList.add("hidden");
  }
});

// Đóng khi nhấn ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !miniCart.classList.contains("hidden")) {
    miniCart.classList.add("hidden");
  }
});

function addToCart(name, price, img) {
  const existing = cartItems.find((i) => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cartItems.push({ name, price, img, qty: 1 });
  }
  updateCartCount();
  renderMiniCart();
  showToast(`Đã thêm "${name}" vào giỏ hàng`, "add");
  playSound("add");
}

function removeFromCart(name) {
  const index = cartItems.findIndex((i) => i.name === name);
  if (index > -1) {
    const itemEl = miniCartItems.querySelector(`[data-name="${name}"]`);
    if (itemEl) {
      itemEl.style.animation = "fadeOut 0.3s ease forwards";
      setTimeout(() => {
        cartItems.splice(index, 1);
        renderMiniCart();
        updateCartCountDisplay();
        showToast(`Đã xóa "${name}" khỏi giỏ hàng`, "remove");
        playSound("remove");
      }, 280);
    } else {
      cartItems.splice(index, 1);
      renderMiniCart();
      updateCartCountDisplay();
    }
  }
}

function renderMiniCart() {
  miniCartItems.innerHTML = "";
  let total = 0;
  cartItems.forEach((item) => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    miniCartItems.innerHTML += `
      <div class="mini-cart-item" data-name="${item.name}">
        <img src="${item.img}" alt="${item.name}" />
        <div class="info">
          <div class="name">${item.name} x${item.qty}</div>
          <div class="price">${subtotal.toLocaleString()}đ</div>
        </div>
        <button class="remove-item" onclick="removeFromCart('${
          item.name
        }')">❌</button>
      </div>`;
  });
  cartTotalEl.textContent = total.toLocaleString() + "đ";
  if (cartItems.length === 0) {
    miniCartItems.innerHTML = `<p style="text-align:center; color:#999;">Giỏ hàng trống</p>`;
  }
}

function updateCartCountDisplay() {
  let totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = totalQty;

  // Hiển thị badge khi có sản phẩm
  if (totalQty > 0) {
    cartCountEl.classList.add("show");
    document.getElementById("cartIcon").classList.add("glow"); // 🔆 bật ánh sáng
  } else {
    cartCountEl.classList.remove("show");
    document.getElementById("cartIcon").classList.remove("glow"); // 🔆 tắt ánh sáng
  }
}

// Gọi lại updateCartCount để hiển thị nảy badge khi thêm
function updateCartCount() {
  let totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = totalQty;
  cartCountEl.classList.add("show", "bump");
  setTimeout(() => cartCountEl.classList.remove("bump"), 300);
}

function showToast(message, type = "add") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icon = document.createElement("span");
  icon.className = "toast-icon";
  icon.textContent = type === "add" ? "✅" : "❌";

  const text = document.createElement("span");
  text.textContent = message;

  toast.appendChild(icon);
  toast.appendChild(text);
  container.appendChild(toast);

  // Tự động xóa sau 3 giây
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
function playSound(type) {
  try {
    const sound = document.getElementById(
      type === "add" ? "soundAdd" : "soundRemove"
    );
    if (sound) {
      sound.currentTime = 0; // Phát lại từ đầu
      sound.volume = 0.4; // Âm lượng nhẹ
      sound.play().catch(() => {}); // Bỏ qua lỗi autoplay trên trình duyệt
    }
  } catch (e) {
    console.warn("Không thể phát âm thanh:", e);
  }
}

document.getElementById("view-cart-btn").addEventListener("click", function () {
  window.location.href = "cart";
});
