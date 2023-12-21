const Navbar = () => {
  return (
    <div className="xs:w-[40vw] sm:w-[40vw] md:w-[60vw]  flex flex-row  justify-end md:flex xs:hidden sm:hidden items-center">
      <div className=" bg-top  ml-[30px]  ">
        <p className="font-Sora w-fit h-fit text-[#5352ED] font-bold xs:text-[15px] sm:text-[13px] md:text-[18px]  mix-blend-overlay uppercase">
          experiences
        </p>
      </div>
      <div className=" bg-top  ml-[30px]  ">
        <p className="font-Sora w-fit h-fit text-[#5352ED] font-bold xs:text-[15px] sm:text-[13px] md:text-[18px]  mix-blend-overlay uppercase">
          projects
        </p>
      </div>
      <div className=" bg-top  ml-[30px] ">
        <p className="font-Sora w-fit h-fit text-[#5352ED] font-bold xs:text-[15px] sm:text-[13px] md:text-[18px]  mix-blend-overlay uppercase">
          skills
        </p>
      </div>
    </div>
  );
};

export default Navbar;
