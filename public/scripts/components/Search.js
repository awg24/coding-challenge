var React = require("react");
var MovieList = require("./MovieList");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			results: [],
			queryOn: "title"

		}
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({results: []});	
	},
	search: function(e){
		var that = this;
		var reg = new RegExp("^"+e.target.value, 'gi');
		var movies;
		if(e.target.value){
			movies = this.props.movies.filter(function(movie){
				if(that.state.queryOn === "actors"){
					var regForArray = new RegExp(e.target.value, 'gi');
					return movie[that.state.queryOn].match(regForArray);
				}
				return movie[that.state.queryOn].match(reg);
			});
		} else {
			movies = [];
		}
		this.setState({results: movies});
	},
	changeQueryParam: function(e){
		this.setState({queryOn: e.target.value});
	},
	render: function(){
		return (
				<div className="row">
					<div className="col-md-3 form-group">
				    	<label htmlFor="newMovie">Your movie search.</label>
				   		<br/>
				   		<label htmlFor="newMovie">Search By: </label>
				   		<select onChange={(e)=>{this.changeQueryParam(e)}} className="dropdown">
				   			<option>title</option>
				   			<option>genre</option>
				   			<option>actors</option>
				   			<option>year</option>
				   			<option>rating</option>
				   		</select>
				   		<br/>
				   		<br/>
				    	<input onChange={(e)=>{this.search(e)}} type="text" className="form-control" id="movie" placeholder={"Search "+this.state.queryOn}/>
				  	</div>
				  	<div className="col-md-4"></div>

			  		<MovieList updatedInfo={this.props.updatedInfo} deleteMovie={this.props.deleteMovie} movies={this.state.results} />
			  	</div>
		);
	}
});
