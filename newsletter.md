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

<!-- Styles -->
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
    font-weight: normal;
  }

  #login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  #login-form input {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 16px;
  }

  #login-form button {
    padding: 14px 24px;
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  #login-form button:hover {
    background-color: tomato;
  }
</style>

<!-- Paywall Container -->
<div class="form-container">
  <div class="image-wrapper">
    <img class="shape" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/First_stellation_of_dodecahedron.svg/600px-First_stellation_of_dodecahedron.svg.png" alt="Stellated dodecahedron" />
  </div>
  <h2>If you enjoy my blog, you'll love the membership experience.</h2>
  <p class="subtext">It's £19 per month. Cancel anytime.</p>

  <!-- Login Form -->
  <form id="login-form">
    <input type="email" id="email" placeholder="Email" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Log In or Sign Up</button>
  </form>

  <!-- Stripe Paywall -->
  <div id="paywall-section" style="display: none; margin-top: 20px;">
    <p>You're logged in. Unlock premium content for £19/month.</p>
    <button id="subscribe-button">Subscribe Now</button>
  </div>

  <!-- Premium Content -->
  <div id="premium-content" style="display: none; margin-top: 20px;">
    <h3>Premium Content</h3>
    <p>Testing premium content.</p>
  </div>
</div>

<!-- Firebase & Stripe SDKs -->
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"></script>
<script src="https://js.stripe.com/v3/"></script>

<!-- Your Login + Paywall Logic -->
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDLRxkrPfPbskX2kyNgNMk4MDg-5volGTI",
    authDomain: "ellisjalia-db.firebaseapp.com",
    projectId: "ellisjalia-db",
    appId: "1:269108432993:web:93262054eb937faf789a20"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const stripe = Stripe("pk_live_51QNBnKEEjZULKoNrdlW6uTVgvy0T3pss5P07c1vFtEhLIncQtHLXcRAoT7Nea2PfdfrK3hmd1YwHE9dK1aentQdf00BB9B0YGC");

  const loginForm = document.getElementById("login-form");
  const subscribeButton = document.getElementById("subscribe-button");
  const paywallSection = document.getElementById("paywall-section");
  const premiumContent = document.getElementById("premium-content");

  const hasPaid = async (uid) => {
    const doc = await db.collection('users').doc(uid).get();
    return doc.exists && doc.data().status === 'active';
  };

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const paid = await hasPaid(user.uid);
      loginForm.style.display = "none";
      paywallSection.style.display = paid ? "none" : "block";
      premiumContent.style.display = paid ? "block" : "none";
    } else {
      loginForm.style.display = "block";
    }
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    try {
      await auth.signInWithEmailAndPassword(email, pass);
      console.log("Logged in");
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        await auth.createUserWithEmailAndPassword(email, pass);
        const user = auth.currentUser;
        await db.collection("users").doc(user.uid).set({
          email: user.email,
          status: "unpaid"
        });
        console.log("User signed up and added to Firestore");
      } else {
        alert("Login error: " + err.message);
      }
    }
  });

  subscribeButton.addEventListener("click", async () => {
    try {
      const functions = firebase.app().functions("europe-west2");
      const createCheckout = functions.httpsCallable("createCheckoutSession");
      const result = await createCheckout();
      localStorage.setItem("postPaymentRedirect", "true");
      await stripe.redirectToCheckout({ sessionId: result.data.sessionId });
    } catch (err) {
      console.error("Stripe error:", err);
      alert("Checkout failed. Please try again.");
    }
  });

  if (window.location.href.includes("success")) {
    const user = auth.currentUser;
    if (user && localStorage.getItem("postPaymentRedirect")) {
      localStorage.removeItem("postPaymentRedirect");
      loginForm.style.display = "none";
      paywallSection.style.display = "none";
      premiumContent.style.display = "block";
    }
  }
</script>

<!-- Footer & Notice -->
<p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 0.7rem; color: grey; text-align: center; margin-top: -3rem;">
  By continuing, you acknowledge our <a href="https://ellisjalia.com/privacy-policy/" style="color: grey; text-decoration: underline;">Privacy Policy</a>.
</p>

<p style="text-align:center; color: blue; margin-top:0;">
  Sign ups are currently restricted due to a server-side issue. Please check back later for more information.
</p>
