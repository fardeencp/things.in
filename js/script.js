// LOGIN SYSTEM
function login() {
  const name = document.getElementById("username").value;
  if(name) {
    localStorage.setItem("user", name);
    window.location.href = "index.html";
  }
}

function checkUser() {
  const user = localStorage.getItem("user");
  const userBox = document.getElementById("userBox");
  if(user && userBox){
    userBox.innerHTML = `Hi, ${user} | <a href="#" onclick="logout()">Logout</a>`;
  }
}

function logout() {
  localStorage.removeItem("user");
  location.reload();
}

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart() {
  const cartItems = document.getElementById("cartItems");
  const totalBox = document.getElementById("total");
  if(!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₹${item.price} <button onclick="removeItem(${index})">X</button></span>
      </div>`;
  });

  totalBox.innerText = "Total: ₹" + total;
}

function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// IMAGE POPUP
document.addEventListener("click", function(e){
  if(e.target.tagName === "IMG" && e.target.closest(".image-frame")){
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = e.target.src;
  }
});

function closeModal(){
  document.getElementById("imgModal").style.display = "none";
}
