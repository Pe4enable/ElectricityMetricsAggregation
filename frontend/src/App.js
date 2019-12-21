import React, {PureComponent} from 'react';

import './App.css';
import './main.css';
import Graph from './components/graph/graph'
import Table from './components/table/table'
import axios from 'axios'

const run = async func => {
  try {
    await func();
  } catch (error) {
    setTimeout(run, 1000, func);
  }
};

const baseUrl = "localhost:8080";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        metrics: 
        `[
          {
            "id": "1",
            "deviceid": "1",
            "createdate": "",
            "type": "gps",
            "value": "1000",
            "deviceId": "1",
            "createDate": ""
          },
          {
            "id": "2",
            "deviceid": "1",
            "createdate": "",
            "type": "gps",
            "value": "2000",
            "deviceId": "1",
            "createDate": ""
          }
        ]`
      },
    };
  }

  componentDidMount() {
    axios.get(baseUrl+ `/api/metrics`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
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
        <Table data={this.state.data.metrics}/>
        <Graph />
      </div>
    </div>
  </main>
  );
}
}

export default App;
