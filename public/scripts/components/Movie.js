var React = require("react");
var Link = require("react-router").Link;
var MovieList = require("./MovieList");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			movies: [],
			newMovie: ""
		}	
	},
	addMovie: function(e){
		e.preventDefault();
		var movies = this.state.movies.splice(0);
		movies.push({title: this.state.newMovie, genre:"", actors: [], year: "", rating: ""});
		this.setState({movies: movies, newMovie: ""});
		
	},
	deleteMovie: function(e, index){
		var movies = this.state.movies.slice(0);
		movies.splice(index, 1);
		this.setState({movies: movies, activeForm: false});
	},
	handleNewMovieChange: function(e){
		var title = e.target.value;
		this.setState({newMovie: title});
	},
	updatedInfo: function(e, updatedMovie, index){
		console.log("run")
		e.preventDefault();
		var movies = this.state.movies.slice(0);
		movies.splice(index, 1, updatedMovie);
		this.setState({movies: movies, activeForm: false});
	},
	render: function(){
		return (
			<div className="row">
				<form className="col-md-3" onSubmit={this.addMovie}>
				  <div className="form-group">
				    <label htmlFor="newMovie">Add a Movie!</label>
				    <input onChange={this.handleNewMovieChange} type="text" value={this.state.newMovie} className="form-control" id="newMovie" placeholder="Movie Name"/>
				  </div>
				  <button type="submit" className="btn btn-primary">ADD</button>
				</form>
				<div className="col-md-4"></div> 
				<MovieList updatedInfo={this.updatedInfo} deleteMovie={this.deleteMovie} movies={this.state.movies}/>
			</div>
		);
	}
});
