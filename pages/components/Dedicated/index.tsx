import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='px-4 mx-auto my-40 max-w-7xl sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 my-16 md:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/alelow.jpeg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute hidden comma-pos lg:block" />
                        <h2 className="pt-4 mt-5 text-4xl font-bold text-center lg:text-65xl sm:leading-tight lg:text-start">Dedicated to help peoples design needs.</h2>
                        <p className="mt-5 text-2xl font-medium text-center text-lightblack lg:text-start">Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis</p>
                        <p className="mt-12 text-2xl font-semibold text-center lg:ml-32 preline lg:text-start"> Cathy Hills, CEO</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
