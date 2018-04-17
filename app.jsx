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
      <h1>{ props.title }</h1>
    </div>
  );
};

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

function Player(props) {
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} />
      </div>
    </div>
  );
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
};

// create new props for increment and decrement.

// reconstruct prop types for a stateless component.
// revert back into functional component:

function Counter(props) {
  return(
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment" > + </button>
    </div>
  );
};

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
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
  getInitialState: function(){
    return {
      players: this.props.initialPlayers,
    };
  },
  render:function(){
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />
        <div className="players">
        { this.state.players.map(function(player) {
          return <Player name={player.name} score={player.score} key={player.id} />
        })}
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <Application initialPlayers={PLAYERS} />,
  document.getElementById('container')
);
