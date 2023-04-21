import Image from "next/image";

const Banner = () => {
    return (
        <div className='px-6 mx-auto my-10 max-w-7xl sm:py-10 lg:px-8'>
            <div className='grid grid-cols-1 my-16 lg:grid-cols-2'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='px-6 py-1 text-sm font-bold tracking-wider text-blue bg-lightblue hover:shadow-xl md:text-lg rounded-3xl hover:text-white hover:bg-black'>Web Agency and Graphic</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl font-bold lg:text-80xl text-darkpurple'>
                            Dedichiamo <br /> passione <br /> alle tue idee.
                        </h1>
                    </div>
                    <div className='text-center my-7 lg:text-start'>
                        <button className='px-6 py-3 text-sm font-semibold text-white rounded-full md:text-xl hover:shadow-xl bg-blue md:py-5 md:px-14 hover:bg-hoblue'>
                            Iniziamo
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='hidden lg:-m-24 lg:pt-20 lg:block'>
                    <Image src="/images/banner/banner.svg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
