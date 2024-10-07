import { lazy, Suspense } from "react";

const LazyContact = lazy(() => import("../components/Form"));

const Contact = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyContact />
    </Suspense>
  );
};

export default Contact;
