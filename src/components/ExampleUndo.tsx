import * as React from "react";

import { diel } from "../setup";
import { DielComponent, DielComponentProps } from "diel-ui";

enum ComponentRelations {
  ueCurrentSelection = "ueCurrentSelection",
}

export default class ExampleUndo extends DielComponent<DielComponentProps> {
  constructor(props: DielComponentProps) {
    super(props);
    this.BindDielOutputs(Object.keys(ComponentRelations));
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event: any) {
    // Cmd+Z
    if ((event.metaKey) && (event.keyCode === 90)) {
      diel.NewInput("ueUndoEvent", {});
    }
  }
  render() {
    const getClassName = (id: number) => {
      return this.state["ueCurrentSelection"] ? this.state["ueCurrentSelection"][0].id === id ? "selected" : "" : "";
    };
    const buttons = [1, 2, 3, 4, 5, 6].map((v) => <button
      className={getClassName(v)}
      onClick={() => diel.NewInput("ueClickEvent", {id: v})}
      >{v}</button>
    );
    return <>
    <p>Click on the buttons, and then press "Cmd+Z"</p>
      {buttons}
    </>;
  }
}