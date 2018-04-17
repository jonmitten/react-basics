var PLAYERS = [{
  id: 1,
  name: "Jo Mitt",
  score: 41
},
{
  id:2,
  name: "Timm Mars",
  score:40
},
{
  id:3,
  name: "Sterling Asana",
  score:15
}
];

function Header(props) {
  return(
    <div className="header">
      <Stats players={props.players}/>
      <h1>{ props.title }</h1>
    </div>
  );
};

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

function Stats(props){
  var totalPlayers = props.players.length;
  return (
    <table className="stats">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>Players</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points</td>
          <td>123</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired,
}

function Player(props) {
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
};

// create new props for increment and decrement.

// reconstruct prop types for a stateless component.
// revert back into functional component:

function Counter(props) {
  return(
    <div className="counter">
      <button className="counter-action decrement" onClick={function() {props.onChange(-1)}}> - </button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment" onClick={function() {props.onChange(1)}}> + </button>
    </div>
  );
};

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

// create a component class for application
var Application = React.createClass({

  propTypes : {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired,
    })).isRequired,
  },
  getDefaultProps: function(){
    return {
      title: "Scoreboard",
    };
  },
  onScoreChange: function(index, delta) {
    console.log(index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state); // lets React know the state has changed.
  },
  getInitialState: function(){
    return {
      players: this.props.initialPlayers,
    };
  },
  render:function(){
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players}/>
        <div className="players">
        { this.state.players.map(function(player, index) {
          return (
            <Player
              onScoreChange={ function(delta) {this.onScoreChange(index, delta)}.bind(this) }
              name={player.name}
              score={player.score}
              key={player.id}
            />
          )
        }.bind(this))}
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <Application initialPlayers={PLAYERS} />,
  document.getElementById('container')
);
