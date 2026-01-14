import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'
import joker1 from './joker1.jpg'
import movie from './movie.png'
import wblogo from './wblogo.png'
import abhi2 from './abhi2.png'


export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
    joker1,
    movie,
    wblogo,
    abhi2
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/zAGVQLHvwOY/maxresdefault.jpg",
        videoUrl: 'https://youtu.be/zAGVQLHvwOY?t=11'
    },
    {
        image: "https://img.youtube.com/vi/b9V3Pj47x4c/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/NLOp_6uPccQ/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/yngKXEBALE0/maxresdefault.jpg",
        videoUrl: 'https://youtu.be/yngKXEBALE0?si=ny4GkSnm0mUpbn5f'
    },
]

const dummyCastsData = [
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", },
    { "name": "Abhi Kaldate", "profile_path": "https://i.ibb.co/20h25qmx/abhi2.png", }
]

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "The Darh Knight",
        "overview": "The Dark Knight is a 2008 superhero film directed by Christopher Nolan, starring Batman versus the Joker. It explores chaos, morality, and heroism, praised for Heath Ledger’s iconic performance, gripping storytelling, and realistic tone, with intense action and memorable dialogue.",
        "poster_path": "https://img.youtube.com/vi/KyXWkoRlthY/maxresdefault.jpg",
        "backdrop_path": "https://img.youtube.com/vi/KyXWkoRlthY/maxresdefault.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "Fantasy" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-27",
        "original_language": "en",
        "tagline": "She seeks the power to free her people.",
        "vote_average": 9.4,
        "vote_count": 15000,
        "runtime": 102,
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "Oppenheimer",
        "overview": "Oppenheimer is a biographical thriller directed by Christopher Nolan. It follows physicist J. Robert Oppenheimer and his role in developing the atomic bomb, exploring science, power, morality, and the devastating consequences of nuclear weapons on humanity.",
        "poster_path": "https://img.youtube.com/vi/vO2N0LGvhWc/maxresdefault.jpg",
        "backdrop_path": "https://img.youtube.com/vi/vO2N0LGvhWc/maxresdefault.jpg",
        "genres": [
            { "id": 27, "name": "Horror" },
            { "id": 9648, "name": "Mystery" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-23",
        "original_language": "en",
        "tagline": "Every night a different nightmare.",
        "vote_average": 6.405,
        "vote_count": 18000,
        "runtime": 103,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "Avatar",
        "overview": "Avatar is a science-fiction epic directed by James Cameron. Set on Pandora, it follows humans exploiting alien resources and a former Marine who bonds with the Na’vi, exploring environmentalism, identity, and conflict through groundbreaking visual effects.",
        "poster_path": "https://img.youtube.com/vi/he1MrsDGMbc/maxresdefault.jpg",
        "backdrop_path": "https://img.youtube.com/vi/he1MrsDGMbc/maxresdefault.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "sci" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Hold on to your coconuts.",
        "vote_average": 7.117,
        "vote_count": 27500,
        "runtime": 108,
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "Inception",
        "overview": "Inception is a science-fiction thriller directed by Christopher Nolan. It follows skilled thieves who enter dreams to steal or plant ideas, exploring reality, time, and the power of the subconscious through stunning visuals and a complex narrative.",
        "poster_path": "https://img.youtube.com/vi/ArRqeBKBsEU/maxresdefault.jpg",
        "backdrop_path": "https://img.youtube.com/vi/ArRqeBKBsEU/maxresdefault.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 80, "name": "Crime" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-25",
        "original_language": "en",
        "tagline": "No law. Only disorder.",
        "vote_average": 6.537,
        "vote_count": 35960,
        "runtime": 107,
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "Interstellar",
        "overview": "Interstellar is a science-fiction epic directed by Christopher Nolan. It follows astronauts traveling through a wormhole to save humanity, blending space exploration, time dilation, emotional storytelling, and scientific realism with breathtaking visuals and a powerful musical score.",
        "poster_path": "https://img.youtube.com/vi/l2EqVahDON4/maxresdefault.jpg",
        "backdrop_path": "https://img.youtube.com/vi/l2EqVahDON4/maxresdefault.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "sci" },
            { "id": 12, "name": "Adventure" },
            { "id": 14, "name": "Fantasy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-31",
        "original_language": "en",
        "tagline": "Be there and be square.",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 101,
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "Mission: Impossible - The Final Reckoning",
        "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
        "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Our lives are the sum of our choices.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 170,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Thunderbolts",
        "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    }
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Abhishek", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Abhishek", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Abhishek", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]