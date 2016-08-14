var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },

  handleNewMessage: function (aLocation) {
    var that = this;
    this.setState({isLoading:true});
    openWeatherMap.getTemp(aLocation).then(function(temp){
      that.setState({
        sLocation: aLocation,
        sTemp: temp,
        isLoading: false
      });
    },function(errorMessage){
      that.setState({isLoading:false});
      alert(errorMessage);
    });
  },

  render: function () {
    var vLocation = this.state.sLocation;
    var vTemp = this.state.sTemp;
    var vIsLoading = this.state.isLoading;
    function renderMessage(){
      if(vIsLoading){
        return <h3 className="text-center">存取中...</h3>;
      }else if(vLocation && vTemp){
        return <WeatherMessage pLocation = {vLocation} pTemp = {vTemp}/>;
      }else{
        return <div><h3 className="text-center">請輸入城市英文名稱</h3></div>
      }
    }
    return (
      <div>
        <h1 className="text-center"> 氣溫查詢器 </h1>
        <WeatherForm onNewMessage={this.handleNewMessage}/>
        {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;
