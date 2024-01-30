import Header from "./componenets/Header";
import CoreConcepts from "./componenets/CoreConcepts.jsx";
import Examples from "./componenets/Examples.jsx";

function App() {
  return (
      <>   
        <Header />
        <main>
         <CoreConcepts/>
          <Examples />
        </main>
      </> 
  );
}

export default App;