    import Hero from '../components/home/Hero'
    import Story from '../components/home/Story'
    import SynopsisContent from '../components/sinopsis/SynopsisContent'
    import TechnicalSheet from '../components/sinopsis/TechnicalSheet'
import AuthorNote from '../components/shared/AuthorNote'

    function Home() {
    return (
        <main>
        <Hero />
        <SynopsisContent />
        <Story />
        <TechnicalSheet />
        <AuthorNote />
        </main>
    )
    }

    export default Home