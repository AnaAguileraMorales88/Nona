import Hero from '../components/home/Hero'
import Story from '../components/home/Story'
import SynopsisContent from '../components/sinopsis/SynopsisContent'
import TechnicalSheet from '../components/sinopsis/TechnicalSheet'
import VideoPlayer from '../components/shared/VideoPlayer'
import StoryImages from '../components/home/StoryImages'

function Home() {
    return (
        <main>
            <Hero />
            <SynopsisContent />
            <VideoPlayer />
            <StoryImages />
            <TechnicalSheet />
            <Story />
        </main>
    )
}

export default Home