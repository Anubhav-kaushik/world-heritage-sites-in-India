const unescoBaseUrl = 'https://whc.unesco.org/en/list'

const heritageData = {
    1: {
        name: "Agra fort",
        yor: "1983",
        state: "Uttar Pradesh",
        image: "agra-fort.jpg",
        unescoUrl: `${unescoBaseUrl}/251`,
        category: "cultural"
    },
    2: {
        name: "Ajanta Caves",
        yor: "1983",
        state: "Maharashtra",
        image: "ajanta-caves.jpg",
        unescoUrl: `${unescoBaseUrl}/242`,
        category: "cultural"
    },
    3: {
        name: "Ellora caves",
        yor: "1983",
        state: "Maharashtra",
        image: "ellora-caves.jpg",
        unescoUrl: `${unescoBaseUrl}/243`,
        category: "cultural"
    },
    4: {
        name: "Taj Mahal",
        yor: "1983",
        state: "Uttar Pradesh",
        image: "taj-mahal.jpg",
        unescoUrl: `${unescoBaseUrl}/252`,
        category: "cultural"
    },
    5: {
        name: "Monuments at Mahabalipuram",
        yor: "1984",
        state: "Tamil Nadu",
        image: "mahabalipuram.jpg",
        unescoUrl: `${unescoBaseUrl}/249`,
        category: "cultural"
    },
    6: {
        name: "Sun temple",
        yor: "1984",
        state: "Odisha",
        image: "sun-temple.jpg",
        unescoUrl: `${unescoBaseUrl}/246`,
        category: "cultural"
    },
    7: {
        name: "Kaziranga National Park",
        yor: "1985",
        state: "Assam",
        image: "kaziranga-national-park.jpg",
        unescoUrl: `${unescoBaseUrl}/337`,
        category: "natural"
    },
    8: {
        name: "Keoladeo National Park",
        yor: "1985",
        state: "Rajasthan",
        image: "keoladeo-national-park.jpg",
        unescoUrl: `${unescoBaseUrl}/340`,
        category: "natural"
    },
    9: {
        name: "Manas National Park",
        yor: "1985",
        state: "Assam",
        image: "manas-wildlife-sanctuary.jpg",
        unescoUrl: `${unescoBaseUrl}/338`,
        category: "natural"
    },
    10: {
        name: "Churches and Convents of Goa",
        yor: "1986",
        state: "Goa",
        image: "churches-and-convents-of-goa.jpg",
        unescoUrl: `${unescoBaseUrl}/234`,
        category: "cultural"
    },
    11: {
        name: "Fatehpur Sikri",
        yor: "1986",
        state: "Uttar Pradesh",
        image: "fatehpur-sikri.jpg",
        unescoUrl: `${unescoBaseUrl}/255`,
        category: "cultural"
    },
    12: {
        name: "Monuments at Hampi",
        yor: "1986",
        state: "Karnataka",
        image: "hampi.jpg",
        unescoUrl: `${unescoBaseUrl}/241`,
        category: "cultural"
    },
    13: {
        name: "Khajuraho, Group of Temples",
        yor: "1986",
        state: "Madhya Pradesh",
        image: "khajuraho.jpg",
        unescoUrl: `${unescoBaseUrl}/240`,
        category: "cultural"
    },
    14: {
        name: "Elephanta Caves",
        yor: "1987",
        state: "Maharashtra",
        image: "elephanta-caves.jpg",
        unescoUrl: `${unescoBaseUrl}/244`,
        category: "cultural"
    },
    15: {
        name: "Great Living Chola Temples",
        yor: "1987 & 2004",
        state: "Tamil Nadu",
        image: "chola-temples.jpg",
        unescoUrl: `${unescoBaseUrl}/250`,
        category: "cultural"
    },
    16: {
        name: "Monuments at Pattadakal",
        yor: "1987",
        state: "Karnataka",
        image: "pattadakal.jpg",
        unescoUrl: `${unescoBaseUrl}/239`,
        category: "cultural"
    },
    17: {
        name: "Sunderbans National Park",
        yor: "1987",
        state: "West Bengal",
        image: "sunderbans-national-park.jpg",
        unescoUrl: `${unescoBaseUrl}/452`,
        category: "natural"
    },
    18: {
        name: "Nanda Devi and Valley of Flowers",
        yor: "1988",
        state: "Uttarakhand",
        image: "nanda-devi.jpg",
        unescoUrl: `${unescoBaseUrl}/335`,
        category: "natural"
    },
    19: {
        name: "Buddhist Monuments at Sanchi",
        yor: "1989",
        state: "Madhya Pradesh",
        image: "sanchi.jpg",
        unescoUrl: `${unescoBaseUrl}/524`,
        category: "cultural"
    },
    20: {
        name: "Humayun's Tomb",
        yor: "1993",
        state: "Delhi",
        image: "humayun-tomb.jpg",
        unescoUrl: `${unescoBaseUrl}/232`,
        category: "cultural"
    },
    21: {
        name: "Qutub Minar and its Monuments",
        yor: "1993",
        state: "Delhi",
        image: "qutub-minar.jpg",
        unescoUrl: `${unescoBaseUrl}/233`,
        category: "cultural"
    },
    22: {
        name: "Mountain Railways of India",
        yor: "1999, 2005 & 2008",
        state: "West Bengal, Tamil Nadu & Himachal Pradesh",
        image: "mountain-railways-of-india.jpg",
        unescoUrl: `${unescoBaseUrl}/944`,
        category: "cultural"
    },
    23: {
        name: "Mahabodhi Temple",
        yor: "2002",
        state: "Bihar",
        image: "mahabodhi-temple.jpg",
        unescoUrl: `${unescoBaseUrl}/1056`,
        category: "cultural"
    },
    24: {
        name: "Rock Shelters of Bhimbetka",
        yor: "2003",
        state: "Madhya Pradesh",
        image: "rock-shelters-of-bhimbetka.jpg",
        unescoUrl: `${unescoBaseUrl}/925`,
        category: "cultural"
    },
    25: {
        name: "Champaner-Pavagarh Fort",
        yor: "2004",
        state: "Gujarat",
        image: "champanerpavagarh-fort.jpg",
        unescoUrl: `${unescoBaseUrl}/1101`,
        category: "cultural"
    },
    26: {
        name: "Chhatrapati Shivaji Terminus",
        yor: "2004",
        state: "Maharashtra",
        image: "chhatrapati-shivaji-terminus.jpg",
        unescoUrl: `${unescoBaseUrl}/945`,
        category: "cultural"
    },
    27: {
        name: "Red Fort",
        yor: "2007",
        state: "Delhi",
        image: "red-fort.jpg",
        unescoUrl: `${unescoBaseUrl}/231`,
        category: "cultural"
    },
    28: {
        name: "The Jantar Mantar",
        yor: "2010",
        state: "Rajasthan",
        image: "the-jantar-mantar.jpg",
        unescoUrl: `${unescoBaseUrl}/1338`,
        category: "cultural"
    },
    29: {
        name: "Western Ghats of India",
        yor: "2012",
        state: "Gujarat, Maharashtra, Goa, Karnataka, Kerala & Tamil Nadu",
        image: "western-ghats-of-india.jpg",
        unescoUrl: `${unescoBaseUrl}/1342`,
        category: "natural"
    },
    30: {
        name: "Hill Forts of Rajasthan",
        yor: "2013",
        state: "Rajasthan",
        image: "hill-forts-of-rajasthan.jpg",
        unescoUrl: `${unescoBaseUrl}/247`,
        category: "cultural"
    },
    31: {
        name: "Great Himalayan National Park",
        yor: "2014",
        state: "Himachal Pradesh",
        image: "great-himalayan-national-park.jpg",
        unescoUrl: `${unescoBaseUrl}/1406`,
        category: "natural"
    },
    32: {
        name: "Rani ki Vav",
        yor: "2014",
        state: "Gujarat",
        image: "rani-ki-vav.jpg",
        unescoUrl: `${unescoBaseUrl}/922`,
        category: "cultural"
    },
    33: {
        name: "Nalanda Mahavihara",
        yor: "2016",
        state: "Bihar",
        image: "nalanda-mahavihara.jpg",
        unescoUrl: `${unescoBaseUrl}/1502`,
        category: "cultural"
    },
    34: {
        name: "Khangchendzonga National Park",
        yor: "2016",
        state: "Sikkim",
        image: "khangchendzonga-national-park.jpg",
        unescoUrl: `${unescoBaseUrl}/1513`,
        category: "mixed"
    },
    35: {
        name: "Chandigarh Capitol Complex",
        yor: "2016",
        state: "Chandigarh",
        image: "le-corbusier.jpg",
        unescoUrl: `${unescoBaseUrl}/1321`,
        category: "cultural"
    },
    36: {
        name: "Historic City of Ahmedabad",
        yor: "2017",
        state: "Gujarat",
        image: "ahmedabad.jpg",
        unescoUrl: `${unescoBaseUrl}/1551`,
        category: "cultural"
    },
    37: {
        name: "Victorian and Eco Ensembles",
        yor: "2018",
        state: "Maharashtra",
        image: "victorian-and-eco-ensemble.jpg",
        unescoUrl: `${unescoBaseUrl}/1480`,
        category: "cultural"
    },
    38: {
        name: "Jaipur City",
        yor: "2019",
        state: "Rajasthan",
        image: "jaipur-city.jpg",
        unescoUrl: `${unescoBaseUrl}/1605`,
        category: "cultural"
    },
    39: {
        name: "Dholavira City",
        yor: "2021",
        state: "Gujarat",
        image: "dholavira-city.jpg",
        unescoUrl: `${unescoBaseUrl}/1645`,
        category: "cultural"
    },
    40: {
        name: "Kakatiya Rudreshwara (Ramappa) Temple",
        yor: "2021",
        state: "Telangana",
        image: "ramappa-temple.jpg",
        unescoUrl: `${unescoBaseUrl}/1570`,
        category: "cultural"
    },
}