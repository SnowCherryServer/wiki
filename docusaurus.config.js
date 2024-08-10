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
    start: "快速开始 🥵",
  },

  markdown: {
    mermaid: true,
  },

  title: '笨蛋 MC 开服教程',
  tagline: '一群笨蛋们写的 Minecraft 开服教程',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yizhan.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL ?? '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'postyizhan', // Usually your GitHub org/user name.
  projectName: '笨蛋式指南', // Usually your repo name.

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
          editUrl: 'https://github.com/postyizhan/NitWikit/tree/main',
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
        id: 'docs-java',
        path: 'docs-java',
        routeBasePath: 'Java',
        editUrl: 'https://github.com/postyizhan/NitWikit/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-bedrock',
        path: 'docs-bedrock',
        routeBasePath: 'Bedrock',
        editUrl: 'https://github.com/postyizhan/NitWikit/tree/main',
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
        { name: '开服教程', content: '一群笨蛋们写的 Minecraft 开服教程' },
        { name: 'MC教程', content: '一群笨蛋们写的 Minecraft 开服教程' },
      ],
      navbar: {
        title: 'NitWikit',
        logo: {
          alt: 'Logo',
          src: 'img/book.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '通用',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Java',
            docsPluginId: 'docs-java'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Bedrock',
            docsPluginId: 'docs-bedrock'
          },
          // 搜索框
          {
            type: 'search',
            position: 'right',
          },
          // GitHub
          {
            href: "https://github.com/postyizhan/NitWikit",
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
                href: 'https://github.com/postyizhan/NitWikit',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/dENGavSflK',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: '服主资源导航页',
                href: 'http://nav.yumc.fun',
              },
              {
                label: 'CSKB 日冕知识库',
                href: 'https://kb.corona.studio',
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

        indexName: 'yizhan',

      },
    }),

  themes: [
    '@docusaurus/theme-mermaid'
  ],
};

export default config;
