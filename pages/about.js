import { Layout, Image, SEO, Bio } from "@components/common";



function About() {
    return (
    <Layout>
        <div>
            <p className="text-xl mt-8 mb-4">Hi. I am Sumant Bagade</p>{"\n"}
            <p className="text-lg mt-3">This website is an experiment to organise my media diet.</p>{"\n"}
            <p className="text-lg mb-8">Bit of inspiration from here : <a href="https://www.garyvaynerchuk.com/creating-content-that-builds-your-personal-brand/" target="new_blank">Document, Don't Create</a></p>
            <p className="text-lg mb-2">Broad classification of the posts:</p>{"\n"}
            <p className="mb-3">1. Book Summaries : My Kindle highlights - edited, rephrased and mixed with other content from the internet</p>{"\n"}
            <p className="my-3">2. Startup Library : Goodreads around startup ecosystem </p>{"\n"}
            <p className="my-3">3. (To be added) : Best of Malcolm Gladwell : Collection of Gladwell's best work.</p>{"\n"}

            <p className="mt-10">I spend my time <a href="https://www.goodreads.com/user/show/60493621-sumant-bagade" target="new_blank">  reading books</a> and listening podcasts</p>
            <p className="mb-32">Connect with me on <a href="https://in.linkedin.com/in/sumantbagade">LinkedIn</a> , <a href="https://twitter.com/SumantBagade">Twitter.</a></p>
        </div>
    </Layout>
    )
  }
  
  export default About
  