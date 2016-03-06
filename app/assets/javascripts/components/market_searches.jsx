var Form = React.createClass({
  render: function(){
    return (
      <div>
        I am from a form
      </div>
    )
  }
});

var SearchFilter = React.createClass({
  render: function(){
    return (
      <div className="filter">
        <select name="property">
        </select>
      </div>
    )
  }
});

var PropertyOption = React.createClass({
  render: function(){
    return (
      <option>
      </option>
    )
  }
});