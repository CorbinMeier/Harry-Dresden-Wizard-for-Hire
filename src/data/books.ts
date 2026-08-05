export interface CaseFile {
  id: string
  number: number
  title: string
  year: number
  status: 'closed' | 'open' | 'sealed'
  intake: string
  summary: string
  redacted: string[]
  photo: number
}

export const CASE_FILES: CaseFile[] = [
  {
    id: 'storm-front',
    number: 1,
    title: 'Storm Front',
    year: 2000,
    status: 'closed',
    intake: 'Missing husband. Turned into a double homicide inside a locked room.',
    summary:
      'A simple infidelity case gets complicated fast when two people turn up dead with their hearts torn out — no weapon, no forced entry, nothing that fits on a normal incident report. Chicago PD calls the department\'s one and only wizard consultant. He finds out someone is using magic that\'s supposed to be forbidden for a reason.',
    redacted: [
      'The client\'s real motive was ██████████.',
      'The method involves ██████ and a household object nobody would suspect.',
      'The White Council\'s interest starts here — the reason why is ██████.',
    ],
    photo: 1,
  },
  {
    id: 'fool-moon',
    number: 2,
    title: 'Fool Moon',
    year: 2001,
    status: 'closed',
    intake: 'Mauling deaths during the full moon. Animal attack ruled out by the coroner.',
    summary:
      'Something is killing people on full-moon nights, and it isn\'t leaving normal tracks. Harry\'s worked werewolf cases before, but this one turns out to involve more than one kind of "wolf," and figuring out which kind is responsible for which body matters more than anyone on the case realizes at first.',
    redacted: [
      'There are ██ different varieties of the condition active in the same case.',
      'One of them is closer to Harry than he\'d like.',
      'The FBI agent on scene is not entirely what she appears to be — ██████.',
    ],
    photo: 2,
  },
  {
    id: 'grave-peril',
    number: 3,
    title: 'Grave Peril',
    year: 2001,
    status: 'closed',
    intake: 'Ghosts breaking the usual rules. Multiple hauntings escalating city-wide.',
    summary:
      'Spirits in Chicago don\'t usually cross certain lines — until suddenly they do, all at once, and someone is stirring them up on purpose. The case drags Harry into vampire politics he\'d been avoiding for years, and forces an alliance he never wanted.',
    redacted: [
      'The instigator\'s identity is ██████ until the final chapters.',
      'A major character\'s status changes permanently — details sealed.',
      'The vampire court involved is ██████, and their price is ██████.',
    ],
    photo: 3,
  },
  {
    id: 'summer-knight',
    number: 4,
    title: 'Summer Knight',
    year: 2002,
    status: 'closed',
    intake: 'Fae politics. A vacant Court position with lethal implications for whoever fills it.',
    summary:
      'Harry gets pulled into the middle of Winter and Summer Court politics — not by choice, and not because anyone thinks a mortal wizard belongs there. He has three days to solve a murder the Winter Queen didn\'t commit, or the fallout hits the whole city.',
    redacted: [
      'The real killer\'s identity connects to ██████ from Harry\'s own past.',
      'What Harry owes the Winter Court after this case is ██████.',
      'A close friend\'s fate hangs on a decision made off-page — ██████.',
    ],
    photo: 4,
  },
  {
    id: 'death-masks',
    number: 5,
    title: 'Death Masks',
    year: 2003,
    status: 'closed',
    intake: 'Stolen relic. A duel Harry never agreed to but can\'t refuse.',
    summary:
      'A rival wizard shows up in Chicago with a formal challenge and an old grudge, at the exact moment a relic tied to a very old story goes missing. Harry has to survive the duel and solve the theft, and the two problems turn out not to be separate at all.',
    redacted: [
      'The relic\'s true nature is ██████ — not what the Church believes.',
      'Someone from Harry\'s past returns; the terms of the reunion are ██████.',
      'The final page changes his family situation — sealed pending case closure.',
    ],
    photo: 5,
  },
  {
    id: 'blood-rites',
    number: 6,
    title: 'Blood Rites',
    year: 2004,
    status: 'closed',
    intake: 'Curse investigation on an adult-film set. Not what it sounds like.',
    summary:
      'A producer hires Harry to find out who\'s cursing his crew — the deaths keep getting written off as accidents by everyone except the man footing the funeral bills. The job turns into something with a lot more teeth once Harry\'s own family history gets involved.',
    redacted: [
      'The curse\'s caster is ██████, and their reason is almost sympathetic.',
      'A family relation is revealed that changes everything going forward — ██████.',
      'What happens to Harry\'s apartment this time: ██████.',
    ],
    photo: 6,
  },
  {
    id: 'dead-beat',
    number: 7,
    title: 'Dead Beat',
    year: 2005,
    status: 'closed',
    intake: 'Blackmail. Necromancy. A deadline measured in one very bad night.',
    summary:
      'Someone has leverage on Harry and uses it to force him into a race against necromancers competing for a book of forbidden magic, all converging on Halloween night. What\'s raised before dawn is bigger than anyone on either side accounted for.',
    redacted: [
      'What gets raised at the climax is ██████ — visible from across the city.',
      'The blackmailer\'s hold over Harry involves ██████.',
      'One ally\'s true loyalties come out here — ██████.',
    ],
    photo: 1,
  },
  {
    id: 'proven-guilty',
    number: 8,
    title: 'Proven Guilty',
    year: 2006,
    status: 'closed',
    intake: 'A Council trial. Horror-movie monsters made real, targeting the wrong crowd.',
    summary:
      'Harry sits as one of the White Council\'s enforcers for the first time — a job he takes no pleasure in — while things that shouldn\'t exist outside a movie screen start attacking people at a horror convention. A promise made years ago comes due.',
    redacted: [
      'The verdict Harry delivers at the trial: ██████.',
      'A character introduced here becomes central later — their significance is ██████.',
      'The old debt that gets called in: ██████.',
    ],
    photo: 2,
  },
  {
    id: 'white-night',
    number: 9,
    title: 'White Night',
    year: 2007,
    status: 'closed',
    intake: 'Minor practitioners turning up dead, staged to look like suicide.',
    summary:
      'Low-level magic users around Chicago are dying in ways meant to look self-inflicted, and Harry knows they\'re not. Tracking the pattern puts him uncomfortably close to people he trusts, and the answer is not the one he\'s hoping for.',
    redacted: [
      'The killer\'s identity connects directly to Harry\'s own household — ██████.',
      'A long-running mystery about a family member resolves here: ██████.',
      'The Council fallout from this case: ██████.',
    ],
    photo: 3,
  },
  {
    id: 'small-favor',
    number: 10,
    title: 'Small Favor',
    year: 2008,
    status: 'closed',
    intake: 'A debt called in by the Winter Queen. Never small. Never simple.',
    summary:
      'Mab collects on an old favor, which means Harry has no real choice in the matter. What starts as a straightforward retrieval turns into a kidnapping, a Denarian resurgence, and a decision Harry has to make about who he\'s willing to become to protect the people he cares about.',
    redacted: [
      'What Mab actually asks for: ██████.',
      'Which Fallen angel resurfaces, and why: ██████.',
      'The bargain Harry strikes at the end: ██████, terms sealed.',
    ],
    photo: 4,
  },
  {
    id: 'turn-coat',
    number: 11,
    title: 'Turn Coat',
    year: 2009,
    status: 'closed',
    intake: 'A Warden on the run, wanted for murder, asking Harry for shelter.',
    summary:
      'A Council enforcer that Harry has every reason to dislike shows up asking for protection from his own organization. Taking the case means going up against the White Council\'s internal politics directly — and finding a traitor inside an institution that isn\'t supposed to have any.',
    redacted: [
      'The traitor\'s identity: ██████ — high enough to matter.',
      'What this reveals about Council leadership: ██████.',
      'A relationship shifts permanently by the end — ██████.',
    ],
    photo: 5,
  },
  {
    id: 'changes',
    number: 12,
    title: 'Changes',
    year: 2010,
    status: 'sealed',
    intake: 'A threat to someone Harry didn\'t know existed. Nothing about this case stays the same after.',
    summary:
      'A single phone call reframes everything Harry thought he knew about his own life, and the case that follows costs him more than any before it. This file changes the shape of every case after it. Details beyond the intake are sealed by request.',
    redacted: [
      'The full contents of this file are ██████████████████.',
      'What Harry loses by the final chapter: ██████.',
      'The state in which this case leaves him: ██████.',
    ],
    photo: 6,
  },
  {
    id: 'ghost-story',
    number: 13,
    title: 'Ghost Story',
    year: 2011,
    status: 'sealed',
    intake: 'Case status irregular. Investigator status irregular. See sealed file.',
    summary:
      'This case doesn\'t follow the department\'s normal intake process, on account of the investigator\'s circumstances at the time it opened. What can be said publicly: the city needed solving whether or not Harry was in a position to do the solving.',
    redacted: [
      'Investigator status at time of filing: ██████.',
      'How the case resolves: ██████.',
      'What changes about the rules of engagement afterward: ██████.',
    ],
    photo: 1,
  },
  {
    id: 'cold-days',
    number: 14,
    title: 'Cold Days',
    year: 2012,
    status: 'closed',
    intake: 'New employer. New obligations. An assassination Harry is ordered to carry out.',
    summary:
      'Harry starts this one under new management, with a boss whose orders aren\'t optional and a target he\'s given very good reasons to want dead. Whether he actually goes through with it — and what he finds instead — is the whole case.',
    redacted: [
      'The assigned target: ██████.',
      'Whether the order is carried out: ██████.',
      'What Harry discovers about his new position: ██████.',
    ],
    photo: 2,
  },
  {
    id: 'skin-game',
    number: 15,
    title: 'Skin Game',
    year: 2014,
    status: 'closed',
    intake: 'A heist. Harry on the wrong side of the job, working with people he\'d normally arrest.',
    summary:
      'Obligations Harry can\'t refuse put him on a heist crew stealing something out of a vault that shouldn\'t be breakable, working alongside people who have tried to kill him more than once. The job goes about as smoothly as that description suggests.',
    redacted: [
      'What\'s actually in the vault: ██████.',
      'Who on the crew doesn\'t make it out: ██████.',
      'The double-cross, and who runs it: ██████.',
    ],
    photo: 3,
  },
  {
    id: 'peace-talks',
    number: 16,
    title: 'Peace Talks',
    year: 2020,
    status: 'closed',
    intake: 'A diplomatic summit. Every supernatural power in one building. Nothing stays diplomatic for long.',
    summary:
      'Chicago hosts a peace summit between factions that have been at odds for centuries, and Harry is on security detail for a family member who has no interest in making his job easy. The talks do not go as planned — for anyone.',
    redacted: [
      'Who breaks the peace, and how: ██████.',
      'The family conflict at the center of it: ██████.',
      'This file runs directly into the next — the connecting event is ██████.',
    ],
    photo: 4,
  },
  {
    id: 'battle-ground',
    number: 17,
    title: 'Battle Ground',
    year: 2020,
    status: 'sealed',
    intake: 'Continuation of Case File No. 16. City-wide incident. Casualty list sealed.',
    summary:
      'The fallout from the peace summit arrives in force, and this file covers what "arrives in force" actually means for a city the size of Chicago. This is the largest-scale case on record. The full casualty and outcome report is sealed.',
    redacted: [
      'Scale of the incident: ██████████████.',
      'Casualty list: ██████████████.',
      'What Chicago looks like when the file closes: ██████.',
    ],
    photo: 5,
  },
]
