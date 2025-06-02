const button = document.querySelector("#buttonId");

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
  if (isSignUp) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("roleId").value;
    console.log(role);
    //   console.log(name,email)
    const userdetails = { name, email, role };
    console.log(userdetails);

    let response = users?.findIndex((user) => user.email === email);
    if (response == -1) {
      users.push(userdetails);

      localStorage.setItem("userInfo", JSON.stringify(users));
    } else {
      console.log("user already exist.");
    }
  } else {
    const email = document.getElementById("email").value;

    let res = users.find((user) => user.email === email);
    if (res) {
      localStorage.setItem('isActive',res.email)
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      alert("Sign up first");
    }
  }
});
