import logo from "./logo/logo.jpg"

//phone
import samsungSlid1 from "./bg/HOME_GalaxyS25Edge_Main-KV_1440x640_pc.webp"
import samsungSlid2 from "./bg/SDSAC-9302-DA-Lockup-Memorial-Day-Stars-HP_KV_Full_Bleed_DT-1440x640.webp"
import samsungSlid3 from "./bg/OLED_HP_DT_1440x640.webp"
// import samsungGalaxyS25Ed from "./phone/samsungGalaxyS25Ed.webp"
import samsungS23Ultra from "./phone/galaxys25ultra.webp"
import samsungS23Plus from "./phone/galaxys25plus.webp"
import samsungS25 from "./phone/galaxyS25.webp"
import samsungFontZ6 from "./phone/samsungFondZ.avif"
import samsungFoldZ6Flip from "./phone/galaxyFond6Zflip.webp"
import samsungS24Re from "./phone/galaxy24re.webp"

//offers
import featureOffer from "./offer/CX-ADP-Migration-LNB-1-DT.webp"
import smartphoneOffer from "./offer/2webp.webp"
import tvOffer from "./offer/-3-DT.webp"
import appilianOffer from "./offer/4-DT.webp"
import waitOffer from "./offer/5-DT.webp"
import tabletOffer from "./offer/NB-6-DT.webp"
import monitorsOffer from "./offer/7-DT.webp"
import samsungOffer from "./offer/CX-ADP-Migration-LNB-8-DT.webp"
import forBu from "./offer/CX-ADP-Migration-LNB-9-DT.webp"
import bg2sam from "./bg/CX_ADP_YouMake_HeroBanner_DT_1440x540.webp"
export const assets = {
    logo: {
        logo,
    },
    bg: {
        samsungSlid1, samsungSlid2, samsungSlid3,bg2sam
    }
}

export const offers = [
    {
        label: "Feature Offer",
        img: featureOffer
    },
    {
        label: "Smartphones Offer",
        img: smartphoneOffer
    },
    {
        label: "Tv & Audio Offer",
        img: tvOffer
    },
    {
        label: "Appliances Offer",
        img: appilianOffer
    },
    {
        label: "Wearables & Buds Offer",
        img: waitOffer
    },
    {
        label: "Tablets & Computing Offer",
        img: tabletOffer
    },
    {
        label: "Monitor & Memory Offer",
        img: monitorsOffer
    },
    {
        label: "Samsungs Offer",
        img: samsungOffer
    },
    {
        label: "For Business",
        img: forBu
    },

]


export const products = [
    {
        id: "#dd14dd52",
        name: "Galaxy S25 Ultra",
        marque: "samsung",
        category: "phone",
        desc: "",
        logo: samsungS23Ultra,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungS23Ultra,
        ]
    },
    {
        id: "#s115s",
        name: "Galaxy S25 ",
        marque: "samsung",
        category: "phone",
        desc: "",
        logo: samsungS23Plus,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungS23Plus,
        ]
    },
    {
        id: "#dd14d52",
        name: "Galaxy S25 ",
        marque: "samsung",
        category: "phone",
        desc: "",
        logo: samsungS25,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungS25,
        ]
    },
    {
        id: "#dd14d52",
        name: "Galaxy Z Fold6",
        marque: "samsung",
        category: "phone",
        desc: "",
        logo: samsungFontZ6,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungFontZ6,
        ]
    },
    {
        id: "#dd14d52",
        name: "Galaxy Flip6",
        marque: "samsung",
        category: "phone",
        desc: "",
        logo: samsungFoldZ6Flip,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungFoldZ6Flip,
        ]
    },
    {
        id: "#dd14d52",
        name: "Galaxy S224",
        marque: "samsung",
        category: "phone",
        desc: "",
        logo: samsungS24Re,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungS24Re,
        ]
    },
]