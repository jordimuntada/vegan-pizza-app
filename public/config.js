//usando etiqueta html script

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDNg3C5Gxf56ea8NmHgC7TXCfNXhFEu0Fs",
    authDomain: "vegan-pizza-map-app.firebaseapp.com",
    projectId: "vegan-pizza-map-app",
    storageBucket: "vegan-pizza-map-app.firebasestorage.app",
    messagingSenderId: "285176441089",
    appId: "1:285176441089:web:9e930a18c77bdba9f05300",
    measurementId: "G-CM9FEG7SJG"
    mapsApiKey: "AIzaSyCdRtHM67qBwUWZMmgncjkU84Ad9cKJpvA"

  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>






//usando npm
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNg3C5Gxf56ea8NmHgC7TXCfNXhFEu0Fs",
  authDomain: "vegan-pizza-map-app.firebaseapp.com",
  projectId: "vegan-pizza-map-app",
  storageBucket: "vegan-pizza-map-app.firebasestorage.app",
  messagingSenderId: "285176441089",
  appId: "1:285176441089:web:9e930a18c77bdba9f05300",
  measurementId: "G-CM9FEG7SJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);