import React from "react";

const Header = () => {
  const showAlert = (sectionName) => {
    alert(`Раздел "${sectionName}" недоступен!`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert("Функция поиска на данный момент недоступна!");
  };

  return (
    <header>
      <nav>
        <form>
          <button onClick={() => showAlert("Студент")}>Студент</button>
          <button onClick={() => showAlert("Преподаватель")}>Преподаватель</button>
        </form>
        <div className="logo">LearnLand</div>
        <form id="searchForm" onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="Введите запрос" required />
          <button type="submit">Поиск</button>
        </form>
        <button className="profile-circle" onClick={() => showAlert("Профиль")}>👤</button>
      </nav>
    </header>
  );
};

export default Header;
