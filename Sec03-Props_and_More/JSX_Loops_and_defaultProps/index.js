class App extends React.Component {
  render() {
    var arr = ["Flute", "Cello", "Harp"];
    return (
      <div>
        <Friend
          name="Elton"
          instruments={arr}
        />
        <Friend
          instruments={arr}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
