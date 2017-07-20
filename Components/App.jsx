import React, { PropTypes } from 'react';

export default class App extends React.Component {

  constructor(){
  	super();
  	this.state={
  		items:[],
  		brands:[]
  	}
  }
  componentWillMount(){
  	console.log("component will mount")
    this.setState({
  		items:["Item 1", "Item 2"]
  	})
  }
  componentDidMount(){
  		console.log("component has mounted")
  }

  componentWillReceiveProps(){
      console.log("component will receive Props")
  }
  shouldComponentUpdate(){
      return true;
  }
  componentWillUnmount(){
      console.log("component will UnMounted")
  }

  componentWillUpdate(){
      console.log("component will Update")
  }
  componentDidUpdate(){
      console.log("component has Updated")
  }

  addTask(e){
    e.preventDefault();
    let items = this.state.items;
    items.push(this.refs.task.value)
    this.setState({
      items:items
    }, function(){
      console.log(this.state)
    })
  }

  render() {
  	let tasks = this.state.items.map(function(task, i){
        	return (
        			<li id={i} key={i}>{task} </li>
        		)
        })

    return (
      <div id="main-view">
      <header> 
		This is header
      </header>
      <div id="mainContent">
        <h2> Add a new Task </h2>
        <form onSubmit={this.addTask.bind(this)}>
          <input type="text" ref="task" />
          <input type="submit" value="Submit" />
        </form>

        <hr />
        <ul>{tasks}</ul>
        </div>
        <footer>This is footer</footer>
      </div>
    );
  }
}
