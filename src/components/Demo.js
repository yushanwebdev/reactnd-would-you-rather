import { useHistory } from "react-router-dom";

function Demo () {
    let history = useHistory();
    const goToPreviousPath = () => {
      console.log(history.location.state.from.pathname);
    }
    return (
      <div>
        <button
          onClick={goToPreviousPath}
        >
          Back
        </button>
      </div>
    )
}

export default Demo;