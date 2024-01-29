import Header from "./componenets/Header";
import CoreConcept from "./componenets/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./assets/data.js";
import { EXAMPLES } from "./assets/data.js";
import TabBtn from "./componenets/TabBtn.jsx";
import { useState } from "react";

function App() {

  const [tabContent, setTabContent] = useState(null)

    function handleSelect(selectedBtn){
        setTabContent(selectedBtn)
    }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabBtn isSelected={tabContent === 'components'} onSelect={()=> handleSelect('components')}>Components</TabBtn>
            <TabBtn isSelected={tabContent === 'jsx'} onSelect={()=> handleSelect('jsx')}>JSX</TabBtn>
            <TabBtn isSelected={tabContent === 'props'} onSelect={()=> handleSelect('props')}>Props</TabBtn>
            <TabBtn isSelected={tabContent === 'state'} onSelect={()=> handleSelect('state')}>State</TabBtn>
          </menu>
          {tabContent && <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
              {EXAMPLES[tabContent].code}
              </code>
            </pre>
          </div>
          }
          {!tabContent && <p>Click to know about topics</p>}
          </section>
      </main>
    </div>
  );
}

export default App;