module.exports = {
  title: 'Jabra SMILE',
  tagline: 'Documentation platform for Jabra SMILE Voice Analytics - the real time coaching and voice analytics that improves your call center performance. ',
  url: 'https://gndocumentation.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'Jabra SMILE', 
  projectName: 'documentation_platform', 
  themeConfig: {
    navbar: {
      title: 'Jabra SMILE',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
       
        {to: 'docs/doc3', label: 'Tutorial', position: 'left'},
        {to: 'docs/Help', lable: 'Support', position: 'left'}
        
        

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More information',
          items: [
            {
             label: 'Contact',
              to: 'docs/contact',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Documentation Platform for GN Jabra Voice Analytics, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/katrine-bay/documentation_platform',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     https://github.com/katrine-bay/documentation_platform',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
