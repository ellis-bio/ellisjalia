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
  
  <!-- Minimal, reusable styles -->
  <style>
    :root {
      --max-width: 420px;
      --spacing: 2rem;
      --font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    }
          
    body {
      margin: 0;
      font-family: var(--font-stack);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 100vh;
      padding: var(--spacing) 1rem;
      box-sizing: border-box;
    }

    #firebaseui-auth-container,
    #premium-content {
      width: 100%;
      max-width: var(--max-width);
      text-align: center;
    }

    .hidden {
      display: none !important;
    }

    #loader {
      margin-top: var(--spacing);
    }
  </style>

  <!-- FirebaseUI core CSS -->
  <link
    rel="stylesheet"
    href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css"
  />
</head>
<body>
  <!-- Login -->
  <div id="firebaseui-auth-container" class="hidden"></div>

  <!-- Premium Content -->
  <section id="premium-content" class="hidden">
    <h3>Premium Content</h3>
    <p>This is your exclusive members‑only content.</p>
  </section>

  <!-- Simple loader -->
  <p id="loader">Loading…</p>

  <!-- Firebase & Stripe SDKs -->
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-functions-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>
  <script src="https://js.stripe.com/v3/"></script>

  <script>
    (function init() {
      /** ---------------------------------------------
       * 1️⃣  Firebase initialisation
       * ------------------------------------------ */
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

      /** ---------------------------------------------
       * 2️⃣  Stripe initialisation (client‑side)
       *      ⚠️  Replace with live pub key in prod
       * ------------------------------------------ */
      const stripe = Stripe(
        "pk_test_51RHASqEIRcgFdVmxdqinCh52Khs11e9HL2boBXeZrd2gBZaVhOx7vLaNcVELgoJMruZswd8tyjJgx5pyEt3LlOpe005GelRYPh"
      );

      /** ---------------------------------------------
       * 3️⃣  DOM helpers
       * ------------------------------------------ */
      const $loginBox = document.getElementById("firebaseui-auth-container");
      const $premium = document.getElementById("premium-content");
      const $loader = document.getElementById("loader");

      const show = (el) => el.classList.remove("hidden");
      const hide = (el) => el.classList.add("hidden");

      /** ---------------------------------------------
       * 4️⃣  FirebaseUI configuration
       * ------------------------------------------ */
      const ui =
        firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

      const uiConfig = {
        signInFlow: "popup",
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
        credentialHelper: firebaseui.auth.CredentialHelper.NONE, // No Google Smart Lock pop‑ups
        callbacks: {
          uiShown: () => hide($loader),
          signInSuccessWithAuthResult: () => false, // Prevent redirect
        },
      };

      /** ---------------------------------------------
       * 5️⃣  Helper – check paid status in Firestore
       * ------------------------------------------ */
      const hasPaid = async (uid) => {
        try {
          const snap = await db.collection("users").doc(uid).get();
          return snap.exists && snap.data()?.status === "active";
        } catch (error) {
          console.error("❌ hasPaid error", error);
          return false;
        }
      };

      /** ---------------------------------------------
       * 6️⃣  Handle auth state changes
       * ------------------------------------------ */
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // Logged in: hide login, show loader while we check payment
          hide($loginBox);
          show($loader);

          const paid = await hasPaid(user.uid);

          if (paid) {
            hide($loader);
            show($premium);
            console.info("✅ User is paid – showing premium content");
          } else {
            console.info("💸 Unpaid – creating Stripe Checkout session");
            try {
              const createCheckout = functions.httpsCallable(
                "createCheckoutSession"
              );
              const { data } = await createCheckout({
                successUrl: `${window.location.origin}/premium`, // Adjust as needed
                cancelUrl: `${window.location.origin}/`,
              });

              if (data?.url) {
                window.location.assign(data.url);
              } else {
                throw new Error("No checkout URL returned");
              }
            } catch (error) {
              console.error("🔥 Stripe Checkout error", error);
              alert(`Checkout failed: ${error.message}`);
              auth.signOut();
            }
          }
        } else {
          // Logged out: show login widget
          hide($premium);
          hide($loader);
          show($loginBox);
          ui.start("#firebaseui-auth-container", uiConfig);
        }
      });
    })();
  </script>
</body>
</html>



