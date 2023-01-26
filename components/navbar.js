import Image from "next/image"
import LOGO from "../public/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useRouter } from 'next/router';
import { Drawer } from "@mui/material";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {

    // location
    const { pathname } = useRouter();

    // Drawer
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const list = () => (
        <div className="h-screen">
            <div className="absolute top-6 right-6 text-sky-800">
                <CloseIcon onClick={toggleDrawer(false)} sx={{ fontSize: "40px" }} />
            </div>
            <ul className="flex flex-col items-center  pt-32 text-2xl text-sky-800 space-y-8">
                <li className={
                    pathname === "/" ? "activated" : null
                }>
                    <Link
                        onClick={toggleDrawer(false)}
                        href="/"
                    >
                        Home
                    </Link>
                </li>
                <li className={
                    pathname === "/about" ? "activated" : null
                }>
                    <Link
                        onClick={toggleDrawer(false)}
                        href="shop"
                    >
                        About
                    </Link>
                </li>
                <li className={
                    pathname === "/ffruits" ? "activated" : null
                }>
                    <Link
                        onClick={toggleDrawer(false)}
                        href="/cart"
                    >
                        Frozen Fruits
                    </Link>
                </li>
                <li className={
                    pathname === "/fveg" ? "activated" : null
                }>
                    <Link
                        onClick={toggleDrawer(false)}
                        href="/cart"
                    >
                        Frozen Vegetables
                    </Link>
                </li>
                <li className={
                    pathname === "/cert" ? "activated" : null
                }>
                    <Link
                        onClick={toggleDrawer(false)}
                        href="/cart"
                    >
                        Certificates
                    </Link>
                </li>
                <li className={
                    pathname === "/contact" ? "activated" : null
                }>
                    <Link
                        onClick={toggleDrawer(false)}
                        href="/cart"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <span onClick={toggleDrawer(false)}>Arabic</span>
                </li>
            </ul>
        </div >
    );

    return (
        <nav>
            <section className="flex flex-col sm:flex-row items-center py-10 sm:px-28">
                <div className="absolute sm:hidden top-6 right-6 text-sky-800">
                    <MenuIcon onClick={toggleDrawer(true)} sx={{ fontSize: "40px" }} />
                    <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
                        {list()}
                    </Drawer>
                </div>
                <div className="flex w-fit">
                    <Image width={50} src={LOGO} />
                </div>
                <div className="flex flex-col items-center sm:items-start mt-6 sm:mt-0 sm:ml-10">
                    <p className="flex w-[60%] sm:w-fit text-2xl text-center font-thin text-sky-900">FREEZE FOOD INDUSTRIES</p>
                    <p className="flex text-md w-fit font-thin mt-2 sm:mt-0 text-sky-800">SLOGAN</p>
                </div>
            </section>
            <section className="hidden sm:flex">
                <ul className="flex flex-row space-x-6 py-2 px-20 text-sm text-sky-800 bg-gray-100 w-full">
                    <li className={
                        pathname === "/" ? "activated" : null
                    }>
                        <Link
                            onClick={toggleDrawer(false)}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className={
                        pathname === "/about" ? "activated" : null
                    }>
                        <Link
                            onClick={toggleDrawer(false)}
                            href="shop"
                        >
                            About
                        </Link>
                    </li>
                    <li className={
                        pathname === "/ffruits" ? "activated" : null
                    }>
                        <Link
                            onClick={toggleDrawer(false)}
                            href="/cart"
                        >
                            Frozen Fruits
                        </Link>
                    </li>
                    <li className={
                        pathname === "/fveg" ? "activated" : null
                    }>
                        <Link
                            onClick={toggleDrawer(false)}
                            href="/cart"
                        >
                            Frozen Vegetables
                        </Link>
                    </li>
                    <li className={
                        pathname === "/cert" ? "activated" : null
                    }>
                        <Link
                            onClick={toggleDrawer(false)}
                            href="/cart"
                        >
                            Certificates
                        </Link>
                    </li>
                    <li className={
                        pathname === "/contact" ? "activated" : null
                    }>
                        <Link
                            onClick={toggleDrawer(false)}
                            href="/cart"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <span onClick={toggleDrawer(false)}>Arabic</span>
                    </li>
                </ul>
            </section>
        </nav>
    )
}