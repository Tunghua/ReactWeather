var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var vLocation = this.props.pLocation;
//     var vTemp = this.props.pTemp;
//     return(
//       <div>
//         <p>The Temperture at {vLocation} is {vTemp}</p>
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => {
  var vLocation = props.pLocation;
  var vTemp = props.pTemp;
  return(
    <div>
      <h3 className="text-center"> {vLocation} 現在溫度 {vTemp}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
