import * as React from 'react';
import * as style from 'styles/floatIcons.module.scss';
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

/*
The difference between component and the one in MyStack component is that
in this one the animations play in the start of the screen */
const FloatIcons = () => (
  <div className={style.svgWrap}>
    <img alt="test" src={js} />
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
);

export default FloatIcons;
