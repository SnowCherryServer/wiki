import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单高效',
    description: (
      <>
        一键精准定位查看需要的内容
      </>
    ),
  },
  {
    title: '文档开放',
    description: (
      <>
        社区成员(玩家)共同维护本文档
      </>
    ),
  },
  {
    title: '内容详细',
    description: (
      <>
        多说无益, 看看就知道了.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
