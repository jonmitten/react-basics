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
  score: React.PropTypes.number.isRequired,
};

var Counter = React.createClass({

  propTypes: {
    score: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    // return the initial state object.
    // generally our state is going to be an object with multiple keys in it
    return {
      score: 0,

    }
  },

  render: function() {
    return(
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }

});

function Application(props) {
  return(
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
      { props.players.map(function(player) {
        return <Player name={player.name} score={player.score} />
      })}
        <Player name="Jon Mitten" score={666} />
        <Player name="Dirtbag Magilliguddy" score={33} />
      </div>
    </div>
  );
};

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  })).isRequired,
};

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(
  <Application players={PLAYERS} />,
  document.getElementById('container')
);
