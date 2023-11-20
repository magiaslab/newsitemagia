
const Beliefs = () => {
    return (
        <div className='max-w-2xl mx-auto lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 gap-5 mx-5 my-16 lg:grid-cols-2'>

                {/* COLUMN-1 */}

                <div className="px-10 pt-12 bg-darkblue bg-beliefs sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="mb-5 text-lg font-normal tracking-widest text-center text-white sm:text-start">ASTRO BUILD</h2>
                    <h3 className="mb-5 text-4xl font-bold leading-snug text-center text-white sm:text-65xl sm:text-start">Honesty <span className="text-grey">and hard work are our beliefs.</span></h3>
                    <h5 className="pt-2 mb-5 text-center text-offwhite sm:text-start">Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis.</h5>
                    <div className="text-center sm:text-start">
                        <button className="py-5 mt-5 text-xl font-semibold text-white border rounded-full px-14 bg-blue border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="px-10 pt-12 bg-build sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="mb-5 text-lg font-normal tracking-widest text-center text-blue sm:text-start">BUILD</h2>
                    <h3 className="mb-5 text-4xl font-bold leading-snug text-center text-black sm:text-65xl sm:text-start"><span className="text-blue">Build</span> that great idea that you have.</h3>
                    <h5 className="pt-2 mb-5 text-center bluish sm:text-start">Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis.</h5>
                    <div className="text-center sm:text-start">
                        <button className="py-5 mt-5 text-xl font-semibold text-white border rounded-full px-14 bg-blue border-blue hover:bg-hoblue">Learn more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
