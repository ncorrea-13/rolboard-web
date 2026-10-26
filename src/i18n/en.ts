import type { Key } from "./es";

export const en: Record<Key, string> = {
  "meta.title": "Rolboard: your tabletop campaign, all in one place",
  "meta.description":
    "Rolboard is a board for running tabletop RPG campaigns: sessions, arcs, NPCs, locations, factions, quests and a combat tracker. Free, open source and local.",
  "g.meta.description":
    "How to set up your Obsidian vault for Rolboard: folders, frontmatter, wikilinks, reindexing and export. Rolboard only reads your notes and never modifies them.",
  "nav.faq": "FAQ",
  "meta.download.title":
    "Download Rolboard: Windows, Linux, Android and Docker",
  "meta.download.description":
    "Download Rolboard for free for Windows, Linux or Android, or install it on your server with Docker. Open source.",
  "meta.faq.title": "Rolboard FAQ",
  "meta.faq.description":
    "Answers about price, game systems, data, offline use, several devices and Obsidian.",
  "palette.go.demo": "Try the tracker",
  "dl.help.title": "Before and after installing",
  "cta.all": "See all options",
  "sync.eyebrow": "Sync",
  "sync.title": "One campaign, several devices",
  "sync.lead":
    "Rolboard doesn't tie you to a sync tool. Pick the path by how many devices you use and whether you use them at the same time.",
  "sync.label": "Ways to sync",
  "sync.t.none": "Don't sync",
  "sync.t.folder": "Sync folder",
  "sync.t.manual": "Carry it by hand",
  "sync.t.server": "Your own server",
  "sync.when": "When it fits",
  "sync.steps": "How",
  "sync.watch": "Watch out for",
  "sync.files": "What is in the folder",
  "sync.f.db": "The last exported copy of the campaign.",
  "sync.f.uploads": "The images.",
  "sync.f.conflict": "The other device's copy, if both changed.",
  "sync.f.config": "Not synced: it holds paths specific to each machine.",
  "sync.none.when":
    "You use Rolboard on a single device. It's the simplest and there is nothing to set up: the campaign lives in a local SQLite database.",
  "sync.none.steps":
    "<ol><li>Install and use the app. Don't pick any sync folder.</li><li>For a backup, close the app and copy the data folder: <code>~/.config/rolboard</code> on Linux, <code>%AppData%\\rolboard</code> on Windows. It holds <code>config.json</code>, <code>rolboard.db</code> and <code>uploads/</code>.</li><li>If you prefer a readable backup, use <em>Export campaign</em>: a <code>.zip</code> with every sheet as a Markdown note.</li></ol>",
  "sync.none.watch":
    "<ul><li>Copying the database while the app is open can leave a damaged file. Close Rolboard first.</li><li>The backup sits on the same disk as the campaign: keep another copy outside it.</li></ul>",
  "sync.folder.when":
    "You use the desktop and Android apps, or two computers, and open them one at a time. The tool you choose does the syncing.",
  "sync.folder.steps":
    "<ol><li>Pick a folder that something already keeps in sync: a cloud drive (Dropbox, Google Drive, OneDrive, iCloud Drive), Nextcloud, Syncthing, Resilio, or one you copy yourself with rsync, rclone or a script.</li><li>In <em>App settings</em>, the gear on the campaign selector, choose that folder as the sync folder. If it already holds a copy, Rolboard imports it; if it's empty, it exports yours.</li><li>Repeat the previous step on the other device, pointing at the same folder.</li><li>Use one device at a time and wait for your tool to finish syncing before opening the app on the other.</li></ol>",
  "sync.folder.watch":
    "<ul><li>Rolboard never opens the database inside that folder: it writes and reads a complete copy. That's why it works with almost any tool.</li><li>It imports on open (on Android, when the app comes back to the foreground) and exports 30 seconds after the last change and on close (on Android, when it goes to the background).</li><li>If two devices change at once, the last one to save wins. The other copy is kept as <code>rolboard.conflict.db</code> and your previous database as <code>rolboard.db.bak</code>.</li><li>A copy made by a newer version is refused: update every device to the same version.</li></ul>",
  "sync.manual.when":
    "You don't want to set anything up to sync, or you only switch devices now and then.",
  "sync.manual.steps":
    "<ol><li>On the source device, pick any folder as the sync folder, for example one on a USB stick, and close the app: closing exports the latest copy.</li><li>Copy the folder's content (<code>rolboard.db</code> and <code>uploads/</code>) to the other device however you like: USB stick, cable, email or local network.</li><li>On the destination, choose that folder as the sync folder. Rolboard imports the copy.</li><li>To go back, do the same in the opposite direction.</li></ol>",
  "sync.manual.watch":
    "<ul><li>Always use the copy Rolboard exports to the sync folder, not the file in the data folder while the app is open.</li><li>If the destination already had data, Rolboard keeps your previous database as <code>rolboard.db.bak</code> before importing.</li></ul>",
  "sync.server.when":
    "You want to use the campaign from several devices at the same time, for example the tablet at the table and your computer, or you prefer a single copy on a server of yours.",
  "sync.server.steps":
    "<ol><li>Install the Docker (or Podman) version on a machine that is always on: a home server, a mini PC or a VPS.</li><li>Create the admin key, log in from the browser, create the campaign and give it an access code.</li><li>Open the server's address from any device on your network. To use it away from home, put it behind the VPN or tunnel you already use.</li><li>To bring over a desktop campaign, copy its <code>.db</code> and the <code>uploads/</code> folder into the server's data folder.</li></ol>",
  "sync.server.watch":
    "<ul><li>If you read an Obsidian vault, the server mounts it read-only. Get it there with the tool you prefer (Syncthing, git, rsync) and exclude <code>.git/</code>.</li><li>The desktop and Android apps don't connect to a server: they have their own database.</li><li>Don't expose it to the internet without HTTPS and a strong admin key.</li></ul>",
  "g.t.npc.keys":
    "Type and status, free-form details, location, factions and links to other NPCs and to players.",
  "g.t.ses.keys":
    "Number, date, status, tags, title and arc. A decimal number like 4.1 is an interlude; the oneshot tag numbers them on their own.",
  "sync.multi.title": "If more than one Master uses it",
  "sync.multi.body":
    "<ul><li>The admin key is a single one per server and gives access to everything: viewing and changing every campaign and creating new ones. Keep it yourself and don't hand it to other Masters.</li><li>Each campaign has its own access code. Give each Master only the code of their campaign: it opens that campaign and no other, and each campaign's data is isolated.</li><li>There are no accounts or roles. Whoever knows a campaign's code can see and edit all of its content, secrets included, so share it only with people you trust.</li><li>If the Masters don't trust each other, or each wants to manage their own campaigns, the cleanest option is one instance per Master, each with its own admin key.</li></ul>",
  "not.vtt": "It's not a VTT or a character sheet.",
  "not.rules": "It ships no rules.",
  "not.dice": "It doesn't roll dice.",
  "not.is":
    "It's the GM's notebook: a place to keep the story, not to play it.",
  "g.folders.r1": "Only the top-level folder counts.",
  "g.folders.r2": "You can use subfolders inside.",
  "g.folders.r3": "Any other folder is ignored.",
  "g.folders.r4":
    "The sheet's name is the file name, without <code>.md</code>.",
  "nav.home": "Rolboard, home",
  "nav.skip": "Skip to content",
  "nav.sections": "Sections",
  "nav.features": "Features",
  "nav.download": "Download",
  "menu.pages": "Pages",
  "menu.here": "On this page",
  "menu.home": "Home",
  "menu.open": "Open menu",
  "menu.close": "Close menu",
  "menu.label": "Menu",
  "nav.palette": "Search",
  "footer.credits":
    "Developed by Nicolás Correa. Logos and icons by Mateo Guareschi.",
  "footer.legal":
    "Code under the MIT license. The logos and icons are not covered by it: they belong to their author and are used with permission.",

  "palette.label": "Jump to a section",
  "palette.placeholder": "Type to search…",
  "palette.empty": "Nothing here. Try “download” or “obsidian”.",
  "palette.hint": "Esc to close",
  "palette.go.github": "Code on GitHub",

  "hero.eyebrow": "For Game Masters and Storytellers",
  "hero.title1": "Your tabletop campaign,",
  "hero.title2": "all in one place.",
  "hero.lead":
    "Sessions, arcs, NPCs, locations, factions, quests and a combat tracker. Rolboard keeps your campaign's story so you can focus on telling it.",
  "hero.cta": "Download for free",
  "hero.code": "View the code",
  "hero.meta": "Windows · Linux · Android · Docker",

  "demo.label": "Test table",
  "demo.title": "Ambush at the lighthouse",
  "demo.round": "Round",
  "demo.next": "Next turn",
  "demo.ini": "INI",
  "demo.damage": "Remove 1 hit point from",
  "demo.heal": "Add 1 hit point to",
  "demo.down": "Down",
  "demo.turn": "Turn of",
  "dice.title": "Rolboard doesn't roll dice. This one does.",
  "dice.roll": "Roll a d20",
  "dice.result": "Result",
  "dice.crit": "Critical",
  "dice.fumble": "Fumble",
  "dice.history": "Latest rolls",
  "dice.none": "No rolls yet",

  "features.eyebrow": "What it does",
  "features.title": "Everything you need between sessions",
  "codex.label": "Rolboard features",
  "f1.title": "Arcs and sessions",
  "f2.title": "A cast with memory",
  "f3.title": "Your world, in layers",
  "f4.title": "Combat tracker",
  "f5.title": "Items and currencies",
  "f5.text":
    "A catalog priced in several currencies, NPC and player inventories, and a shop per location.",
  "f6.title": "Secrets and wardails",
  "f6.text":
    "Who knows what, what is hidden and what was revealed; and the table's sensitive topics always in view as you play.",
  "f7.title": "Global search",
  "f8.title": "Images and colour",
  "f8.text":
    "One image per NPC, player, location, faction, item, arc, lore entry and quest, and a colour per type.",
  "f9.title": "Yours and local",
  "f9.text":
    "No accounts, no cloud. The desktop app keeps everything on your computer; if you prefer, run it on your own server with Docker.",
  "also.title": "And also",

  "codex.dash.tab": "Overview",
  "codex.dash.title": "Open it and pick up where you left off",
  "codex.dash.text":
    "The overview gathers the current arc, the last session, active quests, the party and pending notes. No menus in between.",

  "s1.eyebrow": "Cast",
  "s1.title": "Every NPC, one click away",
  "s1.text":
    "Filter by type or status, search by name or place and open the sheet with their description, location and relations. The types are yours: human, spren, monster or whatever your world needs.",
  "s2.eyebrow": "Combat",
  "s2.title": "Initiative without scraps of paper",
  "s2.text":
    "Add participants, adjust HP with a click and advance rounds. Rolboard orders the turns; rolls and rules stay with your table.",
  "s3.eyebrow": "Story",
  "s3.title": "The campaign at a glance",
  "s3.text":
    "Sessions and interludes grouped by arc, with date and title. The next session is planned and ready to play.",
  "s5.eyebrow": "World",
  "s5.title": "Lore with its own order",
  "s5.text":
    "Entries by category, linked to arcs and locations, and a timeline with free-form dates like “Year 205”. With Markdown, Obsidian-style notices and tables.",
  "s6.eyebrow": "Search",
  "s6.title": "Everything, with Ctrl + K",
  "s6.text":
    "A command palette to jump to any sheet in the campaign without going through menus. Type, pick and go: ideal mid-game.",
  "s4.eyebrow": "Android",
  "s4.title": "In your pocket too",
  "s4.text":
    "The same app on your phone or tablet, offline. Pick a sync folder and take your campaigns between your computer and your phone.",

  "shot.dashboard":
    "Campaign overview in Rolboard: current arc, last session, active quests and recent NPCs",
  "shot.npcs": "NPC list with type, current location and status",
  "shot.encounter":
    "Combat tracker with hit points, initiative and fast and slow turns",
  "shot.sessions": "Session timeline grouped by arc",
  "shot.world": "Lore grouped by category",
  "shot.search": "Search palette with results from the whole campaign",
  "shot.android.campaigns": "Campaign selector on an Android phone",
  "shot.android.dashboard": "Campaign overview on an Android phone",
  "shot.android.help": "Help page on an Android phone",

  "obs.eyebrow": "Obsidian",
  "obs.title": "Already running your campaign in Obsidian?",
  "obs.text":
    "Point Rolboard at your vault and press <em>Reindex</em>. Your notes on NPCs, locations, factions, characters, arcs and sessions become sheets. Rolboard only reads: it never changes your notes.",
  "obs.more": "How to set up your vault →",
  "obs.tree": "Vault folder structure",
  "obs.root": "My campaign/",
  "obs.arcs": "→ arcs",
  "obs.npcs": "→ NPCs",
  "obs.locations": "→ locations",
  "obs.factions": "→ factions",
  "obs.characters": "→ characters",
  "obs.sessions": "→ sessions",

  "not.eyebrow": "House rules",
  "not.title": "What Rolboard is not",

  "faq.title": "FAQ",
  "faq.freeq": "Is it free?",
  "faq.freea":
    "Yes, and it will stay that way. Rolboard is open source under the MIT license: no accounts, paid plans or ads. You can read the code, build it yourself or adapt it to your table.",
  "faq.systemq": "Which game system does it work with?",
  "faq.systema":
    "Any of them. Rolboard ships no rules and doesn't roll dice: it keeps the campaign's story. Attributes and skills are free-form fields you define, and the combat tracker supports numeric initiative or fast and slow turns. It's been used with D&amp;D and the Cosmere RPG, but it works for any system.",
  "faq.playersq": "Can my players see it?",
  "faq.playersa":
    "No. Rolboard is the GM's tool: there's no player view or player accounts, so your notes, secrets and plans stay yours.",
  "faq.q1": "Where does my data live?",
  "faq.a1":
    "On your computer. The desktop app keeps everything in a SQLite database inside your user folder (<code>~/.config/rolboard</code> on Linux, <code>%AppData%\\rolboard</code> on Windows), together with the images you upload. No accounts, servers or cloud: to back it up, just copy that folder.",
  "faq.q2": "Does it work offline?",
  "faq.a2":
    "Yes. The desktop app runs entirely on your computer and your data never leaves it. You only need a connection to download it and to open external links, like the repository or the docs.",
  "faq.updateq": "How do I update?",
  "faq.updatea":
    "Download the new version and replace the old executable (on Android, install the new APK over the old one). Your campaigns live in your user folder, separate from the app, so updating doesn't lose them. The current version is shown in the downloads section.",
  "faq.devicesq": "Can I use it on several devices?",
  "faq.devicesa":
    "Yes, in two ways. The desktop and Android apps can share campaigns through a sync folder that you keep up to date with the tool you prefer (Syncthing, a cloud drive, or by hand); it's meant for one device at a time. To use it on several at once, install the Docker version on a server: it's used from the browser of any device on your network, with an admin key. The step-by-step details are in the <a href=\"/faq#sync\">sync guide</a>.",
  "faq.q3": "Is there a macOS version?",
  "faq.a3":
    "Not yet: the app isn't tested or signed for Mac. If you have a server or an always-on computer, you can install the Docker version and use it from the Mac's browser, or from any other device on your network.",
  "faq.q4": "Do I need Obsidian?",
  "faq.a4":
    "No. Rolboard works on its own: you can create campaigns, NPCs, locations and sessions right in the app. If you already keep your campaign in Obsidian, point it at your vault to import your notes; every reindex brings in the changes, and each sheet can show the full note. Rolboard only reads: it never changes your vault.",

  "report.title": "Found a bug?",
  "report.text":
    "If something doesn't work or you have an idea, open an issue on GitHub. First check whether there's a similar one: you can add your case to it.",
  "report.new": "Report a problem",
  "report.list": "See open issues",

  "dl.eyebrow": "Download",
  "dl.title": "Free. Forever.",
  "dl.sub": "Rolboard is open source. Pick how to use it.",
  "dl.win.btn": "Download for Windows",
  "dl.win.note":
    "It isn't signed: if Windows shows a warning, choose <em>More info → Run anyway</em>.",
  "dl.linux.btn": "Download for Linux",
  "dl.linux.note":
    "Needs <code>libwebkit2gtk-4.1</code>. Make it executable with <code>chmod +x</code> and open it.",
  "dl.android.btn": "Download for Android",
  "dl.android.note":
    "Not on Google Play. If Play Protect shows a warning, choose <em>More details → Install anyway</em>.",
  "dl.server.title": "Server",
  "dl.server.btn": "See the Docker setup",
  "dl.server.note":
    "To use it from a tablet or phone at the table, with an admin key and a code per campaign.",
  "dl.mcp.title": "To connect an AI assistant",
  "dl.mcp.lead": "Only for the server version.",
  "dl.mcp.linux.note": "Make it executable with <code>chmod +x</code>.",
  "dl.mcp.linux.btn": "Download rolboard-mcp for Linux",
  "dl.mcp.win.btn": "Download rolboard-mcp for Windows",
  "dl.mcp.link": "See how to connect",
  "dl.all": "All releases",
  "dl.recommended": "Recommended for your device",
  "dl.version": "Latest version",

  "g.meta.title": "Rolboard with Obsidian: turn your vault into sheets",
  "g.title": "Your Obsidian vault, turned into sheets.",
  "g.lead":
    "Point Rolboard at your folder and hit <em>Reindex</em>. Your notes for NPCs, locations, factions, characters, arcs, sessions and lore become sheets with relationships. Rolboard only reads: it never modifies your notes.",
  "g.cta.download": "Download Rolboard",
  "g.cta.template": "See the example vault",
  "g.steps.eyebrow": "How it works",
  "g.steps.title": "Three steps, nothing to migrate",
  "g.s1.title": "Pick the folder",
  "g.s1.text":
    "When you create the campaign, choose your vault's folder. In the desktop app, set the folder that holds your vaults once.",
  "g.s2.title": "Reindex",
  "g.s2.text":
    "With one click, Rolboard reads each note's frontmatter and creates or updates the sheets. If a note has an error, it tells you and keeps going with the rest.",
  "g.s3.title": "Keep writing in Obsidian",
  "g.s3.text":
    "The prose stays in your notes. Every sheet has a button to open its note in Obsidian; when you edit it, reindex again.",
  "g.folders.eyebrow": "Structure",
  "g.folders.title": "Which folder becomes what",
  "g.folders.label": "Vault folders",
  "g.t.entity": "Becomes",
  "g.t.keys": "Frontmatter keys it reads",
  "g.t.npc": "NPCs",
  "g.t.loc": "Locations",
  "g.t.loc.keys":
    "Type (planet, region, city, structure or plane) and parent location: they form a tree.",
  "g.t.grp": "Factions",
  "g.t.grp.keys":
    "Alignment and leader. Members come from NPC and character notes.",
  "g.t.pc": "Characters",
  "g.t.pc.keys":
    "The player's sheet and its backstory and progression notes, linked with <code>personaje</code>.",
  "g.t.arc": "Arcs",
  "g.t.arc.keys": "Arc and subarc order, title, status and main mission.",
  "g.t.ses": "Sessions",
  "g.t.lore": "Lore entries",
  "g.t.lore.keys": "Category (created if it doesn't exist), arc and location.",
  "g.ex.eyebrow": "An example",
  "g.ex.title": "An NPC note",
  "g.ex.text":
    "The frontmatter is YAML. Wikilinks go in quotes. <code>tipo</code> is the campaign's NPC type: if it doesn't exist yet, Rolboard creates it. <code>faccion</code> and <code>vinculado_a</code> are lists.",
  "g.ex.label": "NPC note example",
  "g.det.eyebrow": "Details that matter",
  "g.det.title": "Built so you lose nothing",
  "g.d1.title": "Wikilinks, no guessing",
  "g.d1.text":
    "<code>[[Name]]</code> and <code>[[Name|Alias]]</code> are looked up by name and by the type each field expects. If there are zero or several matches, Rolboard doesn't pick one: it reports an unresolved link.",
  "g.d2.title": "Your edits are respected",
  "g.d2.text":
    "If a note hasn't changed since the last reindex, it is skipped: what you edited in Rolboard isn't overwritten. Faction members you added or removed by hand don't come back on their own either.",
  "g.d3.title": "Export and come back",
  "g.d3.text":
    "<em>Export campaign</em> produces a <code>.zip</code> with every sheet as a Markdown note, using the same keys. You can drop it into a vault and reindex: it works as a backup and as an exit.",
  "g.d4.title": "Open the note in Obsidian",
  "g.d4.text":
    "Every sheet has a button that opens its note through <code>obsidian://</code>. It works because Obsidian names the vault after its folder. You can also read the rendered note inside Rolboard.",
  "g.d5.title": "Sync the way you prefer",
  "g.d5.text":
    "On desktop, Rolboard reads the local folder. With Docker, bring your vault to the server with Syncthing or another tool; if it's a git repository, exclude <code>.git/</code> from the sync.",
  "g.d6.title": "Read-only",
  "g.d6.text":
    "The vault is mounted read-only and files are read without following symlinks that point outside it. Rolboard doesn't write to your vault: the only thing it stores is its own database.",
  "g.more.text":
    "Want the full detail of every key and how links are resolved?",
  "g.more.link": "Read the technical reference",
  "meta.agents.title":
    "Rolboard with AI: connect Claude, OpenCode, Codex and Antigravity",
  "meta.agents.description":
    "Connect your Rolboard campaign to an AI assistant through MCP: have it search, summarise and help you prepare sessions. No API keys. Works with Claude, OpenCode, Codex and Antigravity.",
  "nav.agents": "AI",
  "a.title": "Your campaign, within reach of your AI assistant.",
  "a.lead":
    "Rolboard speaks MCP: Claude, OpenCode, Codex and Antigravity can search your campaign, summarise a session or help you prepare the next one. No API keys, no new accounts.",
  "a.cta.download": "Download Rolboard",
  "a.cta.steps": "See how to connect",
  "a.steps.eyebrow": "How to connect",
  "a.link.rolboard": "Rolboard",
  "a.link.assistant": "Your assistant",
  "a.link.label": "Rolboard connects to your AI assistant through MCP",
  "a.paths.title": "Depending on where your Rolboard runs",
  "a.p1.title": "Desktop app",
  "a.p1.where": "Windows and Linux",
  "a.p1.s1":
    "Open <em>App settings</em> and turn on <em>Let AI agents connect</em>.",
  "a.p1.s2":
    "Press <em>Connect</em> on your client. Rolboard adds itself to its configuration and saves a copy of the file first.",
  "a.p1.s3": "Restart the client and ask it something about your campaign.",
  "a.p1.note": "The app has to be open while the assistant works.",
  "a.p2.title": "Docker server",
  "a.p2.where": "From your computer",
  "a.p2.s1":
    "Download <code>rolboard-mcp</code>, the program that links your assistant to the server.",
  "a.p2.s2":
    "Run <code>rolboard-mcp login</code> once. It asks for the campaign's access code without showing it and saves it on your computer.",
  "a.p2.s3":
    "In the campaign settings, <em>Connect an AI agent</em> builds the command or configuration for your client.",
  "a.p2.note": "Each campaign has its own code: one connection, one campaign.",
  "a.android": "It isn't available on Android.",
  "a.limits.eyebrow": "Limits",
  "a.limits.title": "What it can and can't do",
  "a.d1.title": "Reads everything",
  "a.d1.text":
    "Sheets, sessions, notes and secrets included. What it reads travels to the AI service you use: if you don't want a secret to leave your machine, don't connect that client.",
  "a.d2.title": "Creates and edits",
  "a.d2.text":
    "It creates and edits NPCs, quests, lore, items, sessions, locations and more. It never deletes anything or reindexes your vault.",
  "a.d3.title": "No keys, no public network",
  "a.d3.text":
    "On desktop the connection goes through a local socket, for your user only. With Docker it uses each campaign's access code: one connection, one campaign.",
  "faq.agentsq": "Can I use an AI assistant with my campaign?",
  "faq.agentsa":
    'Yes, with any program that speaks MCP: Claude, OpenCode, Codex and Antigravity, with no API keys. It can read your campaign and create notes, NPCs, quests and lore, but it never deletes anything. The steps are on the <a href="/agents">AI page</a>.',
};
