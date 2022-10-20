import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';

export const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

export const locations = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Gardon Reveira, Italy',
    days: 'Oct 2-9',
    price: '$14,999 CAD night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Joshua tree, USA',
    days: 'Sep 2-11',
    price: '$3000 CAD night',
    isNew: false,
    rating: 4.99,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Uvita rosa, Costa Rica',
    days: 'Nov 19-22',
    price: '$1,129 CAD night',
    isNew: true,
    rating: 4.6,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Navidad, Chile',
    days: 'Sep 13-18',
    price: '$208 CAD night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Paraty, Brazil',
    days: 'Aug 1-6',
    price: '$243 CAD night',
    isNew: true,
    rating: 4.1,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Raelington, Norway',
    days: 'Oct 9-15',
    price: '$698 CAD night',
    isNew: false,
    rating: 4.6,
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Terrasini, Italy',
    days: 'June 7-12',
    price: '$467 CAD night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'San Jose, Mexico',
    days: 'Jun 11-16',
    price: '$1,767 CAD night',
    isNew: false,
    rating: 4.8,
  },
  {
    id: 9,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Tulum, Mexico',
    days: 'Jul 1-6',
    price: '$910 CAD night',
    isNew: true,
    rating: 4.3,
  },
  {
    id: 10,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Inglis, Canada',
    days: 'Jun 12-18',
    price: '$629 CAD night',
    isNew: false,
    rating: 4.6,
  },
  {
    id: 11,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Jenner, California',
    days: 'Nov 2-7',
    price: '$2,595 CAD night',
    isNew: false,
    rating: 4.1,
  },
  {
    id: 12,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Malibu, US',
    days: 'Jun 3-4',
    price: '$4,467 CAD night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 13,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Bolzano, Italy',
    days: 'Sep 22-25',
    price: '$358 CAD night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 14,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Hawaii, US',
    days: 'Nov 4-10',
    price: '$777 CAD night',
    isNew: true,
    rating: 4.8,
  },
  {
    id: 15,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Lagos, Portugal',
    days: 'Sep 25-Oct 2',
    price: '$2,999 CAD night',
    isNew: true,
    rating: 4.88,
  },
  {
    id: 16,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'LunenBurg, Canada',
    days: 'Oct 4-9',
    price: '$500 CAD night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 17,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Santa Rosa, US',
    days: 'Jun 2-9',
    price: '$3,369 CAD night',
    isNew: false,
    rating: 4.1,
  },
  {
    id: 18,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Carlux, France',
    days: 'Oct 28-Nov 4',
    price: '$2511 CAD night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 19,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Palm desert, US',
    days: 'Jun 11-16',
    price: '$3200 CAD night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 20,
    locationImages: [
      {
        id: 1,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 2,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 3,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
      {
        id: 4,
        url: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
      },
    ],
    location: 'Ressaca, Brazil',
    days: 'Oct 2-9',
    price: '$14,999 CAD night',
    isNew: false,
    rating: 4.5,
  },
];
