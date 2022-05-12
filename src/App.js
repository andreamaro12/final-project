import 'bulma'
import Header from './components/Header'
import Banking from './components/Banking'
import Balance from './components/Balance'
import AccountType from '.components/accountType'
import LogIn from './components/logIn'

function App() {
  return (
    <div className='section'>
      <Header />
      <Balance />
      <Banking />
      <AccountType />
      <LogIn />
    </div>
  );
}

export default App;
