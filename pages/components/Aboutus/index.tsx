import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'


interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Web Design.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Realizziamo il tuon nuovo sito internet, utilizzando le ultime tecnologie ed i sistemi più semplici e sicuri',
        link: 'Scopri come'
    },
    {
        heading: "Grafica.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Realizziamo la tua immagine, il tuo logo, i tuoi materiali, studiando chi sei e come presentarti al meglio',
        link: 'Learn more'
    },
    {
        heading: "Formazione.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Facciamo formazione sugli strumenti che realizziamo affinchè possano diventare utili srtumenti per il tuo lavoro',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='relative px-4 py-24 mx-auto my-32 max-w-7xl lg:px-10 bg-lightgrey rounded-3xl'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-lg tracking-widest text-center text-blue'>Le nostre passioni per te</h3>
                <h4 className='text-4xl font-bold text-center lg:text-65xl'>Cosa facciamo</h4>
                <div className='grid grid-cols-1 my-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='pt-10 pb-10 pl-8 pr-6 mt-16 shadow-xl hover:bg-navyblue bg-navyblue rounded-3xl'>
                            <h4 className='mb-5 text-4xl font-semibold text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='mb-5 text-lg font-normal text-offwhite'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold text-white hover-underline'>{item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;