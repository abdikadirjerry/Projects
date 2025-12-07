import { Link, Outlet } from "react-router-dom";
import "./layout.css";


function Layout() {
  return (
    <div className="layout">

      <header className="header">
        <h1>Demo-One Project</h1>
      </header>

      <div className="middle-section">

        <aside className="sidebar">
          <ul>
            <li><Link to="/calculator">calculator</Link></li>
            <li><Link to="/TipCalculator">TipCalculator</Link></li>
            <li><Link to="/DemoBMI">DemoBMI</Link></li>
            <li><Link to="/ImageGallery">ImageGallery</Link></li>
            <li><Link to="/TodoApp">TodoApp</Link></li>
          </ul>
        </aside>

        <main className="content">
          <Outlet />
        </main>

      </div>

      <footer className="footer">
        <p>© 2025 Demo-One</p>
      </footer>

    </div>
  );
}

export default Layout;
