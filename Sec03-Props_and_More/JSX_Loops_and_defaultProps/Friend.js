class Friend extends React.Component {

  static defaultProps = {
    name:"Sasha"
  }

  render() {
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {instruments.map(instrument => <li>{instrument}</li>)}
        </ul>
      </div>
    )
  }
}
