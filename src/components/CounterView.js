import React from "react";
import { observer } from "mobx-react";

const CounterView = observer(({ store }) => (
  <div>
    <h1>{!store.count ? "CLICK MEEEE!!!!!!!" : "YESSSS GIVE ME MORE" + "!".repeat(store.count)}</h1>
    <button onClick={store.increment}>Count: {store.count}</button>
  </div>
));

export default CounterView;
