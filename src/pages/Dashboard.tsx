export default function Dashboard() {
  return (
    <section className="page dashboard-page">
      {/* Welcome */}
      <section className="welcome">
        <div>
          <p className="eyebrow">STUDENT WORKSPACE</p>

          <h1>Your academic workspace.</h1>

          <p className="welcome-description">
            Everything you need for college, organized in one place.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="stat-card">
          <span>Courses</span>
          <strong>5</strong>
        </div>

        <div className="stat-card">
          <span>Active Tasks</span>
          <strong>4</strong>
        </div>

        <div className="stat-card">
          <span>Notes</span>
          <strong>27</strong>
        </div>

        <div className="stat-card">
          <span>Resources</span>
          <strong>18</strong>
        </div>
      </section>

      {/* Dashboard panels */}
      <div className="dashboard-grid">
        {/* Today's classes */}
        <section className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">SCHEDULE</p>
              <h2>Today's classes</h2>
            </div>
          </div>

          <div className="schedule-list">
            <div className="schedule-item">
              <div className="time">09:00</div>

              <div className="class-info">
                <strong>DSC01 · Cultural Studies</strong>
                <span>Room 204 · 9:00–10:00</span>
              </div>
            </div>

            <div className="schedule-item">
              <div className="time">11:00</div>

              <div className="class-info">
                <strong>SEC · Research Methods</strong>
                <span>Room 108 · 11:00–12:00</span>
              </div>
            </div>

            <div className="schedule-item">
              <div className="time">14:00</div>

              <div className="class-info">
                <strong>GE · Human Rights</strong>
                <span>Room 302 · 14:00–15:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming tasks */}
        <section className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">UPCOMING</p>
              <h2>Things to do</h2>
            </div>
          </div>

          <div className="task-list">
            <div className="task-item">
              <div className="task-dot" />

              <div>
                <strong>Complete assignment</strong>
                <span>Due Friday</span>
              </div>
            </div>

            <div className="task-item">
              <div className="task-dot" />

              <div>
                <strong>Read Unit 3</strong>
                <span>Due Saturday</span>
              </div>
            </div>

            <div className="task-item">
              <div className="task-dot" />

              <div>
                <strong>Prepare for internal</strong>
                <span>Due Monday</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}