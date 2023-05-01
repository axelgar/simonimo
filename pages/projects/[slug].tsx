import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllProjects, getProjectAndMoreProjects } from '../../lib/api';
import PostTitle from '../../components/post-title';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import RichTextAsset from '../../components/rich-text-asset';

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset id={node.data.target.sys.id} assets={content.links.assets.block} />
    ),
  },
});

export default function Project({ project, moreProjects, preview }) {
  const router = useRouter();

  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="flex gap-9 flex-col lg:flex-row">
              <Head>
                <title>{`${project.title} | Simonimo`}</title>
                {/* <meta property="og:image" content={post.coverImage.url} /> */}
              </Head>
              <section className="flex-1">
                <h1 className="text-4xl font-semibold">{project.title}</h1>
                <div className="text-lg mt-8">
                  {documentToReactComponents(project.description.json, customMarkdownOptions(project.description))}
                </div>
              </section>
              <section className="flex-1">
                <div className="flex flex-wrap gap-4 h-auto">
                  {project.imagesCollection.items.map((image) => (
                    <div className="w-[48%] h-[300] overflow-hidden" key={image.title}>
                      <img src={image.url} alt={image.title} className="object-cover h-full w-full" />
                    </div>
                  ))}
                </div>
              </section>
            </article>
            {/* {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getProjectAndMoreProjects(params.slug, preview);

  return {
    props: {
      preview,
      project: data?.project ?? null,
      moreProjects: data?.moreProjects ?? null,
    },
  };
}

export async function getStaticPaths({ preview = false }) {
  const projects = await getAllProjects(preview);

  return {
    paths: projects?.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true,
  };
}
