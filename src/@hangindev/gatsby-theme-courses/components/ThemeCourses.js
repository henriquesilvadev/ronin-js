import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import SEO from './seo';
import CoursesList from './CoursesList';
import CoursesHeader from './CoursesHeader';
import CoursesFooter from './CoursesFooter';

const Wrapper = styled.div`
  padding: 0 1rem;
`;

function ThemeCourses() {
  return (
    <Layout>
      <SEO title="Saga" />
      <Wrapper>
        <CoursesHeader />
        <h2>A Saga de Hakushi em busca de seu Code Jutsu.</h2>
        <CoursesList />
        <CoursesFooter />
      </Wrapper>
    </Layout>
  );
}
export default ThemeCourses;
