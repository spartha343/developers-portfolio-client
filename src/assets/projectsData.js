import doctorsPortal from './doctors-portal.png';
import bistroBoss from './bistro-boss.png';
import claytonConvention from './clayton-convention.png';
import ssfNews from './ssf-news.png';
import technoVerse from './techno-verse.png';
import calculateExpenditure from './calculate-expenditure.png';
import beginnerDev from './beginner-dev.png';
import influencerProducts from './influencer-products.png';
import verseFood from './verseFood.png';
import bookedAppointments from './doctors-portal-images/booked-appointments.png'
import appointmentPayment from './doctors-portal-images/payment-page.png'
import addADoctor from './doctors-portal-images/addADoctor.png'
import authentication from './doctors-portal-images/authentication.png'
import bookAnAppointment from './doctors-portal-images/bookAnAppointment.png'
import manageDoctors from './doctors-portal-images/manageDoctors.png'
import bistroBossPayment from './bistro-boss-images/paymentPage.png'
import addFoodItem from './bistro-boss-images/addFoodItem.png'
import addToCart from './bistro-boss-images/addToCart.png'
import bistroAuthentication from './bistro-boss-images/authentication.png'
import bistroCart from './bistro-boss-images/cart.png'
import bistroClientReviews from './bistro-boss-images/client-reviews.png'
import bistroFoodMenu from './bistro-boss-images/food-menu.png'
import manageFoodItems from './bistro-boss-images/manageFoodItems.png'
import manageBistroUsers from './bistro-boss-images/manageUsers.png'
import bistroWebStats from './bistro-boss-images/web-stats.png'

export const projects = [
    {
        id: 1,
        title: "Doctor's Portal",
        description: "Secure Web portal for booking and managing doctor's appointments",
        image: doctorsPortal,
        liveLink: 'https://doctors-portal-client.netlify.app/',
        frontEnd: 'https://github.com/spartha343/doctors-portal-client',
        backEnd: 'https://github.com/spartha343/doctors-portal-server',
        details: [
            {
                text: "I have integrated stripe to receieve the payments of all the appointments that a user has booked for himself.",
                image: appointmentPayment
            },
            {
                text: "I have used firebase to authenticate all the users. I have also implemented JWT to secure all the http requests.",
                image: authentication
            },
            {
                text: "A client will be able to go through all the available services and book an appointment for himself easily.",
                image: bookAnAppointment
            },
            {
                text: "In that page, a user will be able to check all the appointments that he has booked for himself.",
                image: bookedAppointments
            },
            {
                text: "An admin can add a new doctor dynamically by filling up the form on that page.",
                image: addADoctor
            },
            {
                text: "An admin can also remove a doctor from the database if this is required for some reason.",
                image: manageDoctors
            },
        ]
    },
    {
        id: 2,
        title: "Bistro Boss",
        description: 'Completely secure Restaurent application with stripe integration',
        image: bistroBoss,
        liveLink: 'https://client-bistro-boss.netlify.app/',
        frontEnd: 'https://github.com/spartha343/bistro-boss-client',
        backEnd: 'https://github.com/spartha343/bistro-boss-server',
        details: [
            {
                text: "I have integrated stripe to receieve the payments of all the foods that a user has ordered for himself.",
                image: bistroBossPayment
            },
            {
                text: "I have used firebase to authenticate all the users. I have also implemented JWT to secure all the http requests.",
                image: bistroAuthentication
            },
            {
                text: "Authorized user will be able to check the current business stats like revenue, menu items, orders, new users",
                image: bistroWebStats
            },
            {
                text: "An admin can modify the role of a user or remove him from that page",
                image: manageBistroUsers
            },
            {
                text: "Menu page to display all the available foods",
                image: bistroFoodMenu
            },
            {
                text: "An admin will be able to add a new food item dynamically by filling up the form on that page.",
                image: addFoodItem
            },
            {
                text: "An admin can modify or delete a food item from this page",
                image: manageFoodItems
            },
            {
                text: 'A user will be able to choose among various types of food items and add his favourite ones to the cart',
                image: addToCart
            },
            {
                text: "A User will be able to check all the items that he has added to the cart. He may compare, remove or order foods from that page",
                image: bistroCart
            },
            {
                text: "Any user will be able to see all the reviews that is given by others about that restaurent",
                image: bistroClientReviews
            },
        ]
    },
    {
        id: 3,
        title: "SSF News",
        description: 'News Portal web application with all the required basic functionality',
        image: ssfNews,
        liveLink: 'https://ssf-news-client.netlify.app/',
        frontEnd: 'https://github.com/spartha343/ssf-news-client',
        backEnd: 'https://github.com/spartha343/ssf-news-server',
    },
    {
        id: 4,
        title: "Techno Verse",
        description: 'React redux has been used for maintaing all the states in this project.',
        image: technoVerse,
        liveLink: 'https://techno-verse365.netlify.app/',
        frontEnd: 'https://github.com/spartha343/techno-verse-client',
        backEnd: 'https://github.com/spartha343/moon-tech-server',
    },
    {
        id: 5,
        title: "Verse Food",
        description: 'Simple restaurent app to order various kinds of food',
        image: verseFood,
        liveLink: 'https://verse-food.netlify.app/',
        frontEnd: 'https://github.com/spartha343/verse-food-client',
        backEnd: 'https://github.com/spartha343/verse-food-server',
    },
    {
        id: 6,
        title: "Calculate Expenditure",
        description: 'This project was created just to practice JavaScript',
        image: calculateExpenditure,
        liveLink: 'https://calculate-expenditure.netlify.app/',
        frontEnd: '',
        backEnd: '',
    },
    {
        id: 7,
        title: "Influencer",
        description: 'This was my first attempt to create a responsive web page',
        image: influencerProducts,
        liveLink: 'https://influencer-bee.netlify.app/',
        frontEnd: 'https://github.com/spartha343/module11',
        backEnd: '',
    },
    {
        id: 8,
        title: "Clayton Convention Center",
        description: 'Simple web application created with Bootstrap',
        image: claytonConvention,
        liveLink: 'https://clayton-convention.netlify.app/',
        frontEnd: '',
        backEnd: '',
    },
    {
        id: 9,
        title: "Web Dev Beginner",
        description: 'This is an app created just to practice HTML and vanila CSS',
        image: beginnerDev,
        liveLink: 'https://beginner-dev.netlify.app/',
        frontEnd: 'https://github.com/spartha343/module5',
        backEnd: '',
    },
];
