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

<!-- 🔐 Firebase UI Login Container -->
<div id="firebaseui-auth-container"></div>

<!-- FirebaseUI + Firebase SDKs (UMD format) -->
<link rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>

<!-- 🚀 Basic Login Logic -->
<script>
  console.log("✅ Script started");

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

  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start("#firebaseui-auth-container", {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    signInSuccessUrl: window.location.href,
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  });

  auth.onAuthStateChanged(user => {
    console.log("👤 Auth state changed:", user);
  });
</script>
