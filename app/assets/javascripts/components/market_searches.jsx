var Form = React.createClass({
  getInitialState: function(){
    return {
      categories: []
    }
  },
  getCategories: function(){
    componentThis = this;
    $.get('http://localhost:3000/api/v1/market_searches/new', function(response){
      componentThis.setState({categories: response.categories})
    })
  },
  componentDidMount: function(){

  },
  componentWillMount: function(){
    this.getCategories();
  },
  render: function(){
    return (
      <div>
        <h1>Search for sales data and market share.</h1>

        <p>Add as many search filters as you like.</p>

        <p>You can enter multiple search terms by separating them with commas (,).</p>

        {
          this.state.categories.map(function(name){
            return <Category name={name} />;
          })
        }
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

var Category = React.createClass({
  render: function() {
    return (
      <span className="label label-info">
        {this.props.name}
      </span>
    )
  }
})