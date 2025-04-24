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

<!-- Improved Paywall Implementation -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter Subscription - ellisjalia.com</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .container {
      margin: 40px auto;
      max-width: 500px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      padding: 30px;
      background: #fff;
    }
    h2 {
      margin-top: 0;
      color: #222;
    }
    .btn {
      background: #4285f4;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s ease;
      display: inline-block;
      margin-top: 10px;
    }
    .btn:hover {
      background: #3367d6;
    }
    .btn-outline {
      background: transparent;
      color: #4285f4;
      border: 1px solid #4285f4;
    }
    .btn-outline:hover {
      background: #f1f5ff;
    }
    .loading {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,255,255,.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .error {
      background: #ffebee;
      color: #c62828;
      padding: 12px;
      border-radius: 4px;
      margin: 10px 0;
    }
    .success {
      background: #e8f5e9;
      color: #2e7d32;
      padding: 12px;
      border-radius: 4px;
      margin: 10px 0;
    }
    #firebaseui-auth-container {
      margin-top: 20px;
    }
    .premium-content {
      margin-top: 30px;
      padding: 20px;
      background: #f9f9f9;
      border-radius: 8px;
    }
    .logout-link {
      display: block;
      margin-top: 20px;
      color: #666;
      text-decoration: underline;
      cursor: pointer;
    }
    .status-badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
      background: #e0f2f1;
      color: #00796b;
      margin-bottom: 10px;
    }
  </style>

  <!-- Firebase & Stripe SDKs -->
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth-compat.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/10.8.1/firebase-functions-compat.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>
  <link rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />
  <script defer src="https://js.stripe.com/v3/"></script>
