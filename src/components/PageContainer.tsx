import * as React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Counter from "./Counter";
// import PitchFork from "./PitchFork";
import Flights from "./Flights";
import Fires from "./Fires";
import ExampleUndo from "./ExampleUndo";
import { diel } from "../setup";


export const PageContainer = () => {
  const bindOutput = diel.BindOutput.bind(diel);
  const getScales = diel.GetScales.bind(diel);
  return <Router>
    <div>
      <h2>Welcome to DIEL!</h2>
      <p>
        DIEL is a new framework for interative applications to declaratively scale
        to backend and WebWorker based engines.
        Some resources: <a href="https://github.com/yifanwu/diel">source code</a>, paper, tutorial etc. to come!
        {/* <a href="./files/diel.pdf">paper</a>. */}
      </p>
      <p>
        Checkout <Link to="counter">Counter</Link> for the hello-world example. <Link to="fires">Fires</Link> for an example using map (the scales of the map is currently a little finicky and we are working on it), and <Link to="flights">Flights</Link> for scatter plots and historgrams. And an example for <Link to="undo">Undo</Link>.
        There are a few known bugs in the gallery code that we are fixing---if you get stuck, <b>refreshing the page</b> will do the trick!
        All these demos are driven by DIEL code---you can find the source <a href="https://github.com/yifanwu/diel">here</a>. We on working on putting the source side by side with the demos and adding more examples. Stay tuned!
      </p>
      <Switch>
        <Route exact path="/counter" component={Counter}/>
        <Route path="/undo" component={() => <ExampleUndo bindOutput={bindOutput} scales={getScales}/>}/>
        <Route path="/flights" component={() => <Flights bindOutput={bindOutput} scales={getScales}/>} />
        <Route path="/fires" component={() => <Fires bindOutput={bindOutput} scales={getScales}/>} />
      </Switch>
    </div>
    </Router>;
  };