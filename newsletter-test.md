---
layout: page
---

<!-- 🔒 Basic Styling -->
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

<!-- 🔐 Firebase UI Login Container -->
<div id="firebaseui-auth-container"></div>

<!-- 💳 Stripe Paywall -->
<div id="paywall-section">
  <p>You're logged in. Unlock premium content for £19/month.</p>
  <button id="subscribe-button">Subscribe Now</button>
</div>

<!-- ⭐ Premium Content Section -->
<div id="premium-content">
  <h3>Premium Content</h3>
  <p>This is your exclusive members-only content.</p>
</div>

<!-- FirebaseUI + Stripe + Firebase UMD SDKs -->
<link rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js"></script>
<script src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>
<script src="https://js.stripe.com/v3/"></script>

<!-- 🚀 App Logic -->
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
    authDomain: "ellisjalia-db.firebaseapp.com",
    projectId: "ellisjalia-db",
    storageBucket: "ellisjalia-db.firebasestorage.app",
    messagingSenderId: "269108432993",
    appId: "1:269108432993:web:93262054eb937faf789a20",
    measurementId: "G-NYXXY0PL56"
  };

  // Init services
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const functions = firebase.app().functions("europe-west2");
  const stripe = Stripe("pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC");

  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start("#firebaseui-auth-container", {
    signInSuccessUrl: window.location.href,
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  });

  async function hasPaid(uid) {
    try {
      const docRef = db.collection("users").doc(uid);
      const snap = await docRef.get();
      return snap.exists && snap.data().status === "active";
    } catch (e) {
      console.error("Error checking payment status:", e);
      return false;
    }
  }

  auth.onAuthStateChanged(async (user) => {
    const loginBox = document.getElementById("firebaseui-auth-container");
    const paywall = document.getElementById("paywall-section");
    const premium = document.getElementById("premium-content");

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

  document.getElementById("subscribe-button").addEventListener("click", async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first.");
      return;
    }

    try {
      const createCheckout = functions.httpsCallable("createCheckoutSession");
      const { data } = await createCheckout({
        successUrl: window.location.origin + "/newsletter?success=true",
        cancelUrl: window.location.origin + "/newsletter?canceled=true"
      });
      if (data?.url) window.open(data.url, "_blank");
      else alert("Failed to create checkout session.");
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Error: " + err.message);
    }
  });
</script>

<!-- 📃 Footer -->
<p style="font-size:0.7rem;color:grey;text-align:center;margin-top:30px;">
  By continuing, you acknowledge our <a href="https://ellisjalia.com/privacy-policy/" style="color:grey;">Privacy Policy</a>.
</p>
