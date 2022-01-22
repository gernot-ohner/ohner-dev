import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import Navigation from '../components/Navigation'

type Props = {
  allPosts: Post[]
}

const Projects = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Gernot Ohner | Software Developer</title>
        </Head>
        <Container>
          <Navigation />
          <MoreStories title="Projects" posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Projects

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
