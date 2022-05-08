import './App.css';

import ScreenGraphic from './components/screenList/screenGraphic';
import ScreenGraphic2 from './components/screenList/screenGraphic2';
import HeaderCupom from './components/header/headerCupom';
import FiltersComponent from './components/filter/filtersComponent';


function App() {
  return (
    <div className='App'>
      <HeaderCupom />

      <div className='ClassFilters'>
        <FiltersComponent />
      </div>
      <div className='ClassLists1'>

        <ScreenGraphic thisTitle="Atividades gerais do dia" />
        <ScreenGraphic2 thisTitle="Linha de tempo de estudo" />
      </div>
      <div className='ClassLists2'>

      </div>

    </div>
  );
}

export default App;
