import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting'
import NameList from './Components/NameList'
import IndexAsKey from './Components/IndexAsKey';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
 import './appStyles.css';
 import styles from './appStyles.modules.css'
import Form from './Components/Form';

 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        {/* appStyle.css By default applies to child elements */}
        {/* <h1 className='Error'>Error</h1> */}
         {/* appStyles.modules.css By default not applies to child elements */}
        {/* <h1 className= {styles.Success}>Success</h1> */}
        {/* <Inline/> */}
        {/* <StyleSheet primary={true}/>  */}
        {/* <IndexAsKey/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
         {/* <EventBind/>  */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/*<Greet name="Marun" heroName="Super Cool">
         
          <p>Dont worry you gonna rock- children tagss</p>
        </Greet>
        <Greet name="Babu" heroName="Damn Cool">
          <button>Action</button>
          </Greet>
        <Welcome name="Marun" heroName="Super Cool">
          <p>U will rock man...</p>
          </Welcome>
          <Welcome  name="Babu" heroName="Damn Cool">
          <p>Def U will rock man...</p>
          </Welcome>
          <Message/>*/}
          {/* <Counter/> */}
         {/*  <Counter/>  */}
          
      </div>
    );
  }
}

export default App;
