var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
	getInitialState: function() {
		var state = Object.assign(this.props.movie, {activeForm: false});
		return state
	},
	updateDateInfo: function(e){
		var info = {};
		info[e.target.id] = e.target.value;
		this.setState(info);
	},
	toggleInfoForm: function(){
		console.log("why no i get called")
		this.setState({activeForm: !this.state.activeForm});
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState(nextProps.movie)
	},
	render: function(){
		return this.state.activeForm ? (
			<form onSubmit={(e)=>{this.toggleInfoForm(); this.props.updatedInfo(e, this.state, this.props.index);}}>
				<div className="form-group">
				    <label htmlFor="title">Add Title!</label>
				    <input onChange={this.updateDateInfo} type="text" value={this.state.title} className="form-control" id="title" placeholder="Title"/>
				 </div>
				<div className="form-group">
				    <label htmlFor="genre">Add Genre!</label>
				    <input onChange={this.updateDateInfo} type="text" value={this.state.genre} className="form-control" id="genre" placeholder="Genre"/>
				 </div>
				<div className="form-group">
				    <label htmlFor="actors">Add Actors!</label>
				    <input onChange={this.updateDateInfo} type="text" value={this.state.actors} className="form-control" id="actors" placeholder="Actor/Actress"/>
				 </div>
				 <div className="form-group">
				    <label htmlFor="year">Add Release Year!</label>
				    <input onChange={this.updateDateInfo} type="text" value={this.state.year} className="form-control" id="year" placeholder="Year"/>
				 </div>
				 <div className="form-group">
				    <label htmlFor="rating">Add Rating!</label>
				    <input onChange={this.updateDateInfo} type="text" value={this.state.rating} className="form-control" id="rating" placeholder="Rating"/>
				 </div>
				 <button type="submit" className="btn btn-success">Update</button>
			</form>
		) : <button onClick={this.toggleInfoForm} type="button" className="btn btn-sm btn-info">Add Info</button>

	}
});