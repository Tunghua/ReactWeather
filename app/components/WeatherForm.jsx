var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();
    var vlocation=this.refs.location.value;
    if (vlocation.length>0) {
      this.refs.location.value = "";
      this.props.onNewMessage(vlocation);
    }
  },
  render: function () {
    return (
      <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="location"></input>
            <button className="button expanded hollow">查詢</button>
          </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
