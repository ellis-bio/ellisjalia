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

<!-- FirebaseUI + Paywall HTML -->
<style>
  #firebaseui-auth-container {
    margin: 60px auto;
    max-width: 400px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: center;
  }
</style>

<div id="firebaseui-auth-container"></div>

<div id="paywall-section" style="max-width: 400px; margin: 40px auto; text-align: center;">
  <p>You're logged in.</p>
  <button id="subscribe-button">Subscribe Now</button>
</div>

<div id="premium-content" style="display:none; max-width: 400px; margin: 40px auto; text-align: center;">
  <h3>Premium Content</h3>
  <p>This is your exclusive members-only content.</p>
</div>

<!-- Firebase & Stripe Scripts -->
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
    const stripe = Stripe("pk_test_51RHASqEIRcgFdVmxdqinCh52Khs11e9HL2boBXeZrd2gBZaVhOx7vLaNcVELgoJMruZswd8tyjJgx5pyEt3LlOpe005GelRYPh");

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    const loginBox = document.getElementById("firebaseui-auth-container");
    const paywall = document.getElementById("paywall-section");
    const premium = document.getElementById("premium-content");
    const subscribeBtn = document.getElementById("subscribe-button");

    async function hasPaid(uid) {
      const snap = await db.collection("users").doc(uid).get();
      return snap.exists && snap.data().status === "active";
    }

    // Handle email link sign-in
    if (auth.isSignInWithEmailLink(window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please enter your email to complete sign-in:");
      }

      auth.signInWithEmailLink(email, window.location.href)
        .then(() => window.localStorage.removeItem("emailForSignIn"))
        .catch((err) => alert("Error signing in: " + err.message));
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

        ui.start("#firebaseui-auth-container", {
          signInOptions: [{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
            emailLinkSignIn: {
              url: window.location.href,
              handleCodeInApp: true
            }
          }],
          credentialHelper: firebaseui.auth.CredentialHelper.NONE,
          callbacks: {
            signInSuccessWithAuthResult: () => false,
            uiShown: () => {
              const emailInput = document.querySelector(".firebaseui-id-email");
              if (emailInput) {
                emailInput.addEventListener("input", (e) => {
                  window.localStorage.setItem("emailForSignIn", e.target.value);
                });
              }
            }
          }
        });
      }
    });

    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", async () => {
        if (!auth.currentUser) {
          alert("Please log in first.");
          return;
        }

        subscribeBtn.disabled = true;

        try {
          const createCheckout = functions.httpsCallable("createCheckoutSession");
          const { data } = await createCheckout({
            successUrl: window.location.origin + "/test?success=true",
            cancelUrl: window.location.origin + "/test?canceled=true",
            uid: auth.currentUser.uid // 🔥 pass user ID
          });

          if (data?.url) {
            window.location.href = data.url;
          } else {
            alert("Could not start checkout.");
          }
        } catch (err) {
          alert("Checkout failed: " + err.message);
        } finally {
          subscribeBtn.disabled = false;
        }
      });
    }
  });
</script>