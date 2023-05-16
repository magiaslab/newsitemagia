import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const names = [
    {
        heading: "Startup",
        price: 41,
        user: 'per user, per month',
        button: "Start My 15-day Trial",
        profiles: '5 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "400+ Templated",
        view: "Calendar View",
        support: '24/7 Support',
        category: 'yearly'
    },
    {
        heading: "Business",
        price: 29,
        user: 'per user, per month',
        button: "Start My 15-day Trial",
        profiles: '10 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "600+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'yearly'
    },
    {
        heading: "Agency",
        price: 139,
        user: 'per user, per month',
        button: "Start My 15-day Trial",
        profiles: '100 Social Profiles',
        posts: '100 Scheduled Posts Per Profile',
        templates: "800+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'yearly'
    },
    {
        heading: "Agency",
        price: 139,
        user: 'per user, per yearly',
        button: "Start My 15-day Trial",
        profiles: '100 Social Profiles',
        posts: '100 Scheduled Posts Per Profile',
        templates: "800+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'monthly'
    },
    {
        heading: "Startup",
        price: 41,
        user: 'per user, per yearly',
        button: "Start My 15-day Trial",
        profiles: '5 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "400+ Templated",
        view: "Calendar View",
        support: '24/7 Support',
        category: 'monthly'
    },
    {
        heading: "Business",
        price: 29,
        user: 'per user, per yearly',
        button: "Start My 15-day Trial",
        profiles: '10 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "600+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'monthly'
    },


]

const Manage = () => {
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto my-16 max-w-7xl sm:py-20 lg:px-8'>
                <h3 className='text-4xl font-black text-center sm:text-65xl'>Gestiamo i tuoi contenuti <br /> Profiles From One Place.</h3>


                <div className='mt-20 md:flex md:justify-around'>
                    <div className='flex justify-center gap-5 md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Free 15-day trial</h4>
                    </div>
                    <div className='flex justify-center gap-5 md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Unlimited Team Members</h4>
                    </div>
                    <div className='flex justify-center gap-5 md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Cancel Anytime</h4>
                    </div>
                </div>


                <div className='relative mt-6'>
                    <div className='mb-5 dance-text'>get 3 months free</div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='mr-5 text-sm font-medium'>Billed Yearly</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="text-black sr-only">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='ml-5 text-sm font-medium'>Billed Monthly</h3>
                    </div>
                </div>


                <div className='grid grid-cols-1 mx-5 my-16 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                    {filteredData.map((items, i) => (
                        <div className='p-10 text-center manageTabs' key={i}>
                            <h4 className='mb-3 text-2xl font-bold'>{items.heading}</h4>
                            <h2 className='mb-3 text-5xl font-extrabold sm:text-65xl'>${items.price}</h2>
                            <p className='mb-6 text-sm font-medium text-bggrey'>{items.user}</p>
                            <button className='px-12 py-4 mb-6 text-sm font-bold bg-transparent border-2 rounded-full text-blue hover:bg-blue hover:text-white border-blue'>{items.button}</button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='mt-6 mb-3 text-sm font-medium text-darkgrey'>{items.profiles}</h3>
                            <h3 className='mb-3 text-sm font-medium text-darkgrey'>{items.posts}</h3>
                            <h3 className='mb-3 text-sm font-medium text-darkgrey'>{items.templates}</h3>
                            <h3 className='mb-3 text-sm font-medium text-darkgrey'>{items.view}</h3>
                            <h3 className='mb-3 text-sm font-medium text-darkgrey'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
