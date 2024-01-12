import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300">
            <div className="px-[5%] mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">About Us</h4>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                            justo sit amet risus cursus ullamcorper.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="#home">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#products">Products</a>
                            </li>
                            <li className="mb-2">
                                <a href="#about">About</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <p className="text-sm">
                            Downtown CBD, Moi Avenue
                            <br />
                            +123456789
                            <br />
                            sales@naswasoko.co.ke
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Find Us On</h4>
                        <div className="flex space-x-4">
                            <a href="#facebook" className="text-xl">
                                <FaFacebookF />
                            </a>
                            <a href="#twitter" className="text-xl">
                                <FaXTwitter />
                            </a>
                            <a href="#instagram" className="text-xl">
                                <FaInstagram />
                            </a>
                            <a href="#linkedin" className="text-xl">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Disclaimer */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
                    <p>&copy; 2024 Naswasoko. All rights reserved.</p>
                    {/* <p>Designed by YourName</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
