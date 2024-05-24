import {GetStaticPropsContext} from 'next';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

// Credit for this i18n implementation goes to https://www.youtube.com/watch?v=6xLYSyXmR3U

const Home: FC = memo(() => {
  const router = useRouter();
  const handleChange = React.useCallback(
    (locale: string) => {
      router.push(router.pathname, router.asPath, {locale});
    },
    [router],
  );
  const {title, description} = homePageMeta;
  return (
    <>
      <Page description={description} title={title}>
        <Header handleLanguageChange={handleChange} router={router} />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Page>
    </>
  );
});

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
  const {locale} = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  };
}
