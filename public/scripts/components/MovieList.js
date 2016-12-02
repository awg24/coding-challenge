var React = require("react");
var Link = require("react-router").Link;
var AddInfo = require("./AddInfo");

module.exports = React.createClass({
	formatMovieList: function(){
		var that = this;
		return this.props.movies.map(function(movie, index){
			var movieCopy = Object.assign({}, movie);
			return  <div key={"movie-"+index} className="panel panel-default">
						<div className="panel-body">
							<p>{"Title: " + movie.title}</p>
							{movie.genre ? <p>{"Genre: " + movie.genre}</p> : null}
							{movie.actors.length > 0 ? <p>{"Actors: " + movie.actors}</p> : null}
							{movie.year ? <p>{"Year: " + movie.year}</p> : null}
							{movie.rating ? <p>{"Rating: " + movie.rating}</p> : null}
							<div>
								<AddInfo movie={movieCopy} index={index} updatedInfo={that.props.updatedInfo}/>
								<button onClick={()=>{that.props.deleteMovie(index);}} type="button" className="btn pull-right btn-sm btn-danger">Delete</button>
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
