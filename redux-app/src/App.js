import React from 'react';
import './App.css';
import ItemList from './components/ItemList'

function App() {
  return (
    <div className="App" style={{position: "relative", bottom: "25px",}}>
      <ItemList /> 
    </div>
  );
}

export default App;






// import React from 'react';
// import Nav from './components/Nav';
// import PokeList from './components/PokeList';
// import './App.css';




// export default function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <PokeList />
//     </div>
//   );
// }
