export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '61283f509f6ca91b3b4ab562',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3iu81vaq',
                  apiId: 'e40bc236-c09e-4d7b-b4d6-c6adb46510f8'
                },
                {
                  buildHookId: '61283f505637f12009cf59f6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8xiupybt',
                  apiId: '9fb3a5e9-2f8b-4631-b4b3-754f8367819a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AritroSaha10/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8xiupybt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
