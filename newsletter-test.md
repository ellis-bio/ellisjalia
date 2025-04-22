---
layout: page
permalink: /paywalltest
---

<style>
  #firebaseui-auth-container,
  #paywall-section,
  #premium-content {
    display: none;
    margin: 40px auto;
    max-width: 400px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: center;
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

<div id="firebaseui-auth-container"></div>
<div id="paywall-section">
  <p>You're logged in. Unlock premium content for £19/month.</p>
  <button id="subscribe-button">Subscribe Now</button>
</div>
<div id="premium-content">
  <h3>Premium Content</h3>
  <p>This is your exclusive members-only content.</p>
</div>

<link rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />
<script src="https://js.stripe.com/v3/"></script>
<script src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>

<script type="module">
  document.addEventListener("DOMContentLoaded", async () => {
    console.log("🚀 DOM loaded, initializing Firebase");

    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
    import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
    import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js";

    const firebaseConfig = {
      apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
      authDomain: "ellisjalia-db.firebaseapp.com",
      projectId: "ellisjalia-db",
      storageBucket: "ellisjalia-db.firebasestorage.app",
      messagingSenderId: "269108432993",
      appId: "1:269108432993:web:93262054eb937faf789a20",
      measurementId: "G-NYXXY0PL56"
    };

    const app       = initializeApp(firebaseConfig);
    const auth      = getAuth(app);
    const db        = getFirestore(app);
    const functions = getFunctions(app, "europe-west2");
    const stripe    = Stripe("pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC");

    const uiContainer    = document.getElementById("firebaseui-auth-container");
    const paywallSection = document.getElementById("paywall-section");
    const premiumContent = document.getElementById("premium-content");
    const subscribeBtn   = document.getElementById("subscribe-button");

    console.log("✅ Firebase initialized");

    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: window.location.href,
      signInOptions: [firebaseui.auth.EmailAuthProvider.PROVIDER_ID],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    });

    async function hasPaid(uid) {
      try {
        const snap = await getDoc(doc(db, "users", uid));
        return snap.exists() && snap.data().status === "active";
      } catch (e) {
        console.error("❌ Error checking payment status:", e);
        return false;
      }
    }

    onAuthStateChanged(auth, async (user) => {
      console.log("👤 Auth state changed:", user);
      if (user) {
        uiContainer.style.display = "none";
        const paid = await hasPaid(user.uid);
        paywallSection.style.display = paid ? "none" : "block";
        premiumContent.style.display = paid ? "block" : "none";
      } else {
        uiContainer.style.display = "block";
        paywallSection.style.display = "none";
        premiumContent.style.display = "none";
      }
    });

    subscribeBtn?.addEventListener("click", async () => {
      console.log("🛒 Subscribe button clicked");
      if (!auth.currentUser) {
        alert("Please log in first.");
        return;
      }
      subscribeBtn.disabled = true;
      try {
        const createCheckout = httpsCallable(functions, "createCheckoutSession");
        const { data } = await createCheckout({
          successUrl: window.location.origin + "/newsletter?success=true",
          cancelUrl: window.location.origin + "/newsletter?canceled=true"
        });
        if (data?.url) {
          console.log("➡️ Redirecting to checkout...");
          window.open(data.url, "_blank");
        } else {
          alert("Unable to start checkout.");
        }
      } catch (err) {
        console.error("❌ Checkout error:", err);
        alert("Checkout failed: " + err.message);
      } finally {
        subscribeBtn.disabled = false;
      }
    });
  });
</script>

<p style="font-size:0.7rem;color:grey;text-align:center;margin-top:30px;">
  By continuing, you acknowledge our <a href="https://ellisjalia.com/privacy-policy/" style="color:grey;">Privacy Policy</a>.
</p>
