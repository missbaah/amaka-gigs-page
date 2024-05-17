import home from "public/icons/home.svg";
import calendar from "public/icons/calendar.svg";
import briefcase from "public/icons/briefcase.svg";
import users from "public/icons/users.svg";
import bookmark from "public/icons/bookmark.svg";
import notification from "public/icons/notification.svg";
import chatting from "public/icons/chatting.svg";
import user from "public/icons/user.svg";
import AppStore from "public/icons/AppStore.svg";
import PlayStore from "public/icons/PlayStore.svg";
import Instagram from "public/icons/Instagram.svg";
import Facebook from "public/icons/Facebook.svg";
import Twitter from "public/icons/Twitter.svg";
import Avatar from "public/Avatar.svg";
import gig1 from "public/assets/image-1.png";
import gig2 from "public/assets/image-2.png";
import gig3 from "public/assets/image-3.png";
import gig4 from "public/assets/image-4.png";
import gig5 from "public/assets/image-5.png";
import gig6 from "public/assets/image-6.png";
import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SideMenuItem {
  name: string;
  icon: string;
}

interface DownloadAppItem {
  name: string;
  icon: string;
  link: string;
}

interface SocialItem {
  name: string;
  icon: string;
  link: string;
}

interface AboutSection {
  intro: string;
  skills: string[];
  body: string;
  conclusion: string;
  salutation: string;
}

interface GigHistoryItem {
  name: string;
  price: number;
  rating: number;
  priceType: string;
  gigSummary: string;
  gigLocation: string;
  startDate: string;
  endDate: string;
  work: { title: string; media: StaticImageData }[];
}

export interface SearchResultsData {
  id: number;
  name: string;
  userName: string;
  image: string | StaticImport;
  title: string;
  location: string;
  subs: string;
  posts: number;
  rate: number;
  earned: number;
  timeCreated: string;
  experienceLevel: string;
  brief: string;
  about: AboutSection;
  skills: string[];
  gigHistory: GigHistoryItem[];
}

export const SideMenuItems: SideMenuItem[] = [
  {
    name: "Home",
    icon: home,
  },
  {
    name: "Events",
    icon: calendar,
  },
  {
    name: "Gigs",
    icon: briefcase,
  },
  {
    name: "Challenges",
    icon: users,
  },
  {
    name: "Bookmarks",
    icon: bookmark,
  },
  {
    name: "Notifications",
    icon: notification,
  },
  {
    name: "Messages",
    icon: chatting,
  },
  {
    name: "Profile",
    icon: user,
  },
];

export const DownloadApp: DownloadAppItem[] = [
  {
    name: "App Store",
    icon: AppStore,
    link: "",
  },
  {
    name: "Play Store",
    icon: PlayStore,
    link: "",
  },
];

export const Socials: SocialItem[] = [
  {
    name: "Instagram",
    icon: Instagram,
    link: "",
  },
  {
    name: "Facebook",
    icon: Facebook,
    link: "",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "",
  },
];

export const FooterNavItems: string[] = [
  "About",
  "Copyright",
  "Creators",
  "Advertise",
  "Terms & Privacy",
  "Policy & Safety",
];

export const FilterItems: string[] = [
  "Earned amount",
  "Experience level",
  "Gig type",
  "Content type",
  "Location",
];

