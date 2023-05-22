import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({children}) => {
  return (
    <div>
      <title>W3YZ</title>
      <div className="container-fluid px-0">
        <nav>
          <Navbar />
        </nav>
        <section>
          {children}
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
