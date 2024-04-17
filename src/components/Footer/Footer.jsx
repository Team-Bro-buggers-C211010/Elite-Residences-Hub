import mainLogo from "../../images/Main-Logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { TbBrandGmail } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 backdrop-blur-sm bg-[#8cbd52]/95 text-base-content justify-around">
                <nav className="text-white font-medium">
                    <h6 className="footer-title text-black text-lg font-bold">Services</h6>
                    <a className="link link-hover">Bookings</a>
                    <a className="link link-hover">Rent</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">24/7 support</a>
                </nav>
                <nav className="text-white font-medium">
                    <h6 className="footer-title text-black text-lg font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-white font-medium">
                    <h6 className="footer-title text-black text-lg font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer md:h-20 px-5 md:px-10 py-2 border-t bg-[#71b100] text-base-content border-[white]">
                <aside className="items-center grid-flow-col">
                    <img className="h-16 backdrop-blur-sm bg-white" src={mainLogo}></img>
                    <p className="font-medium"><span className="text-lg md:text-xl font-bold">Elite Residences Hub</span><br />Discover Unmatched Luxury at Elite Residences Hub</p>
                </aside>
                <nav className="gap-1 md:place-self-center md:justify-self-end">
                    <h6 className="footer-title text-black text-lg font-bold">Social</h6>
                    <div className="grid grid-flow-col gap-4 items-center">
                        <Link><TbBrandGmail className="h-7 w-7 hover:text-white" /></Link>
                        <Link><SiLinkedin className="h-7 w-7 hover:text-white" /></Link>
                        <Link><FaFacebookSquare className="h-7 w-7 hover:text-white" /></Link>
                        <Link><GrInstagram className="h-7 w-7 hover:text-white" /></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;