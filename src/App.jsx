import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import VideoGallery from './components/VideoGallery.jsx';

function App() {
    return (
        <>
        <Header />

        <main>
        <Hero />
        <Services />
        <VideoGallery />
        <Contact />
        </main>
        </>
    )
}

export default App;