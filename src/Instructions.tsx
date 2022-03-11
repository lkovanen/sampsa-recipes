import "./App.css";

function Instructions(props: { data: string[] }) {
  return (
    <div>
      {props.data.map((row, index) => (
        <p key={index}>{row}</p>
      ))}
    </div>
  );
}

export default Instructions;
