---
layout: page
---
<center>
<hr width="100%" size="3">
<div class="container">
        <a href="https://ellisjalia.com"><img src="/assets/icons/menu-bw.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/essays"><img src="/assets/icons/quill-bw.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/art"><img src="/assets/icons/paint-palette-bw.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/newsletter"><img src="/assets/icons/newsletter.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/about"><img src="/assets/icons/unknown-bw.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
 </div>
  <hr width="100%" size="3">
  </center>

<style>
  #login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    margin: 50px auto;
    gap: 15px;
  }

  #login-form input {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 16px;
  }

  #login-form button {
    padding: 14px 24px;
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  #login-form button:hover {
    background-color: tomato;
  }
</style>

<form id="login-form">
  <input type="email" id="email" placeholder="Email" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Log In</button>
</form>

<script>
  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      alert("Logged in!");
      window.location.href = "/premium.html";
    } catch (err) {
      alert("Error: " + err.message);
    }
  });
</script>