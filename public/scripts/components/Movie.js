var React = require("react");
var Link = require("react-router").Link;
var MovieList = require("./MovieList");
var Search = require("./Search");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			movies: [],
			newMovie: "",
			error: "",
			didUpdate: false
		}	
	},
	componentDidMount: function() {
		var movies = localStorage.getItem("movies");
		if(movies){
			this.setState({movies: JSON.parse(movies)});
		}
	},
	addMovie: function(e){
		e.preventDefault();
		var movies = this.state.movies.splice(0);
		movies.push({title: this.state.newMovie, genre:"", actors: [], year: "", rating: ""});
		if(!this.state.newMovie){
			this.setState({error: "This field is required!"});
		} else {
			localStorage.setItem("movies", JSON.stringify(movies));
			this.setState({movies: movies, newMovie: "", error: ""});
		}
		
	},
	deleteMovie: function(index){
		var movies = this.state.movies.slice(0);
		movies.splice(index, 1);
		localStorage.setItem("movies", JSON.stringify(movies));
		this.setState({movies: movies, activeForm: false});
	},
	handleNewMovieChange: function(e){
		var title = e.target.value;
		this.setState({newMovie: title});
	},
	updatedInfo: function(e, updatedMovie, index){
		e.preventDefault();
		var movies = this.state.movies.slice(0);
		movies.splice(index, 1, updatedMovie);
		localStorage.setItem("movies", JSON.stringify(movies));
		this.setState({movies: movies, didUpdate: true});
	},
	render: function(){
		return (
			<div>
				<Search didUpdate={this.state.didUpdate} updatedInfo={this.updatedInfo} deleteMovie={this.deleteMovie} movies={this.state.movies} />	
				<br/>
				<br/>
				<div className="row">
					<form className="col-md-3" onSubmit={this.addMovie}>
					  <div className="form-group">
					    <label htmlFor="newMovie">Add a Movie!</label>
					    <br/>
					    <span className="text-danger">{this.state.error}</span>
					    <input onChange={this.handleNewMovieChange} type="text" value={this.state.newMovie} className="form-control" id="newMovie" placeholder="Movie Name"/>
					  </div>
					  <button type="submit" className="btn btn-primary">ADD</button>
					</form>
					<div className="col-md-4"></div> 
					<MovieList updatedInfo={this.updatedInfo} deleteMovie={this.deleteMovie} movies={this.state.movies}/>
				</div>
			</div>
		);
	}
});
