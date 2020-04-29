module.exports = {
  plugins: [
    {
      resolve: `@hangindev/gatsby-theme-courses`,
      options: {
        contentPath: 'content/courses',
      },
    },
    `gatsby-plugin-sharp`,
  ],
  siteMetadata: {
    title: `RONIN JS SCHOOL`,
    author: `HENRIQUE SILVA DEV`,
    description: `Cursos online de curta e média duração, com o objetivo de aperfeiçoarmos juntos nossas capacidades técnicas.`,
    social: [
      {
        name: `github`,
        url: `https://github.com/henriquesilvadev/ronin-js`,
      },
    ],
  },
};
