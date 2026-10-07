import { NavLink, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import CourseNotes from "./pages/CourseNotes";
import Notes from "./pages/Notes";
import Documents from "./pages/Documents";
import Tasks from "./pages/Tasks";
import Resources from "./pages/Resources";
import Study from "./pages/Study";

import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">C</div>

          <div className="brand-text">
            <h1>CampusOS</h1>
            <span>Student Edition</span>
          </div>
        </div>

        <nav className="navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">⌂</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">▣</span>
            <span>My Courses</span>
          </NavLink>

          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">✎</span>
            <span>Notes</span>
          </NavLink>

          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">□</span>
            <span>Documents</span>
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">✓</span>
            <span>Tasks</span>
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">◇</span>
            <span>Resources</span>
          </NavLink>

          <NavLink
            to="/study"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">◉</span>
            <span>Study</span>
          </NavLink>
        </nav>

        <div className="sidebar-bottom">
          <button type="button" className="nav-item">
            <span className="nav-icon">⚙</span>
            <span>Settings</span>
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="topbar-heading">
            <p className="eyebrow">STUDENT WORKSPACE</p>
            <h2>CampusOS</h2>
          </div>

          <div className="topbar-actions">
            <button type="button" className="icon-button">
              ⌕
            </button>

            <button type="button" className="icon-button">
              🔔
            </button>

            <div className="profile">P</div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />

          <Route
            path="/courses/:courseId"
            element={<CourseDetail />}
          />

          <Route
            path="/courses/:courseId/notes"
            element={<CourseNotes />}
          />

          <Route path="/notes" element={<Notes />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/study" element={<Study />} />
        </Routes>
      </main>
    </div>
  );
} 

export default App;