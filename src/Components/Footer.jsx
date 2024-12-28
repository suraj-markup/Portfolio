const Footer = () => {
  return (
    <div className="flex bg-black lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center px-5 border-t text-gray-400 py-5 border-t-gray-700 text-center gap-3">
      <div>© {new Date().getFullYear()} Suraj Kumar</div>
      <div>Made with ❤️ in India.</div>
    </div>
  );
};

export default Footer;
