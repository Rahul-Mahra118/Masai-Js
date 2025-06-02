const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("formId").addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password1").value;
  const userDetails = { fullName, email, password };
  const validateUser = validateInput(userDetails);
  console.log(validateUser);

  if (validateUser) {
    const isEmailTaken = users.some((user) => user.email == email);
    if (isEmailTaken) {
      alert("Email is already registeres");
      return;
    }
    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));
    cleanUp();
  }
});

function toggleSignUp() {
  isSignUp = !isSignUp;
}

function validateInput(userDetails) {
  for (let user in userDetails) {
    if (!userDetails[user]) return false;
  }
  return true;
}
function cleanUp() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password1").value = "";
}
