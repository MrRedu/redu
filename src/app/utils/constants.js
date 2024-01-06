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
    title: 'Web Development',
    description: 'Crafting responsive websites for flawless user experiences.',
  },
  {
    id: '02',
    title: 'Web Development',
    description: 'Crafting responsive websites for flawless user experiences.',
  },
  {
    id: '03',
    title: 'Collaboration',
    description: 'Crafting responsive websites.',
  },
]

export const SCROLL_ITEMS = [
  { id: '1', title: 'Lets Connect!', dividerIcon: <Sparkle size={32} /> },
  { id: '2', title: 'Web developer', dividerIcon: <Sparkle size={32} /> },
  { id: '3', title: 'Lets Connect!', dividerIcon: <Sparkle size={32} /> },
  { id: '4', title: 'Web developer', dividerIcon: <Sparkle size={32} /> },
  { id: '5', title: 'Lets Connect!', dividerIcon: <Sparkle size={32} /> },
  { id: '6', title: 'Web developer', dividerIcon: <Sparkle size={32} /> },
  { id: '7', title: 'Web developer', dividerIcon: <Sparkle size={32} /> },
  { id: '8', title: 'Lets Connect!', dividerIcon: <Sparkle size={32} /> },
  { id: '9', title: 'Web developer', dividerIcon: <Sparkle size={32} /> },
]

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
    icon: <ReactIcon />,
    title: 'React',
  },
  {
    icon: <NextjsIcon />,
    title: 'Next.js',
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
]

export const PROJECTS = [
  {
    id: '1',
    href: 'https://gyphi.vercel.app/',
    title: 'Gyphi',
    image: '/projects/gyphi.webp',
    tags: ['App Web', 'Design'],
  },
  {
    id: '2',
    href: 'https://gyphi.vercel.app/',
    title: 'Title 2',
    image: '/projects/gyphi.webp',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: '3',
    href: 'https://gyphi.vercel.app/',
    title: 'Title 3',
    image: '/projects/gyphi.webp',
    tags: ['Landing Page', 'Design', 'tag3'],
  },
]
