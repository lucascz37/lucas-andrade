import * as React from 'react';
import { graphql } from 'gatsby';
import 'src/styles/global.scss';
import * as style from 'styles/index.module.scss';
import FirstSection from 'components/FirstSection';
import MyStack from 'components/MyStack';
import AboutMe from 'components/AboutMe';

// markup
const IndexPage = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');
  return (
    <div className={style.container}>
      <main className={style.main} data-theme={theme}>
        <title>Lucas Andrade</title>
        <FirstSection currentTheme={theme} changeTheme={setTheme} />
        <MyStack currentTheme={theme} />
        <AboutMe />
      </main>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
