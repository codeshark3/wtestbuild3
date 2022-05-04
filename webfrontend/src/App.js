import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
// import "./assets/css/grid.css";
// import "./assets/css/index.css";
// import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Routes from "./components/Routes";
import { Container } from "react-bootstrap";
import DashboardScreen from "./screens/DashboardScreen";
import TestsScreen from "./screens/TestsScreen";
import TestDetailsScreen from "./screens/TestDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
document.title = "Water Test";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={DashboardScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/tests" component={TestsScreen} />
          {/* <Route path="/ml" component={TestsScreen} /> */}
          <Route path="/test/:id" component={TestDetailsScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

// blue:#333366     red:#cc0066

// <BrowserRouter>
//       <Route
//         render={(props) => (
//           <div className="layout">
//             <Sidebar {...props} />
//             <div className="layout__content">
//               <Header />
//               <div className="layout__content-main">
//                 <Container style={{ paddingTop: "20px" }}>
//                   <Routes />
//                 </Container>
//               </div>
//               <Footer />
//             </div>
//           </div>
//         )}
//       />
//     </BrowserRouter>
