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
            <ul className="flex flex-col items-center text-center pt-32 text-2xl text-sky-800 space-y-8">
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
        <nav className="flex flex-col items-center py-10">
            <div className="absolute top-6 right-6 text-sky-800">
                <MenuIcon onClick={toggleDrawer(true)} sx={{ fontSize: "40px" }} />
                <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </div>
            <div className="flex w-fit">
                <Image width={50} src={LOGO} />
            </div>
            <p className="flex w-[50%] text-2xl text-center font-thin mt-6 text-sky-900">FREEZE FOOD INDUSTRIES</p>
            <p className="flex text-md text-center font-thin mt-2 text-sky-800">SLOGAN</p>
        </nav>
    )
}