const qaToggle = document.getElementById("qa-toggle");
const qaBox = document.getElementById("qa-box");
const qaForm = document.getElementById("qa-form");
const qaInput = document.getElementById("qa-input");
const qaMessages = document.getElementById("qa-messages");

qaToggle.addEventListener("click", () => {
  qaBox.style.display = qaBox.style.display === "flex" ? "none" : "flex";
});

qaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = qaInput.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.className = "msg-user";
  userMsg.textContent = text;
  qaMessages.appendChild(userMsg);

  qaInput.value = "";
  qaMessages.scrollTop = qaMessages.scrollHeight;

  // Giả lập trả lời tự động (bạn có thể thay bằng API thật)
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "msg-bot";

    if (text.toLowerCase().includes("giá")) {
      botMsg.textContent = "🌿 Cây Kim Tiền hiện có giá 250.000đ bạn nhé!";
    } else if (text.toLowerCase().includes("giao hàng")) {
      botMsg.textContent = "🚚 GreenLife giao hàng toàn quốc trong 2–3 ngày.";
    } else if (text.toLowerCase().includes("chăm sóc")) {
      botMsg.textContent = "💧 Cây Kim Tiền ưa sáng nhẹ, tưới 1–2 lần/tuần.";
    } else {
      botMsg.textContent = "🌱 Cảm ơn bạn! Shop sẽ phản hồi chi tiết sớm nhất.";
    }

    qaMessages.appendChild(botMsg);
    qaMessages.scrollTop = qaMessages.scrollHeight;
  }, 800);
});
