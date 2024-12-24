import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contacts">
          <h4>Контакты</h4>
          <p>Телефон: +7 (900) 123-45-67</p>
          <p>Email: support@languageapp.com</p>
          <p>Адрес: г. Владимир, ул. Пушкина, д. 1</p>
        </div>
        <div className="support">
          <h4>Поддержка</h4>
          <p>Часто задаваемые вопросы</p>
          <p>Обратная связь</p>
          <p>Поддержка 24/7</p>
        </div>
        <div className="social">
          <h4>Мы в соцсетях</h4>
          <a href="#" className="social-link">ВКонтакте</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
