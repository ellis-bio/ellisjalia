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

<!-- 🔒 Minimal Style -->
<style>
  #firebaseui-auth-container {
    margin: 60px auto;
    max-width: 400px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: center;
  }
</style>

<!-- FirebaseUI login form -->
<div id="firebaseui-auth-container"></div>

<!-- Premium content -->
<div id="auth-controlled-content" style="display: none;">
  <div id="premium-content" style="display: none; max-width: 400px; margin: 40px auto; text-align: center;">
    <h3>Premium Content</h3>
    <p>This is your exclusive members-only content.</p>
  </div>
</div>

<!-- Firebase & Stripe SDKs -->
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-functions-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>
<link rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />
<script src="https://js.stripe.com/v3/"></script>

<!-- 🔧 Paywall Logic -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
      authDomain: "ellisjalia-db.firebaseapp.com",
      projectId: "ellisjalia-db",
      storageBucket: "ellisjalia-db.appspot.com",
      messagingSenderId: "269108432993",
      appId: "1:269108432993:web:93262054eb937faf789a20",
      measurementId: "G-NYXXY0PL56"
    };

    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const db = firebase.firestore();
    db.enableNetwork().catch(console.error); // 🔧 Ensure Firestore is online

    const functions = firebase.app().functions("europe-west2");
    const stripe = Stripe("pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC");

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    const loginBox = document.getElementById("firebaseui-auth-container");
    const premium = document.getElementById("premium-content");
    const contentWrapper = document.getElementById("auth-controlled-content");

    async function hasPaid(uid) {
      try {
        const snap = await db.collection("users").doc(uid).get();
        console.log("📄 Firestore read:", snap.exists, snap.data());
        return snap.exists && snap.data().status === "active";
      } catch (err) {
        console.error("🚨 hasPaid() error:", err);
        return false;
      }
    }

    async function postLoginFlow(user) {
      console.log("🔑 postLoginFlow started for:", user.email);
      loginBox.style.display = "none";

      const paid = await hasPaid(user.uid);
      console.log("💳 hasPaid result:", paid);

      if (paid) {
        premium.style.display = "block";
        contentWrapper.style.display = "block";
        console.log("✅ User is paid. Showing premium content.");
      } else {
        console.log("🚀 User is unpaid. Starting Stripe Checkout…");

        document.body.innerHTML = "<p style='text-align:center;'>Redirecting to checkout...</p>";

        try {
          const createCheckout = functions.httpsCallable("createCheckoutSession");
          const { data } = await createCheckout({
            successUrl: window.location.origin + "/newsletter?success=true",
            cancelUrl: window.location.origin + "/newsletter?canceled=true"
          });

          console.log("✅ Checkout session created:", data);

          if (data?.url) {
            window.location.href = data.url;
          } else {
            alert("Could not start checkout.");
          }
        } catch (err) {
          console.error("🔥 Stripe error:", err);
          alert("Checkout failed: " + err.message);
        }
      }
    }

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        postLoginFlow(user);
      } else {
        loginBox.style.display = "block";
        premium.style.display = "none";
        contentWrapper.style.display = "block";

        ui.start("#firebaseui-auth-container", {
          signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
          signInFlow: "popup",
          callbacks: {
            signInSuccessWithAuthResult: () => false
          }
        });

        // Optional: customize FirebaseUI text
        setTimeout(() => {
          const emailButton = document.querySelector('.firebaseui-idp-text');
          if (emailButton && emailButton.textContent.includes('Sign in with email')) {
            emailButton.textContent = "Sign in or sign up with email";
          }
        }, 100);
      }
    });
  });
</script>
