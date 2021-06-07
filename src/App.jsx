import {Provider} from 'react-redux'

import BankList from './components/BankList';
import generateStore from './redux/store';

function App() {
  let store = generateStore();
  console.log(store, 'Store');
  return (
    <Provider store={store}>
      <BankList />
    </Provider>
  );
}

export default App;
