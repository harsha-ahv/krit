import React from 'react'

function Nav() {
  return (
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: 'Poppins', sans-serif;\n            margin: 0;\n            padding: 0;\n        }\n\n        .navbar {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 1rem 2rem;\n            background-color: black;\n        }\n\n        .navbar a {\n            color: #fff;\n            text-decoration: none;\n            padding: 0.7rem 1rem;\n            font-size: 1rem;\n            transition: background-color 0.3s ease;\n        }\n\n        .navbar a:hover {\n            background-color: #555555;\n            border-radius: 5px;\n        }\n\n        .navbar .logo {\n            font-size: 1.5rem;\n            font-weight: bold;\n        }\n\n        .navbar ul {\n            list-style: none;\n            display: flex;\n            margin: 0;\n            padding: 0;\n        }\n\n        .navbar ul li {\n            margin-left: 1rem;\n        }\n\n        @media (max-width: 768px) {\n            .navbar {\n                flex-direction: column;\n            }\n\n            .navbar ul {\n                flex-direction: column;\n                width: 100%;\n            }\n\n            .navbar ul li {\n                margin-left: 0;\n                width: 100%;\n                text-align: center;\n            }\n\n            .navbar a {\n                padding: 1rem;\n                width: 100%;\n            }\n        }\n        img{\n            height:60px\n        }\n\n    "
    }}
  />
  <nav className="navbar">
    <img src="./lalal.jpg" alt="" />
    {/* <div className="logo">Logo</div>     */}
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#explore">Explore</a>
      </li>
      <li>
        <a href="#bucket-list">Bucket List/Visited</a>
      </li>
    </ul>
  </nav>
</>
  )
}

export default Nav