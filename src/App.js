import React from 'react';
import './App.css';
import flag from "./pakistanflag.jpg"
function App() {
  return (
    <div className="main text-center">
      <nav className="navbar navbar-light bg-dark">
        <h1 className="text-light">Quiz</h1>
      </nav>
      <h1 className="text-center">Guess the country flag?</h1>
      <div className="p-5 m-5">
        <button type="button" className="btn btn-dark position-absolute m-5">Pakistan</button>
        <button type="button" className="btn btn-dark position-relative m-5">Indonesia</button>
        <img className="p-5" src={flag} alt="" />
        <button type="button" className="btn btn-dark position-absolute m-5">America</button>
        <button type="button" className="btn btn-dark position-relative m-5">Thailand</button>
      </div>
      <footer className="page-footer font-small blue bg-dark">
        <h1 className="text-light">Solved Progress</h1>
        <div className="progress">
          <div className="progress-bar bg-light" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;