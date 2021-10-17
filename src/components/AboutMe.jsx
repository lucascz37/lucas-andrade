import * as React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import * as style from 'styles/aboutMe.module.scss';
import me from 'images/me.jpeg';
import github from 'images/github.svg';
import lkdin from 'images/lkdin.svg';

const AboutMe = () => (
  <section id="aboutMe" className={style.section}>
    <h1 className={style.title}><Trans>AboutMe</Trans></h1>
    <div className={style.aboutMe}>
      <p>
        <Trans>AboutMeText1</Trans>
        {' '}
        <a href="https://fescfafic.edu.br/" target="_blank" rel="noreferrer"><span><Trans>Fafic</Trans></span></a>
        <Trans>AboutMeText2</Trans>
      </p>
      <img alt="me" src={me} />
    </div>
    <div className={style.links}>
      <a href="https://github.com/lucascz37" target="_blank" rel="noreferrer"><img alt="github" src={github} /></a>
      <a href="https://www.linkedin.com/in/jos%C3%A9-lucas-albuquerque-de-andrade/" target="_blank" rel="noreferrer"><img alt="likdin" src={lkdin} /></a>
    </div>
  </section>
);

export default AboutMe;
