import murphy from '../assets/team/murphy.webp'
import michael from '../assets/team/michael.webp'
import bob from '../assets/team/bob.webp'
import toot from '../assets/team/toot.webp'
import mouse from '../assets/team/mouse.webp'

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
}

export const TEAM: TeamMember[] = [
  {
    id: 'murphy',
    name: 'Karrin Murphy',
    role: 'Chicago PD, Special Investigations',
    bio: 'Runs the department that catches the cases nobody else wants to touch. Five-foot-nothing, ex-martial-arts instructor, and the toughest cop I know. She’s saved my life more times than I’ve saved hers, and she’d argue that math.',
    photo: murphy,
  },
  {
    id: 'michael',
    name: 'Michael Carpenter',
    role: 'Contractor. Occasional Knight.',
    bio: 'Carpenter by trade, something else by calling. Devout, steady, and carries a very old, very sharp piece of family history when the job calls for it. The best man I know, full stop.',
    photo: michael,
  },
  {
    id: 'bob',
    name: 'Bob',
    role: 'Research & Lore, In-House',
    bio: 'Lives in a skull on a shelf in my lab. Millennia of accumulated knowledge on spirits, curses, and things that go bump. Opinionated, a little lecherous, indispensable. Don’t let the empty eye sockets fool you.',
    photo: bob,
  },
  {
    id: 'toot',
    name: 'Toot-toot',
    role: 'Commander, Unofficial Guard',
    bio: 'Six inches tall the day I met him, and he has not stopped growing since. Fiercely loyal, easily bribed with pizza, and technically a general these days. Technically. He takes it very seriously, right up until the pizza arrives.',
    photo: toot,
  },
  {
    id: 'mouse',
    name: 'Mouse',
    role: 'Security. Judge of Character.',
    bio: 'Not a normal dog. Bigger than one, smarter than most people, and the best judge of character I’ve ever met — human or otherwise. If Mouse doesn’t like you, that tells me everything I need to know.',
    photo: mouse,
  },
]
