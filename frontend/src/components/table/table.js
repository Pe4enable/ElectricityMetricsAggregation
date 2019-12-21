import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

const orgLine=[
  { x: 1, y: 0 },
  { x: 2, y: 20 },
  { x: 3, y: 40 },
  { x: 4, y: 60 },
  { x: 5, y: 80 }
];
const speakLine=[
  { x: 1, y: 80 },
  { x: 2, y: 60 },
  { x: 3, y: 40 },
  { x: 4, y: 20 },
  { x: 5, y: 0 }
];
const dataLine=[
  { x: 2, y: 0},
  { x: 2, y: 100}
];

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }
    getKeys = function(){
      return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
      })
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return <tr></tr>
      // return items.map((row, index)=>{
      //   return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      // })
    }

    render () {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  {this.getHeader()}
                </tr>
              </thead>
              <tbody>
                {this.getRowsData()}
              </tbody>
            </table>
          </div>
        )
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}

