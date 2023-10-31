import './App.css';

function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>;
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">html</a></li>
      <li><a href="/read/3">html</a></li>
    </ol>
  </nav>;
}

function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>;
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
