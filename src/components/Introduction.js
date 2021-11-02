import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './Introduction.module.css';



export default function Introduction() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center text--bold padding-horiz--md">
          
          <div className="padding--lg text--lg">
            <h3>
            MATLAB
             & 
            YALMIP
            ユーザのための <br/>
            逐次LMI化法
            の実装を支援するプログラム
            </h3>
          
          </div>

          <br/>

          <div className="button">
            <Link
              className="text--bold"
              to="/docs/intro">
              <h1>Get Started ➡ </h1>
            </Link>
          </div>
        
        </div>
      </div>
    </section>
  );
}