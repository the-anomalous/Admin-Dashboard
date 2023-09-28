import {
  MdOutlineHome,
  MdOutlineShoppingCart,
  MdOutlineGroups2,
  MdOutlineReceiptLong,
  MdOutlinePublic,
  MdOutlinePointOfSale,
  MdOutlineToday,
  MdOutlineCalendarMonth,
  MdOutlineAdminPanelSettings,
  MdOutlineTrendingUp,
  MdOutlinePieChart,
} from 'react-icons/md';

const navLinks = [
  {
    title: 'Home',
    links: [
      {
        text: 'dashboard',
        Icon: MdOutlineHome,
      },
    ],
  },
  {
    title: 'Client Facing',
    links: [
      {
        text: 'products',
        Icon: MdOutlineShoppingCart,
      },
      {
        text: 'customers',
        Icon: MdOutlineGroups2,
      },
      {
        text: 'transactions',
        Icon: MdOutlineReceiptLong,
      },
      {
        text: 'geography',
        Icon: MdOutlinePublic,
      },
    ],
  },
  {
    title: 'Sales',
    links: [
      {
        text: 'overview',
        Icon: MdOutlinePointOfSale,
      },
      {
        text: 'daily',
        Icon: MdOutlineToday,
      },
      {
        text: 'monthly',
        Icon: MdOutlineCalendarMonth,
      },
      {
        text: 'breakdown',
        Icon: MdOutlinePieChart,
      },
    ],
  },
  {
    title: 'Management',
    links: [
      {
        text: 'admin',
        Icon: MdOutlineAdminPanelSettings,
      },
      {
        text: 'performance',
        Icon: MdOutlineTrendingUp,
      },
    ],
  },
];

export default navLinks;
