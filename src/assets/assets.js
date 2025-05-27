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
import samsungNeoTv1 from "./tv/class7.webp"
import sansungNeoTv2 from "./tv/neo90.webp"
import samsungOledTv1 from "./tv/oledTv1.webp"
import samsungOledTv2 from "./tv/SDSAC-9185-10-LS03FW-The-Frame-Pro-New-ADP-OfferCard-780x780.webp"
import samsungTvh from "./tv/hd.webp"
import samsungAudio1 from "./tv/SDSAC-9185-11-HW-Q990F-Soundbar-New-ADP-OfferCard-780x780.avif"
import samsungAudio2 from "./tv/bbdbd.webp"
import samsungAudio3 from "./tv/ksi.webp"
import samsungAppliance from "./appliance/SDSAC-9190-24-RF90F29AECRAA-New-ADP-OfferCard-780x780.avif"
import samsungAppliance2 from "./appliance/SDSAC-9190-25-RF90F29BECR-New-ADP-OfferCard-780x780.webp"
import samsungAppliance3 from "./appliance/e.webp"
import samsungAppliance4 from "./appliance/d.webp"
import samsungAppliance6 from "./appliance/f.avif"
import samsungAppliance7 from "./appliance/df.avif"
import samsungAppliance8 from "./appliance/jk.webp"
import samsungBuds1 from "./buds/a.webp"
import samsungBuds2 from "./buds/b.avif"
import samsungBuds3 from "./buds/d.webp"
import samsungBuds5 from "./buds/f.webp"
import samsungBuds4 from "./buds/e.avif"
import samsungTablet1 from "./tablet/a.avif"
import samsungTablet2 from "./tablet/b.avif"
import samsungTablet3 from "./tablet/c.webp"
import samsungTablet4 from "./tablet/d.webp"
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
        samsungSlid1, samsungSlid2, samsungSlid3, bg2sam
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
        id: "dd14dd52",
        name: "Galaxy S25 Ultra",
        marque: "samsung",
        category: "phone",
        desc: "",
        logo: samsungS23Ultra,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        storages: [
            {
                size: '256Go',
                normal: 1299.99,
                price: 1199.99,
                colors: [
                    { col: "#000000", name: "Black", price: 1112.99 },
                    { col: "#ffffff", name: "White", price: 799.99 },
                ]
            },
            {
                size: '512Go',
                normal: 1499.99,
                price: 1399.99,
                colors: [
                    { col: "#333333", name: "Graphite", price: 1299.99 },
                    { col: "#dddddd", name: "Silver", price: 1199.99 },
                ]
            },
        ],
        images: [
            samsungS23Ultra, 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png',
            'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png',
            'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png',
            'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png',
            'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png',
        ]
    },
    {
        id: "s115s",
        name: "Galaxy S25",
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
        id: "dd14d53",
        name: "Galaxy S25",
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
        id: "dd14d54",
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
        id: "dd14d55",
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
        id: "dd14d56",
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
    {
        id: "dd14d57",
        name: '77" Neo Class QLED N990F 8K TV',
        marque: "samsung",
        category: "tv",
        desc: "",
        logo: samsungNeoTv1,
        price: 630,
        normal: 1299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungNeoTv1,
        ]
    },
    {
        id: "dd14d58",
        name: '77" Neo QLED N90F 8K TV',
        marque: "samsung",
        category: "tv",
        desc: "",
        logo: sansungNeoTv2,
        price: 6199.99,
        normal: 6499.99,
        inStock: true,
        isNew: true,
        images: [
            sansungNeoTv2,
        ]
    },
    {
        id: "dd14d59",
        name: '77" Neo class OLED S95F TV',
        marque: "samsung",
        category: "tv",
        desc: "",
        logo: samsungOledTv1,
        price: 2699.99,
        normal: 2999.99,
        inStock: true,
        isNew: true,
        images: [
            samsungOledTv1,
        ]
    },
    {
        id: "dd14d60",
        name: '77" Class The Frame Pro LSO3FW Neo QLED 4K Tv',
        marque: "samsung",
        category: "tv",
        desc: "",
        logo: samsungOledTv2,
        price: 2999.99,
        normal: 3299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungOledTv2,
        ]
    },
    {
        id: "dd14d61",
        name: '65" Class the Frame LSO3FA QLED 4K TV',
        marque: "samsung",
        category: "tv",
        desc: "",
        logo: samsungTvh,
        price: 1699.99,
        normal: 1799.99,
        inStock: true,
        isNew: true,
        images: [
            samsungTvh,
        ]
    },
    {
        id: "dd14d62",
        name: 'Q-series SoundBar HW-Q99OF 11.1.4 ch Subwoofer',
        marque: "samsung",
        category: "audio",
        desc: "",
        logo: samsungAudio1,
        price: 1599.99,
        normal: 1999.99,
        inStock: true,
        isNew: true,
        images: [
            samsungAudio1,
        ]
    },
    {
        id: "dd14d63",
        name: 'Q-series SoundBar HW-Q90OF 7.1.4 ch Subwoofer',
        marque: "samsung",
        category: "audio",
        desc: "",
        logo: samsungAudio2,
        price: 1099.99,
        normal: 1399.99,
        inStock: true,
        isNew: true,
        images: [
            samsungAudio2,
        ]
    },
    {
        id: "dd14d64",
        name: 'Q-series SoundBar HW-Q90OF 7.1.4 ch Subwoofer',
        marque: "samsung",
        category: "audio",
        desc: "",
        logo: samsungAudio3,
        price: 749.99,
        normal: 999.99,
        inStock: true,
        isNew: true,
        images: [
            samsungAudio3,
        ]
    },
    {
        id: "dd14d65",
        name: 'Bespoke Refrigerator With Ai Family Hub™️+',
        marque: "samsung",
        category: "appliance",
        desc: "",
        logo: samsungAppliance,
        price: 3199.99,
        normal: 18199.99,
        inStock: true,
        isNew: true,
        images: [
            samsungAppliance,
        ]
    },
    {
        id: "dd14d66",
        name: 'Bespoke Refrigerator with Ai Home',
        marque: "samsung",
        category: "appliance",
        desc: "",
        logo: samsungAppliance2,
        price: 2799.99,
        normal: 4299.99,
        inStock: true,
        isNew: true,
        images: [
            samsungAppliance2,
        ]
    },
    {
        id: "dd14d67",
        name: 'Bespoke Refrigerator with inner Beverage Center™️',
        marque: "samsung",
        category: "appliance",
        desc: "",
        logo: samsungAppliance3,
        price: 1999.99,
        normal: 2999.99,
        inStock: true,
        isNew: true,
        images: [
            samsungAppliance3,
        ]
    },
    {
        id: "dd14d68",
        name: 'Bespoke Refrigerator with inner Beverage Center™️',
        marque: "samsung",
        category: "appliance",
        desc: "",
        logo: samsungAppliance4,
        price: 999,
        normal: 1399,
        inStock: true,
        isNew: true,
        images: [
            samsungAppliance4,
        ]
    },
    {
        id: "dd14d69",
        name: 'Bespoke Dishwasher with 3rd Rack Washing System',
        marque: "samsung",
        category: "appliance",
        desc: "",
        logo: samsungAppliance6,
        price: 999,
        normal: 1399,
        inStock: true,
        isNew: true,
        images: [
            samsungAppliance6,
        ]
    },
    {
        id: "dd14d70",
        name: 'Bespoke Ai Jet™️ Ultra Cordless Stick Vacuum',
        marque: "samsung",
        category: "appliance",
        desc: "",
        logo: samsungAppliance7,
        price: 899.99,
        normal: 1099.99,
        inStock: true,
        isNew: true,
        images: [
            samsungAppliance7,
        ]
    },
    {
        id: "dd14d71",
        name: 'Bespoke Ai Laundry Combo™️ All-in-one',
        marque: "samsung",
        category: "appliance",
        desc: "",
        logo: samsungAppliance8,
        price: 1999,
        normal: 3299,
        inStock: true,
        isNew: true,
        images: [
            samsungAppliance8,
        ]
    },
    {
        id: "dd14d72",
        name: 'Galaxy Watch Ultra',
        marque: "samsung",
        category: "wearable",
        desc: "",
        logo: samsungBuds1,
        price: 509.99,
        normal: 834.99,
        inStock: true,
        isNew: true,
        images: [
            samsungBuds1,
        ]
    },
    {
        id: "dd14d73",
        name: 'Galaxy Watch7',
        marque: "samsung",
        category: "wearable",
        desc: "",
        logo: samsungBuds2,
        price: 299.99,
        normal: 474.99,
        inStock: true,
        isNew: true,
        images: [
            samsungBuds2,
        ]
    },
    {
        id: "dd14d74",
        name: 'Galaxy Buds3 Pro',
        marque: "samsung",
        category: "buds",
        desc: "",
        logo: samsungBuds3,
        price: 299.99,
        normal: 424.99,
        inStock: true,
        isNew: true,
        images: [
            samsungBuds3,
        ]
    },
    {
        id: "dd14d75",
        name: 'Galaxy Ring',
        marque: "samsung",
        category: "buds",
        desc: "",
        logo: samsungBuds4,
        price: 399.99,
        normal: 549.99,
        inStock: true,
        isNew: true,
        images: [
            samsungBuds4,
        ]
    },
    {
        id: "dd14d76",
        name: 'Galaxy Buds3',
        marque: "samsung",
        category: "buds",
        desc: "",
        logo: samsungBuds5,
        price: 139.99,
        normal: 239.99,
        inStock: true,
        isNew: true,
        images: [
            samsungBuds5,
        ]
    },
    {
        id: "dd14d77",
        name: 'Galaxy Tab S10 FE+ | FE',
        marque: "samsung",
        category: "tablet",
        desc: "",
        logo: samsungTablet1,
        price: 139.99,
        normal: 239.99,
        inStock: true,
        isNew: true,
        images: [
            samsungTablet1,
        ]
    },
    {
        id: "dd14d78",
        name: 'Galaxy Tab S10 Ultra',
        marque: "samsung",
        category: "tablet",
        desc: "",
        logo: samsungTablet2,
        price: 799.99,
        normal: 999.99,
        inStock: true,
        isNew: true,
        images: [
            samsungTablet2,
        ]
    },
    {
        id: "dd14d79",
        name: 'Galaxy Book 5 Pro',
        marque: "samsung",
        category: "tablet",
        desc: "",
        logo: samsungTablet3,
        price: 1399.99,
        normal: 1899.99,
        inStock: true,
        isNew: true,
        images: [
            samsungTablet3,
        ]
    },
    {
        id: "dd14d80",
        name: 'Galaxy Book5 Pro 360',
        marque: "samsung",
        category: "tablet",
        desc: "",
        logo: samsungTablet4,
        price: 1479.99,
        normal: 1979.99,
        inStock: true,
        isNew: true,
        images: [
            samsungTablet4,
        ]
    },
]