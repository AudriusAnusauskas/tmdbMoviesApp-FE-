import Layout from 'components/Layout/Layout';
import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <>
      <Layout>
        <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
      </Layout>
    </>
  );
}

export default App;
