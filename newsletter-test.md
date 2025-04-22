---
layout: page
permalink: /newsletter-test/
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
  }
  #firebaseui-auth-container,
  #paywall-section,
  #premium-content {
    display: none;
    margin-top: 20px;
  }
  #subscribe-button {
    padding: 14px 24px;
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }
  #subscribe-button:hover {
    background-color: tomato;
  }
</style>

<div class="form-container">
  <div class="image-wrapper">
    <img class="shape" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/First_stellation_of_dodecahedron.svg/600px-First_stellation_of_dodecahedron.svg.png" alt="Stellated dodecahedron" />
  </div>
  <h2>If you enjoy my blog, you'll love the membership experience.</h2>
  <p class="subtext">It's £19 per month. Cancel anytime.</p>

  <!-- FirebaseUI Auth Widget -->
  <div id="firebaseui-auth-container"></div>

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

<!-- FirebaseUI CSS -->
<link rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />

<!-- Stripe.js -->
<script src="https://js.stripe.com/v3/"></script>

<!-- Module Script: Firebase, FirebaseUI & Stripe Integration -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
  import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js";
  import * as firebaseui from "https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js";

  // ─── Firebase Config ──────────────────────────────────────────────
  const firebaseConfig = {
    apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
    authDomain: "ellisjalia-db.firebaseapp.com",
    projectId: "ellisjalia-db",
    storageBucket: "ellisjalia-db.firebasestorage.app",
    messagingSenderId: "269108432993",
    appId: "1:269108432993:web:93262054eb937faf789a20",
    measurementId: "G-NYXXY0PL56"
  };

  // ─── Initialize Services ──────────────────────────────────────────
  const app       = initializeApp(firebaseConfig);
  const auth      = getAuth(app);
  const db        = getFirestore(app);
  const functions = getFunctions(app, "europe-west2");
  const stripe    = Stripe("pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC");

  // ─── UI References ────────────────────────────────────────────────
  const uiContainer   = document.getElementById("firebaseui-auth-container");
  const paywallSection = document.getElementById("paywall-section");
  const premiumContent = document.getElementById("premium-content");
  const subscribeBtn   = document.getElementById("subscribe-button");

  // ─── FirebaseUI Config & Start ───────────────────────────────────
  const uiConfig = {
    signInSuccessUrl: window.location.href + "?signedIn=true",
    signInOptions: [
      firebaseui.auth.EmailAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  };

  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start("#firebaseui-auth-container", uiConfig);

  // ─── Check Subscription Status ────────────────────────────────────
  async function hasPaid(uid) {
    const snap = await getDoc(doc(db, "users", uid));
    return snap.exists() && snap.data().status === "active";
  }

  // ─── Auth State Observer ─────────────────────────────────────────
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      uiContainer.style.display   = "none";
      const paid                  = await hasPaid(user.uid);
      paywallSection.style.display = paid ? "none"  : "block";
      premiumContent.style.display = paid ? "block" : "none";
    } else {
      uiContainer.style.display   = "block";
      paywallSection.style.display = "none";
      premiumContent.style.display = "none";
    }
  });

  // ─── Subscribe Button Handler ────────────────────────────────────
  subscribeBtn.addEventListener("click", async () => {
    subscribeBtn.disabled = true;
    try {
      const createCheckout = httpsCallable(functions, "createCheckoutSession");
      const { data }       = await createCheckout({
        successUrl: window.location.origin + "?success=true",
        cancelUrl:  window.location.origin + "?canceled=true"
      });
      if (data.url) window.open(data.url, "_blank");
      else alert("Unable to start checkout.");
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Checkout failed: " + err.message);
    } finally {
      subscribeBtn.disabled = false;
    }
  });
</script>

<p style="font-size:0.7rem;color:grey;text-align:center;margin-top:30px;">
  By continuing, you acknowledge our <a href="https://ellisjalia.com/privacy-policy/" style="color:grey;">Privacy Policy</a>.
</p>
