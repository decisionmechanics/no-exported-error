import * as MY_CONSTANTS_WILDCARD from "./constants";
import { MY_CONSTANTS } from "./imports";

const App = () => (
  <ul>
    <li>Andrew is {MY_CONSTANTS_WILDCARD.Andrew}</li>
    <li>Bob is {MY_CONSTANTS.Andrew}</li>
    <li>Bob is {MY_CONSTANTS.Bob}</li>
  </ul>
);

export default App;