</head>
<body>
  <div class="container">
    <h2>Ellisjalia Newsletter</h2>
    <!-- Status display area -->
    <div id="status-area"></div>
    <!-- Firebase Auth Container -->
    <div id="firebaseui-auth-container"></div>
    <!-- Premium Content -->
    <div id="premium-content" style="display: none;">
      <div class="status-badge">Premium Member</div>
      <h3>Exclusive Content</h3>
      <div class="premium-content">
        <p>Welcome to your exclusive members-only content. Thank you for supporting Ellisjalia Newsletter!</p>
        <!-- Your premium content here -->
      </div>
      <a class="logout-link" id="logout-button">Sign out</a>
    </div>
    <!-- Subscription Area -->
    <div id="subscription-area" style="display: none;">
      <p>Subscribe to access premium content and exclusive features.</p>
      <button id="subscribe-button" class="btn">Subscribe Now</button>
    </div>
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // Status display functions
      function showStatus(message, type = 'info') {
        const statusArea = document.getElementById('status-area');
        statusArea.innerHTML = `<div class="${type}">${message}</div>`;
      }
      
      function showLoading(message = 'Please wait...') {
        showStatus(`<div class="loading"></div> ${message}`, 'info');
      }
      
      // Initialize Firebase
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
      let db, functions, stripe, ui;
      
      // Enable persistent login
      auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(error => {
          console.error("Auth persistence error:", error);
          showStatus("Login persistence error: " + error.message, 'error');
        });
      
      // Load deferred libraries
      function loadDeferredLibraries() {
        db = firebase.firestore();
        functions = firebase.app().functions("europe-west2");
        stripe = Stripe("pk_test_51RHASqEIRcgFdVmxdqinCh52Khs11e9HL2boBXeZrd2gBZaVhOx7vLaNcVELgoJMruZswd8tyjJgx5pyEt3LlOpe005GelRYPh");
        ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        
        db.enableNetwork().catch(error => {
          console.error("Database connection error:", error);
          showStatus("Database connection error. Please refresh and try again.", 'error');
        });
        
        // Set up logout button handler
        document.getElementById('logout-button').addEventListener('click', () => {
          auth.signOut()
            .then(() => {
              showStatus("You have been signed out.", 'success');
            })
            .catch(error => {
              console.error("Sign out error:", error);
              showStatus("Error signing out: " + error.message, 'error');
            });
        });
        
        // Set up subscription button handler
        document.getElementById('subscribe-button').addEventListener('click', startCheckout);
      }
      
      // Check if user has an active subscription
      async function checkSubscriptionStatus(uid) {
        try {
          const snap = await db.collection("users").doc(uid).get();
          return snap.exists && snap.data().status === "active";
        } catch (error) {
          console.error("Subscription check error:", error);
          showStatus("Error checking subscription: " + error.message, 'error');
          return false;
        }
      }
      
      // Start Stripe checkout process
      async function startCheckout() {
        showLoading("Preparing checkout...");
        
        try {
          const createCheckout = functions.httpsCallable("createCheckoutSession");
          const { data } = await createCheckout({
            successUrl: window.location.origin + "/newsletter?success=true",
            cancelUrl: window.location.origin + "/newsletter?canceled=true"
          });
          
          if (data?.url) {
            window.location.href = data.url;
          } else {
            showStatus("Could not start checkout process.", 'error');
          }
        } catch (error) {
          console.error("Checkout error:", error);
          showStatus("Checkout error: " + error.message, 'error');
        }
      }
      
      // Handle authenticated user
      async function handleAuthenticatedUser(user) {
        showLoading("Checking your subscription...");
        
        // Ensure libraries are loaded
        if (!db) {
          await new Promise(resolve => {
            const checkInterval = setInterval(() => {
              if (db) {
                clearInterval(checkInterval);
                resolve();
              }
            }, 100);
          });
        }
        
        // Check subscription status
        const isSubscribed = await checkSubscriptionStatus(user.uid);
        
        if (isSubscribed) {
          // Show premium content
          document.getElementById('premium-content').style.display = 'block';
          document.getElementById('subscription-area').style.display = 'none';
          document.getElementById('firebaseui-auth-container').style.display = 'none';
          document.getElementById('status-area').style.display = 'none';
        } else {
          // Show subscription options
          document.getElementById('premium-content').style.display = 'none';
          document.getElementById('subscription-area').style.display = 'block';
          document.getElementById('firebaseui-auth-container').style.display = 'none';
          showStatus(`Welcome, ${user.email}! Subscribe to access premium content.`, 'info');
        }
      }
      
      // Initialize auth UI
      function initializeAuthUI() {
        showStatus("Sign in or create an account to continue", 'info');
        
        ui.start('#firebaseui-auth-container', {
          signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
          signInFlow: 'popup',
          callbacks: {
            signInSuccessWithAuthResult: () => false
          }
        });
        
        // Custom auth UI labels
        setTimeout(() => {
          const titleElements = document.querySelectorAll('.firebaseui-title');
          titleElements.forEach(el => {
            if (el.textContent.includes('Sign in with email')) {
              el.textContent = 'Sign in or create an account';
            }
          });
        }, 100);
      }
      
      // Handle URL parameters
      function handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.get('success') === 'true') {
          showStatus("Payment successful! Your subscription is now active.", 'success');
        } else if (urlParams.get('canceled') === 'true') {
          showStatus("Payment canceled. You can subscribe at any time.", 'info');
        }
      }
      
      // Auth state change listener
      auth.onAuthStateChanged(user => {
        if (!db) {
          loadDeferredLibraries();
        }
        
        handleUrlParams();
        
        if (user) {
          handleAuthenticatedUser(user);
        } else {
          document.getElementById('premium-content').style.display = 'none';
          document.getElementById('subscription-area').style.display = 'none';
          document.getElementById('firebaseui-auth-container').style.display = 'block';
          
          if (ui) {
            initializeAuthUI();
          } else {
            // Wait for UI to load
            const uiCheckInterval = setInterval(() => {
              if (ui) {
                clearInterval(uiCheckInterval);
                initializeAuthUI();
              }
            }, 100);
          }
        }
      });
    });
  </script>
</body>
</html>


