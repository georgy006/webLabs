import './App.css';
import Block from './block/Block';
import Footer from './footer/Footer';
import Header from './header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Block title="Студент" links={["Курс", "Чат", "Теория", "Задания"]} />
        <Block
          title="Преподаватель"
          links={["Создание заданий", "Создание плана урока", "Ресурсы", "Готовые задания"]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
