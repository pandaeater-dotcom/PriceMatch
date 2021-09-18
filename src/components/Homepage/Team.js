import React from "react";
import Footer from "./Footer";

function Team() {
  return (
    <div className="container-fluid team-section">
      <div className="section">
        <div className="section-title">
          <h2 className="display-4">The Team</h2>
        </div>
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="" alt="Prabhav"></img>
            <div className="card-body">
              <h5 className="card-title">Prabhav Khera</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="" alt="Prabhav"></img>
            <div className="card-body">
              <h5 className="card-title">Ekanshh Praveen</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="" alt="Prabhav"></img>
            <div className="card-body">
              <h5 className="card-title">Deepam Dibyojit</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="" alt="Prabhav"></img>
            <div className="card-body">
              <h5 className="card-title">Rohit Baradhwaj</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
