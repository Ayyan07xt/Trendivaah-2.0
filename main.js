// Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}, 3000);

// Google Pay
function payWithGPay() {
  let upi = "yourupi@bank";
  let name = "Trendivaah";
  let amount = 1999;
  let note = "Order from Trendivaah";

  let url = `upi://pay?pa=${upi}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;
  window.location.href = url;
}

// WhatsApp Confirm
function confirmOrder() {
  let msg = "Hello Trendivaah, I have completed payment. Please confirm my order.";
  window.open(`https://wa.me/917757007795?text=${encodeURIComponent(msg)}`);
}

// Cart
function addToCart() {
  localStorage.setItem("cart", "Premium Black Shirt - ₹1999");
  alert("Added to cart");
}

// Welcome popup
window.onload = () => {
  setTimeout(() => {
    alert("Welcome to Trendivaah – Luxury Redefined");
  }, 1200);
};

