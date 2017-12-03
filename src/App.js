import React, { Component } from 'react';
import './App.css';
import ImgList from './Components/ImgList';
import $ from "jquery";

//Here we declare our states that will be used in the code.
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

//He we set the input equal to a state.
handleChange(event) {
	 this.setState({value: event.target.value});
}

//Here is the search function. When you press the Search button, this function will run. It takes the specified input value and send its will the api call.
 handleSubmit(event) {
	 $("#notFound").css('visibility', 'hidden');
	 fetch('https://pixabay.com/api/?key=4521698-0a0bb4f2bcb4188eb3a7646d7&q=' + this.state.value + '&image_type=photo&pretty=true')
 		.then(res => res.json())
 		.then(data => {
			if(data.totalHits === 0){
				this.setState({ imgs: data.hits });
				$("#notFound").css('visibility', 'visible');
			}
			else {
				this.setState({ imgs: data.hits });
			}
 		})
 		.catch(err => {
 		});
	 event.preventDefault();
}

//This function will fire when the homepage first loads. Its just so some images loads on the firstpage.
componentDidMount() {
	fetch('https://pixabay.com/api/?key=4521698-0a0bb4f2bcb4188eb3a7646d7&q=happy&image_type=photo&pretty=true')
		.then(res => res.json())
		.then(data => {
			this.setState({ imgs: data.hits });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
}

//The return function witch is filled with JSX.
render() {
	return (
		<div>
			<div className="main-header">
			<a href={"https://github.com/Christian-nylander/ajk16_workflow/tree/christian"}><img className="git-icon" src={require('./git.png')} /></a>
				<div className="inner">
				<form onSubmit={this.handleSubmit}>
		      <label>
		        	<input className="search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Seach for anything..." />
		       </label>
		       	<input className="btn" type="submit" value="Search" />
	     	</form>
				</div>
				<p id="notFound">No images found, try again!</p>
			</div>
			<div className="main-content">
				<ImgList data={this.state.imgs} />
			</div>
		</div>
	);
}
}
