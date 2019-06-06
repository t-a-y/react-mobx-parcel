import React, { Component } from "react";
import { observer } from 'mobx-react';

@observer
class View extends Component {
  render() {
    const {
      count,
      increment
    } = this.props.store;
    return (
      <div>
        <h1>{!count ? "CLICK MEEEE!!!!!!!" : "YESSSS GIVE ME MORE" + "!".repeat(count)}</h1>
        <button onClick={increment}>Count: {count}</button>
      </div>
    )
  }
};

export default View;
