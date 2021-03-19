import React from "react";
import { Link, withRouter } from "react-router-dom";
import s from "./Header.module.scss";
import icon_cross from "./img/cross.svg";
import LoginButtons from "../LogInButtons/index.js";

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

    const { location } = this.props;
    if (location.pathname.substring(0, 5) === "/home") {
      this.inputRef.focus();
    }
  }


  render() {
    const { switchLanguage, func } = this.props;
    let { language = "en" /*, searchText = "" */ } = this.props;
    const { location } = this.props;
    return (
      <header className={s.header}>
        <Link to="/home">
          <p className={s.text}>Travel-APP</p>
        </Link>
        <div className={s.buttons}>
        {location.pathname.substring(0, 5) === "/home" ? (
          <div className={s.input_container}>
          <input
            className={s.input}
            onChange={func.search}
            type="text"
            placeholder={
              language === "ru"
                ? "найти страну"
                : language === "en"
                ? "find a country"
                : "trouver un pays"
            }
            ref={(inputRef) => (this.inputRef = inputRef)}
          />
          <button className={s.input_button}>
            <img src={icon_cross}/>
          </button>
          </div>
        ) : null}
  
          <LoginButtons language={language}/>
          <select className={s.select} onChange={switchLanguage} value={language}>
            {this.languages.map((item, index) => (
              <option value={item.code} key={index}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
