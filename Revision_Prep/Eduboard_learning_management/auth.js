const button = document.querySelector("#buttonId");
console.log(button);
const users = JSON.parse(localStorage.getItem("userInfo")) || [];
let isSignUp = true;

function changeForm() {
  isSignUp = !isSignUp;
  document.getElementById("roleId").style.display = isSignUp
    ? "inline"
    : "none";
  document.getElementById("name").style.display = isSignUp ? "inline" : "none";
  button.innerText = isSignUp ? "Sign Up" : "Sign In";
}

button.addEventListener("click", () => {
  try {
    if (isSignUp) {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const role = document.getElementById("roleId").value;
      console.log(role);
      //   console.log(name,email)
      const userdetails = { name, email, role };
      console.log(userdetails);
      let existingUser = JSON.parse(localStorage.getItem(users));
      let response = existingUser.findIndex((user) => user.email === email);
      if (response == -1) {
        users.push(userdetails);

        localStorage.setItem("userInfo", JSON.stringify(users));
      }
    } else {
      const email = document.getElementById("email").value;
      const storedEmail = localStorage.getItem(users);
      let res = storedEmail.find((user) => user.email === email);
      if (res) {
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    }
  } catch (error) {
    throw new Error("error");
  } finally {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("roleId").value = "";
  }
});
