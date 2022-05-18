import React from 'react';
import Nav from "../../components/nav/nav.component";
import Main from '../../components/main/main.component';
import Communications from '../../components/communications/communications.component';
import Features from '../../components/features/features.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import NativeTalk from '../../components/nativetalk/nativetalk.components';
import FAQs from '../../components/FAQs/FAQs.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
    return(
        <div>
            <Nav />
            <Main />
            <Communications />
            <Features />
            <Testimonials />
            <NativeTalk />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Home;