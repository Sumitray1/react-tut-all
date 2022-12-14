import "./index.css";
function DateFunction() {
  const newDate = new Date();
  const hrs = newDate.getHours();
  let greeting = "";
  const cssComponents = {};
  //   console.log(hrs);
  if (hrs > 1 && hrs < 12) {
    greeting = "Good Morning";
    cssComponents.color = "green";
  } else if (hrs > 12 && hrs < 20) {
    greeting = "Good Afternoon";
    cssComponents.color = "yellow";
  } else {
    greeting = "Good Night";
    cssComponents.color = "Black";
  }

  return (
    <>
      <h1 className="heading">
        Hellow, <div style={cssComponents}> {greeting}</div>
      </h1>
    </>
  );
}
export default DateFunction;
