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
} from '#/public/svg/icons'

export const NAV = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/' },
  { name: 'Services', href: '/' },
  { name: 'Start project', href: '/' },
]

export const SECTIONS = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/' },
  { name: 'Contact', href: '/contact' },
]

export const CONTACT = [
  { name: 'LinkedIn', icon: <MoveUpRight />, href: '/' },
  { name: 'Twitter', icon: <MoveUpRight />, href: '/' },
  { name: 'Github', icon: <MoveUpRight />, href: 'https://github.com/MrRedu' },
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
  // color={`var(--c-whywhite-300)`}
  {
    icon: <HtmlIcon />,
    title: 'HTML',
  },
  {
    icon: <CssIcon />,
    title: 'CSS',
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
]
