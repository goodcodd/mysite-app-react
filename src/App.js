import "./css/main-page-css/styles.css";
import "./css/main-page-css/header.css";
import "./css/main-page-css/footer.css";
import "./css/main-page-css/above-footer.css";
import "./css/main-page-css/body-content.css";
import download from "./assets/img/background/завантаження.jpg";
import account from "./assets/icons/Account.png";
import phone from "./assets/icons/phone.png";
import Instagram from "./assets/icons/Instagram.png"
import igrashikicom from "./assets/img/igrashikicom.png";
import Shop_Search from "./assets/icons/Shop_Search.png";
import Shop_Cart from "./assets/icons/Shop_Cart.png";
import good1 from "./assets/img/goods/good1.png";
import good2 from "./assets/img/goods/good2.png";
import good3 from "./assets/img/goods/good3.png";
import card1 from "./assets/icons/cards/card1.png";
import card2 from "./assets/icons/cards/card2.png";
import card3 from "./assets/icons/cards/card3.png";
import Shopicons_Bold from "./assets/icons/Shopicons_Bold.png";
import Store from "./assets/icons/Store.png";
import Phone from "./assets/icons/phone.png";
import message from "./assets/icons/message.png";
import clock from "./assets/icons/clock.png";
import stars1 from "./assets/img/stars/stars1.png";
import stars2 from "./assets/img/stars/stars2.png";
import stars3 from "./assets/img/stars/stars3.png";

