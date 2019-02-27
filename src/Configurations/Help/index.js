/*
  These are the topics that appear on the help page. A new topic can be added
  by defining it here and adding a corresponding Markdown formatted file in the
  src/Configurations/Help/Text folder.

  A correctly formatted entry should contain:
  * title: This will be used in the sidebar link and the title of the body of
   text
  * link: This is the url path of the help page relative to the site. It must
   begin with '/help/' followed by a name (preferably separated by hyphens)
  * textFile: This is the name of the file containing the text for helpful
   content. It should not contain a path or a file extension.
*/
export const topics = [
  {
    title: 'Site Information',
    link: '/help/site-info',
    textFile: 'alphaInfo',
  },
  {
    title: 'Search tips',
    link: '/help/search-tips',
    textFile: 'searchTips',
  },
  {
    title: 'Creating Collections',
    link: '/help/creating-collections',
    textFile: 'creatingCollections',
  },
  {
    title: 'Copyright and Permissions',
    link: '/help/copyright-and-permissions',
    textFile: 'copyrightAndPermissions',
  },
  // {
  //   title: 'Understanding Search Results',
  //   link: '/help/understanding-search-results',
  //   textFile: 'understandingSearchResults',
  // },
  {
    title: 'Contact Us',
    link: '/help/contact-us',
    textFile: 'contactUs',
  },
  // {
  //   title: 'Advanced Search',
  //   link: '/help/advanced-search',
  //   textFile: 'advancedSearch',
  // },
]
