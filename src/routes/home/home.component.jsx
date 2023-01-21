import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'shorturl.at/aDU67'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'shorturl.at/jNUZ1'
    },
    {
      id: 4,
      title: 'Womans',
      imageUrl: 'shorturl.at/FJUZ2',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'shorturl.at/wGQRY',
    }
  ]

  return (
    <Directory categories={categories} />
  );
}

export default Home;
