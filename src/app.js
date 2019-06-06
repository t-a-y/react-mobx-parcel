import React from "react";
import { render } from "react-dom";
import AppStore from '~/src/store/AppStore';
import View from '~/src/components/View';
import '~/src/app.scss'

const appStore = new AppStore();

render(
  <div>
    <View store={appStore} />
  </div>,
  document.getElementById("root")
);
