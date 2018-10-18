import React from "react";
import { render } from "react-dom";
import CounterStore from './store/CounterStore';
import CounterView from './components/CounterView';
import './app.scss'

const counterStore = new CounterStore();

render(
  <div>
    <CounterView store={counterStore} />
  </div>,
  document.getElementById("root")
);
