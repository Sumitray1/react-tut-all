function App() {
  const date = new Date();
  const dateInNepal = date.toLocaleDateString(); // 5/12/2020
  const timeinNepal = date.toLocaleTimeString(); // 6:50:21 PM
  return (
    <>
      <h1>Hellow, my name is</h1>
      <p>todays Date is {dateInNepal}</p>
      <p>Current Time is {timeinNepal}</p>
    </>
  );
}

export default App;
