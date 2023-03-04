import Layout from 'components/Layout/Layout';
import MainRouter from 'navigation/MainRouter';
import { UserProvider } from 'providers/UserContext';

function App(): JSX.Element {
  return (
    <>
      <UserProvider>
        <Layout>
          <MainRouter />
        </Layout>
      </UserProvider>
    </>
  );
}

export default App;
