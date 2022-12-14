import "./App.css";
function App() {
  const date = new Date();
  const hrs = date.getHours();
  let cssStyle = {};
  let greeting = "";
  if (hrs > 1 && hrs < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (hrs >= 12 && hrs < 20) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "gray";
  }
  console.log(greeting);
  return (
    <>
      <div className="heading">
        <h1>
          Hellow,<span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
