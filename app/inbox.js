import React from 'github:reactjs/react-bower';
import AjaxMixin from 'github:toranb/toranb-react-cjs-ajax-mixin';

var Inbox = React.createClass({
    render: function() {
        var mixin = new AjaxMixin();
        mixin.xhr("/api/incoming", "GET").then(function(response) {
            response.forEach(function(item) {
                console.log(item);
            });
        });
        return (
            React.DOM.div(null, 
                React.DOM.h1(null, "Inbox!")
            )
        );
    }
});

export default Inbox;
