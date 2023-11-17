import { BlogTop } from '../components/BlogTop';
import { BlogContainer } from '../components/BlogContainer';
import { Pagination } from '../components/Pagination';

const getData = async () => {
  const res = await fetch('http://localhost:4000/api/blogs/all', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const body = await res.json();
  return body.posts;
};

const Home = async () => {
  const data = await getData();

  return (
    <>
      <div>
        <BlogTop post={data[0]} />
        <BlogContainer posts={data.slice(1, 7)} />
      </div>
      <Pagination />
    </>
  )
}
export default Home;
