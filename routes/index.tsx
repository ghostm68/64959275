import { Head } from "$fresh/runtime.ts";
import Typewriter from "../islands/Typewriter.tsx";

// --- DATA: Module Links ---
const modules = [
  { href: "/sitemap", title: "Nexus Map", badge: "ACTIVE", badgeStyle: "color:#cc0000; border-color:#cc0000;", meta: "MODERNIZED WORDSTAR CLI" },
  { href: "/directory", title: "directory", badge: "build", badgeStyle: "", meta: "WORK IN PROGRESS PROTOCOL" },
  { href: "/cut+rune", title: "desk", badge: "TOOL", badgeStyle: "", meta: "TEXT SURGERY" },
  { href: "/q", title: "Project Q", badge: "AI-NODE", badgeStyle: "", meta: "GENERATIVE ENVIRONMENT" },
  { href: "https://inkrealm.info/sitemap", title: "inkrealm 3.0", badge: "Map", badgeStyle: "", meta: "CP/M ARCHIVE (2026)" },
  { href: "https://inkrealm.info/minraud", title: "inkrealm 3.0", badge: "Nova", badgeStyle: "", meta: "CP/Minraud (webllm)" },
];

// --- DATA: Manifest ---
const textFiles = [
  { label: "DEJAVU_GLITCHES", href: "/dejavuglitches" },
  { label: "DREAMWEAVER", href: "/dreamweaver" },
  { label: "DISPLAYWRITER", href: "/displaywriter" },
  { label: "TEN", href: "/ten" },
  { label: "38", href: "/38" },
];

const cinemaFiles = [
  { label: "FILE_90263", href: "/90263" },
  { label: "THE_NETHERLANDS", href: "/netherlands" },
];

const visualLinks = [
  { label: "print$", href: "https://www.artpal.com/Inky", external: true },
  { label: "Artbreeder", href: "https://artbreeder.com/inkrealm", external: true },
  { label: "is.nota.live", href: "https://is.nota.live/@Inkrealm", external: true },
  { label: "MINDS", href: "https://www.minds.com/inkrealm", external: true },
  { label: "ArtStation", href: "https://artstation.com/inkrealm", external: true },
  { label: "Behance", href: "https://behance.net/inkrealm", external: true },
  { label: "VSCO", href: "https://vsco.co/inkrealm", external: true },
  { label: "PARAGRAPH", href: "https://paragraph.com/@inkrealm", external: true },
  { label: "OPENSEA", href: "https://opensea.io/inkrealm", external: true },
  { label: "ARE.NA", href: "https://www.are.na/ink-realm/wordstar", external: true },
];

const uplinks = [
  { label: "ORCID", href: "https://orcid.org/0009-0008-7073-0515" },
  { label: "CRUNCHBASE", href: "https://www.crunchbase.com/organization/inkrealm" },
  { label: "MEDIUM", href: "https://inkrealm.medium.com/prompt-and-circumstance-b9fd902861b1" },
  { label: "WATTPAD", href: "https://www.wattpad.com/user/inkrealm" },
  { label: "SPATIAL", href: "https://www.spatial.io/s/inkrealms-Next-World-6218fa3ed2b7ae0001fb9703" },
  { label: "vimeo", href: "https://vimeo.com/inkrealm" },
  { label: "IPFS", href: "https://bafybeih2krsr35gj6afanlglhec47ycvtjerr75rck24t4ahhf6i6pf6sm.ipfs.infura-ipfs.io/" },
  { label: "PSCP", href: "https://www.pscp.tv/inkrealm" },
  { label: "SOUNDCLOUD", href: "https://soundcloud.com/inkrealm" },
  { label: "steemit", href: "https://steemit.com/@inkrealm/posts" },
  { label: "git book", href: "https://wordstar.gitbook.io/inkrealm" },
  { label: "shop", href: "https://www.redbubble.com/people/inky99/shop" },
];

