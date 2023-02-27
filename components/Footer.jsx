function Footer() {
  return (
    <div>
      <div className="md:hidden relative">
        {/* all rights reserved paragraph */}
        <p className="absolute bottom-5 left-1/3 text-center text-white text-xs">
          All rights reserved © 2023
        </p>
        <img className="" src="/img/waves.svg" alt="" />
      </div>

      <div className="hidden lg:flex justify-between ">
        <img className="h-8 w-auto" src="./img/tetris-bg-left.svg" alt="" />

        <img className="h-8 w-auto" src="./img/tetris-bg-right.svg" alt="" />
      </div>
    </div>
  );
}

export default Footer;
