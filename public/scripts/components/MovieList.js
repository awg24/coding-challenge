var React = require("react");
var Link = require("react-router").Link;
var AddMovieInfo = require("./AddInfo");

module.exports = React.createClass({
	getInitialState: function(){
		return {
			movies: [],
			activeForm: false
		}
	},
	toggleInfoForm: function(){
		this.setState({activeForm: !this.state.activeForm});
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({movies: nextProps.movies});
	},
	updatedInfo: function(e, updatedMovie, index){
		e.preventDefault();
		console.log("clicked: ", updatedMovie, index)
		var movies = this.state.movies.slice(0);
		movies.splice(index, 1, updatedMovie);
		this.setState({movies: movies, activeForm: false});
	},
	formatMovieList: function(){
		var that = this;
		return this.state.movies.map(function(movie, index){
			return  <div key={"movie-"+index} className="panel panel-default">
						<div className="panel-body">
							<p>{"Title: " + movie.title}</p>
							<p>{"Genre: " + movie.genre}</p>
							<p>{"Actors: " + movie.actors}</p>
							<p>{"Year: " + movie.year}</p>
							<p>{"Rating: " + movie.rating}</p>
							{that.state.activeForm ? <AddMovieInfo index={index} updatedInfo={that.updatedInfo}/> : null}
							<div>
								<button onClick={that.toggleInfoForm} type="button" className="btn btn-sm btn-info">Add Info</button>
								<button type="button" className="btn pull-right btn-sm btn-danger">Delete</button>
							</div>
						</div>
					</div>
		});
	},
	render: function(){
		return (
			<div className="col-md-5">
				{this.formatMovieList()}
			</div>
		);
	}
});
