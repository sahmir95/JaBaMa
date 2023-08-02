import './globals.css'
import {Inter} from 'next/font/google'
import Menu from "@/components/menu/Menu";
import React from "react";
import AppBanner from "@/components/menu/jabamaAppNotif/AppBanner";
import HeaderPop from "@/components/header/headerPop/HeaderPop";
import HeaderLanding from "@/components/header/HeaderLanding";
import Footer from "@/components/footer/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {

    title: 'جاباما: اجاره ویلا، سوئیت و اقامتگاه | شمال و سراسر ایران',

    description: 'Generated by create next app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <HeaderPop/>
        <HeaderLanding display="lg:hidden"/>

        {children}

        <AppBanner display="lg:hidden"/>
        <Menu display="lg:hidden"/>
        <Footer display="lg:block"/>
        </body>
        </html>
    )
}
