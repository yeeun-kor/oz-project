import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <div className="bg-black px-[160px] py-[104px]">
      <container className="Info border-red-300s flex h-[100%] justify-between gap-4 border-2 text-white">
        <section className="LogoText flex basis-[40%] flex-col gap-10">
          <h1 className="text-2xl">Cyber</h1>
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </section>
        <section className="FooterNav flex basis-[60%] justify-around gap-10">
          <FooterNav></FooterNav>
          <FooterNav></FooterNav>
        </section>
      </container>
      <div className="SocialIcons my-10 flex gap-5 border-2 border-white">
        <TiSocialTwitter size={30} color="white"></TiSocialTwitter>
        <TiSocialFacebook size={30} color="white"></TiSocialFacebook>
        <BiLogoTiktok size={30} color="white"></BiLogoTiktok>
        <AiFillInstagram size={30} color="white"></AiFillInstagram>
      </div>
    </div>
  );
}
