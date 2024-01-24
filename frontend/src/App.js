import './App.css';

/* jsx syntax presented by react which makes it a lot easier to synthesize js and html - we create a js function that returns html*/
function App() {
  // this 'function App()' is known as a component
const name = <h1>Welcome to the model</h1>;
const type = <h2>this model performs subject and sentiment classification </h2>

const model = (<div>{name}
{type}
</div>);
// here we have html in a js object that then displays on our website as a header
  return (
    <div className="App">
      Welcome to this super awesome website
      {model}
    </div>
  );
}

const getName = () => {
  return "Joshua"
}
// js function

const GetNameComponent = () => { 
  return <h1>Joshua</h1>
}
// react component -- needs to have capital first letter

export default App;
