import React from "react";
import ReactDOM from 'react-dom/client';
function topbarComponents() {
    return (
    <>
        <div className="side-button">
            <button id="side-button" className="side-button">≡</button>
        </div>
        <div className="homepage">
            <a href="../index.html"><img src="../static/homeIcon.png" id="home-icon" /></a>
        </div>
        <div className="topic">
            <h2 id="topic" className="topic">Profile</h2>
        </div>
        <div className="dark-mode">
            <img src="../static/darkMode.png" id="dark-icon" />
            <label className="switch">
                <input type="checkbox" id="dark-mode" /><span className="slider"></span>
            </label>
        </div>
    </>
    );
}
const topbar = ReactDOM.createRoot(document.getElementById('topbar')); 
topbar.render(React.createElement(topbarComponents)); 