function App() {
  return (
      <div className="App">
        <div id="header">
          <div className="cabinet">
            <a className="cabinet-a" href="html/auth.html" id="open-modal-button">
              <img src={account} alt="Мій кабінет" />
              <span>Мій кабінет</span>
            </a>
            <hr/>
          </div>

          <div className="main-header">

            <div className="left-content">
              <ul className="main-ul">
                <li className="main-li li-bottom">
                  <a className="main-a" href="#" alt="Phone Icon">
                    <img src={phone}/>
                    +380 66 341 15 28
                  </a>
                </li>
                <li className="main-li">
                  <a className="main-a" href="#" alt="Instagram Icon">
                    <img src={Instagram}/>
                    igrashki.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="center-content">
              <img className="center-logo" src={igrashikicom}/>
            </div>

            <div className="right-content">
              <ul className="right-ul">
                <li className="right-li">
                  <a href="/">
                    <img src={Shop_Search} alt="Search Icon"/>
                  </a>
                </li>
                <li className="right-li">
                  <a href="/">
                    <img src={Shop_Cart} alt="Cart Icon"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr/>
          <div id="header_burger">
            <div className="burger-menu" onClick="toggleMenu()">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="wrapper-menu-list">
              <ul id="menu-list" className="menu-list categories-list">
                <li className="categories-li"><a className="menu-item" href="#news">Новинки</a></li>
                <li className="categories-li"><a className="menu-item" href="#delivery">Доставка</a></li>
                <li className="categories-li"><a className="menu-item" href="#about">Про нас</a></li>
                <li className="categories-li"><a className="menu-item" href="#contacts">Контакти</a></li>
              </ul>
            </div>
          </div>
          <div className="wrapper-menu">
            <div id="menu menu-btn">

              <ul className="menu-list">
                <li><a className="menu-item active" href="#">Головна</a></li>
                <li className="dropdown">
                  <a className="menu-item dropbtn" href="html/goods.html">Товари ⯆</a>
                  <ul className="dropdown-content">
                    <li><a href="#">Батарейки</a></li>
                    <li><a href="#">Велосипеди</a></li>
                    <li><a href="#">Пазли</a></li>
                    <li><a href="#">Ляльки</a></li>
                    <li><a href="#">Музичні іграшки</a></li>
                    <li><a href="#">Казки</a></li>
                    <li><a href="#">Іграшкові набори</a></li>
                  </ul>
                </li>
                <li><a className="menu-item" href="#news">Новинки</a></li>
                <li><a className="menu-item" href="#delivery">Доставка</a></li>
                <li><a className="menu-item" href="#about">Про нас</a></li>
                <li><a className="menu-item" href="#contacts">Контакти</a></li>

              </ul>
              <div className="menu">
                <nav>
                  <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Контакты</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="header-img">
            <div className="slideshow-container">
              <div className="slider-first">
                <img src={download} style={{ width: '100%' }} alt="download" />
                <div className="text">
                  <div className="text-block">
                    <p className="text1">Ми працюємо, відправка щодня!</p>
                    <p className="text2">Мінімальна сума замовлення 300 грн</p>
                  </div>
                  <button className="oval-button">Детальніше ❯</button>
                </div>
              </div>

              <a className="prev custom-button">
                <span className="button-text">❮</span>
              </a>
              <a className="next custom-button">
                <span className="button-text">❯</span>
              </a>

              <div className="bullets">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="body-content">
          <div className="btn-container">
            <div className="btn-inner-container">
              <button className="btn-left"><a href="#">Популярні</a></button>
              <button className="btn-right"><a href="#">Hовинки</a></button>
            </div>
          </div>

          <div className="list-goods">
            <div className="good">
              <img className="img-goods" src={good1} alt="Rainbow High игровий набір" />
              <div className="good-body">
                <div className="good-name">Ігровий набір Rainbow High</div>
                <img src={stars1} alt="Зірки рейтингу" />
                <div className="good-price">5 000 грн</div>
                <button className="good-btn">Купити</button>
              </div>
            </div>

            <div className="good">
              <img className="img-goods" src={good2} alt="Фігурка Тиранозавр Рекс" />
              <div className="good-body">
                <div className="good-name">Фігурка Тиранозавр Рекс</div>
                <img src={stars2} alt="Зірки рейтингу" />
                <div className="good-price">870 грн</div>
                <button className="good-btn">Купити</button>
              </div>
            </div>

            <div className="good">
              <img className="img-goods" src={good3} alt="Іграшка Баштовий кран" />
              <div className="good-body">
                <div className="good-name">Іграшка Баштовий кран</div>
                <img src={stars3} alt="Зірки рейтингу" />
                <div className="good-price">1 050 грн</div>
                <button className="good-btn">Купити</button>
              </div>
            </div>

            <a className="prev2 custom-button">
              <span className="button-text">❮</span>
            </a>
            <a className="next2 custom-button">
              <span className="button-text">❯</span>
            </a>

          </div>
        </div>

        <div className="above-footer">
          <div className="content-container">
            <div className="categories">
              <h3 className="categories-title">Категорії</h3>
              <ul className="categories-list">
                <li className="categories-li top active">
                  <a href="#" className="categories-a">Головна</a>
                </li>
                <li className="categories-li">
                  <a href="html/goods.html" className="categories-a">Товари <span className="categ-span">+</span></a>
                </li>
                <li className="categories-li">
                  <a href="html/news.html" className="categories-a">Новинки</a>
                </li>
                <li className="categories-li">
                  <a href="html/delivery.html" className="categories-a">Доставки</a>
                </li>
                <li className="categories-li">
                  <a href="html/about.html" className="categories-a">Про нас</a>
                </li>
                <li className="categories-li bottom">
                  <a href="html/contacts.htm" className="categories-a">Контакти</a>
                </li>
              </ul>
            </div>

            <div className="about">
              <h3 className="categories-title">Про нас</h3>
              <div className="content">
                <hr className="content-hr"/>
                <p className="card-p"><strong className="card-strong">Мінімальна сума замовлення: від 300 грн.</strong>
                </p>
                <p className="card-p">Знижки для оптових замовлень:</p>
                <p className="card-p"><strong className="card-strong">від 3000 грн. = 2%</strong></p>
                <p className="card-p"><strong className="card-strong">від 5000 грн. = 4%</strong></p>
                <p className="card-p"><strong className="card-strong">від 10000 грн. = 9%</strong></p>
                <p className="card-p"><strong className="card-strong">Знижка не поширюється на замовлення до 5 товарів,
                  для таких замовлень ціна сайту.</strong></p>
                <p className="card-p">Рекомендуємо зареєструватися на сайті igrushkifromNastushka.com,
                  щоб зберігався кошик замовлення та бачити історію замовлень, накопичувати бонуси.</p>
                <p className="card-p"><strong className="card-strong">Чому краще працювати з нами:</strong>
                  <br />
                  - Ми прислухаємося до Ваших побажань та коментарів!
                  <br />
                  &nbsp; - Товар перед упаковкою оглядаємо!
                  <br />
                  &nbsp; - Оперативна обробка замовлень.
                </p>
                <p className="card-p">
                  <strong className="card-strong">Про компанію:</strong>
                  <br />
                  Компанія <strong className="card-strong"> «igrashki.com»</strong> з 2005 року працює на ринку{' '}
                  <strong>дитячих іграшок оптом.</strong>
                  Поставляємо іграшки оптом в магазини по всій території України. Ми надійна компанія з величезним досвідом роботи,
                  яка постійно розвивається. Ми поставляємо і продаємо <strong className="card-strong">дитячі іграшки оптом</strong>.
                  <br />
                  Ми робимо прямі закупівлі товару у виробників з України, Китаю, Польщі. Асортимент нашої компанії налічує більше
                  6000 найменувань дитячих іграшок і товарів. Постійно оновлюємо асортимент - новими, актуальним і трендовими товарами
                  на ринку. Наша мета, щоб співпраця з нами приносила нашим клієнтам максимальний успіх в їх бізнесі.
                </p>
                <p>
                  Сфера діяльності нашої компанії - <strong className="card-strong">оптово-роздрібна торгівля іграшками</strong>.
                  <br />
                  Клієнт - перш за все!
                  <br />
                  Оптові клієнти можуть отримати консультацію по асортименту, обговорити умови співпраці, вибрати оптимальний
                  спосіб доставки і зробити замовлення, будь-яким зручним способом зв'язку.
                </p>
                <p>Наша мета, щоб співпраця з нами приносила нашим клієнтам максимальний успіх в їх бізнесі.</p>
              </div>
            </div>
          </div>


          <div className="cards-about">
            <div className="info">
              <img className="icon-card" src={card1} alt="icon-card"/>
              <h4 className="desc-h4">Зручна доставка</h4>
              <p className="desc-p">Зручна та швидка доставка обраною Вами службою доставки.</p>
            </div>

            <div className="info">
              <img className="icon-card" src={card2} alt="icon-card"/>
              <h4 className="desc-h4">Асортимент</h4>
              <p className="desc-p">Неймовірно великий асортимент товарів на будь-який смак та вік.</p>
            </div>

            <div className="info">
              <img className="icon-card" src={card3} alt="icon-card"/>
              <h4 className="desc-h4">Оплата</h4>
              <p className="desc-p">Оплата готівкою та через банківський рахунок за найкращими цінами.</p>
            </div>
          </div>
        </div>

        <div className="line">
          <div className="table"></div>
        </div>

        <div className="footer">
          <div className="lists-footer">
            <div className="column">
              <h3 className="column-h">Способи оплати</h3>
              <div className="images-shop">
                <img src={Shop_Cart} alt="Shop_Cart"/>
                <img src={Shopicons_Bold} alt="Shopicons_Bold"/>
              </div>
              <p className="column-p">Ви можете оплатити покупку онлайн через сервіс portmone.com.ua або готівкою у
                поштовому відділені.</p>
            </div>


            <div className="column">
              <h3 className="column-h">Інформація</h3>
              <p>Договір публічної оферти</p>
              <p>Оплата та Доставка</p>
              <p>Обмін та повернення товару</p>
              <p>Контакти</p>
            </div>

            <div className="column">
              <h3 className="column-h">Контакти</h3>
              <div className="card">
                <img src={Store} className="icon" alt="Store Icon" />
                <p className="column-p">м. Кропивницький,<br /> Полтавська 81</p>
              </div>

              <div className="card">
                <img src={Phone} className="icon" alt="icon_Phone"/>
                <p>+380 66 341 15 28 Viber</p>
              </div>
              <div className="card">
                <img src={message} className="icon" alt="icon_message"/>
                <a href="mailto:Igrushki@gmail.com" className="contact-link">Igrushki@gmail.com</a>
              </div>
              <div className="card">
                <img src={clock} className="icon" alt="icon_clock"/>
                <p>пн-сб / 9:00-17:00</p>
              </div>
            </div>

          </div>
          <hr/>
          <p className="footer-end">© 2023 NASTYA</p>
        </div>
      </div>
  );
}

export default App;
