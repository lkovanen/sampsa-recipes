import "./App.css";

function Ingredients(props: { data: string[] }) {
  return (
    <div>
      <ul className="list-unstyled">
        {props.data.map((row, index) => (
          <li key={index}>{row}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
