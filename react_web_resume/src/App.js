import React,{Component} from 'react';
import './App.css';
import {PageHeader} from './childs/header/Header';
import {PageFooter} from './childs/footer/Footer';
import { PageNavBar } from './childs/navbar/Navbar';
import {PageBody} from './childs/body/Body'

export function test(){
  console.log("this is test...");
}
export default class App extends Component{
  constructor(){
    super();
    console.log("Const Call");
  }
  render(){
    console.log("Render Call");
    return(
      <div className="wrapper">
        <PageNavBar/>
        <PageHeader/>
        <PageBody/>
        <PageFooter/>
      </div>
    )
  }
}