// --- DATA: The Story ---
const storyTitle = "The Great AI Hustle: ARTIFICT.IO vs. The Silicon Overlords";
const storyText = `> Six months ago, we were just six flat-broke nobodies scavenging the "Miscellaneous" aisle of a bankrupt Radio Shack. Derek—our self-appointed CEO—had been demoing a toaster he swore could mine Bitcoin if you fed it rye bread. The rest of us? We were there for the free extension cords and day-old donuts. When the sheriff slapped padlocks on the doors, we bolted with whatever still blinked: two wheezing beige towers, a CRT monitor that hummed the national anthem on boot-up, and a dot-matrix printer that only screamed in Portuguese. We crammed our loot into Derek's rustbucket van (license plate: "404-CEO") and peeled out to the nearest "incubator"—the back room of a shuttered escape-room joint in a strip mall. The previous tenants had ghosted, leaving plastic prop keys scattered around and a whiteboard scrawled with "FIND THE EXIT." We flipped it over, Sharpied "FIND THE EXIT… TO SUCCESS," and declared it our mission statement. Startup gospel. None of us could code beyond a Chrome extension that Nicolas Cage-ified cat videos. So we got scrappy. We printed the top 10,000 most-Googled questions ever, jammed them into mason jars labeled "Small Talk," "Existential Dread," "Mom's Tech Support," and "Conspiracy Theories." Then we memorized the highest-rated Yahoo Answers from 2009-2012. That was our "training data." Our "neural net"? Six brains on Red Bull and spite. We branded it ARTIFICT.IO—close enough to "artifact" to sound profound, fake enough to fool VCs until they squinted. Pitch deck? Slide 1: stock-photo robot stirring a pot of "Innovation Soup." Slide 2: same robot fleeing pitchfork-wielding villagers ("Disruption in Action"). Slide 3? A color-scanned pizza coupon for "one free large, no substitutions." Investors mailed checks before we hit "Q&A." To fake "round-the-clock machine learning," we ran staggered shifts: frantic Googling, copy-paste marathons, and thesaurus-fueled mad libs. Night crew drew the short straw—the dot-matrix printer jolted awake every 15 minutes, shrieking "CALIBRAÇÃO!" which we pretended was Portuguese for "genius at work." We kept a swear jar, but only for accidentally blurting truths like "This isn't AI, it's us in disguise." Month one: Series A funded entirely in coffee-stained quarters from a laundromat poker game. By month three, we'd "scaled." Our "chatbot," ARTIE, lived on the beige towers. Users typed queries into a chat window; we'd eavesdrop via baby monitors, rummage the jars, and hammer responses on a hidden keyboard. Latency? "Quantum thinking time." 95% accuracy? We banned bad jar pulls. Then the big leagues called. OpenAI dropped GPT-5, Anthropic unleashed Claude 3.5, and suddenly every valley bro wanted "the next big thing." Our Twitter hustle—memes of ARTIE "outsmarting" Siri with 2009 burn replies—went viral. Forbes dubbed us "The Underdogs Democratizing AI." Invites poured in: TechCrunch Disrupt, Y Combinator Demo Day, and—holy buzzword—a head-to-head "AI Bake-Off" against the giants at the Valley Vision Summit. Problem: Real AI could generate sonnets, code apps, and predict stocks. We had jars, caffeine, and a printer with identity issues. Solution? Hustle harder. We divided into "specialized models": - **Derek (CEO-GPT)**: Bullshit generator. Fed him pitch decks; he spewed unicorn valuations. - **Jenna (EmpathyBot)**: "Small Talk" jar queen. Turned "How's the weather?" into therapy sessions. - **Raj (CodeLord)**: Stack Overflow crib sheets. Wrote "Python" that was 90% emojis. - **Mia (VisionPro)**: Image deskewer on MS Paint. "Generated" art by recoloring stock photos. - **Carlos (QuantumPredictor)**: Poker face + coin flips. "99% accurate forecasts." - **Tasha (EthicsGuard)**: The truth swear jar. Vetoed anything too honest. Summit night: 5,000 nerds, Elon-level VCs, live-streamed to millions. Round 1: "Solve climate change." Real AIs spat 10-page whitepapers. ARTIE? Derek mashed jars: "Plant trees with blockchain. Tokenize squirrels. Disrupt!" Crowd ate it up—standing ovation for "human-centric innovation." Round 2: Live debate vs. GPT-5. Topic: "Is AI sentient?" GPT droned philosophy. We tag-teamed: Jenna empathized, Raj "coded" a sentience meme, Mia projected a glitchy robot selfie. Printer punctuated with "CALIBRAÇÃO!"—we sold it as "emergent consciousness." Finale: "Predict the next meme stock." Real AIs hedged with data. Carlos flipped his coin: "GameStop... again. With NFTs." It mooned 20% overnight. Pandemonium. By dawn, we'd "won" on audience vote. Sequoia led Series B at $500M valuation. No one peeked behind the curtain—not the VCs (too busy tweeting), not the press (too buzzword-drunk). We bought real servers with the cash, hired "engineers" (us in wigs), and kept the jars as "legacy IP." Today, ARTIFICT.IO powers half the Fortune 500's "AI assistants." We're not the smartest—just the hungriest. In a world of flawless algorithms, we proved six hustlers with scavenged junk and memorized Yahoo Answers could out-bluff the bots. The whiteboard still reads "FIND THE EXIT… TO SUCCESS." And damn if we didn't kick down the door.`;

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXUS ROOT // SYSTEM LAUNCHER</title>
      </Head>

      <div class="container">
        {/* TRIANGLE HUD */}
        <div class="triangle-video-frame">
          <div class="triangle-inner-video">
            <video autoplay muted loop playsinline>
              <source src="https://github.com/ghostm68/666/raw/refs/heads/main/210644747.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* TYPEWRITER H1 — client-side island */}
        <Typewriter />

        <div class="subtitle">
          <span>INKREALM SYSTEM ROOT V. 7.0</span>
        </div>

        {/* MODULE GRID */}
        <div class="grid">
          {modules.map((m) => (
            <a href={m.href} class="module-link">
              <div>
                <span class="module-title">
                  {m.title}{" "}
                  <span class="status-badge" style={m.badgeStyle || undefined}>
                    {m.badge}
                  </span>
                </span>
                <span class="module-meta">{m.meta}</span>
              </div>
            </a>
          ))}
        </div>

        {/* MANIFEST */}
        <div class="manifest-section">
          <div class="manifest-header">Primary Output // Manifest</div>

          <div class="manifest-row">
            <span class="manifest-label">IDENTITY:</span>
            <span class="manifest-data">INKREALM ("Inky") // Writer // Musician // Visual Artist</span>
          </div>

          <div class="manifest-row">
            <span class="manifest-label">TEXT_FILES:</span>
            <span class="manifest-data">
              {textFiles.map((f, i) => (
                <>
                  <a href={f.href}>{f.label}</a>
                  {i < textFiles.length - 1 ? " " : ""}
                </>
              ))}
            </span>
          </div>

          <div class="manifest-row">
            <span class="manifest-label">AUDIO_SIG:</span>
            <span class="manifest-data">"Two Skinny Girls" (Available on all streaming frequencies)</span>
          </div>

          <div class="manifest-row">
            <span class="manifest-label">CINEMA_DB:</span>
            <span class="manifest-data">
              {cinemaFiles.map((f, i) => (
                <>
                  <a href={f.href}>{f.label}</a>
                  {i < cinemaFiles.length - 1 ? " " : ""}
                </>
              ))}
            </span>
          </div>

          <div class="manifest-row">
            <span class="manifest-label">VISUALS:</span>
            <span class="manifest-data">
              {visualLinks.map((v, i) => (
                <>
                  <a href={v.href} target="_blank" rel="noopener noreferrer">{v.label}</a>
                  {i < visualLinks.length - 1 ? " " : ""}
                </>
              ))}
            </span>
          </div>
        </div>

        {/* NETWORK UPLINKS */}
        <div class="directory-section">
          <div class="directory-header">Network Uplinks // External Protocols</div>
          <div class="directory-grid">
            {uplinks.map((u) => (
              <a href={u.href} class="dir-link" target="_blank" rel="noopener noreferrer">
                {u.label}
              </a>
            ))}
          </div>
        </div>

        {/* FOOTER WITH STORY */}
        <div class="system-footer">
          <span>SYS.ADMIN: GHOST</span>
          <span>
            STATUS: ONLINE: STORY{" "}
            <details class="learning-corner">
              <summary>REDDIT: censored #001</summary>
              <div class="story-content">
                <p style="border-bottom: 1px solid #333; margin-bottom:15px; padding-bottom:5px; color:#fff; font-size: 0.9rem;">
                  {storyTitle}
                </p>
                <p style="font-size: 0.85rem;">{storyText}</p>
                <p style="text-align:right; font-size:0.7rem; color:#fff; margin-top:20px;">
                  -the eNd- copyright 2026 inkrealm.info
                </p>
              </div>
            </details>
          </span>
          <span>DOMAIN: WORDSTAR.NEXUS</span>
        </div>
      </div>
    </>
  );
}
