import { MoveUpRight, Sparkle } from 'lucide-react'
import {
  HtmlIcon,
  CssIcon,
  TailwindCssIcon,
  JavaScriptIcon,
  ReactIcon,
  NextjsIcon,
  LinuxIcon,
  UbuntuIcon,
  ZshIcon,
  BashIcon,
  GitIcon,
  FigmaIcon,
  TypeScriptIcon,
  PostmanIcon,
  ZustandIcon,
} from '@/components/atoms/icons'

export const NAV = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Start project', href: '/contact', type: 'primary' },
]

export const SECTIONS = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const CONTACT = [
  {
    name: 'LinkedIn',
    icon: <MoveUpRight />,
    href: 'https://www.linkedin.com/in/mrredu/',
  },
  {
    name: 'Twitter',
    icon: <MoveUpRight />,
    href: 'https://twitter.com/MrReduDev',
  },
  { name: 'Github', icon: <MoveUpRight />, href: 'https://github.com/MrRedu' },
]

export const SERVICES = [
  {
    id: '01',
    title: 'Web development',
    description: 'Crafting responsive websites for flawless user experiences.',
  },
  {
    id: '02',
    title: 'Interaction design / animation',
    description:
      'I collaborate with designers to plan and execute interactions / animations on web applications and design systems.',
  },
  {
    id: '03',
    title: 'Creative implementation',
    description:
      'I build layouts and interactions optimizing for performance and usability.',
  },
  {
    id: '04',
    title: 'Collaboration',
    description: 'Willing to collaborate on open source projects.',
  },
]

const scrollItems = [
  { id: '1', title: 'Lets Connect!', dividerIcon: <Sparkle size={32} /> },
  { id: '2', title: 'Web developer', dividerIcon: <Sparkle size={32} /> },
]

const newItems = Array.from({ length: 6 }, (_, i) => ({
  id: String(i + 3),
  title: i % 2 === 0 ? 'Lets Connect!' : 'Web developer',
  dividerIcon: <Sparkle size={32} />,
  ariaHidden: true,
}))

export const SCROLL_ITEMS = scrollItems.slice(0, 2).concat(newItems)

export const TOOLS_AND_TECHNOLOGIES = [
  {
    icon: <HtmlIcon />,
    title: 'HTML5',
  },
  {
    icon: <CssIcon />,
    title: 'CSS3',
  },
  {
    icon: <TailwindCssIcon />,
    title: 'Tailwind CSS',
  },
  {
    icon: <JavaScriptIcon />,
    title: 'JavaScript',
  },
  {
    icon: <TypeScriptIcon />,
    title: 'TypeScript',
  },
  {
    icon: <ReactIcon />,
    title: 'React',
  },
  {
    icon: <NextjsIcon />,
    title: 'Next.js',
  },
  {
    icon: <ZustandIcon />,
    title: 'Zustand',
  },
]

export const SOFTWARE = [
  {
    title: 'Linux',
    icon: <LinuxIcon />,
  },
  {
    title: 'Ubuntu',
    icon: <UbuntuIcon />,
  },
  {
    title: 'ZSH',
    icon: <ZshIcon />,
  },
  {
    title: 'BASH',
    icon: <BashIcon />,
  },
  {
    title: 'GIT',
    icon: <GitIcon />,
  },
  {
    title: 'Figma',
    icon: <FigmaIcon />,
  },
  {
    title: 'Postman',
    icon: <PostmanIcon />,
  },
]
