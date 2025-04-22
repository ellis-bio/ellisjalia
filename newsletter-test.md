---
layout: page
---

<!-- 🔒 Minimal Style -->
<style>
  #firebaseui-auth-container {
    margin: 60px auto;
    max-width: 400px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: center;
  }
</style>

<!-- 🔒 FirebaseUI + Premium Paywall -->
<div id="firebaseui-auth-container"></div>

<div id="paywall-section" style="max-width: 400px; margin: 40px auto; text-align: center;">
  <p>You're logged in. Unlock premium content for £19/month.</p>
  <button id="subscribe-button">Subscribe Now</button>
</div>

<div id="premium-content" style="display:none; max-width: 400px; margin: 40px auto; text-align: center;">
  <h3>Premium Content</h3>
  <p>This is your exclusive members-only content.</p>
</div>

<!-- Firebase & FirebaseUI -->
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-functions-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>
<link rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />
<script src="https://js.stripe.com/v3/"></script>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
      authDomain: "ellisjalia-db.firebaseapp.com",
      projectId: "ellisjalia-db",
      storageBucket: "ellisjalia-db.firebasestorage.app",
      messagingSenderId: "269108432993",
      appId: "1:269108432993:web:93262054eb937faf789a20",
      measurementId: "G-NYXXY0PL56"
    };

    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const db = firebase.firestore();
    const functions = firebase.app().functions("europe-west2");
    const stripe = Stripe("pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC");

const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

auth.onAuthStateChanged(async (user) => {
  if (user) {
    loginBox.style.display = "none";
    const paid = await hasPaid(user.uid);
    paywall.style.display = paid ? "none" : "block";
    premium.style.display = paid ? "block" : "none";
  } else {
    loginBox.style.display = "block";
    paywall.style.display = "none";
    premium.style.display = "none";

    ui.start("#firebaseui-auth-container", {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInSuccessUrl: window.location.href
    });
  }
});

    const loginBox = document.getElementById("firebaseui-auth-container");
    const paywall = document.getElementById("paywall-section");
    const premium = document.getElementById("premium-content");
    const subscribeBtn = document.getElementById("subscribe-button");

    async function hasPaid(uid) {
      const snap = await db.collection("users").doc(uid).get();
      return snap.exists && snap.data().status === "active";
    }

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        loginBox.style.display = "none";
        const paid = await hasPaid(user.uid);
        paywall.style.display = paid ? "none" : "block";
        premium.style.display = paid ? "block" : "none";
      } else {
        loginBox.style.display = "block";
        paywall.style.display = "none";
        premium.style.display = "none";
      }
    });

    subscribeBtn.addEventListener("click", async () => {
      if (!auth.currentUser) return alert("Please log in first.");
      subscribeBtn.disabled = true;
      try {
        const createCheckout = functions.httpsCallable("createCheckoutSession");
        const { data } = await createCheckout({
          successUrl: window.location.origin + "/newsletter?success=true",
          cancelUrl: window.location.origin + "/newsletter?canceled=true"
        });
        if (data?.url) window.open(data.url, "_blank");
        else alert("Could not start checkout.");
      } catch (err) {
        console.error("Stripe error:", err);
        alert("Checkout failed: " + err.message);
      } finally {
        subscribeBtn.disabled = false;
      }
    });
  });
</script>


