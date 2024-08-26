import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105'>
        Contact
      </Link>
      <a  
        href = 'https://drive.google.com/file/d/1hryj0F4oQJyOUQkprWHV2jGETdS6biT3/view?usp=drive_link'
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >Get Resume</a>
    </section>
  );
};

export default CTA;
