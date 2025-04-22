---
layout: page
permalink: /test-2/
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
    body { font-family: sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
    .container { max-width: 400px; margin: 50px auto; background: #fff; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-radius: 8px; }
    .image-wrapper { text-align: center; margin-bottom: 1rem; }
    .shape { width: 120px; }
    h2 { margin-top: 0; }
    .subtext { color: #555; margin-bottom: 1rem; }
    form input { width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; }
    form button, button { width: 100%; padding: 10px; background: #0070f3; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
    form button:hover, button:hover { background: #005bb5; }
    #paywall-section, #premium-content { display: none; margin-top: 20px; }
  </style>
  <script src="https://js.stripe.com/v3/"></script>
</head>
<body>
  <div class="container">
    <div class="image-wrapper">
      <img class="shape"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/First_stellation_of_dodecahedron.svg/600px-First_stellation_of_dodecahedron.svg.png"
           alt="Stellated dodecahedron">
    </div>
    <h2>If you enjoy my blog, you'll love the membership experience.</h2>
    <p class="subtext">It's £19 per month. Cancel anytime.</p>
    <!-- Login Form -->
    <form id="login-form">
      <input name="email"    type="email"    placeholder="Email"    required>
      <input name="password" type="password" placeholder="Password" required>
      <button type="submit">Log In / Sign Up</button>
    </form>
    <!-- Stripe Paywall -->
    <div id="paywall-section">
      <p>You're logged in. Unlock premium content for £19/month.</p>
      <button id="subscribe-button">Subscribe Now</button>
    </div>
    <!-- Premium Content -->
    <div id="premium-content">
      <h3>Premium Content</h3>
      <p>Here is your exclusive article or media.</p>
    </div>
  </div>

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
      getDoc
    } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
    import {
      getFunctions,
      httpsCallable
    } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js";

    // ─── Firebase Config & Initialization ───────────────────────────────
    const firebaseConfig = {
      apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
      authDomain: "ellisjalia-db.firebaseapp.com",
      projectId: "ellisjalia-db",
      storageBucket: "ellisjalia-db.firebasestorage.app",
      messagingSenderId: "269108432993",
      appId: "1:269108432993:web:93262054eb937faf789a20",
      measurementId: "G-NYXXY0PL56"
    };
    const stripePubKey = "pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC";

    const app       = initializeApp(firebaseConfig);
    const auth      = getAuth(app);
    const db        = getFirestore(app);
    const functions = getFunctions(app, "europe-west2");
    const stripe    = Stripe(stripePubKey);

    // ─── UI Elements ─────────────────────────────────────────────────────
    const loginForm      = document.getElementById("login-form");
    const subscribeBtn   = document.getElementById("subscribe-button");
    const paywallSection = document.getElementById("paywall-section");
    const premiumContent = document.getElementById("premium-content");

    // ─── Check Subscription Status ───────────────────────────────────────
    async function hasPaid(uid) {
      const userDoc = doc(db, "users", uid);
      const snap    = await getDoc(userDoc);
      return snap.exists() && snap.data().status === "active";
    }

    // ─── Auth State Observer ─────────────────────────────────────────────
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

    // ─── Log In or Sign Up Handler ───────────────────────────────────────
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = loginForm.email.value.trim();
      const pass  = loginForm.password.value;
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

    // ─── Stripe Subscribe Button ─────────────────────────────────────────
    subscribeBtn.addEventListener("click", async () => {
      subscribeBtn.disabled = true;
      try {
        const createCheckout = httpsCallable(functions, "createCheckoutSession");
        const { data }       = await createCheckout({
          successUrl: window.location.origin + "?success=true",
          cancelUrl:  window.location.origin + "?canceled=true"
        });
        if (data.url) {
          window.open(data.url, "_blank");
        } else {
          console.error("No Checkout URL returned", data);
          alert("Unable to start checkout.");
        }
      } catch (err) {
        console.error("Checkout error:", err);
        alert("Checkout failed: " + err.message);
      } finally {
        subscribeBtn.disabled = false;
      }
    });

    // ─── Handle Post-Payment Redirect ────────────────────────────────────
    window.addEventListener("load", () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get("success") === "true") {
        auth.currentUser && (() => {
          loginForm.style.display      = "none";
          paywallSection.style.display = "none";
          premiumContent.style.display = "block";
        })();
      }
    });
  </script>
</body>
</html>
