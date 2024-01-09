import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
//the ones in braces are the ones which aren't default
import FifthComponent, {SixthComponent,} from "./FifthComponent";
//import { SixthComponent } from "./components/learning-examples/FifthComponent";

export default function LearningComponent() {
  return (
    <div className="LearningComponent">
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
          <FourthComponent></FourthComponent>
          <FifthComponent></FifthComponent>
          <SixthComponent/>
          
    </div>
  );
}