    import Hero from '../components/home/Hero'
    import Story from '../components/home/Story'
    import SynopsisContent from '../components/sinopsis/SynopsisContent'
    import TechnicalSheet from '../components/sinopsis/TechnicalSheet'


    function Home() {
    return (
        <main>
        <Hero />
        <SynopsisContent />
        <Story />
        <TechnicalSheet />
        </main>
    )
    }

    export default Home