import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./assets/data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabBtns from "./components/TabBtns";

function App() {
  const [tabContent, setTabContent] = useState();

  const handleSelect = (selectedTopic)=>{
    setTabContent(selectedTopic)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((items) => (
              <CoreConcept key={items.title} {...items} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabBtns isSelected={tabContent === 'components'} onSelect={()=> handleSelect('components')} >Components</TabBtns>
            <TabBtns isSelected={tabContent === 'jsx'} onSelect={()=> handleSelect('jsx')}>JSX</TabBtns>
            <TabBtns isSelected={tabContent === 'props'} onSelect={()=> handleSelect('props')}>Props</TabBtns>
            <TabBtns isSelected={tabContent === 'state'} onSelect={()=> handleSelect('state')}>state</TabBtns>
          </menu>
          {tabContent ? (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          ) : <p>Click to know about topics</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
