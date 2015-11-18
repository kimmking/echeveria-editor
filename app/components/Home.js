import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';
import GithubAPI from 'github-api';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.article}>
          <div className={styles.titleLine}>
            <div className={styles.headLine}>
              <i className="fa fa-fw fa-edit mode"></i>
              <input type="text" id="title" placeholder="标题"/>
            </div>
            <div className={styles.publish}>
              <button type="submit" className="fa fa-fw fa-paper-plane-o mode"/>
            </div>
          </div>
          <div id="editor">
            说说你的故事...
          </div>
        </div>
      </div>
    );
  }
}
