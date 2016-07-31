var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center"> 關於 </h1>
        <p>這是個氣象查詢測試專案</p>
        <p>使用的工具為：</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a>-前端框架
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a>-氣象查詢 API
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a>-前端 css 框架
          </li>
          <li>
            <a href="http://heroku.com/">Heroku</a>-後端主機
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
