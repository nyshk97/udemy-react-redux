import React from "react";

// function App() {
//   return <h1>Hello World</h1>;
// }

const App = () => {
  const profiles = [
    { name: "taro", age: "10" },
    { name: "hanako", age: "5" },
    { name: "hoge" },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      I am {props.name}, and {props.age} years old
    </div>
  );
};

User.defaultProps = {
  age: 1
}

export default App;
