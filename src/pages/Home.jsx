import Hero from '../components/home/Hero'
import Story from '../components/home/Story'
import SynopsisContent from '../components/sinopsis/SynopsisContent'
import TechnicalSheet from '../components/sinopsis/TechnicalSheet'
import VideoPlayer from '../components/shared/VideoPlayer'

function Home() {
    return (
        <main>
            <Hero />
            <SynopsisContent />
            <VideoPlayer />
            <Story />
            <TechnicalSheet />
        </main>
    )
}

export default Home