// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD27vqbgqJICyK5qi-pATPV3rq-seo3e4I",
  authDomain: "soy-feliz-dia-de-reyes.firebaseapp.com",
  projectId: "soy-feliz-dia-de-reyes",
  storageBucket: "soy-feliz-dia-de-reyes.appspot.com",
  messagingSenderId: "480126119073",
  appId: "1:480126119073:web:81b69aacd9edabf44614e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form Handling
document.getElementById("dataForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const acceptTerms = document.getElementById("acceptTerms").checked;

  // Validate if terms are accepted and fields are filled
  if (!acceptTerms) {
    alert("You must accept the terms and conditions.");
    return;
  }

  if (name === "" || phone === "" || email === "") {
    alert("Please fill in all the fields.");
    return;
  }

  try {
    await addDoc(collection(db, "form_submissions"), {
      name,
      phone,
      email,
      timestamp: serverTimestamp(),
    });
    document.getElementById("message").innerText = "Form submitted successfully!";
  } catch (error) {
    console.error("Error submitting form: ", error);
    document.getElementById("message").innerText = "Error submitting form.";
  }
});

// You can now safely remove any logic that disables the button, making it always enabled
// Simply ensure the button is enabled by default (no need to disable it).

// No need for button state change logic anymore!
