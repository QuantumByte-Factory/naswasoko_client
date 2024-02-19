import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300">
            <div className="px-[5%] mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">About Us</h4>
                        <p className="text-sm">
                            Leading seller in home and kitchen appliances, to all electronics you need. Payment is done on delivery, therefore you are assured of getting what you orderd, before spending your money.
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
                                <a href="/shop/all-products">Products</a>
                            </li>
                            <li className="mb-2">
                                <a href="/">About</a>
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
                            +254 729 776 804
                            <br />
                            sales@naswasoko.co.ke
                        </p>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Find Us On</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61551680861041&mibextid=LQQJ4d" target='_blank' className="text-xl">
                                <FaFacebookF />
                            </a>
                            <a href="https://x.com/naswasoko?s=21&t=tYP3EP_zymYd7m_ktvjzFg" target='_blank' className="text-xl">
                                <FaXTwitter />
                            </a>
                            <a href="https://www.instagram.com/naswa.soko" target='_blamk' className="text-xl">
                                <FaInstagram />
                            </a>
                            <a href="#linkedin" className="text-xl">
                                <FaLinkedin />
                            </a>
                            <a href="https://youtube.com/@NaswaSoko?si=GSLdkaeuvcpvrFdw" target='_blank' className="text-xl">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
                    <p>&copy; 2024 Naswasoko. All rights reserved.</p>
                    {/* <p>Designed by QBF</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
