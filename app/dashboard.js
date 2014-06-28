import React from 'github:reactjs/react-bower';
import ReactRouter from 'github:toranb/toranb-react-nested-router';

var Link = ReactRouter.Link;

var Dashboard = React.createClass({
    render: function() {
        return (
            React.DOM.div(null, 
                React.DOM.h1(null, "Dashboard!"),
                React.DOM.ul(null, 
                    React.DOM.li(null, Link( {to:"inbox"}, "Inbox"))
                ),
                this.props.activeRoute
            )
        );
    }
});

export default Dashboard;
