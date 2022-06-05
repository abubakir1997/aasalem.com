import { HTMLAttributeAnchorTarget } from 'react'

export interface INavigationConfigGroupLink {
  name: string
  path: string
  target?: HTMLAttributeAnchorTarget
  description: string
}

export interface INavigationConfigGroup {
  groupTitle: string
  groupLinks: INavigationConfigGroupLink[]
}

export type INavigationConfig = INavigationConfigGroup[]

export const NavigationConfig: INavigationConfig = [
  {
    groupTitle: 'Islamic',
    groupLinks: [
      {
        name: 'The Journey of Growth',
        path: '#',
        description:
          'The following documents my personal growth jorney as a Muslim. The intent is to grow in knowledge, understanding, and implementation in an attempt to become better as a beliver and servant of Allah.',
      },
      {
        name: 'Reflections',
        path: '#',
        description: 'My personal reflections on various topics.',
      },
      {
        name: 'Khutab',
        path: '#',
        description:
          'Khutab or sermons are lectures given every Friday which is regarded as the most valued day of the week in the Islamic faith.',
      },
      {
        name: 'Quran',
        path: '#',
        description:
          'A colleciton of Quran recitations either in complete or snippets. The Quran is the revelation recieved by Prophet Muhammad from Allah (God) through the Angel Gabriel.',
      },
      {
        name: 'Books and Articles',
        path: '#',
        description:
          "Brief summaries and thoughts on some of the books and articles I've read spanning accross different Islamic topics.",
      },
    ],
  },
  {
    groupTitle: 'Software Development',
    groupLinks: [
      {
        name: 'Resume',
        path: '#',
        description: 'My professional software engineering resume.',
      },
      {
        name: 'Anew RMS',
        path: 'https://next-rms.web.app/signin/anewsystems',
        target: '_blank',
        description: 'A powerful retail management system.',
      },
    ],
  },
]
