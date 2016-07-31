var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center"> Examples </h1>
        <p>Here are some example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=taipei'>Taipei, Taiwan</Link>
          </li>
          <li>
            <Link to='/?location=tokyo'>Tokyo, Japan</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
