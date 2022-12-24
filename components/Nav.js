import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
    function toggleVisibility() {
        console.log('hello')
        const element = document.querySelectorAll('.mobile-menu');
        element.forEach(e => {
            e.classList.toggle('hidden');
        })
      }
  return (
    <div className="px-10vw flex py-4 bg-slate-300">
        <nav className='lg:flex gap-5 justify-between w-full'>
            <Link href='/'>
                <Image className='self-start' src="/assets/churn-logo-2.png" alt="me" width="125" height="125" />
            </Link>
            <ul className='mobile-menu flex hidden flex-col items-center gap-4 pt-4 pl-6 lg:p-0 lg:flex lg:flex-row lg:gap-8'>
                <li>
                    <Link className='font-semibold hover:text-teal-800 text-lg' href='/'>Home</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:text-teal-800 text-lg' href='/about'>About</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:text-teal-800 text-lg' href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:text-teal-800 text-lg' href='/donations'>Memberships</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:text-teal-800 text-lg' href='/resources'>Resources</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:text-teal-800 text-lg' href='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='mobile-menu hidden flex lg:flex flex-col py-5 pl-6 items-center lg:p-0 lg:flex-row'>
                <Link className='rounded-full bg-teal-700 px-9 py-2 font-semibold hover:bg-teal-600 text-white text-lg' href='/donations'>Give</Link>
            </div>
        </nav>
        <div className='relative'>
            <div className="hamburger w-7 pt-5 absolute right-0 cursor-pointer lg:hidden" onClick={toggleVisibility}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
        </div>
    </div>
  )
}

export default Nav