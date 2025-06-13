import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { SiApplepay, SiMastercard, SiPaypal, SiVisa } from 'react-icons/si';


const Footer = () => {
    const sections = [
        {
            title: 'Quick links',
            links: ['Home', 'Shop', 'New Arrivals', 'Best Sellers', 'Gift Sets'],
        },
        {
            title: 'Customer Services',
            links: ['Contact Us', 'FAQs', 'Shipping Policy', 'Returns & Exchange', 'Private Policy'],
        },
    ];
    const socialIcons = [FaFacebook, FaX, FaInstagram];
    const paymentIcons = [SiVisa, SiMastercard, SiPaypal, SiApplepay]
  return(
    <footer className='bg-gray-950 text-gray-300 pt-12 pb-6'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                <div>
                    <h3 className='text-xl font-bold text-white mb-4'>Scent Haven</h3>
                    <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    <div className='flex space-x-4'>
                        {socialIcons.map((Icon, i)=>(
                            <a href="#" key={i} className='text-gray-400 hover:text-white transion'>
                                <Icon className='w-5 h-5'/>
                            </a>
                        ))}
                    </div>
                </div>
                {
                    sections.map(({title, links}, i)=>(
                        <div key={i}>
                            <h3 className='text-lg font-semibold text-white m-4'>{title}</h3>
                            <ul className='space-y-2'>
                                {links.map((link,j)=>(
                                    <li key={j}>
                                        <a href="#" className='hover:text-white transition'>{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
                <div>
                    <h3 className='text-lg font-semibold text-white mb-4'>Newsletter</h3>
                    <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur </p>
                    <form action="" className='flex'>
                        <input type="email" placeholder='Your email address'
                        className='px-4 py-2 w-full rounded-1 focus:outline-none text-gray-200'
                        required
                        name="" id="" />
                        <button type="submit"
                        className='bg-pink-700 hover:bg-pink-700 text-white px-4 py-2 rounded-r transition'>
                            Subscribe
                        </button>
                    </form>
                    <div className='mt-4 flex items-center'>
                        <FaEnvelope className='w-5 h-5 mr-2'/>
                        <span>support@scenthaven.com</span>
                    </div>
                </div>           
            </div>
            <div className='border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center'>
                <p>&copy; {new Date().getFullYear()}Scent Haven. All rights recerved.</p>
                <div className='flex space-x-6 mt-4 md:mt-0'>
                    {paymentIcons.map((Icon, i)=>(
                        <Icon key={i} className='h-6 w-8'/>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer