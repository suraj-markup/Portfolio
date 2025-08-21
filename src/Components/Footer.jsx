import { spacingClasses } from "../utils/spacingUtils";

const Footer = () => {
  return (
    <div className="flex bg-black lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center px-container sm:px-container-lg lg:px-container-xl border-t text-gray-400 py-4 sm:py-6 border-t-gray-700 text-center gap-3 max-w-content mx-auto">
      <div>© {new Date().getFullYear()} Suraj Kumar</div>
      <div>Made with ❤️ in India.</div>
    </div>
  );
};

export default Footer;
