import React, { useState, useEffect } from "react";

import {
  FaUser,
  FaCalendarTimes,
  FaPhone,
  FaMap,
  FaLock,
  FaEnvelopeOpen,
} from "react-icons/fa";

function App() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("Random Person");
  const [value, setValue] = useState("Name");

  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person.age;
  };

  const {
    street: { number, name },
  } = person.location;

  const newPerson = {
    image,
    phone,
    email,
    first,
    last,
    age,
    number,
    name, 
    stret: `${number} ${name}`,
    name: `${first} ${last}`,
  };

  setUser(newPerson);
  setValue(newPerson.name);

  (useEffect = () => {
    getUser();
  }),
    [];

    const handleValue =(e)=>{
      if (e.target.classList.contains("icon"){
        const newValue= e.target.dataset.label;
        setTitle(newValue);
        setValue(user[newValue]); 
      })
    }

  return (
    <div className="block bcg-black">
      <div className="block">
        <div className="container">
          <img src={user && user.image} className="userImage" />
          <p className="user-title"> My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="value-list">List</div>
          <button className="icon" data-label="name" onMouseOver={handleValue}>
            <faUser />
          </button>
          <button className="icon" data-label="streets" onMouseOver={handleValue}>
            <faMap />
          </button>
          <button className="icon" data-label="phone" onMouseOver={handleValue}>
            <faPhone />
          </button>
          <button className="icon" data-label="age" onMouseOver={handleValue}>
            <faCalendarTimes />
          </button>
          <button className="icon" data-label="email" onMouseOver={handleValue}>
            <FaEnvelopeOpen />
          </button>
          <button className="icon" data-label="password" onMouseOver={handleValue}>
            <faLock />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
