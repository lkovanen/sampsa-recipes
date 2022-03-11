import "./App.css";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

interface RecipeData {
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface Props {
  data: RecipeData;
}

function Recipe(props: Props) {
  return (
    <div>
      <div className="container-fluid">
      <h2>{props.data.name}</h2>
        <div className="row">
          <div className="col-md-6">
            <Ingredients data={props.data.ingredients}></Ingredients>
          </div>
          <div className="col-md-6">
            <Instructions data={props.data.instructions}></Instructions>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
