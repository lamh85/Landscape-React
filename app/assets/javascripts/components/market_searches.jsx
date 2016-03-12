var Form = React.createClass({
  componentDidMount: function(){

  },
  getCategories: function(){
    $.get('localhost3000/api/v1/', function(response){
      console.log('response')
    })
  },
  render: function(){
    return (
      <div>
        <h1>Search for sales data and market share.</h1>

        <p>Add as many search filters as you like.</p>

        <p>You can enter multiple search terms by separating them with commas (,).</p>

        <SearchFilter />
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