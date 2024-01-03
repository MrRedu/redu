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
    image:
      'https://private-user-images.githubusercontent.com/73679190/277121508-b58d06d7-8c97-4d13-a11c-70f8a3355607.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQzMDU2NDAsIm5iZiI6MTcwNDMwNTM0MCwicGF0aCI6Ii83MzY3OTE5MC8yNzcxMjE1MDgtYjU4ZDA2ZDctOGM5Ny00ZDEzLWExMWMtNzBmOGEzMzU1NjA3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTAzVDE4MDkwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg2Y2E5ODRkMDEzMTlkZWJkODRhZGZkZTVmMTQwYWEyOGM3NzFkYjVlMDE1OTI1YmJmMGU3MzM5NzdlZDM3YzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dQIu-GptWBiZIfQWzdwZ-iwNdUAiCsmtprrWQ5ClO08',
    description: 'Description 1',
  },
  {
    id: '2',
    href: '#',
    title: 'Project 2',
    description: 'Description 2',
  },
  {
    id: '3',
    href: '#',
    title: 'Project 3',
    description: 'Description 3',
  },
]
