import React, {PureComponent} from 'react';

import './App.css';
import './main.css';
import Graph from './components/graph/graph'

const getDateString = uint256 => {
  const date = new Date(uint256 * 1000);
  return `${date.toLocaleString('en-us', {
    month: 'long'
  })} ${date.getDate()}, ${date.getFullYear()}`;
};

const getInfoBlock = (methods, methodsArray) =>
  Promise.all(methods.map(methodName => methodsArray[methodName]().call()));

const run = async func => {
  try {
    await func();
  } catch (error) {
    setTimeout(run, 1000, func);
  }
};
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        place: '',
        startTime: '',
      },
    };
  }

  getWarning = warning => this.setState({ warning });

  render (){
    const {
      data,
    } = this.state;
  return (
    <main className="block-body">
    <div className="block-container-site">
      <div className="block-right-container-site">
        <Graph />
      </div>
    </div>
  </main>
  );
}
}

export default App;
