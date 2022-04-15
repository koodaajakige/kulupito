import styles from './app.module.scss';
import Header from '../header';
import Items from '../items';
import Menu from '../menu';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Items />
      <Menu />
    </div>
  );
}

export default App;
