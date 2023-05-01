import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getPromotedProjects } from '../lib/api';
import Head from 'next/head';

export default function Index({ preview, projects }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Simonimo</title>
        </Head>
        <Container>
          <Intro projects={projects} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const projects = await getPromotedProjects(preview);
  console.log(projects);
  return {
    props: { preview, projects },
  };
}
