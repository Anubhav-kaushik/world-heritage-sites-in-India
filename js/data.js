const heritageData = {
    1: {
        name: "Agra fort",
        yor: "1983",
        state: "Uttar Pradesh",
        image: "agra-fort.jpg",
        wiki: "https://en.wikipedia.org/wiki/Agra_Fort"
    },
    2: {
        name: "Ajanta Caves",
        yor: "1983",
        state: "Maharashtra",
        image: "ajanta-caves.jpg",
        wiki: "https://en.wikipedia.org/wiki/Ajanta_Caves"
    },
    3: {
        name: "Ellora caves",
        yor: "1983",
        state: "Maharashtra",
        image: "ellora-caves.jpg",
        wiki: "https://en.wikipedia.org/wiki/Ellora_Caves"
    },
    4: {
        name: "Taj Mahal",
        yor: "1983",
        state: "Uttar Pradesh",
        image: "taj-mahal.jpg",
        wiki: "https://en.wikipedia.org/wiki/Taj_Mahal"
    },
    5: {
        name: "Monuments at Mahabalipuram",
        yor: "1984",
        state: "Tamil Nadu",
        image: "mahabalipuram.jpg",
        wiki: "https://en.wikipedia.org/wiki/Group_of_Monuments_at_Mahabalipuram"
    },
    6: {
        name: "Sun temple",
        yor: "1984",
        state: "Odisha",
        image: "sun-temple.jpg",
        wiki: "https://en.wikipedia.org/wiki/Konark_Sun_Temple"
    },
    7: {
        name: "Kaziranga National Park",
        yor: "1985",
        state: "Assam",
        image: "kaziranga-national-park.jpg",
        wiki: "https://en.wikipedia.org/wiki/Kaziranga_National_Park"
    },
    8: {
        name: "Keoladeo National Park",
        yor: "1985",
        state: "Rajasthan",
        image: "keoladeo-national-park.jpg",
        wiki: "https://en.wikipedia.org/wiki/Keoladeo_National_Park"
    },
    9: {
        name: "Manas National Park",
        yor: "1985",
        state: "Assam",
        image: "manas-wildlife-sanctuary.jpg",
        wiki: "https://en.wikipedia.org/wiki/Manas_National_Park"
    },
    10: {
        name: "Churches and Convents of Goa",
        yor: "1986",
        state: "Goa",
        image: "churches-and-convents-of-goa.jpg",
        wiki: "https://en.wikipedia.org/wiki/Churches_and_convents_of_Goa"
    },
    11: {
        name: "Fatehpur Sikri",
        yor: "1986",
        state: "Uttar Pradesh",
        image: "fatehpur-sikri.jpg",
        wiki: "https://en.wikipedia.org/wiki/Fatehpur_Sikri"
    },
    12: {
        name: "Monuments at Hampi",
        yor: "1986",
        state: "Karnataka",
        image: "hampi.jpg",
        wiki: "https://en.wikipedia.org/wiki/Hampi"
    },
    13: {
        name: "Khajuraho, Group of Temples",
        yor: "1986",
        state: "Madhya Pradesh",
        image: "khajuraho.jpg",
        wiki: "https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments"
    },
    14: {
        name: "Elephanta Caves",
        yor: "1987",
        state: "Maharashtra",
        image: "elephanta-caves.jpg",
        wiki: "https://en.wikipedia.org/wiki/Elephanta_Caves"
    },
    15: {
        name: "Sunderbans National Park",
        yor: "1987",
        state: "West Bengal",
        image: "sunderbans-national-park.jpg",
        wiki: "https://en.wikipedia.org/wiki/Sundarbans_National_Park"
    },
    16: {
        name: "Great Living Chola Temples",
        yor: "1987 & 2004",
        state: "Tamil Nadu",
        image: "chola-temples.jpg",
        wiki: "https://en.wikipedia.org/wiki/Great_Living_Chola_Temples"
    },
    17: {
        name: "Monuments at Pattadakal",
        yor: "1987",
        state: "Karnataka",
        image: "pattadakal.jpg",
        wiki: "https://en.wikipedia.org/wiki/Pattadakal"
    },
    18: {
        name: "Monuments at Sanchi",
        yor: "1989",
        state: "Madhya Pradesh",
        image: "sanchi.jpg",
        wiki: "https://en.wikipedia.org/wiki/Sanchi"
    },
    19: {
        name: "Humayun's Tomb",
        yor: "1993",
        state: "Delhi",
        image: "humayun-tomb.jpg",
        wiki: "https://en.wikipedia.org/wiki/Humayun%27s_Tomb"
    },
    20: {
        name: "Qutub Minar and its Monuments",
        yor: "1993",
        state: "Delhi",
        image: "qutub-minar.jpg",
        wiki: "https://en.wikipedia.org/wiki/Qutb_Minar_complex"
    },
    21: {
        name: "Nanda Devi and Valley of Flowers",
        yor: "1998 & 2005",
        state: "Uttarakhand",
        image: "nanda-devi.jpg",
        wiki: "https://en.wikipedia.org/wiki/Nanda_Devi_and_Valley_of_Flowers_National_Parks"
    },
    22: {
        name: "Mahabodhi Temple",
        yor: "2002",
        state: "Bihar",
        image: "mahabodhi-temple.jpg",
        wiki: "https://en.wikipedia.org/wiki/Mahabodhi_Temple"
    },
    23: {
        name: "Rock Shelters of Bhimbetka",
        yor: "2003",
        state: "Madhya Pradesh",
        image: "rock-shelters-of-bhimbetka.jpg",
        wiki: "https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters"
    },
    24: {
        name: "Champaner-Pavagarh Fort",
        yor: "2004",
        state: "Gujarat",
        image: "champanerpavagarh-fort.jpg",
        wiki: "https://en.wikipedia.org/wiki/Champaner-Pavagadh_Archaeological_Park"
    },
    25: {
        name: "Chhatrapati Shivaji Terminus",
        yor: "2004",
        state: "Maharashtra",
        image: "chhatrapati-shivaji-terminus.jpg",
        wiki: "https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Terminus"
    },
    26: {
        name: "Red Fort",
        yor: "2007",
        state: "Delhi",
        image: "red-fort.jpg",
        wiki: "https://en.wikipedia.org/wiki/Red_Fort"
    },
    27: {
        name: "Mountain Railways of India",
        yor: "1999, 2005 & 2008",
        state: "West Bengal, Tamil Nadu & Himachal Pradesh",
        image: "mountain-railways-of-india.jpg",
        wiki: "https://en.wikipedia.org/wiki/Mountain_railways_of_India"
    },
    28: {
        name: "The Jantar Mantar",
        yor: "2010",
        state: "Rajasthan",
        image: "the-jantar-mantar.jpg",
        wiki: "https://en.wikipedia.org/wiki/Jantar_Mantar,_Jaipur"
    },
    29: {
        name: "Western Ghats of India",
        yor: "2012",
        state: "Karnataka, Tamil Nadu, Kerala & Maharashtra",
        image: "western-ghats-of-india.jpg",
        wiki: "https://en.wikipedia.org/wiki/Western_Ghats"
    },
    30: {
        name: "Hill Forts of Rajasthan",
        yor: "2013",
        state: "Rajasthan",
        image: "hill-forts-of-rajasthan.jpg",
        wiki: "https://en.wikipedia.org/wiki/Hill_Forts_of_Rajasthan"
    },
    31: {
        name: "Rani ki Vav",
        yor: "2014",
        state: "Gujarat",
        image: "rani-ki-vav.jpg",
        wiki: "https://en.wikipedia.org/wiki/Rani_ki_vav"
    },
    32: {
        name: "Great Himalayan National Park",
        yor: "2014",
        state: "Himachal Pradesh",
        image: "great-himalayan-national-park.jpg",
        wiki: "https://en.wikipedia.org/wiki/Great_Himalayan_National_Park"
    },
    33: {
        name: "Nalanda Mahavihara",
        yor: "2016",
        state: "Bihar",
        image: "nalanda-mahavihara.jpg",
        wiki: "https://en.wikipedia.org/wiki/Nalanda"
    },
    34: {
        name: "Chandigarh Capitol Complex",
        yor: "2016",
        state: "Chandigarh",
        image: "le-corbusier.jpg",
        wiki: "https://en.wikipedia.org/wiki/Chandigarh_Capitol_Complex"
    },
    35: {
        name: "Khangchendzonga National Park",
        yor: "2016",
        state: "Sikkim",
        image: "khangchendzonga-national-park.jpg",
        wiki: "https://en.wikipedia.org/wiki/Khangchendzonga_National_Park"
    },
    36: {
        name: "Historic City of Ahmedabad",
        yor: "2017",
        state: "Gujarat",
        image: "ahmedabad.jpg",
        wiki: "https://en.wikipedia.org/wiki/Historic_City_of_Ahmadabad"
    },
    37: {
        name: "Victorian and Eco Ensemble",
        yor: "2018",
        state: "Maharashtra",
        image: "victorian-and-eco-ensemble.jpg",
        wiki: "https://www.indianculture.gov.in/node/2537400"
    },
    38: {
        name: "Jaipur City",
        yor: "2019",
        state: "Rajasthan",
        image: "jaipur-city.jpg",
        wiki: "https://en.wikipedia.org/wiki/Jaipur"
    },
    39: {
        name: "Kakatiya Rudrehwara",
        yor: "2021",
        state: "Telangana",
        image: "kakatiya-rudrehwara.jpg",
        wiki: "https://www.indianculture.gov.in/unesco/heritage-sites/kakatiya-rudreshwara-ramappa-temple-telangana"
    },
    40: {
        name: "Dholavira City",
        yor: "2021",
        state: "Gujarat",
        image: "dholavira-city.jpg",
        wiki: "https://en.wikipedia.org/wiki/Dholavira"
    }
}