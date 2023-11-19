import logo from './logo.svg';
import './App.css';
import PropsFunction from './day3/PropsFunction';
import DefaultPropsEx from './day3/DefaultPropsEx';
import ClassDefaultProps from './day3/ClassPropsFunction';
import ClassDefault from './day3/ClassDefault';
import Statecomponent from './day3/Statecomponent';
import Constructor from './day3/Constructor';
import CountEx from './day3/CountEx';
import TwowayDataBinding from './day3/TwowayDataBinding';
import ParentChild from './day3/ParentChild';
import Ternary from './day3/Ternary';
import Parent from './day3/Hooks';
import ToggleMessage from './day3/Cwsum1';
import CountFunction from './day3/CountFunction';
import ButtonChange from './day3/ButtonChange';
import Transformation from './day3/Pah';
function App() {
  return (
    <div className="App">
      <PropsFunction name="Amir" age={20}/>
      <PropsFunction name="Amirtha" age={18}/>

      <DefaultPropsEx name="Kat"/>
      <DefaultPropsEx name="cat" college="MIT"/>
      <DefaultPropsEx college="PSG"/>

      <ClassDefaultProps name="Amirrr home"/>
      <ClassDefault/>
      <ClassDefault sub="Math"/>

      <Statecomponent />

      <Constructor/>

      <CountEx/>

      <TwowayDataBinding/>

      <ParentChild/>

      <Ternary/>

      <Parent/>

      <ToggleMessage/>

      <CountFunction/>

      <ButtonChange/>

      <Transformation/>
    </div>
  );
}

export default App; 
