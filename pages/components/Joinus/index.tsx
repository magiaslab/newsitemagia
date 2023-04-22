
const Join = () => {
    return (
        <div className="my-32 bg-joinus">
            <div className='max-w-2xl mx-auto lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-lg font-normal tracking-widest text-blue">JOIN US</h3>
                    <h2 className="my-6 text-4xl font-bold leading-10 sm:text-6xl"> Porta le tue idee <br /> ad un livello superiore.</h2>
                    <p className="text-base font-normal text-lightblack">Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead <br /> historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p>
                </div>

                <div className="max-w-4xl pt-5 mx-auto">
                    <div className="items-center justify-between p-5 mx-5 sm:flex sm:p-0 rounded-xl bg-lightgrey sm:rounded-full">
                        <div>
                            <input type="name" className="py-4 pl-1 my-4 text-black sm:pl-6 lg:text-xl sm:rounded-full bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="Your name" autoComplete="off" />
                        </div>
                        <div>
                            <input type="email" className="py-4 my-4 text-black sm:pl-6 lg:text-xl sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="Your email" autoComplete="off" />
                        </div>
                        <div className="sm:mr-3">
                            <button type="submit" className="w-full text-xl font-semibold text-center text-white joinButton sm:w-0 rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
                                Join!
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
