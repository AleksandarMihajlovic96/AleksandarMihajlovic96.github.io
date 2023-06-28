import "./App.css";

function App() {
    const cursor = document.querySelector(".cursor") as HTMLElement;

    document.addEventListener("mousemove", (e) => {
      const leftPosition = e.pageX;
      const topPosition = e.pageY;

      cursor.style.left = `${leftPosition}px`;
      cursor.style.top = `${topPosition}px`;
    });

  return (
    <div className="App">
      <header className="App-header">
        <div className="cursor"></div>
      </header>
    </div>
  );
}

export default App;
