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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Newsletter Paywall</title>
  <style>
    .form-container { max-width: 400px; margin: auto; padding: 1rem; }
    .image-wrapper { text-align: center; margin-bottom: 1rem; }
    .shape { width: 120px; }
    .subtext { color: #555; }
    #paywall-section, #premium-content { display: none; margin-top: 20px; }
  </style>
  <!-- Stripe.js -->
  <script src="https://js.stripe.com/v3/"></script>
  <!-- Firebase v10 modular -->
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
    import {
      getAuth,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword
    } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
    import {
      getFirestore,
      doc,
      getDoc,
      collection,
      addDoc
    } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
    import {
      getFunctions,
      httpsCallable
    } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js";
    // ─── Your Firebase Config ──────────────────────────────────────────────
    const firebaseConfig = {
      apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
      authDomain: "ellisjalia-db.firebaseapp.com",
      projectId: "ellisjalia-db",
      storageBucket: "ellisjalia-db.firebasestorage.app",
      messagingSenderId: "269108432993",
      appId: "1:269108432993:web:93262054eb937faf789a20",
      measurementId: "G-NYXXY0PL56"
    };
    // ─── Initialize Firebase & Services ────────────────────────────────────
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const functions = getFunctions(app, "europe-west2");
    const stripe = Stripe("pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC");
    // ─── UI References ─────────────────────────────────────────────────────
    const loginForm      = document.getElementById("login-form");
    const subscribeBtn   = document.getElementById("subscribe-button");
    const paywallSection = document.getElementById("paywall-section");
    const premiumContent = document.getElementById("premium-content");
    // ─── Helper: Has User Paid? ─────────────────────────────────────────────
    async function hasPaid(uid) {
      const userDoc = doc(db, "users", uid);
      const snap     = await getDoc(userDoc);
      return snap.exists() && snap.data().status === "active";
    }
    // ─── Auth State Observer ───────────────────────────────────────────────
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        loginForm.style.display      = "none";
        const paid                   = await hasPaid(user.uid);
        paywallSection.style.display = paid ? "none" : "block";
        premiumContent.style.display = paid ? "block" : "none";
      } else {
        loginForm.style.display      = "block";
        paywallSection.style.display = "none";
        premiumContent.style.display = "none";
      }
    });
    // ─── Log In or Sign Up ─────────────────────────────────────────────────
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();  // ← prevents full‑page reload
      const email = loginForm.email.value.trim();
      const pass  = loginForm.password.value;
      try {
        await signInWithEmailAndPassword(auth, email, pass);
      } catch (err) {
        if (err.code === "auth/user-not-found") {
          await createUserWithEmailAndPassword(auth, email, pass);
        } else {
          return alert("Auth error: " + err.message);
        }
      }
    });
    // ─── Subscribe Button (Stripe Checkout) ────────────────────────────────
    subscribeBtn.addEventListener("click", async () => {
      subscribeBtn.disabled = true;
      try {
        const createCheckout = httpsCallable(functions, "createCheckoutSession");
        const { data }       = await createCheckout({
          // let your function handle these URLs
          successUrl: window.location.origin + "/?success=true",
          cancelUrl:  window.location.origin + "/?canceled=true"
        });
        // If your function returns a full URL, open it in a new tab:
        if (data.url) {
          window.open(data.url, "_blank");
        } else if (data.sessionId) {
          // fallback to redirect in same tab
          await stripe.redirectToCheckout({ sessionId: data.sessionId });
        } else {
          throw new Error("Invalid Checkout response");
        }
      } catch (err) {
        console.error("Checkout error:", err);
        alert("Unable to start checkout: " + err.message);
      } finally {
        subscribeBtn.disabled = false;
      }
    });
    // ─── Post‑Payment UI Tweak ─────────────────────────────────────────────
    window.addEventListener("load", () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get("success") === "true") {
        // make sure user is signed in
        const user = auth.currentUser;
        if (user) {
          loginForm.style.display      = "none";
          paywallSection.style.display = "none";
          premiumContent.style.display = "block";
        }
      }
    });
  </script>
</head>

<body>
  <div class="form-container">
    <div class="image-wrapper">
      <img class="shape"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/First_stellation_of_dodecahedron.svg/600px-First_stellation_of_dodecahedron.svg.png"
           alt="Stellated dodecahedron" />
    </div>
    <h2>If you enjoy my blog, you'll love the membership experience.</h2>
    <p class="subtext">It's £19 per month. Cancel anytime.</p>
    <!-- Login Form -->
    <form id="login-form">
      <input name="email"    type="email"    placeholder="Email"    required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Log In or Sign Up</button>
    </form>
    <!-- Stripe Paywall -->
    <div id="paywall-section">
      <p>You're logged in. Unlock premium content for £19/month.</p>
      <button id="subscribe-button">Subscribe Now</button>
    </div>
    <!-- Premium Content -->
    <div id="premium-content">
      <h3>Premium Content</h3>
      <p>Testing premium content.</p>
    </div>
  </div>
</body>
</html>

<p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 0.7rem; color: grey; text-align: center; margin-top: -3rem;">
  By continuing, you acknowledge our <a href="https://ellisjalia.com/privacy-policy/" style="color: grey; text-decoration: underline;">Privacy Policy</a>.
</p>

<p style="text-align:center; color: blue; margin-top:0;">
  Sign ups are currently restricted due to a server-side issue. Please check back later for more information.
</p>

