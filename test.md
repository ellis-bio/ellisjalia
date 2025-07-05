---
layout: page
permalink: /paywall-test/
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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter Paywall</title>
</head>
<body>
<!-- FirebaseUI + Paywall HTML -->
<style>
  #firebaseui-auth-container {
    margin: 60px auto;
    max-width: 400px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: center;
  }
  .error-message {
    color: #d32f2f;
    background: #ffebee;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    font-size: 14px;
  }
  .loading {
    opacity: 0.6;
    pointer-events: none;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<div id="error-container"></div>
<div id="firebaseui-auth-container"></div>

<div id="paywall-section" style="max-width: 400px; margin: 40px auto; text-align: center; display: none;">
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
      storageBucket: "ellisjalia-db.appspot.com", // Fixed storage bucket
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
    const errorContainer = document.getElementById("error-container");

    // Enable Firestore network connection
    db.enableNetwork().catch(error => {
      console.error("Firestore network error:", error);
      showError("Database connection failed. Please refresh the page.");
    });

    // Error display function
    function showError(message) {
      errorContainer.innerHTML = `<div class="error-message">${message}</div>`;
      setTimeout(() => {
        errorContainer.innerHTML = "";
      }, 5000);
    }

    // Fixed hasPaid function with error handling
    async function hasPaid(uid) {
      try {
        const snap = await db.collection("users").doc(uid).get();
        return snap.exists && snap.data().status === "active";
      } catch (error) {
        console.error("Error checking subscription status:", error);
        showError("Error checking subscription status. Please try again.");
        return false;
      }
    }

    // Handle email link sign-in - moved inside auth state change
    async function handleEmailLinkSignIn() {
      if (auth.isSignInWithEmailLink(window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please enter your email to complete sign-in:");
        }

        if (email) {
          try {
            await auth.signInWithEmailLink(email, window.location.href);
            window.localStorage.removeItem("emailForSignIn");
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);
          } catch (error) {
            console.error("Email link sign-in error:", error);
            showError("Error signing in: " + error.message);
          }
        }
      }
    }

    // Auth state change handler
    auth.onAuthStateChanged(async (user) => {
      // Handle email link sign-in after auth is initialized
      if (!user) {
        await handleEmailLinkSignIn();
      }

      if (user) {
        loginBox.style.display = "none";
        
        try {
          const paid = await hasPaid(user.uid);
          paywall.style.display = paid ? "none" : "block";
          premium.style.display = paid ? "block" : "none";
        } catch (error) {
          // Error already handled in hasPaid function
          paywall.style.display = "block";
          premium.style.display = "none";
        }
      } else {
        loginBox.style.display = "block";
        paywall.style.display = "none";
        premium.style.display = "none";

        // Initialize auth UI
        ui.start("#firebaseui-auth-container", {
          signInOptions: [{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
            emailLinkSignIn: {
              url: window.location.origin + window.location.pathname,
              handleCodeInApp: true
            }
          }],
          credentialHelper: firebaseui.auth.CredentialHelper.NONE,
          callbacks: {
            signInSuccessWithAuthResult: () => false,
            uiShown: () => {
              // Store email for sign-in link
              const emailInput = document.querySelector(".firebaseui-id-email");
              if (emailInput) {
                const handleEmailInput = (e) => {
                  window.localStorage.setItem("emailForSignIn", e.target.value);
                };
                
                // Remove existing listener to prevent duplicates
                emailInput.removeEventListener("input", handleEmailInput);
                emailInput.addEventListener("input", handleEmailInput);
              }
            }
          }
        });
      }
    });

    // Subscribe button event listener
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", async () => {
        if (!auth.currentUser) {
          showError("Please log in first.");
          return;
        }

        subscribeBtn.disabled = true;
        subscribeBtn.textContent = "Loading...";

        try {
          const createCheckout = functions.httpsCallable("createCheckoutSession");
          const { data } = await createCheckout({
            successUrl: window.location.origin + window.location.pathname + "?success=true",
            cancelUrl: window.location.origin + window.location.pathname + "?canceled=true",
            uid: auth.currentUser.uid
          });

          if (data?.url) {
            window.location.href = data.url;
          } else {
            showError("Could not start checkout. Please try again.");
          }
        } catch (error) {
          console.error("Checkout error:", error);
          showError("Checkout failed: " + error.message);
        } finally {
          subscribeBtn.disabled = false;
          subscribeBtn.textContent = "Subscribe Now";
        }
      });
    }

    // Handle URL parameters for success/cancel
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      showError("Payment successful! Your subscription is now active.");
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (urlParams.get('canceled') === 'true') {
      showError("Payment canceled. You can subscribe at any time.");
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  });
</script>