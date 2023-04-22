import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Menu",
        link: ['Home', 'Popular', 'Chi siamo', 'Contatti'],
    },
    {
        id: 2,
        section: "Category",
        link: ['Design', 'Mockup', 'View all', 'Log In']
    },
    {
        id: 3,
        section: "Pages",
        link: ['404', 'Instructions', 'License']
    },
    {
        id: 4,
        section: "Others",
        link: ['Styleguide', 'Changelog']
    }
]

const footer = () => {
    return (
        <div className="-mt-40 bg-black" id="first-section">
            <div className="max-w-2xl px-4 pt-48 pb-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 mt-24 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <h3 className='mb-4 text-4xl font-semibold leading-9 text-white lg:mb-20'> Magiaslab</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://facebook.com"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://twitter.com"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="relative col-span-2 group">
                            <p className="text-xl font-extrabold text-white mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="mb-6 text-lg font-normal text-white space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="max-w-2xl mx-auto lg:max-w-7xl">
                <div className="px-4 pt-5 pb-5 border-t border-solid sm:px-6 lg:px-4 border-footer">
                    <div className="grid grid-cols-1 mt-4 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-lg text-center md:text-start text-offwhite'>@2023 - All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> magiaslab.com</Link></h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="pr-6 text-offwhite">Privacy policy</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="pl-6 border-l border-solid text-offwhite border-footer">Termini & condizioni</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
