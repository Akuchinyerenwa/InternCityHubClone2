import "./DummyContact.css";


function DummyContact({title, contents}) {
  return (
    <div className="dummy-cantact">
      <h4>{title}</h4>
      <ul>
        {contents}
      </ul>
    </div>
  )
}

export {DummyContact}