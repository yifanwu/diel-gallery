import * as React from "react";
import Counter from "./Counter";
// import PitchFork from "./PitchFork";
import Flights from "./Flights";
import Fires from "./Fires";
import ExampleUndo from "./ExampleUndo";
import { diel } from "../setup";

const borderStyle = {
  borderTop: "1px dashed #8c8b8b",
};

const headerStyle = {
  backgroundColor: "lightgray",
  width: "100%",
  textAlign: "center",
} as React.CSSProperties;

export const PageContainer = () => {
  const bindOutput = diel.BindOutput.bind(diel);
  const getScales = diel.GetScales.bind(diel);
  return <div>
      <h2>Welcome to DIEL!</h2>
      <p>
        DIEL is a new framework for interative applications to declaratively scale
        to backend and WebWorker based engines.
        Below are some demos: <a href="#counter">counter</a>, <a href="#flights">flights</a>, <a href="#fires">fires</a>, and <a href="#undo">undo</a>.
        The demos in themselves are, frankly, not all that interesting---what is interesting is how they are <b>implemented</b>.  When programming with DIEL, all the state changes are captured by materialized views over event history tables, which includes user interactions and asynchronous data requests.  DIEL also allows the user to query <i>across</i> data sources.  Here, both the flighs and fires example are working with SQLite instances running in Web Workers.  While a few megabytes of data running in Web Workers is far from impressive, the exact same code works against remote databases too, or a DB running local on your computer (see <a href="https://github.com/yifanwu/diel-db-server">this repo for setup</a>).
        You can find the DIEL code for these examples <a href="https://github.com/logical-interactions/diel-gallery">here</a>. We on working on putting the source side by side with the demos and adding more examples. Stay tuned!
      </p>
      <h2 id="counter" style={headerStyle}>Hello World, Counter Example</h2>
      <Counter/>
      <br></br>
      <h2 id="flights" style={headerStyle}>Flight Data Visualization</h2>
      <Flights bindOutput={bindOutput} scales={getScales}/>
      <br></br>
      <h2 id="fires" style={headerStyle}>US WildFires</h2>
      <Fires bindOutput={bindOutput} scales={getScales}/>
      <br></br>
      <h2 id="undo" style={headerStyle}>Simple Example of UNDO</h2>
      <ExampleUndo bindOutput={bindOutput} scales={getScales}/>
    </div>;
  };