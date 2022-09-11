
import './App.css';
import Balance from './component/Balance';
import History from './component/History';
import IncExp from './component/IncExp';
import Transaction from './component/Transaction';


function App() {
  return (
    <div id='root'>
      <h2>Expense Tracker App</h2>
    <div className="container">
      
      <Balance/>
      <IncExp/>
      <History/>
      <Transaction/>
    </div>
    </div>
  );
}

export default App;
