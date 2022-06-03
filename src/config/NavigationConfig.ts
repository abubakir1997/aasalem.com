export interface INavigationConfigGroupLink {
  name: string
  path: string
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
        name: 'Khutab',
        path: '#',
        description:
          'Khutab or sermons are lectures gives every Friday which is regarded as the most valued day of the week in the Islamic faith.',
      },
      {
        name: 'Research',
        path: '#',
        description: 'Browse through a list of research topics across multiple categories.',
      },
      {
        name: 'Quran',
        path: '#',
        description:
          'A colleciton of Quran recitations either in complete or snippets. The Quran is the revelation recieved by Prophet Muhammad from Allah (God) through the Angel Gabriel.',
      },
      {
        name: 'Athkar',
        path: '#',
        description:
          'Your daily morning/evening, sleep/awake, and prayer Athkar. Athkar are recoccuring prayers that are done at specified times or events according to what was observed from prophet Muhammad.',
      },
    ],
  },
  {
    groupTitle: 'Software Development',
    groupLinks: [
      {
        name: 'Resume',
        path: '#',
        description: 'My professional software engineering resume',
      },
    ],
  },
]
