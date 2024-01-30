import { useState } from "react";
import { EXAMPLES } from "../assets/data.js";
import TabBtn from "./TabBtn.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
  const [tabContent, setTabContent] = useState(null);

  function handleSelect(selectedBtn) {
    setTabContent(selectedBtn);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
      ButtonsContainer="menu"
        buttons={
          <>
            <TabBtn
              isSelected={tabContent === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabBtn>
            <TabBtn
              isSelected={tabContent === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabBtn>
            <TabBtn
              isSelected={tabContent === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabBtn>
            <TabBtn
              isSelected={tabContent === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabBtn>
          </>
        }
      >
        {tabContent && (
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
        {!tabContent && <p>Click to know about topics</p>}
      </Tabs>
    </Section>
  );
}

export default Examples;
