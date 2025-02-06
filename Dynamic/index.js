let user = { name: "Alice", role: "user", active:false };


let output=user.role === "admin" && user.active
? "Admin Access Granted!"
: user.role === "admin" && !user.active
? "Admin Access Revoked"
: user.role === "user" && user.active
? "User Access Granted!"
: user.role === "user" && !user.active
? "User Access Revoked"
: "Access Denied";

console.log(output)

// console.log(user.role=='admin' && user.active? "Admin Access Granted!":"Admin Access Revoked")

// console.log(user.role=='user' && user.active ?"User Access Granted!":"User Access Revoked")