// Função de login
async function loginUser(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const deviceKey = "device1";
  const currentIP = "192.168.0.1";

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({emailOrUsername: email, password, deviceKey, currentIP})
  });

  const data = await res.json();
  alert(data.message);

  if(data.message.includes("bem-sucedido")) {
    window.location.href = "dashboard.html";
  }
}

// Função de registro
async function registerUser(){
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const deviceKey = "device1";
  const currentIP = "192.168.0.1";

  const res = await fetch("/api/register", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({username,email,password,gender,height_cm: height,weight_kg: weight,deviceKey,currentIP})
  });

  const data = await res.json();
  alert(data.message);

  if(data.message.includes("sucesso")) {
    window.location.href = "login.html";
  }
}
