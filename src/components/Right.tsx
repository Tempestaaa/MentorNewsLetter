import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";

const Right = () => {
  return (
    <picture className="row-start-1 row-end-2 md:row-start-1 md:row-end-1 rounded-3xl overflow-hidden">
      <source
        media="(min-width: 768px)"
        srcSet={illustrationDesktop}
        className="w-full h-full object-cover"
      />
      <img
        src={illustrationMobile}
        alt="illustration image"
        className="block w-full h-full object-cover"
      />
    </picture>
  );
};

export default Right;
