import { lazy, Suspense } from 'react';

const LazyCaption = lazy(() => import('../components/caption/Caption'));

const About = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyCaption />
    </Suspense>
  );
};

export default About;
