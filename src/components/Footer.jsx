
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Use free-brands-svg-icons for social media icons

function Footer() {
  return (
    <div className=" pt-14  mt-10 items-center flex flex-col text-xl ">
      <section className=' w-1/2 grid grid-cols-4 lg:w-1/4  mx-auto text-slate-900'>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram}  />
        <FontAwesomeIcon icon={faTwitter}  />
        <FontAwesomeIcon icon={faYoutube} />
      </section>

      <section className="grid grid-rows-4  lg:grid-cols-3 text-slate-900  gap-2 lg:gap-8 lg:m-4 font-semibold">
        <span className=" place-self-center lg:col-span-1">Conditions of Use</span>
        <span className=" place-self-center lg:col-span-1">Privacy & Policy</span>
        <span className=" place-self-center lg:col-span-1">Press Room</span>
        <span className="lg:col-span-3 mx-auto text-sm text-gray-600">&copy; 2023 MovieBox by Gbenga Oluwadahunsi</span>
      </section>
    </div>
  );
}

export default Footer;
