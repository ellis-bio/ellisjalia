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

<!-- Minimal Style -->
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

<!-- Premium content wrapper -->
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

<!-- Paywall Logic -->
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

    db.enableNetwork().catch(console.error);

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    const loginBox = document.getElementById("firebaseui-auth-container");
    const premium = document.getElementById("premium-content");
    const contentWrapper = document.getElementById("auth-controlled-content");

    async function hasPaid(uid) {
      try {
        const snap = await db.collection("users").doc(uid).get();
        console.log("📄 Firestore user status:", snap.exists, snap.data());
        return snap.exists && snap.data().status === "active";
      } catch (err) {
        console.error("🚨 hasPaid() error:", err);
        return false;
      }
    }

    async function postLoginFlow(user) {
      loginBox.style.display = "none";

      const paid = await hasPaid(user.uid);
      if (paid) {
        premium.style.display = "block";
        contentWrapper.style.display = "block";
        console.log("✅ User is paid. Showing premium content.");
      } else {
        console.log("🚀 User is unpaid. Redirecting to Stripe Checkout...");
        document.body.innerHTML = "<p style='text-align:center;'>Redirecting to checkout...</p>";

        try {
          const createCheckout = functions.httpsCallable("createCheckoutSession");
          const { data } = await createCheckout({
            successUrl: window.location.origin + "/test",
            cancelUrl: window.location.origin + "/"
          });

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

    auth.onAuthStateChanged((user) => {
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
            uiShown: () => {
              // Optional: relabel the login button
              setTimeout(() => {
                const label = document.querySelector('.firebaseui-title');
                if (label && label.textContent.includes('Sign in with email')) {
                  label.textContent = 'Sign in or sign up with email';
                }
              }, 100);
            },
            signInSuccessWithAuthResult: () => false
          }
        });
      }
    });
  });
</script>


