import * as React from "react";
import { DielComponent, Table, DielComponentProps } from "diel-ui";

enum ComponentRelations {
  flightScrollResult = "flightScrollResult",
}

export default class InfiniteScroll extends DielComponent<DielComponentProps> {
  constructor(props: DielComponentProps) {
    super(props);
    this.BindDielOutputs(Object.keys(ComponentRelations));
    this.state = {};
  }
  render() {
    if (this.state[ComponentRelations.flightScrollResult]) {
      return <Table
        data={this.state[ComponentRelations.flightScrollResult]}
      />;
    } else {
      return <p>Loading</p>;
    }
  }
}