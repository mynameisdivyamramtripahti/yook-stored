document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCount = document.getElementById("cart-count");

    function updateCartUI() {
        const cartContainer = document.getElementById("cart-items");
        cartContainer.innerHTML = "";
        cart.forEach((item, index) => {
            let cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `<p>${item.name} - $${item.price}</p> 
                                  <button class='remove-from-cart' data-index='${index}'>🗑️</button>`;
            cartContainer.appendChild(cartItem);
        });

        // Store cart data in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        cartCount.innerText = cart.length;
        cartCount.style.display = cart.length > 0 ? "block" : "none";
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");
            cart.push({ name, price });
            updateCartUI();
        });
    });

    document.getElementById("cart-items").addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-from-cart")) {
            let index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            updateCartUI();
        }
    });

    // Load Cart Data from localStorage
    updateCartUI();
});

const firebaseConfig = {
    //   copy your firebase config informations
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    let receiver = document.getElementById("receiver").value.trim();
    let address = document.getElementById("address").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let landmark = document.getElementById("landmark").value.trim();
    let payment = document.getElementById("payment").value;
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
