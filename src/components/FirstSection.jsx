/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import * as style from 'styles/firstSection.module.scss';
import { v4 } from 'uuid';
import arrow from 'images/arrow.svg';
import us from 'images/us.svg';
import br from 'images/br.svg';

const FirstSection = ({ currentTheme, changeTheme }) => {
  const [switcher, setSwitcher] = React.useState(currentTheme === 'light' ? true : false || false);
  const { t } = useTranslation();
  const [lang, setLang] = React.useState(undefined);
  const { changeLanguage } = useI18next();

  React.useEffect(() => { setLang(localStorage.getItem('gatsby-i18next-language')); }, []);

  function onChangeSwitcher() {
    changeTheme(currentTheme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light');
    setSwitcher(!switcher);
  }

  function generateLetterAnimation(string) {
    return string.split('').map((e) => {
      if (e !== ' ') {
        return <span key={v4()} className={style.letterAnimation}>{e}</span>;
      }
      return <span key={v4()} className={style.spacing} />;
    });
  }

  return (
    <section className={style.section}>

      <div className={style.switcherContainer}>
        <label className={style.switcher}>
          <input type="checkbox" defaultChecked={switcher} onChange={onChangeSwitcher} />
          <span
            className={style.slider}
          />
        </label>
      </div>

      <h1 className={style.heading}>

        <p className={style.line}>
          {generateLetterAnimation(t('Hello'))}
          <span className={style.movingIcon}>👋</span>
        </p>

        <p className={style.line}>
          {generateLetterAnimation(t('Me'))}
          <span className={style.spacing} />
          <span className={style.firstLetter}>L</span>
          {generateLetterAnimation('ucas')}
          <span className={style.spacing} />
          <span className={style.secondLetter}>A</span>
          {generateLetterAnimation('ndrade,')}
        </p>

        <p className={style.line}>
          {generateLetterAnimation(t('Developer'))}
        </p>
      </h1>
      <a href="#myStack" className={style.arrow}>
        <div style={{ filter: currentTheme === 'light' ? 'invert(80%)' : 'invert(0)' }}>
          <img alt="arrow" src={arrow} />
        </div>
      </a>
      <div className={style.langs}>
        <img alt="English" src={us} onClick={() => changeLanguage('en')} style={{ filter: lang === 'en' ? 'blur(0)' : 'blur(2px)' }} />
        <img alt="Português" src={br} onClick={() => changeLanguage('pt')} style={{ filter: lang === 'pt' ? 'blur(0)' : 'blur(2px)' }} />
      </div>
    </section>
  );
};

export default FirstSection;
