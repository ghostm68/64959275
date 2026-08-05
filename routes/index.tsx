import { Head } from "fresh";
import Typewriter from "../islands/Typewriter.tsx";

// Converted styling to typed style objects
const modules = [
  { href: "/sitemap", title: "Nexus Map", badge: "ACTIVE", badgeStyle: { color: "#cc0000", borderColor: "#cc0000" }, meta: "MODERNIZED WORDSTAR CLI" },
  { href: "/directory", title: "directory", badge: "build", badgeStyle: undefined, meta: "WORK IN PROGRESS PROTOCOL" },
  { href: "/cut+rune", title: "desk", badge: "TOOL", badgeStyle: undefined, meta: "TEXT SURGERY" },
  { href: "/q", title: "Project Q", badge: "AI-NODE", badgeStyle: undefined, meta: "GENERATIVE ENVIRONMENT" },
  { href: "https://inkrealm.info/sitemap", title: "inkrealm 3.0", badge: "Map", badgeStyle: undefined, meta: "CP/M ARCHIVE (2026)" },
  { href: "https://inkrealm.info/minraud", title: "inkrealm 3.0", badge: "Nova", badgeStyle: undefined, meta: "CP/Minraud (webllm)" },
];

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
  { label: "print$", href: "https://www.artpal.com/Inky" },
  { label: "Artbreeder", href: "https://artbreeder.com/inkrealm" },
  { label: "is.nota.live", href: "https://is.nota.live/@Inkrealm" },
  { label: "MINDS", href: "https://www.minds.com/inkrealm" },
  { label: "ArtStation", href: "https://artstation.com/inkrealm" },
  { label: "Behance", href: "https://behance.net/inkrealm" },
  { label: "VSCO", href: "https://vsco.co/inkrealm" },
  { label: "PARAGRAPH", href: "https://paragraph.com/@inkrealm" },
  { label: "OPENSEA", href: "https://opensea.io/inkrealm" },
  { label: "ARE.NA", href: "https://www.are.na/ink-realm/wordstar" },
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

const storyTitle = "The Great AI Hustle: ARTIFICT.IO vs. The Silicon Overlords";
const storyText = `> Six months ago, we were just six flat-broke nobodies scavenging the "Miscellaneous" aisle of a bankrupt Radio Shack. Derek—our self-appointed CEO—had been demoing a toaster he swore could mine Bitcoin if you fed it rye bread...`; // Keeping storyText short here for brevity

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXUS ROOT // SYSTEM LAUNCHER</title>
      </Head>

      <div class="container">
        <div class="triangle-video-frame">
          <div class="triangle-inner-video">
            {/* autoPlay and playsInline camelCased for proper JSX integration */}
            <video autoPlay muted loop playsInline>
              <source src="https://github.com/ghostm68/666/raw/refs/heads/main/210644747.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <Typewriter />

        <div class="subtitle">
          <span>INKREALM SYSTEM ROOT V. 7.0</span>
        </div>

        <div class="grid">
          {modules.map((m, index) => (
            <a key={index} href={m.href} class="module-link">
              <div>
                <span class="module-title">
                  {m.title}{" "}
                  <span class="status-badge" style={m.badgeStyle}>
                    {m.badge}
                  </span>
                </span>
                <span class="module-meta">{m.meta}</span>
              </div>
            </a>
          ))}
        </div>

        <div class="manifest-section">
          <div class="manifest-header">Primary Output // Manifest</div>

          <div class="manifest-row">
            <span class="manifest-label">IDENTITY:</span>
            <span class="manifest-data">INKREALM (&quot;Inky&quot;) // Writer // Musician // Visual Artist</span>
          </div>

          <div class="manifest-row">
            <span class="manifest-label">TEXT_FILES:</span>
            <span class="manifest-data">
              {textFiles.map((f, i) => (
                <span key={i}>
                  <a href={f.href}>{f.label}</a>
                  {i < textFiles.length - 1 ? " " : ""}
                </span>
              ))}
            </span>
          </div>

          <div class="manifest-row">
            <span class="manifest-label">AUDIO_SIG:</span>
            <span class="manifest-data">&quot;Two Skinny Girls&quot; (Available on all streaming frequencies)</span>
          </div>

          <div class="manifest-row">
            <span class="manifest-label">CINEMA_DB:</span>
            <span class="manifest-data">
              {cinemaFiles.map((f, i) => (
                <span key={i}>
                  <a href={f.href}>{f.label}</a>
                  {i < cinemaFiles.length - 1 ? " " : ""}
                </span>
              ))}
            </span>
          </div>

          <div class="manifest-row">
            <span class="manifest-label">VISUALS:</span>
            <span class="manifest-data">
              {visualLinks.map((v, i) => (
                <span key={i}>
                  <a href={v.href} target="_blank" rel="noopener noreferrer">{v.label}</a>
                  {i < visualLinks.length - 1 ? " " : ""}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div class="directory-section">
          <div class="directory-header">Network Uplinks // External Protocols</div>
          <div class="directory-grid">
            {uplinks.map((u, i) => (
              <a key={i} href={u.href} class="dir-link" target="_blank" rel="noopener noreferrer">
                {u.label}
              </a>
            ))}
          </div>
        </div>

        <div class="system-footer">
          <span>SYS.ADMIN: GHOST</span>
          <span>
            STATUS: ONLINE: STORY{" "}
            <details class="learning-corner">
              <summary>REDDIT: censored #001</summary>
              <div class="story-content">
                {/* Converted style strings to JSX.CSSProperties objects */}
                <p style={{ borderBottom: "1px solid #333", marginBottom: "15px", paddingBottom: "5px", color: "#fff", fontSize: "0.9rem" }}>
                  {storyTitle}
                </p>
                <p style={{ fontSize: "0.85rem" }}>{storyText}</p>
                <p style={{ textAlign: "right", fontSize: "0.7rem", color: "#fff", marginTop: "20px" }}>
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
