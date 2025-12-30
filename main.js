function openOrder(product, price) {
  document.getElementById("orderSection").style.display = "block";
  document.getElementById("orderProduct").value = product;
  document.getElementById("orderPrice").value = price;
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_fmye969",
    "template_gqozdiy",
    this
  ).then(() => {
    alert("Order placed successfully! We will contact you soon.");
    this.reset();
    document.getElementById("orderSection").style.display = "none";
  }, (error) => {
    alert("Failed to place order. Please try again.");
    console.log(error);
  });
});
