var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();
    var vmsg=this.refs.msg.value;
    if (vmsg.length>0) {
      this.refs.msg.value = "";
      this.props.onNewMessage(vmsg);
    }
  },
  render: function () {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input style="text" ref="msg"></input>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherFrom;
