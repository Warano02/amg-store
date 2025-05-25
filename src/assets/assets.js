import logo from "./logo/logo.jpg"
import samsungSlid1 from "./bg/HOME_GalaxyS25Edge_Main-KV_1440x640_pc.webp"
import samsungSlid2 from "./bg/SDSAC-9302-DA-Lockup-Memorial-Day-Stars-HP_KV_Full_Bleed_DT-1440x640.webp"
import samsungSlid3 from "./bg/OLED_HP_DT_1440x640.webp"
import samsungGalaxyS25Ed from "./phone/samsungGalaxyS25Ed.webp"
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


export const product = [
    {
        id: "#dd14d52",
        name: "Galaxy S25 Edge,(unlocked)",
        marque: "samsung",
        category: "phone",
        desc: "",
        logo: samsungGalaxyS25Ed,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungGalaxyS25Ed,
        ]
    },
]