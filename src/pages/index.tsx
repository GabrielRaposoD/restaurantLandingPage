import { NextSeo } from 'next-seo';
import { Hero, Header } from '../components';

export default function Index() {
  return (
    <>
      <NextSeo
        title='Exsign Studio'
        description='Uma equipe de designers e desenvolvedores de ponta com o objetivo de trazer a experiência e design que seus usuários merecem.'
      />
      <div className='flex flex-col w-full min-h-screen'>
        <Header />
        <Hero />
      </div>
    </>
  );
}
