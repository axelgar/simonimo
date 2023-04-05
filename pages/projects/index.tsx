import Container from '../../components/container';
import Layout from '../../components/layout';
import Head from 'next/head';

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Simonimo</title>
        </Head>
        <Container>
          <h1>All projects</h1>
        </Container>
      </Layout>
    </>
  );
}
