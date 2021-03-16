import React from "react";
import { Link, withRouter } from "react-router-dom";
import s from "./Header.module.scss";
import compose from "../../Utils/compose.js";
import { withAuth} from "../../Components/AuthComponent/index.js"
class Header extends React.PureComponent {
  constructor() {
    super();
    this.languages = [
      { title: "English", code: "en" },
      { title: "Русский", code: "ru" },
      { title: "Français", code: "fr" },
    ];
  }

  componentDidMount() {
    this.value = this.props.value;
  }

  //   installerLang = (event) => console.log(event.target.value);
  //   search = (event) => {
  //     this.value += event.target.value;
  //   };

  // lang должен иметь значение 0, 1, 2 в соответствии с language
  // значения lang приведены в соответствие с БД
  render() {
    // const { lang = 0, value = '', home = true, func: { search, installerLang  }} = props;
    // ниже две строчки для проверки при работе раскоментируем весь пропс (строчка выше) а ниже три строки сотрем
    console.log("props", this.props);
    const { switchLanguage, func, authorize, logOut} = this.props;
    let { language = "en" /*, searchText = "" */ } = this.props;
    const { location } = this.props;
    return (
      <header className={s.header}>
        <Link to="/home">
          <p className={s.text}>Travel-APP</p>
        </Link>

        {location.pathname.substring(0, 5) === "/home" ? (
          <input
            className={s.input}
            onChange={func.search}
            type="text"
            placeholder="Осуществи мечту! Начни с поиска!"
          />
        ) : null}
        <button className = {s.authButton} onClick = {authorize} >Авторизоваться</button>
        <button className = {s.authButton} onClick = {logOut} >Выйти</button>
        <select className={s.select} onChange={switchLanguage} value={language}>
          {this.languages.map((item, index) => (
            <option value={item.code} key={index}>
              {item.title}
            </option>
          ))}
        </select>

      </header>
    );
  }
}
export default compose(withRouter, withAuth)(Header);
