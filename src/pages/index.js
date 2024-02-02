import Layout from '@/Components/Global/Layout';
import Navbar from '@/Components/Global/Navbar';
import Hero from '@/Components/LandingPage/Hero';
import CaseStudy from '@/Components/LandingPage/CaseStudy';
import Contactt from '@/Components/LandingPage/Contactt';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CaseStudy />
      <Contactt />
    </Layout>
  )
}