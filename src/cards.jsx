function Card(props) {
    return (
      <div className="card">
        {/* Correctly embed the image variable */}
        <img src={myimage} alt="Profile" />
        <h2>Hello</h2>
        <p>
        {props.name}
        </p>
      </div>
    );}