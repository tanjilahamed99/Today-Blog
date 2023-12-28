import dynamic from 'next/dynamic';
import AddBlogs from '../components/AddBlogs';

const ClientSidePageComponent = dynamic(() => import('../components/ClientSidePageComponent '), { ssr: false });

const ClientSidePage = () => {
  const handleCreateNewBlog = async (e) => {
    // Your logic for handling the form submission
    console.log('Form submitted:', e);
  };

  return (
    <div>
      <h1>This is a client-side rendered page!</h1>
      <AddBlogs />
      <ClientSidePageComponent handleCreateNewBlog={handleCreateNewBlog} />
    </div>
  );
};

export default ClientSidePage;