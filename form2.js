                                                              // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCdkK5HgBLjr9XVcAbNF32AgxIIkCaeB74",
    authDomain: "website-d9701.firebaseapp.com",
    databaseURL: "https://website-d9701-default-rtdb.firebaseio.com",
    projectId: "website-d9701",
    storageBucket: "website-d9701.appspot.com",
    messagingSenderId: "405871353274",
    appId: "1:405871353274:web:c7cca232d296e6fe349183",
    measurementId: "G-3VTKXJVGVT"
//firebase config stuff
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	const auth = firebase.auth();

	function signOut(){
		auth.signOut();
    window.location.href="index.html";
    
	}