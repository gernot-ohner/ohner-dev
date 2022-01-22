import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Project from '../types/project'
import Navigation from '../components/Navigation'
import React from 'react'
import ProjectList from '../components/ProjectList'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Gernot Ohner | Software Developer</title>
        </Head>
        <Container>
          <Navigation />
          <ProjectList title="Projects" projects={projects} />
        </Container>
      </Layout>
    </>
  )
}

export default Projects

export const getStaticProps = async () => {
  const projects = getAllPosts([
    'title',
    'date',
    'slug',
    'type',
    'coverImage',
    'excerpt',
  ]).filter((post) => post.type == "project")

  return {
    props: { projects },
  }
}
