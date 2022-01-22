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
  blogPosts: Post[]
}

const Blog = ({ blogPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Gernot Ohner | Software Developer</title>
        </Head>
        <Container>
          <Navigation/>
          <MoreStories title="Blog" posts={blogPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Blog

export const getStaticProps = async () => {
  const blogPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'type',
    'coverImage',
    'excerpt',
  ]).filter((post) => post.type == "blog")

  return {
    props: { blogPosts },
  }
}
