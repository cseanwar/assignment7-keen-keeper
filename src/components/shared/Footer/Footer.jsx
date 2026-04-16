import footerImg from "../../../assets/logo-xl.png";
import instagramImg from "../../../assets/instagram.png";
import facebookImg from "../../../assets/facebook.png";
import twitterImg from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col gap-4 justify-center items-center text-center pb-8 md:pb-10">
          <img src={footerImg} alt="Friend Keeper logo" />
          <p className="text-[#FFFFFF80] text-base pb-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h4 className="text-[#FFFFFF] text-xl">Social Links</h4>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full">
                <img src={instagramImg} alt="Instagram icon" />
              </div>
              <div className="h-10 w-10 rounded-full">
                <img src={facebookImg} alt="Facebook icon" />
              </div>
              <div className="h-10 w-10 rounded-full">
                <img src={twitterImg} alt="Twitter icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1A886240]"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left py-6 md:py-7 gap-4 md:gap-0">
            <p className="text-[#FAFAFA50] text-xs md:text-sm lg:text-base order-2 md:order-1">© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 text-[#FAFAFA50] text-xs md:text-sm lg:text-base order-1 md:order-2 cursor-pointer">
                <p>Privacy Policy</p>
                <p>Terms of service</p>
                <p>Cookies</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
