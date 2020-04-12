export const menuItems = [
  { title: 'Acasa', link: '/home' },
  { title: 'Producatori', link: '/vendor' },
  {
    title: 'Categorii',
    link: '/categories',
    children: [
      { title: 'Cat 1', link: '/categories/1' },
      { title: 'Cat 3', link: '/categories/2' },
      { title: 'Cat 2', link: '/categories/3' }
    ]
  },
  { title: 'Contact', link: '/contact' }
];
