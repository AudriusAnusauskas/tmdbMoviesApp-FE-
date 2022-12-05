import Layout from 'components/Layout/Layout';
import MainRouter from 'navigation/MainRouter';

function App(): JSX.Element {
  return (
    <>
      <Layout>
        <MainRouter />
      </Layout>
    </>
  );
}

export default App;
