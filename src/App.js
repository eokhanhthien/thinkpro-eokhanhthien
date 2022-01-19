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





function App() {
  return (
    <Router>
      <Header />
      <DieuHuongURL></DieuHuongURL>
      <Footer />
    </Router>
  );
}

export default App;
