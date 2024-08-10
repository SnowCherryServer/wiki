import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单高效',
    description: (
      <>
        一键精准定位查看需要的内容
        文档由官方与社区共同维护内容精准
        具有的参考价值极大
      </>
    ),
  },
  {
    title: '文档开放',
    description: (
      <>
        社区成员(玩家)共同维护本文档
        加入社区共同维护本文档在这里留下你的足迹
      </>
    ),
  },
  {
    title: '内容详细',
    description: (
      <>
        本文档内容最为详细最为精准
        并且内容简单易懂及易获取需要的信息
      </>
    ),
  },
  {
    title: 'Wiki编写',
    description: (
      <>
        菱洲阿龙 | 小浩
      </>
    ),
  },
  {
    title: '技术支持',
    description: (
      <>
        小宏 | 小浩
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
