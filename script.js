const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }



  
  function startMembership() {

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (email === "") {
        message.innerHTML = "Please enter your email";
        message.style.color = "red";
        return;
    } 
    else if (!email.includes("@")) {
        message.innerHTML = "Please enter a valid email";
        message.style.color = "red";
        return;
    } 
    else {
        message.innerHTML = "Sign Up started successfully for: " + email;
        message.style.color = "white";
    }
}

