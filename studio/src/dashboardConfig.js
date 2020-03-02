export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5d4db9fed1d863290861a8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7j215w1c',
                  apiId: 'fe2f066e-280b-4673-9333-0263e3fab7fd'
                },
                {
                  buildHookId: '5e5d4db9fed1d84928085eff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-44twdgrh',
                  apiId: '616f74e3-b030-444a-a4d9-9266f886c968'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/youssoufdasilva/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-44twdgrh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
