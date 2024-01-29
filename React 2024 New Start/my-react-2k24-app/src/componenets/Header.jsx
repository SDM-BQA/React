import reactLogo from "/React/React 2024 New Start/my-react-2k24-app/src/assets/react-core-concepts.png";
const reactDesc = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
    return (
      <header>
        <img src={reactLogo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDesc[getRandomInt(2)]} React concepts you will need for almost any
          app you are going to build!
        </p>
      </header>
    );
  }
export default Header