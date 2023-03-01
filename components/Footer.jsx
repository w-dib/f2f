function Footer() {
  return (
    <div>
      <div className="relative">
        {/* all rights reserved paragraph */}
        <p className="absolute inset-x-0 bottom-4 text-center text-white md:text-black text-xs">
          All rights reserved © 2023
        </p>
        <img className="object-cover h-40 w-full" src="/img/waves.svg" alt="" />
      </div>
    </div>
  );
}

export default Footer;
