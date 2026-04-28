import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/logo192.png" alt="Octofit Tracker Logo" />
              Octofit Tracker
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/activities">Activities</Link>
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              <Link className="nav-link" to="/teams">Teams</Link>
              <Link className="nav-link" to="/users">Users</Link>
              <Link className="nav-link" to="/workouts">Workouts</Link>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="text-center">
                <h1 className="display-4 mb-4">Welcome to Octofit Tracker</h1>
                <p className="lead">Select a section from the navigation to get started.</p>
                <div className="row mt-5">
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Activities</h5>
                        <p className="card-text">Track your fitness activities and workouts.</p>
                        <Link className="btn btn-primary" to="/activities">View Activities</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Leaderboard</h5>
                        <p className="card-text">See how you rank against other users.</p>
                        <Link className="btn btn-primary" to="/leaderboard">View Leaderboard</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Teams</h5>
                        <p className="card-text">Manage and view fitness teams.</p>
                        <Link className="btn btn-primary" to="/teams">View Teams</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Users</h5>
                        <p className="card-text">View all registered users.</p>
                        <Link className="btn btn-primary" to="/users">View Users</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Workouts</h5>
                        <p className="card-text">Browse available workout types.</p>
                        <Link className="btn btn-primary" to="/workouts">View Workouts</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
