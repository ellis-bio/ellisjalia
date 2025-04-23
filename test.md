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

<!-- Custom Login Style -->
<style>
  .form-container {
    background-color: #F4F6F6;
    padding: 30px;
    border-radius: 16px;
    max-width: 380px;
    margin: 60px auto;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-bottom: 16px;
  }

  .form-container img.shape {
    width: 80px;
    display: inline-block;
  }

  .form-container h2 {
    margin-bottom: 8px;
    font-size: 22px;
    color: #333;
    line-height: 1.4;
  }

  .form-container p.subtext {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
    font-weight: normal;
  }

  #login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  #login-form button:hover {
    background-color: tomato;
  }
</style>

<div class="form-container" id="auth-section">
  <div class="image-wrapper">
    <img class="shape" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/First_stellation_of_dodecahedron.svg/600px-First_stellation_of_dodecahedron.svg.png" alt="Stellated dodecahedron" />
  </div>
  <h2>If you enjoy my blog, you'll love the membership experience.</h2>
  <p class="subtext">It's £19 per month. Cancel anytime.</p>
  <form id="login-form">
    <input type="email" id="email" placeholder="Email" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Log In or Sign Up</button>
  </form>
</div>

<div id="premium-content" style="display:none; max-width: 400px; margin: 40px auto; text-align: center;">
  <h3>Premium Content</h3>
  <p>This is your exclusive members-only content.</p>
</div>

<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-functions-compat.js"></script>
<script src="https://js.stripe.com/v3/"></script>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
      authDomain: "ellisjalia-db.firebaseapp.com",
      projectId: "ellisjalia-db",
      storageBucket: "ellisjalia-db.appspot.com",
      messagingSenderId: "269108432993",
      appId: "1:269108432993:web:93262054eb937faf789a20",
    };

    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const db = firebase.firestore();
    const functions = firebase.app().functions("europe-west2");
    const stripe = Stripe("pk_test_51RHASqEIRcgFdVmxdqinCh52Khs11e9HL2boBXeZrd2gBZaVhOx7vLaNcVELgoJMruZswd8tyjJgx5pyEt3LlOpe005GelRYPh");

    db.enableNetwork().catch(console.error); // Ensure Firestore isn't offline

    const loginForm = document.getElementById("login-form");
    const premium = document.getElementById("premium-content");
    const authSection = document.getElementById("auth-section");

    async function hasPaid(uid) {
      const snap = await db.collection("users").doc(uid).get();
      return snap.exists && snap.data().status === "active";
    }

    async function postLoginFlow(user) {
      authSection.style.display = "none";

      const paid = await hasPaid(user.uid);
      if (paid) {
        premium.style.display = "block";
      } else {
        try {
          document.body.innerHTML = "<p style='text-align:center;'>Redirecting to checkout...</p>";
          const createCheckout = functions.httpsCallable("createCheckoutSession");
          const { data } = await createCheckout({
            successUrl: window.location.origin + "/newsletter?success=true",
            cancelUrl: window.location.origin + "/newsletter?canceled=true"
          });

          if (data?.url) {
            window.location.href = data.url;
          } else {
            alert("Could not start checkout.");
          }
        } catch (err) {
          console.error("Stripe error:", err);
          alert("Checkout failed: " + err.message);
        }
      }
    }

    auth.onAuthStateChanged((user) => {
      if (user) postLoginFlow(user);
    });

    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (err) {
        if (err.code === "auth/user-not-found") {
          try {
            await auth.createUserWithEmailAndPassword(email, password);
          } catch (signupErr) {
            console.error("Signup error:", signupErr);
            alert(signupErr.message);
          }
        } else {
          console.error("Login error:", err);
          alert(err.message);
        }
      }
    });
  });
</script>



