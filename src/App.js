import logo from './logo.svg';
import React from 'react';

// Header, Footer, Feed Component:
import Header from './BroCode/Header';
import Footer from './BroCode/Footer';
import Feed from './BroCode/Feed.jsx';

// CardComponent:
import Card from './BroCode/Card';

// StudentComponent: --> props, propsTypes & defaultProps:
import Students from './BroCode/Students';

// List: Array Operations:
import List from './BroCode/List.jsx'

// Click Event:

const Fruits = [
  {Id:1,Name:"Apple",Calories:10},
  {Id:2,Name:"Pineapple",Calories:15},
  {Id:3,Name:"Mango",Calories:12}
]

const Vegetables = [
  {Id:4,Name:"Carrot",Calories:14},
  {Id:5,Name:"Raddish",Calories:74},
  {Id:6,Name:"Potato",Calories:34}
]

function App() {
  return (
    <React.Fragment>

      <List values={Fruits} Categories="Fruits"/>
      <List values={Vegetables} Categories="Vegetables"/>
      <List/>
      
    </React.Fragment>


  );
}

export default App;
