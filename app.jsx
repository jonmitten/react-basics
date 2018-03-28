function Application(props) {
  return(
    <div className="scoreboard">
      <div className="header">
        <h1>{ props.title }</h1>
      </div>
      <div className="players">
        <div className="player">
          <div className="player-name">
            Jon Mitten
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score">666</div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>

        </div>
        <div className="player">
          <div className="player-name">
            Dirt Bag
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score">69</div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

Application.propTypes = {
  title: React.PropTypes.string.isRequired,
};

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application title={ "Dopest Scoreboard in the Universe" } />, document.getElementById('container'));
