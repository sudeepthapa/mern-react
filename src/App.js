import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <MainBody />
      <Services />
    </div>
  )
}

const Header = () => {
  return <div id="header">
      <p>You are presenting to everyone.</p>
      <p>Stop presenting</p>
      <Button />
  </div>
}

const MainBody = () => {
  return <div id="main">
    <h1>Hello World!</h1>
    <Button />
  </div>
}

const Services = () => {
  return <div id="services">
    <h3>Services</h3>
    <div className="services_container">
      <div className="service">
        <h4>A</h4>
      </div>
      <div className="service">
        <h4>B</h4>
      </div>
      <div className="service">
        <h4>C</h4>
      </div>
    </div>
  </div>
}

const Button = () => {
  return <button className="button">Click Me</button>
}



export default App;