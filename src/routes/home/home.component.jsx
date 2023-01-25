import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 4,
      title: 'Womans',
      imageUrl: 'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://images.unsplash.com/photo-1595367555510-0428cca40e16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    }
  ]

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
    
  );
}

export default Home;
