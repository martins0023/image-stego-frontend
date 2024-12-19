import {
  placeholder,
  mobile,
  backend,
  creator,
  web,
  pre1,
  pre2,
  pre3,
  mimi,
  mimii,
  lovesp,
  lovesp2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Products",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "LOVESPIRATION",
    icon: lovesp,
  },
  {
    name: "MIMI",
    icon: mimi,
  },
  {
    name: "Lovespiration",
    icon: lovesp2,
  },
];

const experiences = [
  {
    title: "Sleep Mask Set",
    company_name: "Available in silk satin",
    icon: mimii,
    iconBg: "#383E56",
    date: "",
    points: [
      "Treat yourself to the ultimate pampering experience with our Silk Satin Sleep Mask Set and discover a new level of comfort that will leave you wanting more.",
      "Experience the epitome of luxury and comfort with our Silk Satin Sleep Mask Set. Indulge in the exquisite softness of pure silk as it delicately embraces your skin, cocooning you in a world of relaxation and tranquility.",
      "Crafted with meticulous attention to detail, our sleep mask set combines elegance with functionality, ensuring a blissful night's sleep like no other.",
      " Immerse yourself in the soothing sensation of our smooth satin fabric and wake up feeling refreshed, rejuvenated, and ready to conquer the day ahead.",
    ],
  },
  {
    title: "Silk pillowcase",
    company_name: "Available in silk satin",
    icon: mimi,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Transform your bedtime routine into a blissful experience with the unmatched quality and serenity of our Silk Satin Pillowcase Set.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Experience the soothing touch of high-quality silk against your skin as you drift off into a world of tranquility.",
      "With our sleep mask set and pillowcase, you can indulge in the utmost relaxation and wake up feeling refreshed and rejuvenated every morning.",
    ],
  },
  {
    title: "Sleep mask with pillowcase",
    company_name: "Available in silk satin",
    icon: mimii,
    iconBg: "#383E56",
    date: "",
    points: [
      "Experience the epitome of sophistication and relaxation with our silk satin sleep mask with pillowcase set - because elegance should always be matched with comfort.",
      "Treat yourself to the luxury you deserve with our silk satin pillowcase set, complete with a matching sleep mask for an added touch of relaxation. Sleep in style and wake up refreshed with our exquisite collection.",
      "Treat yourself or someone special to this indulgent set that promises nights of uninterrupted beauty rest.",
      "Our sleep mask is thoughtfully designed to block out any unwanted light, ensuring complete darkness for optimal rest. The adjustable strap allows for a customized fit, guaranteeing maximum comfort throughout the night. Paired perfectly with a matching pillowcase, this set adds an extra touch of elegance to your bedroom decor.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "Student",
    company: "Redeemers University",
    image: placeholder,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "Student",
    company: "Redeemers University",
    image: placeholder,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Student",
    company: "Redeemers University",
    image: placeholder,
  },
];

const projects = [
  {
    name: "Random customized dummy text",
    description:
      "Generative random dummy customized text on every silk satin sleep mask set are available for pre-orders.",
    tags: [
      {
        name: "random texts",
        color: "blue-text-gradient",
      },
      {
        name: "silk",
        color: "green-text-gradient",
      },
      {
        name: "sleep mask",
        color: "blue-text-gradient",
      },
    ],
    image: pre1,
    source_code_link: "https://wa.me/message/O7IUAEZZ53LIP1",
  },
  {
    name: "Customized sleep mask with name given",
    description:
      "Get a customized sleep mask set with a given name or textual description of your choice, available for pre-orders now.",
    tags: [
      {
        name: "silk sleep mask",
        color: "blue-text-gradient",
      },
      {
        name: "customized",
        color: "green-text-gradient",
      },
    ],
    image: pre2,
    source_code_link: "https://wa.me/message/O7IUAEZZ53LIP1",
  },
  {
    name: "Sleep mask with pillowcase",
    description:
      "Get a silk satin pillowcase and sleep mask set to match and treat yourself to the luxury you deserve. You can either get both customized to any textual decription given or plain with no customizations. Also available for pre-orders now.",
    tags: [
      {
        name: "silk",
        color: "blue-text-gradient",
      },
      {
        name: "pillowcase",
        color: "green-text-gradient",
      },
      {
        name: "silk sleep mask",
        color: "pink-text-gradient",
      },
    ],
    image: pre3,
    source_code_link: "https://wa.me/message/O7IUAEZZ53LIP1",
  },
];

export { services, technologies, experiences, testimonials, projects };
