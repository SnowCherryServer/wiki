// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    // 标题前缀
    titlePrefix: "主页",
    // 开始按钮文字
    start: "开始阅读 👋",
  },

  markdown: {
    mermaid: true,
  },

  title: 'SnowCherry Wiki',
  tagline: '一群鸽子编写的服务器教学',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.snowymc.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL ?? '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SnowCherry', // Usually your GitHub org/user name.
  projectName: 'Snowy-Wiki', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/SnowCherryServer/wiki/tree/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-outer',
        path: 'docs-outer',
        routeBasePath: '原版服',
        editUrl: 'https://github.com/SnowCherryServer/wiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-inner',
        path: 'docs-inner',
        routeBasePath: '内服',
        editUrl: 'https://github.com/SnowCherryServer/wiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 标题渲染范围
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      // Replace with your project's social card
      // sidebar自动折叠
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        { name: 'SnowyWiki', content: '一群鸽子编写的服务器教学' },
        { name: 'SnowyWiki', content: '一群鸽子编写的服务器教学' },
      ],
      navbar: {
        title: 'Snowy Wiki',
        logo: {
          alt: 'Logo',
          src: 'img/1-logo.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '原版服',
            docsPluginId: 'docs-outer'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '内服',
            docsPluginId: 'docs-inner'
          },
          // 搜索框
          {
            type: 'search',
            position: 'right',
          },
          // GitHub
          {
            href: "https://github.com/SnowCherryServer/wiki",
            className: "header-github-link",
            position: "right",
          },
          // 顶部导航栏显示切换语言按钮
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始',
                to: '/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SnowCherryServer/wiki',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/YRVtpEwVCa',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: 'ZitBBS',
                href: 'https://www.zitbbs.com/',
              },
              {
                label: 'Baidu',
                href: 'https://baidu.com',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} <b>postyizhan</b>, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },

      // 搜索
      algolia: {
        // The application ID provided by Algolia
        appId: 'D1KV1BYF3B',

        // Public API key: it is safe to commit it
        apiKey: '4bb3573e59f2c49f30f057ce54edab3f',

        indexName: 'Snowy',

      },
    }),

  themes: [
    '@docusaurus/theme-mermaid'
  ],
};

export default config;