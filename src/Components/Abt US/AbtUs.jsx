import React from 'react'
import "./AbtUs.css"

function AbtUs() {
  return (
    <>
  <section>
    <div className="container">
      <h1>About Us...</h1>
      <div className="content">
        <p>
          Welcome to Location History Analysis, where we specialize in
          transforming location data into valuable insights. Our mission is to
          help individuals and businesses understand their movement patterns,
          optimize operations, and enhance decision-making through comprehensive
          location history analysis.
        </p>
        <p>
          With a blend of advanced geospatial technology and data analytics, we
          offer services that range from personal travel tracking to
          enterprise-level logistics optimization. Our team of experts is
          dedicated to providing accurate, actionable insights while ensuring
          the highest standards of data privacy and security.
        </p>
        <p>
          Whether you're looking to improve route efficiency, analyze travel
          behaviors, or gain deeper insights into location-based trends, we are
          here to assist you every step of the way. Join us on a journey to
          unlock the potential of your location data.
        </p>
        <button onclick="scrollToSection()">Read More...</button>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
  </section>
  <section className="team" id="scrollTarget">
    <h1>Meet Our Team</h1>
    <div className="team-cards">
      {/* Cards here */}
      {/* Card 1 */}
      <div className="card card-1">
        <div className="card-info">
          <h2 className="card-name">Harsha</h2>
          <p className="card-role">Team member</p>
          <p className="card-email">lalala@example.com</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="card card-2">
        <div className="card-info">
          <h2 className="card-name">Neha</h2>
          <p className="card-role">Team Lead</p>
          <p className="card-email">lalala@example.com</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
      
      <div className="card card-3">
        <div className="card-info">
          <h2 className="card-name">GVK</h2>
          <p className="card-role">Team member</p>
          <p className="card-email">lala@example.com</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
      <div className="card card-4">
        <div className="card-info">
          <h2 className="card-name">Harika</h2>
          <p className="card-role">Team member</p>
          <p className="card-email">lala@example.com</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default AbtUs