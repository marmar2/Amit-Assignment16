 import React, {Component} from 'react';
 //import 'bootstrap/dist/css/bootstrap.css'  
//import 'bootstrap/dist/js/bootstrap.js'
 
 export default class Home extends Component {
	
   state = {
	   number:0,
	   colors:["red","Blue","green"],
	   users:["red","Blue","green"],
	   cards: [{title:"ds",desc:"sfsdf"},{title:"ds",desc:"sfsdf"},{title:"ds",desc:"sfsdf"}]
   }

	// this refers to all functions in current object
	// differnece between foEach and map function for loop
	 render() {
		 
		 let {colors,users,cards} = this.state //distract
		 
		 return (
		 
		  <> 
		    <h1>Count is:{this.state.number}</h1>
		    <button onClick={this.increment}>increment</button>
            <button onClick={this.rest}>rest</button>	

            <ul>
			 {this.state.colors.map( (x)=> <li>{x}</li>)}
			</ul>

            <ul> //distract
			 {colors.map( (x)=> <li>{x}</li>)}   
			</ul>  
          			
		  </>
		 
		 );
	 }
	 
	 // increment(){
		 // console.log(this.state.number) // will return undefined because normal function can't understand this
	 // }
	 
	 // increment= ()=>{
		 // console.log(this) // must use arrow function
	 // }
	 
	 // increment= ()=>{
		 // console.log(++this.state.number) // will increment in console but not in html
	 // }
	 
	 
	 increment= ()=>{
		this.setState({number:++this.state.number}) //setstate is function inherited from component and will automatically rerender	
	 }
	 
	  rest= ()=>{
		this.setState({number:0}) //setstate is function inherited from component and will automatically rerender	
	 }
 }