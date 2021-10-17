import * as React from 'react';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import * as style from 'styles/myStack.module.scss';
import html from 'images/html.svg';
import css from 'images/css.svg';
import sass from 'images/sass.svg';
import js from 'images/js.svg';
import reactsvg from 'images/react.svg';
import java from 'images/java.svg';
import rust from 'images/rust.svg';
import node from 'images/node.svg';
import ts from 'images/typescript.svg';
import python from 'images/python.svg';
import pg from 'images/pg.svg';
import mongo from 'images/mongo.svg';
import unity from 'images/unity.svg';
import spring from 'images/spring.svg';
import gatsby from 'images/gatsby.svg';
import { Link } from 'gatsby';

const MyStack = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = React.useState(t('Click'));

  const generateLanguageList = (svgArray, to) => svgArray.map(
    (e) => (
      <Link to={`/${t('MarkdownLink')}/${to}`}>
        <img
          key={e.key}
          alt={e.key}
          className={style.languageIcon}
          src={e.value}
          onMouseOver={() => setSelected(e.key)}
          onFocus={() => setSelected(e.key)}
        />
      </Link>
    ),
  );

  return (
    <section id="myStack" className={style.section}>
      <h1 className={style.title}>
        <Trans>MyStackHeading</Trans>
      </h1>

      <h2 className={style.typewriter}>{selected}</h2>

      <div className={style.grid}>
        <div className={style.languageList}>

          <h2 className={style.stackName}>Frontend</h2>
          <div className={style.languages}>
            {generateLanguageList([
              { key: 'Html', value: html },
              { key: 'Css', value: css },
              { key: 'Sass', value: sass },
              { key: 'Javascript', value: js },
              { key: 'Reactjs', value: reactsvg },
            ], 'frontend')}
          </div>
        </div>

        <div className={style.languageList}>
          <h2 className={style.stackName}><Trans>Backend</Trans></h2>
          <div className={style.languages}>
            {generateLanguageList([
              { key: 'Java', value: java },
              { key: 'Rust', value: rust },
              { key: 'Node', value: node },
              { key: 'Typescript', value: ts },
              { key: 'Python', value: python },
            ], 'backend')}
          </div>
        </div>

        <div className={style.languageList}>
          <h2 className={style.stackName}><Trans>Tools</Trans></h2>
          <div className={style.languages}>
            {generateLanguageList([
              { key: 'PostgreSQL', value: pg },
              { key: 'MongoDB', value: mongo },
              { key: 'Unity', value: unity },
              { key: 'Spring', value: spring },
              { key: 'Gatsby', value: gatsby },
            ], 'tools')}
          </div>
        </div>
      </div>

      <div className={style.svgWrap}>
        <img alt="test" src={html} />
        <img alt="test" src={css} />
        <img alt="test" src={sass} />
        <img alt="test" src={reactsvg} />
        <img alt="test" src={java} />
        <img alt="test" src={rust} />
        <img alt="test" src={node} />
        <img alt="test" src={ts} />
        <img alt="test" src={python} />
        <img alt="test" src={pg} />
        <img alt="test" src={mongo} />
        <img alt="test" src={spring} />
        <img alt="test" src={gatsby} />
        <img alt="test" src={unity} />
      </div>
    </section>
  );
};

export default MyStack;