export const SearchResultsData: SearchResultsData[] = [
  {
    id: 0,
    name: "Alicia Davis",
    userName: "rosannaspansino",
    image: Avatar,
    title: "Content maker",
    location: "London, United Kingdom",
    subs: "19.5k",
    posts: 28,
    rate: 35,
    earned: 0,
    timeCreated: "1 hour ago",
    experienceLevel: "Intermediate",
    brief:
      "Brief - Hi there! Lorem ipsum dolor sit amet consectetur. Et massa proin nibh nulla purus egestas magna imperdiet. Sagittis laoreet sodales eget ultrices mollis semper sed...",
    about: {
      intro:
        "Lorem ipsum dolor sit amet consectetur. Et massa proin nibh nulla purus egestas magna imperdiet. Sagittis laoreet sodales eget ultrices mollis semper sed iaculis. In a lectus fringilla vitae feugiat nulla sem gravida. Vitae nunc elementum habitant turpis posuere. Tempor purus quis etiam a dignissim libero varius turpis consectetur. Blandit elementum sit arcu tortor.",
      skills: [
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc elementum habitant turpis posuere.",
        "Lorem ipsum dolor sit amet consectetur. Sagittis laoreet sodales eget ultrices mollis semper sed iaculis. Quis turpis accumsan egestas egestas morbi a in.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      body: "Lorem ipsum dolor sit amet consectetur. Quis turpis accumsan egestas egestas morbi a in. Senectus lorem pellentesque nunc lobortis et curabitur. Nibh nam in integer aliquam orci nec pellentesque turpis. Semper morbi aliquam lorem amet ac. Ante nascetur vel volutpat suspendisse dui eu adipiscing.",
      conclusion:
        "Egestas nisl in euismod mi pharetra cursus rutrum pulvinar tempus. Tortor in magna eros ultrices amet dignissim. Tristique blandit leo quis dignissim feugiat adipiscing venenatis fringilla. Massa semper nam tempus sit eu fames nunc. Faucibus et potenti congue tempus facilisis. Sodales vel magna a risus consequat volutpat. Ut porttitor vitae scelerisque malesuada. Rhoncus odio semper ligula erat at. Pharetra velit venenatis quis sit porttitor. Odio scelerisque mattis neque nunc rhoncus. Ut interdum accumsan porttitor tempor ultricies est dui. Erat eget felis luctus consequat mattis nullam. A nisl eu pretium massa massa semper sagittis sollicitudin.",
      salutation: "Best regards,",
    },
    skills: [
      "Writing",
      "Editing",
      "Visual Communication",
      "Creativity",
      "Social Media Management",
      "Collaboration",
      "SEO Knowledge",
    ],
    gigHistory: [
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Covering Nollywood: The Film Journalists Channeling",
            media: gig1,
          },
          {
            title: "Weaving Independence: Akwete Women's Fabric...",
            media: gig2,
          },
        ],
      },
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig3,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig4,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig5,
          },
        ],
      },
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig6,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Alicia Davis",
    userName: "rosannaspansino",
    image: Avatar,
    title: "Content maker",
    location: "London, United Kingdom",
    subs: "19.5k",
    posts: 28,
    rate: 35,
    earned: 0,
    timeCreated: "4 hours ago",
    experienceLevel: "Intermediate",
    brief:
      "Brief - Hi there! Lorem ipsum dolor sit amet consectetur. Et massa proin nibh nulla purus egestas magna imperdiet. Sagittis laoreet sodales eget ultrices mollis semper sed...",
    about: {
      intro:
        "Lorem ipsum dolor sit amet consectetur. Et massa proin nibh nulla purus egestas magna imperdiet. Sagittis laoreet sodales eget ultrices mollis semper sed iaculis. In a lectus fringilla vitae feugiat nulla sem gravida. Vitae nunc elementum habitant turpis posuere. Tempor purus quis etiam a dignissim libero varius turpis consectetur. Blandit elementum sit arcu tortor.",
      skills: [
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc elementum habitant turpis posuere.",
        "Lorem ipsum dolor sit amet consectetur. Sagittis laoreet sodales eget ultrices mollis semper sed iaculis. Quis turpis accumsan egestas egestas morbi a in.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      body: "Lorem ipsum dolor sit amet consectetur. Quis turpis accumsan egestas egestas morbi a in. Senectus lorem pellentesque nunc lobortis et curabitur. Nibh nam in integer aliquam orci nec pellentesque turpis. Semper morbi aliquam lorem amet ac. Ante nascetur vel volutpat suspendisse dui eu adipiscing.",
      conclusion:
        "Egestas nisl in euismod mi pharetra cursus rutrum pulvinar tempus. Tortor in magna eros ultrices amet dignissim. Tristique blandit leo quis dignissim feugiat adipiscing venenatis fringilla. Massa semper nam tempus sit eu fames nunc. Faucibus et potenti congue tempus facilisis. Sodales vel magna a risus consequat volutpat. Ut porttitor vitae scelerisque malesuada. Rhoncus odio semper ligula erat at. Pharetra velit venenatis quis sit porttitor. Odio scelerisque mattis neque nunc rhoncus. Ut interdum accumsan porttitor tempor ultricies est dui. Erat eget felis luctus consequat mattis nullam. A nisl eu pretium massa massa semper sagittis sollicitudin.",
      salutation: "Best regards,",
    },
    skills: [
      "Writing",
      "Editing",
      "Visual Communication",
      "Creativity",
      "Social Media Management",
      "Collaboration",
      "SEO Knowledge",
    ],
    gigHistory: [
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Covering Nollywood: The Film Journalists Channeling",
            media: gig1,
          },
          {
            title: "Weaving Independence: Akwete Women's Fabric...",
            media: gig2,
          },
        ],
      },
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig3,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig4,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig5,
          },
        ],
      },
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig6,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Alicia Davis",
    userName: "rosannaspansino",
    image: Avatar,
    title: "Content maker",
    location: "London, United Kingdom",
    subs: "19.5k",
    posts: 28,
    rate: 35,
    earned: 0,
    timeCreated: "1 hour ago",
    experienceLevel: "Intermediate",
    brief:
      "Brief - Hi there! Lorem ipsum dolor sit amet consectetur. Et massa proin nibh nulla purus egestas magna imperdiet. Sagittis laoreet sodales eget ultrices mollis semper sed...",
    about: {
      intro:
        "Lorem ipsum dolor sit amet consectetur. Et massa proin nibh nulla purus egestas magna imperdiet. Sagittis laoreet sodales eget ultrices mollis semper sed iaculis. In a lectus fringilla vitae feugiat nulla sem gravida. Vitae nunc elementum habitant turpis posuere. Tempor purus quis etiam a dignissim libero varius turpis consectetur. Blandit elementum sit arcu tortor.",
      skills: [
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc elementum habitant turpis posuere.",
        "Lorem ipsum dolor sit amet consectetur. Sagittis laoreet sodales eget ultrices mollis semper sed iaculis. Quis turpis accumsan egestas egestas morbi a in.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      body: "Lorem ipsum dolor sit amet consectetur. Quis turpis accumsan egestas egestas morbi a in. Senectus lorem pellentesque nunc lobortis et curabitur. Nibh nam in integer aliquam orci nec pellentesque turpis. Semper morbi aliquam lorem amet ac. Ante nascetur vel volutpat suspendisse dui eu adipiscing.",
      conclusion:
        "Egestas nisl in euismod mi pharetra cursus rutrum pulvinar tempus. Tortor in magna eros ultrices amet dignissim. Tristique blandit leo quis dignissim feugiat adipiscing venenatis fringilla. Massa semper nam tempus sit eu fames nunc. Faucibus et potenti congue tempus facilisis. Sodales vel magna a risus consequat volutpat. Ut porttitor vitae scelerisque malesuada. Rhoncus odio semper ligula erat at. Pharetra velit venenatis quis sit porttitor. Odio scelerisque mattis neque nunc rhoncus. Ut interdum accumsan porttitor tempor ultricies est dui. Erat eget felis luctus consequat mattis nullam. A nisl eu pretium massa massa semper sagittis sollicitudin.",
      salutation: "Best regards,",
    },
    skills: [
      "Writing",
      "Editing",
      "Visual Communication",
      "Creativity",
      "Social Media Management",
      "Collaboration",
      "SEO Knowledge",
    ],
    gigHistory: [
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Covering Nollywood: The Film Journalists Channeling",
            media: gig1,
          },
          {
            title: "Weaving Independence: Akwete Women's Fabric...",
            media: gig2,
          },
        ],
      },
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig3,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig4,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig5,
          },
        ],
      },
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig6,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Alicia Davis",
    userName: "rosannaspansino",
    image: Avatar,
    title: "Content maker",
    location: "London, United Kingdom",
    subs: "19.5k",
    posts: 28,
    rate: 35,
    earned: 0,
    timeCreated: "1 hour ago",
    experienceLevel: "Intermediate",
    brief:
      "Brief - Hi there! Lorem ipsum dolor sit amet consectetur. Et massa proin nibh nulla purus egestas magna imperdiet. Sagittis laoreet sodales eget ultrices mollis semper sed...",
    about: {
      intro:
        "Lorem ipsum dolor sit amet consectetur. Et massa proin nibh nulla purus egestas magna imperdiet. Sagittis laoreet sodales eget ultrices mollis semper sed iaculis. In a lectus fringilla vitae feugiat nulla sem gravida. Vitae nunc elementum habitant turpis posuere. Tempor purus quis etiam a dignissim libero varius turpis consectetur. Blandit elementum sit arcu tortor.",
      skills: [
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc elementum habitant turpis posuere.",
        "Lorem ipsum dolor sit amet consectetur. Sagittis laoreet sodales eget ultrices mollis semper sed iaculis. Quis turpis accumsan egestas egestas morbi a in.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      body: "Lorem ipsum dolor sit amet consectetur. Quis turpis accumsan egestas egestas morbi a in. Senectus lorem pellentesque nunc lobortis et curabitur. Nibh nam in integer aliquam orci nec pellentesque turpis. Semper morbi aliquam lorem amet ac. Ante nascetur vel volutpat suspendisse dui eu adipiscing.",
      conclusion:
        "Egestas nisl in euismod mi pharetra cursus rutrum pulvinar tempus. Tortor in magna eros ultrices amet dignissim. Tristique blandit leo quis dignissim feugiat adipiscing venenatis fringilla. Massa semper nam tempus sit eu fames nunc. Faucibus et potenti congue tempus facilisis. Sodales vel magna a risus consequat volutpat. Ut porttitor vitae scelerisque malesuada. Rhoncus odio semper ligula erat at. Pharetra velit venenatis quis sit porttitor. Odio scelerisque mattis neque nunc rhoncus. Ut interdum accumsan porttitor tempor ultricies est dui. Erat eget felis luctus consequat mattis nullam. A nisl eu pretium massa massa semper sagittis sollicitudin.",
      salutation: "Best regards,",
    },
    skills: [
      "Writing",
      "Editing",
      "Visual Communication",
      "Creativity",
      "Social Media Management",
      "Collaboration",
      "SEO Knowledge",
    ],
    gigHistory: [
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Covering Nollywood: The Film Journalists Channeling",
            media: gig1,
          },
          {
            title: "Weaving Independence: Akwete Women's Fabric...",
            media: gig2,
          },
        ],
      },
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig3,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig4,
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig5,
          },
        ],
      },
      {
        name: "Lorem ipsum dolor sit amet",
        price: 230,
        rating: 4.5,
        priceType: "Fixed-price",
        gigSummary:
          "Lorem ipsum dolor sit amet consectetur. Sit tortor sit ac nibh turpis sem et proin bibendum. Nulla ut tempor morbi quam. In consectetur nunc proin vitae eu. Sodales feugiat euismod diam dictum auctor sapien ultrices. Tortor in aliquet sollicitudin neque quam mauris.",
        gigLocation: "Canada",
        startDate: "Jun 2023",
        endDate: "Jun 2023",
        work: [
          {
            title: "Lorem ipsum dolor sit amet consectetur",
            media: gig6,
          },
        ],
      },
    ],
  },
];
