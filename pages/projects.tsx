import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import Navigation from '../components/Navigation'

type Props = {
  projectPosts: Post[]
}

const Projects = ({ projectPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Gernot Ohner | Software Developer</title>
        </Head>
        <Container>
          <Navigation />
          <MoreStories title="Projects" posts={projectPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Projects

export const getStaticProps = async () => {
  const projectPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'type',
    'coverImage',
    'excerpt',
  ]).filter((post) => post.type == "project")

  return {
    props: { projectPosts },
  }
}
