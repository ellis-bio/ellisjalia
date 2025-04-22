---
layout: page
---
<center>
<hr width="100%" size="3">
<div class="container">
  <a href="https://ellisjalia.com"><img src="/assets/icons/menu-bw.png" style="width:43px;height:43px;display:inline-block;margin:0 8px;padding:2px;"/></a>
  <a href="https://ellisjalia.com/essays"><img src="/assets/icons/quill-bw.png" style="width:43px;height:43px;display:inline-block;margin:0 8px;padding:2px;"/></a>
  <a href="https://ellisjalia.com/art"><img src="/assets/icons/paint-palette-bw.png" style="width:43px;height:43px;display:inline-block;margin:0 8px;padding:2px;"/></a>
  <a href="https://ellisjalia.com/newsletter"><img src="/assets/icons/newsletter.png" style="width:43px;height:43px;display:inline-block;margin:0 8px;padding:2px;"/></a>
  <a href="https://ellisjalia.com/about"><img src="/assets/icons/unknown-bw.png" style="width:43px;height:43px;display:inline-block;margin:0 8px;padding:2px;"/></a>
</div>
<hr width="100%" size="3">
</center>

<style>
  .form-container { background-color: #F4F6F6; padding: 30px; border-radius: 16px; max-width: 380px; margin: 60px auto; text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .image-wrapper { display: flex; justify-content: center; align-items: center; height: 100px; margin-bottom: 16px; }
  .form-container img.shape { width: 80px; display: inline-block; }
  .form-container h2 { margin-bottom: 8px; font-size: 22px; color: #333; line-height: 1.4; }
  .form-container p.subtext { font-size: 16px; color: #555; margin-bottom: 20px; }
  #login-form { display: flex; flex-direction: column; gap: 15px; }
  #login-form input { padding: 12px 16px; border-radius: 8px; border: 1px solid #ccc; width: 100%; font-size: 16px; }
  #login-form button,
  #subscribe-button { padding: 14px 24px; border-radius: 10px; border: none; background-color: black; color: white;
    font-size: 16px; cursor: pointer; transition: background-color 0.3s ease; width: 100%; }
  #login-form button:hover,
  #subscribe-button:hover { background-color: tomato; }
  #paywall-section, #premium-content { display: none; margin-top: 20px; }
</style>

<div class="form-container">
  <div class="image-wrapper">
    <img class="shape" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/First_stellation_of_dodecahedron.svg/600px-First_stellation_of_dodecahedron.svg.png" alt="Stellated dodecahedron" />
  </div>
  <h2>If you enjoy my blog, you'll love the membership experience.</h2>
  <p class="subtext">It's £19 per month. Cancel anytime.</p>

  <form id="login-form">
    <input type="email" id="email" placeholder="Email" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Log In / Sign Up</button>
  </form>

  <div id="paywall-section">
    <p>You're logged in. Unlock premium content for £19/month.</p>
    <button id="subscribe-button">Subscribe Now</button>
  </div>

  <div id="premium-content">
    <h3>Premium Content</h3>
    <p>Testing premium content.</p>
  </div>
</div>

<script src="https://js.stripe.com/v3/"></script>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
  import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js";

  // Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
    authDomain: "ellisjalia-db.firebaseapp.com",
    projectId: "ellisjalia-db",
    storageBucket: "ellisjalia-db.firebasestorage.app",
    messagingSenderId: "269108432993",
    appId: "1:269108432993:web:93262054eb937faf789a20",
    measurementId: "G-NYXXY0PL56"
  };
  // Initialize Firebase & Stripe
  const app       = initializeApp(firebaseConfig);
  const auth      = getAuth(app);
  const db        = getFirestore(app);
  const functions = getFunctions(app, "europe-west2");
  const stripe    = Stripe("pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC");

  // UI refs
  const loginForm      = document.getElementById("login-form");
  const emailInput     = document.getElementById("email");
  const passwordInput  = document.getElementById("password");
  const subscribeBtn   = document.getElementById("subscribe-button");
  const paywallSection = document.getElementById("paywall-section");
  const premiumContent = document.getElementById("premium-content");

  async function hasPaid(uid) {
    const snap = await getDoc(doc(db, "users", uid));
    return snap.exists() && snap.data().status === "active";
  }

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      loginForm.style.display      = "none";
      const paid                   = await hasPaid(user.uid);
      paywallSection.style.display = paid ? "none"  : "block";
      premiumContent.style.display = paid ? "block" : "none";
    } else {
      loginForm.style.display      = "block";
      paywallSection.style.display = "none";
      premiumContent.style.display = "none";
    }
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const pass  = passwordInput.value;
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        await createUserWithEmailAndPassword(auth, email, pass);
      } else {
        alert("Auth error: " + err.message);
      }
    }
  });

  subscribeBtn.addEventListener("click", async () => {
    subscribeBtn.disabled = true;
    try {
      const { data } = await httpsCallable(functions, "createCheckoutSession")({
        successUrl: window.location.origin + "?success=true",
        cancelUrl:  window.location.origin + "?canceled=true"
      });
      data.url ? window.open(data.url, "_blank") : alert("Unable to start checkout.");
    } catch (err) {
      console.error(err);
      alert("Checkout failed: " + err.message);
    } finally {
      subscribeBtn.disabled = false;
    }
  });

  window.addEventListener("load", () => {
    if (new URLSearchParams(window.location.search).get("success") === "true" && auth.currentUser) {
      loginForm.style.display      = "none";
      paywallSection.style.display = "none";
      premiumContent.style.display = "block";
    }
  });
</script>

<p style="font-size:0.7rem;color:grey;text-align:center;margin-top:-3rem;">
  By continuing, you acknowledge our <a href="https://ellisjalia.com/privacy-policy/" style="color:grey;">Privacy Policy</a>.
</p>