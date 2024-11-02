import logo from '../assets/logo.svg'

const Footer = () => {

  return (
    <footer className="footer text-base-content p-6 md:mt-10 md:flex md:justify-between">
      <aside>
     <img src={logo} alt="" className='h-16 w-18'/>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
   <div className='md:grid md:col-span-2 grid'>
   <nav className='md:space-x-3 space-x-1'>
        <h6 className="footer-title">Services</h6>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Branding</a>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Design</a>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Marketing</a>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Advertisement</a>
      </nav>
      <nav className='md:space-x-3 space-x-1'>
        <h6 className="footer-title">Company</h6>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">About us</a>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Contact</a>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Jobs</a>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Press kit</a>
      </nav>
      <nav className='md:space-x-3 space-x-1'>
        <h6 className="footer-title">Legal</h6>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Terms of use</a>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Privacy policy</a>
        <a className="cursor-pointer hover:text-orange-500 hover:transition">Cookie policy</a>
      </nav>
   </div>
    </footer>
  );
};

export default Footer;
