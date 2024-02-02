import Layout from '@/Components/Global/Layout';
import Navbar from '@/Components/Global/Navbar';
import About from '@/Components/LandingPage/About';
import Contactt from '@/Components/LandingPage/Contactt';

export default function Home() {
    return (
        <Layout>
            <About />
            <Contactt />
        </Layout>
    )
}