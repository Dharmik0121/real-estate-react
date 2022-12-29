import { IoIosCheckmarkCircle, IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';
import Features2Img from './assets/img/hero-bg.jpg'
import Features1Img from './assets/img/hero-bg.jpg'

export const hero = {
    title: 'Creative Home Simpify your Home',
    subtitle:
        'Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto',
    buttonText: 'Shop Now',
};

export const stats = [
    {
        value: '7',
        text: 'Year Experience',
    },
    {
        value: '2',
        text: 'Opened in the country',
    },
    {
        value: '10k+',
        text: 'Furniture sold',
    },
    {
        value: '260+',
        text: 'Variant Furniture',
    },
];

export const navigation = [
    {
        name: 'home',
        href: '/',
    },
    {
        name: 'offers',
        href: 'offers',
    },
    {
        name: 'contact',
        href: 'contact',
    },
    {
        name: 'SignIn',
        href: 'sign-in',
    },
];

export const features = {
    image: <Features1Img />,
    title: 'We Create your home more aesthetic',
    subtitle:
        'Furniture power is a software as services for multipurpose business management system',
    buttonText: 'Show Now',
    items: [
        {
            icon: <IoIosCheckmarkCircle />,
            title: 'Valuation Services',
            subtitle:
                'Sometimes features require a short description.  This can be detailed description',
        },
        {
            icon: <IoIosCheckmarkCircle />,
            title: 'Development of Furniture Models',
            subtitle:
                'Sometimes features require a short description.  This can be detailed description',
        },
    ],
    feature2: {
        image: <Features2Img />,
        title: 'The Best Furniture Manufacturer of your choice',
        subtitle:
            'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
    },
};

export const footer = {
    social: [
        {
            icon: <IoLogoYoutube />,
            href: '#',
        },
        {
            icon: <IoLogoInstagram />,
            href: '#',
        },
        {
            icon: <IoLogoGithub />,
            href: '#',
        },
        {
            icon: <IoLogoFacebook />,
            href: '#',
        },
    ],
    copyright: 'FurniShop 2022 - All Rights Reserved.',
};