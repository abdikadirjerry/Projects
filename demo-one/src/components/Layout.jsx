import { Link, Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
  return (
    <div className="layout">

      <header className="header">
        <h1>Demo-One Project</h1>
        <div className="header-right">
          <span className="user-label">Admin</span>
        </div>
      </header>

      <div className="middle-section">

        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/layout/calculator">Calculator</Link></li>
              <li><Link to="/layout/tip">Tip Calculator</Link></li>
              <li><Link to="/layout/bmi">BMI Calculator</Link></li>
              <li><Link to="/layout/gallery">Image Gallery</Link></li>
              <li><Link to="/layout/todo">ToDo App</Link></li>
              <li><Link to="/layout/hotel">Hotel Booking</Link></li>
            </ul>
          </nav>
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
