import Header from "./components/index/Header";
import "./css/responsize.css";
import "./css/App.css";
import "./css/fontawesome-pro-5.14.0-web/css/all.min.css";
import Footer from "./components/index/Footer";

import DieuHuongURL from "./components/DieuHuongURL";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link,
  useLocation,                                                                                                                                                      
} from "react-router-dom";

import { useEffect } from "react";
//import firebase auth
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// Configure Firebase.
const config = {
  apiKey: 'AIzaSyBNNPC-nTqt1aImRWGrnZ5P_ZsULaETJs4',
  authDomain: 'thinkpro-eokhanhthien.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);



function App() {
  //Handle firebase auth
  useEffect(()=>{
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user )=> {
      if(!user){
      
        console.log("not login");  
        return;
      }
      console.log("user is : ",user)

      const token = await user.getIdToken();
      console.log("Token is : ",token)

      // dispatch(userSlice.actions.saveUserLogin({
      //   dataUser: user,
      // }))


    });
    return () => unregisterAuthObserver();
  },[]);


  return (
    <Router>
      <Header />
      <DieuHuongURL></DieuHuongURL>
      <Footer />
    </Router>
  );
}

export default App;
