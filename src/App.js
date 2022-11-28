import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import store from './redux/store';
import { Provider } from 'react-redux';
import HookCounter from './components/HookCounter';
import DynamicCounter from './components/DynamicCounter';

function App() {
  return (
    <Provider store={store}>

      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* <!-- header --> */}
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        {/* <!-- counters --> */}
        <div className="max-w-md mx-auto mt-10 space-y-5" id="counterContainer">
          <Counter />
          <HookCounter />

          <DynamicCounter />

        </div>
        <div className="max-w-md mx-auto mt-10 space-y-5" id="counterContainer">
          <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="addCounter">
            Add Counter
          </button>
          <button className="bg-red-400 text-white px-3 py-2 rounded shadow mx-2" id="resteCounter">
            Reset Counter
          </button>

        </div>

      </div>

    </Provider>
  );
}

export default App;
