var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"><Link to="/test">Gooo</Link></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				     <Link className="navbar-brand" to="/">Brand</Link>
				    </div>
				    <ul className="nav navbar-nav navbar-right">
			          <li><Link to="/test">Gooo</Link></li>
			    	</ul>
				  </div>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
});