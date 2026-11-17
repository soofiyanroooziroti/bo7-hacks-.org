export interface ForumComment {
  author: string;
  age: string;
  postedAt?: string;
  score: number;
  body: string;
  developer?: boolean;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  /** Meta description. Cards keep the shorter excerpt. */
  description: string;
  author: string;
  age: string;
  date: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
  /** Answered threads that should show a closed badge. */
  closed?: boolean;
}

export const FORUM_DEVELOPER = 'BO7 Hacks';

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

/** Stable filter keys — always derived from English category names. */
export const FORUM_CATEGORY_KEYS: Record<string, string> = {
  General: 'general',
  'Guides & Builds': 'guidesbuilds',
  'Patch Talk': 'patchtalk',
  Community: 'community',
};

export function forumCategoryFilterKey(category: string): string {
  return FORUM_CATEGORY_KEYS[category] ?? category.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function countComments(comments: ForumComment[]): number {
  return comments.reduce(
    (total, comment) => total + 1 + (comment.replies ? countComments(comment.replies) : 0),
    0,
  );
}

function withCounts(post: Omit<ForumPost, 'commentsCount'>): ForumPost {
  return { ...post, commentsCount: countComments(post.comments) };
}

export function forumLastReply(comments: ForumComment[]): { author: string; age: string } | null {
  let last: ForumComment | null = null;
  const walk = (list: ForumComment[]) => {
    for (const comment of list) {
      if (!last || !last.postedAt || (comment.postedAt && comment.postedAt > last.postedAt)) {
        last = comment;
      }
      if (comment.replies?.length) walk(comment.replies);
    }
  };
  walk(comments);
  return last ? { author: last.author, age: last.age } : null;
}

const rawPosts: Array<Omit<ForumPost, 'commentsCount'>> = [
  {
    "slug": "aimbot-and-triggerbot-difference",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Aimbot and Triggerbot: which feature handles aiming?",
    "excerpt": "The product lists Aimbot and Triggerbot separately. Which one assists aiming, and which one handles firing?",
    "description": "Aimbot and Triggerbot: which feature handles aiming? Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "Phoenix",
    "age": "18 Nov, 3:00 PM",
    "date": "2026-11-18",
    "upvotes": 0,
    "flair": "Aimbot",
    "sourceTitle": "BO7 Aimbot Hack: How It Works",
    "sourcePath": "/blog/bo7-aimbot-hack/",
    "closed": true,
    "body": [
      "The product lists Aimbot and Triggerbot separately. Which one assists aiming, and which one handles firing?",
      "I want to understand the written feature list before comparing the tools."
    ],
    "comments": [
      {
        "author": "NightRaid",
        "age": "18 Nov, 4:00 PM",
        "score": 0,
        "body": "Aimbot describes aim assistance. Triggerbot describes firing when a target aligns with the crosshair. They perform different jobs.",
        "postedAt": "2026-11-18T11:00:00.000Z",
        "replies": [
          {
            "author": "Phoenix",
            "age": "18 Nov, 5:00 PM",
            "score": 0,
            "body": "So automatic firing does not mean the same thing as assisted aiming?",
            "postedAt": "2026-11-18T12:00:00.000Z",
            "replies": [
              {
                "author": "NightRaid",
                "age": "18 Nov, 6:00 PM",
                "score": 0,
                "body": "Right. Aimbot assists aim, while Triggerbot handles shot timing. The product lists them separately.",
                "postedAt": "2026-11-18T13:00:00.000Z"
              }
            ]
          }
        ]
      },
      {
        "author": "GhostRider",
        "age": "18 Nov, 7:00 PM",
        "score": 0,
        "body": "No recoil control is also listed separately. Do not assume one feature includes everything described by another.",
        "postedAt": "2026-11-18T14:00:00.000Z"
      },
      {
        "author": "Hex",
        "age": "18 Nov, 8:00 PM",
        "score": 0,
        "body": "I had grouped Aimbot and Triggerbot together too. The comparison is easier once their roles are clear.",
        "postedAt": "2026-11-18T15:00:00.000Z"
      },
      {
        "author": "StormBreaker",
        "age": "18 Nov, 11:00 PM",
        "score": 0,
        "body": "The linked Aimbot guide explains how it fits alongside the other seven features.",
        "postedAt": "2026-11-18T18:00:00.000Z"
      }
    ]
  },
  {
    "slug": "esp-boxes-skeleton-and-distance",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "ESP boxes, skeletons and distance labels on a busy screen",
    "excerpt": "The Visuals menu lists boxes, skeletons, names and distance. That is a lot of information on top of the regular HUD.",
    "description": "ESP boxes, skeletons and distance labels on a busy screen Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "Vortex",
    "age": "17 Nov, 7:00 PM",
    "date": "2026-11-17",
    "upvotes": 0,
    "flair": "ESP",
    "sourceTitle": "Call of Duty Black Ops 7 ESP: How It Works",
    "sourcePath": "/blog/call-of-duty-black-ops-7-esp/",
    "closed": false,
    "body": [
      "The Visuals menu lists boxes, skeletons, names and distance. That is a lot of information on top of the regular HUD.",
      "Which part of the guide explains what each overlay actually represents?"
    ],
    "comments": [
      {
        "author": "ShadowByte",
        "age": "17 Nov, 8:00 PM",
        "score": 0,
        "body": "The ESP guide separates player information from the ordinary minimap. Distance labels give range, boxes mark the model area and skeletons show body position.",
        "postedAt": "2026-11-17T15:00:00.000Z",
        "replies": [
          {
            "author": "Vortex",
            "age": "17 Nov, 9:00 PM",
            "score": 0,
            "body": "Distance versus body position was the distinction I was missing.",
            "postedAt": "2026-11-17T16:00:00.000Z"
          }
        ]
      },
      {
        "author": "FrostBite",
        "age": "17 Nov, 10:00 PM",
        "score": 0,
        "body": "I would start by deciding what information you are trying to understand. More labels can make a crowded HUD harder to read.",
        "postedAt": "2026-11-17T17:00:00.000Z"
      },
      {
        "author": "RogueWolf",
        "age": "17 Nov, 11:00 PM",
        "score": 0,
        "body": "The comparison table also covers how radar differs from an overlay in the main view.",
        "postedAt": "2026-11-17T18:00:00.000Z"
      },
      {
        "author": "ShadowByte",
        "age": "18 Nov, 12:00 AM",
        "score": 0,
        "body": "Yes, the display location matters. A radar view and an ESP box are presenting information in different places.",
        "postedAt": "2026-11-17T19:00:00.000Z"
      },
      {
        "author": "Venom",
        "age": "18 Nov, 1:00 AM",
        "score": 0,
        "body": "The regular HUD already takes a lot of screen space. Distance labels and a skeleton answer different questions, so I would not treat them as duplicate settings.",
        "postedAt": "2026-11-17T20:00:00.000Z"
      },
      {
        "author": "Orbit",
        "age": "18 Nov, 4:00 AM",
        "score": 0,
        "body": "Names can also add clutter over clustered targets. The feature list is clearer than calling every overlay ESP and stopping there.",
        "postedAt": "2026-11-17T23:00:00.000Z"
      }
    ]
  },
  {
    "slug": "wallhack-and-esp-difference",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Is Wallhack just another name for ESP?",
    "excerpt": "People use Wallhack and ESP interchangeably in discussions. The product lists both.",
    "description": "Is Wallhack just another name for ESP? Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "NovaStrike",
    "age": "17 Nov, 3:00 AM",
    "date": "2026-11-16",
    "upvotes": 0,
    "flair": "Wallhack",
    "sourceTitle": "Black Ops 7 Wallhack Explained",
    "sourcePath": "/blog/black-ops-7-wallhack/",
    "closed": true,
    "body": [
      "People use Wallhack and ESP interchangeably in discussions. The product lists both.",
      "Is there a difference in what those labels describe?"
    ],
    "comments": [
      {
        "author": "Spectre",
        "age": "17 Nov, 4:00 AM",
        "score": 0,
        "body": "ESP is the broader label for extra information such as names, range and boxes. Wallhack refers to visibility through solid cover. The linked article explains the overlap.",
        "postedAt": "2026-11-16T23:00:00.000Z",
        "replies": [
          {
            "author": "NovaStrike",
            "age": "17 Nov, 5:00 AM",
            "score": 0,
            "body": "That clears it up. One describes a category of information and the other describes visibility through cover.",
            "postedAt": "2026-11-17T00:00:00.000Z"
          }
        ]
      },
      {
        "author": "NeonFox",
        "age": "17 Nov, 6:00 AM",
        "score": 0,
        "body": "I see those words mixed together in almost every discussion. The separate definitions help when comparing feature lists.",
        "postedAt": "2026-11-17T01:00:00.000Z"
      },
      {
        "author": "Wraith",
        "age": "17 Nov, 9:00 AM",
        "score": 0,
        "body": "The illustration in the guide is useful here: information labels and visibility through cover describe different things.",
        "postedAt": "2026-11-17T04:00:00.000Z"
      }
    ]
  },
  {
    "slug": "triggerbot-versus-aimbot",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Triggerbot and Aimbot do different jobs, right?",
    "excerpt": "I read the feature list as two ways to assist aiming, but the Triggerbot guide talks mostly about when a shot happens.",
    "description": "Triggerbot and Aimbot do different jobs, right? Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "Blaze",
    "age": "16 Nov, 7:00 AM",
    "date": "2026-11-16",
    "upvotes": 0,
    "flair": "Triggerbot",
    "sourceTitle": "Black Ops 7 Triggerbot Hack Explained",
    "sourcePath": "/blog/black-ops-7-triggerbot-hack/",
    "closed": false,
    "body": [
      "I read the feature list as two ways to assist aiming, but the Triggerbot guide talks mostly about when a shot happens.",
      "Does Triggerbot move the crosshair at all?"
    ],
    "comments": [
      {
        "author": "NightRaid",
        "age": "16 Nov, 8:00 AM",
        "score": 0,
        "body": "The article defines Triggerbot as automatic shot timing when a target crosses the reticle. Aimbot describes crosshair movement and tracking.",
        "postedAt": "2026-11-16T03:00:00.000Z",
        "replies": [
          {
            "author": "Blaze",
            "age": "16 Nov, 9:00 AM",
            "score": 0,
            "body": "Then the comparison is timing versus movement. That makes the table easier to follow.",
            "postedAt": "2026-11-16T04:00:00.000Z"
          }
        ]
      },
      {
        "author": "Raven",
        "age": "16 Nov, 10:00 AM",
        "score": 0,
        "body": "The recoil feature is another separate control. Firing timing alone does not describe weapon kick.",
        "postedAt": "2026-11-16T05:00:00.000Z"
      },
      {
        "author": "Sparrow",
        "age": "16 Nov, 11:00 AM",
        "score": 0,
        "body": "That explains why a trigger setting does not describe tracking. I had been grouping the two together.",
        "postedAt": "2026-11-16T06:00:00.000Z"
      },
      {
        "author": "Onyx",
        "age": "16 Nov, 2:00 PM",
        "score": 0,
        "body": "The comparison table is the bit I would point new readers toward. It names exactly what each feature controls.",
        "postedAt": "2026-11-16T09:00:00.000Z"
      }
    ]
  },
  {
    "slug": "recoil-control-and-weapon-spread",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Does recoil control also change weapon spread?",
    "excerpt": "The feature description says recoil control. Some discussions use recoil, spread and sway as if they are all the same thing.",
    "description": "Does recoil control also change weapon spread? Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "ZeroPulse",
    "age": "15 Nov, 9:00 AM",
    "date": "2026-11-15",
    "upvotes": 0,
    "flair": "No recoil",
    "sourceTitle": "Black Ops 7 No Recoil Hack Explained",
    "sourcePath": "/blog/black-ops-7-no-recoil-hack/",
    "closed": true,
    "body": [
      "The feature description says recoil control. Some discussions use recoil, spread and sway as if they are all the same thing.",
      "I want to read the label correctly before assuming it changes every part of weapon accuracy."
    ],
    "comments": [
      {
        "author": "SilentFang",
        "age": "15 Nov, 10:00 AM",
        "score": 0,
        "body": "Recoil describes weapon kick during firing. Spread describes shot dispersion. A recoil feature label alone does not establish a spread feature.",
        "postedAt": "2026-11-15T05:00:00.000Z",
        "replies": [
          {
            "author": "ZeroPulse",
            "age": "15 Nov, 11:00 AM",
            "score": 0,
            "body": "Understood. I was reading extra capabilities into a short feature name.",
            "postedAt": "2026-11-15T06:00:00.000Z"
          }
        ]
      },
      {
        "author": "ShadowByte",
        "age": "15 Nov, 12:00 PM",
        "score": 0,
        "body": "The linked guide focuses on recoil during sustained fire and how it relates to the other listed tools.",
        "postedAt": "2026-11-15T07:00:00.000Z"
      },
      {
        "author": "SilentFang",
        "age": "15 Nov, 1:00 PM",
        "score": 0,
        "body": "The written product list is the place to check exactly which controls are included.",
        "postedAt": "2026-11-15T08:00:00.000Z"
      },
      {
        "author": "GhostRider",
        "age": "15 Nov, 2:00 PM",
        "score": 0,
        "body": "Weapon tuning can change the base game behavior too. Keep that separate from what a menu label claims.",
        "postedAt": "2026-11-15T09:00:00.000Z"
      },
      {
        "author": "Raven",
        "age": "15 Nov, 3:00 PM",
        "score": 0,
        "body": "Useful distinction for scoped weapons as well. A stable view and a tighter spread are different observations.",
        "postedAt": "2026-11-15T10:00:00.000Z"
      },
      {
        "author": "Cinder",
        "age": "15 Nov, 4:00 PM",
        "score": 0,
        "body": "Weapon kick versus random spread is a helpful distinction. People often call both recoil in short clips.",
        "postedAt": "2026-11-15T11:00:00.000Z"
      },
      {
        "author": "Titan",
        "age": "15 Nov, 7:00 PM",
        "score": 0,
        "body": "The same issue comes up with sway. It is worth reading the actual menu names instead of assuming one switch covers everything.",
        "postedAt": "2026-11-15T14:00:00.000Z"
      }
    ]
  },
  {
    "slug": "radar-and-built-in-minimap",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Radar overlay versus the standard BO7 minimap",
    "excerpt": "The Radar guide compares the overlay with the standard minimap. Is the main difference the information source or where it is drawn?",
    "description": "Radar overlay versus the standard BO7 minimap Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "EchoSix",
    "age": "14 Nov, 4:00 PM",
    "date": "2026-11-14",
    "upvotes": 0,
    "flair": "Radar",
    "sourceTitle": "Black Ops 7 Radar Hack Explained",
    "sourcePath": "/blog/black-ops-7-radar-hack/",
    "closed": false,
    "body": [
      "The Radar guide compares the overlay with the standard minimap. Is the main difference the information source or where it is drawn?",
      "Trying to understand the comparison without mixing it up with the ESP boxes."
    ],
    "comments": [
      {
        "author": "ShadowByte",
        "age": "14 Nov, 5:00 PM",
        "score": 0,
        "body": "The article covers both. It describes the regular minimap in terms of game-provided pings and the Radar feature as a separate proximity overview.",
        "postedAt": "2026-11-14T12:00:00.000Z"
      },
      {
        "author": "RogueWolf",
        "age": "14 Nov, 6:00 PM",
        "score": 0,
        "body": "ESP boxes appear in the main game view. The Radar description uses a top-down display.",
        "postedAt": "2026-11-14T13:00:00.000Z",
        "replies": [
          {
            "author": "EchoSix",
            "age": "14 Nov, 7:00 PM",
            "score": 0,
            "body": "The display location explanation helped more than just calling everything wall vision.",
            "postedAt": "2026-11-14T14:00:00.000Z"
          }
        ]
      },
      {
        "author": "FrostBite",
        "age": "14 Nov, 8:00 PM",
        "score": 0,
        "body": "There is a three-way comparison table in the ESP article too, but this thread links directly to the Radar guide.",
        "postedAt": "2026-11-14T15:00:00.000Z"
      },
      {
        "author": "Pulse",
        "age": "14 Nov, 9:00 PM",
        "score": 0,
        "body": "The regular minimap and an extra radar window can look similar in a screenshot, even though the descriptions differ.",
        "postedAt": "2026-11-14T16:00:00.000Z"
      },
      {
        "author": "Reaper",
        "age": "15 Nov, 12:00 AM",
        "score": 0,
        "body": "A top-down view is easier to distinguish once you compare it with boxes drawn directly over a player.",
        "postedAt": "2026-11-14T19:00:00.000Z"
      }
    ]
  },
  {
    "slug": "speed-feature-versus-movement-mechanics",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Speed feature versus normal BO7 movement mechanics",
    "excerpt": "Does the Speed entry refer to movement pacing, or is it a shortcut for every movement mechanic in BO7?",
    "description": "Speed feature versus normal BO7 movement mechanics Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "DarkMatter",
    "age": "14 Nov, 10:00 AM",
    "date": "2026-11-14",
    "upvotes": 0,
    "flair": "Speed",
    "sourceTitle": "Black Ops 7 Speed Hack Explained",
    "sourcePath": "/blog/black-ops-7-speed-hack/",
    "closed": false,
    "body": [
      "Does the Speed entry refer to movement pacing, or is it a shortcut for every movement mechanic in BO7?",
      "I do not see separate slide or mantle controls listed on the product page."
    ],
    "comments": [
      {
        "author": "GhostRider",
        "age": "14 Nov, 11:00 AM",
        "score": 0,
        "body": "The guide describes adjusted movement pacing. It does not turn the feature name into a list of extra slide, mantle or animation controls.",
        "postedAt": "2026-11-14T06:00:00.000Z",
        "replies": [
          {
            "author": "DarkMatter",
            "age": "14 Nov, 12:00 PM",
            "score": 0,
            "body": "That answers the naming question. I will stick to what is actually listed.",
            "postedAt": "2026-11-14T07:00:00.000Z"
          }
        ]
      },
      {
        "author": "NovaStrike",
        "age": "14 Nov, 1:00 PM",
        "score": 0,
        "body": "Worth distinguishing the game movement system from a single feature label when comparing descriptions.",
        "postedAt": "2026-11-14T08:00:00.000Z"
      },
      {
        "author": "Jinx",
        "age": "14 Nov, 2:00 PM",
        "score": 0,
        "body": "I wondered about mantling as well. A movement speed label does not tell you that separate animation controls exist.",
        "postedAt": "2026-11-14T09:00:00.000Z"
      },
      {
        "author": "Kestrel",
        "age": "14 Nov, 5:00 PM",
        "score": 0,
        "body": "The screenshot and written feature list should agree. Otherwise it is easy to invent features from a short label.",
        "postedAt": "2026-11-14T12:00:00.000Z"
      }
    ]
  },
  {
    "slug": "stream-proof-capture-and-gameplay",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "What does Stream-proof hide in a recording?",
    "excerpt": "The Misc menu includes Stream-proof. Does that cover the overlay graphics, or does it change what other players see in a replay too?",
    "description": "What does Stream-proof hide in a recording? Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "IronClaw",
    "age": "18 Nov, 8:00 AM",
    "date": "2026-11-18",
    "upvotes": 0,
    "flair": "Stream-proof",
    "sourceTitle": "Stream Proof BO7 Hacks Explained",
    "sourcePath": "/blog/stream-proof-bo7-hacks/",
    "closed": true,
    "body": [
      "The Misc menu includes Stream-proof. Does that cover the overlay graphics, or does it change what other players see in a replay too?",
      "The article makes a distinction between capture and gameplay behavior that I want to confirm."
    ],
    "comments": [
      {
        "author": "FrostBite",
        "age": "18 Nov, 9:00 AM",
        "score": 0,
        "body": "The guide describes hiding the rendered overlays from a capture feed. It does not say that gameplay behavior or in-game replays are hidden.",
        "postedAt": "2026-11-18T04:00:00.000Z"
      },
      {
        "author": "ShadowByte",
        "age": "18 Nov, 10:00 AM",
        "score": 0,
        "body": "Correct. The article also says capture software and settings matter, so the label alone does not establish compatibility with every recording setup.",
        "postedAt": "2026-11-18T05:00:00.000Z",
        "replies": [
          {
            "author": "IronClaw",
            "age": "18 Nov, 11:00 AM",
            "score": 0,
            "body": "So the claim is about captured graphics. It is not an account protection claim.",
            "postedAt": "2026-11-18T06:00:00.000Z"
          }
        ]
      },
      {
        "author": "NightRaid",
        "age": "18 Nov, 12:00 PM",
        "score": 0,
        "body": "That distinction belongs beside every discussion of this feature. A clear recording does not establish anything about anti-cheat enforcement.",
        "postedAt": "2026-11-18T07:00:00.000Z",
        "replies": [
          {
            "author": "IronClaw",
            "age": "18 Nov, 1:00 PM",
            "score": 0,
            "body": "Marking the question answered. The scope of the capture feature is clear now.",
            "postedAt": "2026-11-18T08:00:00.000Z"
          }
        ]
      },
      {
        "author": "Apex",
        "age": "18 Nov, 2:00 PM",
        "score": 0,
        "body": "Capture compatibility is the part I would want explained for a specific recording setup. A checkbox by itself is a limited description.",
        "postedAt": "2026-11-18T09:00:00.000Z"
      },
      {
        "author": "Cipher",
        "age": "18 Nov, 5:00 PM",
        "score": 0,
        "body": "The article also separates overlays from the actions visible in the match. Those are two different things in a replay.",
        "postedAt": "2026-11-18T12:00:00.000Z"
      }
    ]
  },
  {
    "slug": "status-ready-updating-paused",
    "category": "Patch Talk",
    "categoryTone": "orange",
    "title": "Ready, Updating and Paused after a BO7 patch",
    "excerpt": "After a game patch, which status label should I check before opening the loader?",
    "description": "Ready, Updating and Paused after a BO7 patch Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "Hex",
    "age": "12 Nov, 9:00 AM",
    "date": "2026-11-12",
    "upvotes": 0,
    "flair": "Status",
    "sourceTitle": "COD Black Ops 7 Hacks: What They Are and What You Get",
    "sourcePath": "/blog/cod-black-ops-7-hacks/",
    "closed": true,
    "body": [
      "After a game patch, which status label should I check before opening the loader?",
      "The overview guide mentions three labels, and I want their meaning in one place."
    ],
    "comments": [
      {
        "author": "StormBreaker",
        "age": "12 Nov, 10:00 AM",
        "score": 0,
        "body": "Ready means the listed build is updated. Updating means work is in progress. Paused means the current build is unavailable. Use the status page for the current label.",
        "postedAt": "2026-11-12T05:00:00.000Z",
        "replies": [
          {
            "author": "Hex",
            "age": "12 Nov, 11:00 AM",
            "score": 0,
            "body": "Got it. A previous patch note is not a substitute for the current status label.",
            "postedAt": "2026-11-12T06:00:00.000Z"
          }
        ]
      },
      {
        "author": "Nighthawk",
        "age": "12 Nov, 12:00 PM",
        "score": 0,
        "body": "A game update and a loader update are separate events. The current status page is the reference for this question.",
        "postedAt": "2026-11-12T07:00:00.000Z"
      },
      {
        "author": "Glitch",
        "age": "12 Nov, 3:00 PM",
        "score": 0,
        "body": "The date beside the badge matters too. An old screenshot of Ready can easily be passed around after another patch.",
        "postedAt": "2026-11-12T10:00:00.000Z"
      }
    ]
  },
  {
    "slug": "windows-pc-requirements",
    "category": "General",
    "categoryTone": "purple",
    "title": "Windows PC checklist before installing",
    "excerpt": "The PC guide lists Windows 10 or 11, 64-bit, and several Windows security settings.",
    "description": "Windows PC checklist before installing Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "Venom",
    "age": "11 Nov, 12:00 PM",
    "date": "2026-11-11",
    "upvotes": 0,
    "flair": "Requirements",
    "sourceTitle": "BO7 Hacks PC: What You Need",
    "sourcePath": "/blog/bo7-hacks-pc/",
    "closed": true,
    "body": [
      "The PC guide lists Windows 10 or 11, 64-bit, and several Windows security settings.",
      "Can someone summarize the published requirements so I can compare them with my system?"
    ],
    "comments": [
      {
        "author": "Orbit",
        "age": "11 Nov, 1:00 PM",
        "score": 0,
        "body": "The published checklist is Windows 10 or 11 (64-bit), Black Ops 7 on PC, RICOCHET enabled, and HVCI, Core Isolation, TPM and Secure Boot on.",
        "postedAt": "2026-11-11T08:00:00.000Z",
        "replies": [
          {
            "author": "Venom",
            "age": "11 Nov, 2:00 PM",
            "score": 0,
            "body": "Thanks. I was looking for a checklist rather than guessing from another game.",
            "postedAt": "2026-11-11T09:00:00.000Z"
          }
        ]
      },
      {
        "author": "StormBreaker",
        "age": "11 Nov, 3:00 PM",
        "score": 0,
        "body": "Recheck the product requirements when versions change. This example discussion is not a live compatibility result for an individual PC.",
        "postedAt": "2026-11-11T10:00:00.000Z"
      },
      {
        "author": "ShadowByte",
        "age": "11 Nov, 4:00 PM",
        "score": 0,
        "body": "The linked PC guide keeps the requirements together with the product overview.",
        "postedAt": "2026-11-11T11:00:00.000Z"
      },
      {
        "author": "Rift",
        "age": "11 Nov, 5:00 PM",
        "score": 0,
        "body": "A checklist is easier to compare with Windows settings than advice copied from an unrelated game.",
        "postedAt": "2026-11-11T12:00:00.000Z"
      },
      {
        "author": "Ember",
        "age": "11 Nov, 8:00 PM",
        "score": 0,
        "body": "Having the supported platform and security settings together in one guide helps keep the installation question focused.",
        "postedAt": "2026-11-11T15:00:00.000Z"
      }
    ]
  },
  {
    "slug": "hwid-spoofer-and-account-restrictions",
    "category": "General",
    "categoryTone": "purple",
    "title": "Does the HWID spoofer address an account restriction?",
    "excerpt": "The store has separate hack, spoofer and UGC cards. I am trying to understand the spoofer description before choosing a product.",
    "description": "Does the HWID spoofer address an account restriction? Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "NeonFox",
    "age": "10 Nov, 6:00 PM",
    "date": "2026-11-10",
    "upvotes": 0,
    "flair": "Spoofer",
    "sourceTitle": "HWID Spoofers in Call of Duty: What They Change and Who Uses Them",
    "sourcePath": "/blog/call-of-duty-hwid-spoofers/",
    "closed": true,
    "body": [
      "The store has separate hack, spoofer and UGC cards. I am trying to understand the spoofer description before choosing a product.",
      "Does changing a hardware profile remove an existing account restriction?"
    ],
    "comments": [
      {
        "author": "Orbit",
        "age": "10 Nov, 7:00 PM",
        "score": 0,
        "body": "The spoofer article distinguishes hardware identifiers from account restrictions. Changing a hardware profile does not restore an already restricted account.",
        "postedAt": "2026-11-10T14:00:00.000Z",
        "replies": [
          {
            "author": "NeonFox",
            "age": "10 Nov, 8:00 PM",
            "score": 0,
            "body": "That explains why the account and hardware tools have separate descriptions.",
            "postedAt": "2026-11-10T15:00:00.000Z"
          }
        ]
      },
      {
        "author": "StormBreaker",
        "age": "10 Nov, 9:00 PM",
        "score": 0,
        "body": "Neither product description guarantees a restriction will be removed. Read the scope and limitations before checkout.",
        "postedAt": "2026-11-10T16:00:00.000Z"
      },
      {
        "author": "Thunder",
        "age": "10 Nov, 10:00 PM",
        "score": 0,
        "body": "Hardware identifiers and the account profile are separate parts of the explanation. That is the part I wanted clarified too.",
        "postedAt": "2026-11-10T17:00:00.000Z"
      },
      {
        "author": "Mirage",
        "age": "11 Nov, 1:00 AM",
        "score": 0,
        "body": "The limitations section is worth reading alongside the product description before assuming a hardware tool resolves an account issue.",
        "postedAt": "2026-11-10T20:00:00.000Z"
      }
    ]
  },
  {
    "slug": "ugc-appeal-evidence-checklist",
    "category": "General",
    "categoryTone": "purple",
    "title": "What information belongs in a UGC appeal workspace?",
    "excerpt": "The UGC card describes an appeal workspace. What information should a case summary contain?",
    "description": "What information belongs in a UGC appeal workspace? Read example replies and the linked Black Ops 7 guide for Windows PC feature and product information.",
    "author": "Wraith",
    "age": "9 Nov, 8:00 PM",
    "date": "2026-11-09",
    "upvotes": 0,
    "flair": "UGC",
    "sourceTitle": "Call of Duty Account Recovery: Steps After a Ban",
    "sourcePath": "/blog/call-of-duty-account-recovery/",
    "closed": false,
    "body": [
      "The UGC card describes an appeal workspace. What information should a case summary contain?",
      "I would like to understand the workflow without posting account details in a public thread."
    ],
    "comments": [
      {
        "author": "Sparrow",
        "age": "9 Nov, 9:00 PM",
        "score": 0,
        "body": "The linked recovery guide discusses the restriction message, relevant dates and supporting evidence. Keep passwords, payment details and license keys out of public discussions.",
        "postedAt": "2026-11-09T16:00:00.000Z"
      },
      {
        "author": "Orbit",
        "age": "9 Nov, 10:00 PM",
        "score": 0,
        "body": "Keep the original restriction notice and distinguish what it actually says from assumptions about the cause.",
        "postedAt": "2026-11-09T17:00:00.000Z",
        "replies": [
          {
            "author": "Wraith",
            "age": "9 Nov, 11:00 PM",
            "score": 0,
            "body": "A dated summary of the notice and evidence makes more sense than a long public account history.",
            "postedAt": "2026-11-09T18:00:00.000Z",
            "replies": [
              {
                "author": "Sparrow",
                "age": "10 Nov, 12:00 AM",
                "score": 0,
                "body": "Exactly. The workspace organizes a case. The platform still decides an appeal.",
                "postedAt": "2026-11-09T19:00:00.000Z"
              }
            ]
          }
        ]
      },
      {
        "author": "ShadowByte",
        "age": "10 Nov, 1:00 AM",
        "score": 0,
        "body": "This is also why a forum response cannot promise an account outcome.",
        "postedAt": "2026-11-09T20:00:00.000Z"
      },
      {
        "author": "RogueWolf",
        "age": "10 Nov, 2:00 AM",
        "score": 0,
        "body": "Check which product is on the receipt before asking for setup help. The hack, spoofer and UGC descriptions cover different workflows.",
        "postedAt": "2026-11-09T21:00:00.000Z"
      },
      {
        "author": "Draco",
        "age": "10 Nov, 3:00 AM",
        "score": 0,
        "body": "A short timeline of the notice and any appeal response sounds more useful than a wall of speculation.",
        "postedAt": "2026-11-09T22:00:00.000Z"
      },
      {
        "author": "Falcon",
        "age": "10 Nov, 6:00 AM",
        "score": 0,
        "body": "Keep copies of the original messages. It is easier to refer to the exact wording than someone else’s interpretation of it.",
        "postedAt": "2026-11-10T01:00:00.000Z"
      }
    ]
  }
];

export const forumPosts: ForumPost[] = rawPosts.map(withCounts);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}
