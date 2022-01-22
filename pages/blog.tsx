import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import Navigation from '../components/Navigation'

type Props = {
  allPosts: Post[]
}

const Blog = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Gernot Ohner | Software Developer</title>
        </Head>
        <Container>
          <Navigation/>
          <MoreStories title="Blog" posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Blog

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
