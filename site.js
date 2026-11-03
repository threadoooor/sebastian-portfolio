// Views are a snapshot from X on 2026-11-02.
// Concurrence's launch post is @khookhar. The shivanipod link is the Fo launch.
const VIEW_LINE = 50000;

const launches = [
  {
    name: "Concurrence",
    line: "AI health for patients and hospitals",
    note: "This post reached over 5M views utilizing the founder's personal story",
    posts: [
      { handle: "khookhar", views: 1577426, url: "https://x.com/khookhar/status/2115137228846567684", role: "launch" },
      { handle: "khookhar", views: 5682019, url: "https://x.com/khookhar/status/2113689693158101312", role: "story", tag: "Founder story" },
      { handle: "KobeissiLetter", views: 247339, url: "https://x.com/KobeissiLetter/status/2115143074561040803", role: "amp" },
      { handle: "alitekintr", views: 165532, url: "https://x.com/alitekintr/status/2115470767550804356", role: "amp" },
      { handle: "WallStreetMav", views: 46627, url: "https://x.com/WallStreetMav/status/2115160053023949240", role: "amp" },
      { handle: "unusual_whales", views: 170108, url: "https://x.com/unusual_whales/status/2115172040550539518", role: "amp" },
      { handle: "aresotik", views: 37701, url: "https://x.com/aresotik/status/2115141341969871017", role: "amp" },
      { handle: "kimmonismus", views: 25539, url: "https://x.com/kimmonismus/status/2115154111930982868", role: "amp" },
      { handle: "Zygomatic03", views: 121044, url: "https://x.com/Zygomatic03/status/2115387347433144792", role: "amp" }
    ]
  },
  {
    name: "Superblocks",
    line: "Enterprise app builder connected to AWS",
    note: "Replacing SaaS was the strongest narrative for the team",
    posts: [
      { handle: "bradmenezes", views: 19485883, url: "https://x.com/bradmenezes/status/2084328970649026710", role: "launch" },
      { handle: "unusual_whales", views: 176235, url: "https://x.com/unusual_whales/status/2084381667645690007", role: "amp" },
      { handle: "LeadingReport", views: 172681, url: "https://x.com/LeadingReport/status/2084381951192863114", role: "amp" },
      { handle: "litcapital", views: 101320, url: "https://x.com/litcapital/status/2084355989856293178", role: "amp" },
      { handle: "WhaleInsider", views: 41485, url: "https://x.com/WhaleInsider/status/2084346809133027380", role: "amp" },
      { handle: "WallStreetMav", views: 55045, url: "https://x.com/WallStreetMav/status/2084356745221026088", role: "amp" },
      { handle: "wallstreetbets", views: 79007, url: "https://x.com/wallstreetbets/status/2084336391756927199", role: "amp" },
      { handle: "alitekintr", views: 144242, url: "https://x.com/alitekintr/status/2084364710393024836", role: "amp" },
      { handle: "alifarhat79", views: 56537, url: "https://x.com/alifarhat79/status/2084369055369044240", role: "amp" },
      { handle: "AWSstartups", views: 13995930, url: "https://x.com/AWSstartups/status/2084345219718201704", role: "amp" },
      { handle: "greg16676935420", views: 79057, url: "https://x.com/greg16676935420/status/2084347057524117758", role: "amp" }
    ]
  },
  {
    name: "Kos",
    line: "Financial ERP for large-scale construction",
    note: "Kos has contracts with a few defense companies. China vs US AI race narratives carried this launch",
    posts: [
      { handle: "tanujt", views: 927126, url: "https://x.com/tanujt/status/2102087429549167058", role: "launch" },
      { handle: "WhaleInsider", views: 45090, url: "https://x.com/WhaleInsider/status/2102116504674226670", role: "amp" },
      { handle: "joeroganhq", views: 72594, url: "https://x.com/joeroganhq/status/2102099578216730746", role: "amp" },
      { handle: "Scobleizer", views: 19139, url: "https://x.com/Scobleizer/status/2102101796957069637", role: "amp" },
      { handle: "litcapital", views: 54918, url: "https://x.com/litcapital/status/2102108918679765413", role: "amp" },
      { handle: "alifarhat79", views: 37548, url: "https://x.com/alifarhat79/status/2102103903143899385", role: "amp" }
    ]
  },
  {
    name: "Melius",
    line: "AI image and video orchestration for creatives",
    note: "I wrote a quote tweet for Jake Paul",
    posts: [
      { handle: "n0w00j", views: 2771325, url: "https://x.com/n0w00j/status/2075594907285139867", role: "launch" },
      { handle: "jakepaul", views: 1204199, url: "https://x.com/jakepaul/status/2075757912903881140", role: "story", tag: "Quote tweet" },
      { handle: "greg16676935420", views: 64712, url: "https://x.com/greg16676935420/status/2075597090470932599", role: "amp" },
      { handle: "unusual_whales", views: 200195, url: "https://x.com/unusual_whales/status/2075696838536204539", role: "amp" },
      { handle: "TheInsiderPaper", views: 18855, url: "https://x.com/TheInsiderPaper/status/2075618954257772969", role: "amp" },
      { handle: "azed_ai", views: 16137, url: "https://x.com/azed_ai/status/2075633999117250720", role: "amp" },
      { handle: "EXM7777", views: 20635, url: "https://x.com/EXM7777/status/2075618628058362144", role: "amp" },
      { handle: "jameygannon", views: 44384, url: "https://x.com/jameygannon/status/2075600672930894282", role: "amp" }
    ]
  },
  {
    name: "Koji",
    line: "AI tutor by Brilliant",
    note: "Activating Jason in Brilliant's network made a big difference",
    posts: [
      { handle: "suekhim", views: 4921099, url: "https://x.com/suekhim/status/2060378988606878147", role: "launch" },
      { handle: "Kawsar_Ai", views: 23675, url: "https://x.com/Kawsar_Ai/status/2060388016934527027", role: "amp" },
      { handle: "Jason", views: 512251, url: "https://x.com/Jason/status/2060405197965512989", role: "amp" },
      { handle: "cgtwts", views: 2697, url: "https://x.com/cgtwts/status/2060415568113779147", role: "amp" },
      { handle: "suekhim", views: 53088, url: "https://x.com/suekhim/status/2060817708631912562", role: "amp" }
    ]
  }
];

// Rhythm product posts from Sep 2025 through Feb 2026. Snapshot from X on 2026-11-02.
const rhythmPosts = [
  { handle: "TradeInRhythm", views: 11817, url: "https://x.com/TradeInRhythm/status/1962916853963010100", tag: "Welcome" },
  { handle: "TradeInRhythm", views: 8512, url: "https://x.com/TradeInRhythm/status/1989725328642580796", tag: "Card backgrounds" },
  { handle: "TradeInRhythm", views: 8275, url: "https://x.com/TradeInRhythm/status/1971273815935287751", tag: "Yield" },
  { handle: "TradeInRhythm", views: 2804, url: "https://x.com/TradeInRhythm/status/1991537269443031077", tag: "Claimbacks" }
];

const tweets = [
  "https://x.com/threadoor/status/2116238392723919201",
  "https://x.com/threadoor/status/2093576726567674362",
  "https://x.com/threadoor/status/2088379269445464157",
  "https://x.com/threadoor/status/2100764157146492951",
  {
    url: "https://x.com/threadoor/status/1541599277360844802",
    note: "Made this on my mom's phone. It spread across meme pages, including @fuckjerry on Instagram."
  }
];

function formatViews(n) {
  return n.toLocaleString("en-US");
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function countUp(el, target) {
  if (reducedMotion()) {
    el.textContent = formatViews(target);
    return;
  }
  const start = performance.now();
  const duration = 900;
  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = formatViews(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function tweetCard(post, featured) {
  const card = document.createElement("article");
  card.className = "frame" + (featured ? " frame-hot" : "");
  const meta = document.createElement("div");
  meta.className = "frame-meta";
  const who = document.createElement("span");
  who.textContent = "@" + post.handle;
  meta.appendChild(who);
  if (post.tag) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = post.tag;
    meta.appendChild(tag);
  }
  const count = document.createElement("strong");
  count.textContent = formatViews(post.views);
  const unit = document.createElement("span");
  unit.textContent = "views";
  meta.appendChild(count);
  meta.appendChild(unit);
  card.appendChild(meta);
  card.appendChild(tweetSlot(post.url, "@" + post.handle));
  return card;
}

function tweetId(url) {
  var match = String(url).match(/status\/(\d+)/);
  return match ? match[1] : "";
}

function tweetSlot(url, label) {
  var slot = document.createElement("div");
  slot.className = "tweet-slot";
  slot.dataset.url = url;
  var fallback = document.createElement("a");
  fallback.className = "tweet-fallback";
  fallback.href = url;
  fallback.target = "_blank";
  fallback.rel = "noreferrer";
  fallback.textContent = label ? "Open " + label + " on X" : "Open this post on X";
  slot.appendChild(fallback);
  return slot;
}

var embedQueue = [];
var embedActive = 0;
var EMBED_AT_ONCE = 3;

function mountEmbed(slot) {
  if (slot.dataset.ready) return;
  var id = tweetId(slot.dataset.url);
  if (!id) return;
  slot.dataset.ready = "1";
  var embedId = "tw-" + id;
  var iframe = document.createElement("iframe");
  iframe.className = "tweet-frame";
  iframe.id = embedId;
  iframe.title = "Post on X";
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("loading", "lazy");
  iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture; fullscreen");
  iframe.addEventListener("load", function () {
    embedActive = Math.max(0, embedActive - 1);
    pumpEmbeds();
  });
  iframe.src = "https://platform.twitter.com/embed/Tweet.html?id=" + id
    + "&theme=dark&dnt=true&hideThread=true&lang=en&embedId=" + encodeURIComponent(embedId);
  slot.appendChild(iframe);
}

function pumpEmbeds() {
  while (embedActive < EMBED_AT_ONCE && embedQueue.length) {
    embedActive += 1;
    mountEmbed(embedQueue.shift());
  }
}

function queueEmbed(slot) {
  if (slot.dataset.queued) return;
  slot.dataset.queued = "1";
  embedQueue.push(slot);
  pumpEmbeds();
}

function watchEmbeds() {
  var slots = document.querySelectorAll(".tweet-slot");
  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(slots, queueEmbed);
    return;
  }
  var watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      watcher.unobserve(entry.target);
      queueEmbed(entry.target);
    });
  }, { rootMargin: "360px 0px" });
  Array.prototype.forEach.call(slots, function (slot) { watcher.observe(slot); });
}

window.addEventListener("message", function (event) {
  if (event.origin !== "https://platform.twitter.com" && event.origin !== "https://platform.x.com") return;
  var data = event.data;
  if (typeof data === "string") {
    try { data = JSON.parse(data); } catch (err) { return; }
  }
  var msg = data && data["twttr.embed"];
  if (!msg || msg.method !== "twttr.private.resize") return;
  var params = msg.params && msg.params[0];
  if (!params || !params.height) return;
  var frames = document.querySelectorAll(".tweet-frame");
  for (var i = 0; i < frames.length; i++) {
    if (frames[i].contentWindow !== event.source) continue;
    var h = Math.ceil(params.height);
    frames[i].style.height = h + "px";
    frames[i].parentNode.style.height = Math.max(160, h - 32) + "px";
    frames[i].parentNode.classList.add("is-ready");
    break;
  }
});

function sectionLabel(text) {
  const p = document.createElement("p");
  p.className = "band-label";
  p.textContent = text;
  return p;
}

const arrowPaths = [
  ["M32 6C28 22 42 30 30 48C22 62 40 70 32 88", "M16 72C24 86 32 94 32 88C32 94 42 86 50 70"],
  ["M34 8C46 20 18 28 28 44C40 62 22 74 33 90", "M18 74C26 88 33 96 33 90C33 96 44 88 52 72"],
  ["M28 8C14 20 48 18 40 32C34 44 20 54 34 88", "M18 72C26 86 34 94 34 88C34 94 46 84 52 70"],
  ["M30 8C26 24 38 26 34 42C28 58 40 66 31 88", "M15 70C24 84 31 94 31 88C31 94 40 84 49 68"]
];

const scribbleArrows = [
  ["M18 8C40 10 28 28 36 46C42 62 22 58 30 78", "M16 64C24 76 30 84 30 78C30 84 40 76 48 62"],
  ["M40 6C22 16 48 30 26 48C16 60 34 66 28 80", "M12 66C22 78 28 86 28 80C28 86 38 78 46 64"],
  ["M24 10C46 8 18 26 40 44C52 56 20 64 32 82", "M16 68C26 80 32 88 32 82C32 88 42 78 50 66"]
];

function scribble(text, i) {
  const el = document.createElement("aside");
  el.className = "doodle scribble";
  if (i % 2) el.classList.add("scribble-right");
  const line = document.createElement("p");
  line.className = "scribble-text";
  line.textContent = text;
  const pair = scribbleArrows[i % scribbleArrows.length];
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 64 92");
  svg.setAttribute("aria-hidden", "true");
  pair.forEach(function (d) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("pathLength", "1");
    path.setAttribute("d", d);
    svg.appendChild(path);
  });
  el.appendChild(line);
  el.appendChild(svg);
  return el;
}

function placeNote(parent, card, text, i) {
  if (!text) {
    parent.appendChild(card);
    return;
  }
  const noted = document.createElement("div");
  noted.className = "noted";
  noted.appendChild(scribble(text, i));
  noted.appendChild(card);
  parent.appendChild(noted);
}

function doodleEl(i) {
  const pair = arrowPaths[i % arrowPaths.length];
  const el = document.createElement("div");
  el.className = "doodle";
  el.setAttribute("aria-hidden", "true");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 64 100");
  pair.forEach(function (d) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("pathLength", "1");
    path.setAttribute("d", d);
    svg.appendChild(path);
  });
  el.appendChild(svg);
  return el;
}

const launchRoot = document.getElementById("launches");
const indexList = document.getElementById("launch-index");
const totalEl = document.getElementById("launch-total");
let launchViews = 0;

launches.forEach(function (launch, i) {
  const launchPost = launch.posts.find(function (post) { return post.role === "launch"; });
  const story = launch.posts.filter(function (post) { return post.role === "story"; });
  const featured = launch.posts.filter(function (post) {
    return post.role === "amp" && post.views > VIEW_LINE;
  });
  const rest = launch.posts.filter(function (post) {
    return post.role === "amp" && post.views <= VIEW_LINE;
  });
  launchViews += launchPost.views;

  const item = document.createElement("a");
  item.className = "index-item";
  item.href = "#launch-" + (i + 1);
  item.style.animationDelay = (i * 80) + "ms";
  const num = document.createElement("span");
  num.textContent = pad(i + 1);
  const name = document.createElement("span");
  name.textContent = launch.name;
  const views = document.createElement("strong");
  views.textContent = formatViews(launchPost.views);
  item.appendChild(num);
  item.appendChild(name);
  item.appendChild(views);
  indexList.appendChild(item);

  if (i > 0) launchRoot.appendChild(doodleEl(i));

  const section = document.createElement("section");
  section.className = "launch";
  section.id = "launch-" + (i + 1);
  section.setAttribute("data-mark", "");
  const head = document.createElement("header");
  head.className = "launch-head";
  const kicker = document.createElement("p");
  kicker.className = "kicker";
  kicker.textContent = pad(i + 1) + "  /  Launch post";
  const title = document.createElement("h2");
  title.textContent = launch.name;
  const line = document.createElement("p");
  line.className = "line";
  line.textContent = launch.line;
  const figure = document.createElement("p");
  figure.className = "figure";
  const figureNum = document.createElement("span");
  figureNum.className = "count";
  figureNum.dataset.count = String(launchPost.views);
  figureNum.textContent = "0";
  const figureUnit = document.createElement("span");
  figureUnit.textContent = "views on the launch post";
  figure.appendChild(figureNum);
  figure.appendChild(figureUnit);
  head.appendChild(kicker);
  head.appendChild(title);
  head.appendChild(line);
  head.appendChild(figure);
  section.appendChild(head);

  const top = document.createElement("div");
  top.className = "band";
  if (story.length) {
    top.appendChild(tweetCard(launchPost, true));
    story.forEach(function (post) {
      placeNote(top, tweetCard(post, true), launch.note, i);
    });
  } else {
    placeNote(top, tweetCard(launchPost, true), launch.note, i);
  }
  if (featured.length) {
    top.appendChild(sectionLabel("Influencer posts over 50,000 views"));
    const grid = document.createElement("div");
    grid.className = "grid";
    featured.forEach(function (post) { grid.appendChild(tweetCard(post, true)); });
    top.appendChild(grid);
  }
  section.appendChild(top);

  if (rest.length) {
    const more = document.createElement("div");
    more.className = "band band-rest";
    more.appendChild(sectionLabel("Also on this launch"));
    const grid = document.createElement("div");
    grid.className = "grid";
    rest.forEach(function (post) { grid.appendChild(tweetCard(post, false)); });
    more.appendChild(grid);
    section.appendChild(more);
  }

  const note = document.createElement("p");
  note.className = "credit";
  note.textContent = "Amplification and narratives written for this launch.";
  section.appendChild(note);
  launchRoot.appendChild(section);
});

totalEl.dataset.count = String(launchViews);

document.querySelectorAll(".count, #launch-total").forEach(function (el) {
  countUp(el, Number(el.dataset.count));
});

const rhythmList = document.getElementById("rhythm-list");
placeNote(rhythmList.parentNode, rhythmList, "Working with 0 marketing budget, I used product releases to drive a community, leading to an acquisition by MoonPay", 5);
rhythmPosts.forEach(function (post, i) {
  rhythmList.appendChild(tweetCard(post, i === 0));
});

const list = document.getElementById("tweet-list");
tweets.forEach(function (item) {
  const url = typeof item === "string" ? item : item.url;
  const wrap = document.createElement("div");
  wrap.className = "tweet";
  wrap.appendChild(tweetSlot(url, "@threadoor"));
  if (item.note) {
    const note = document.createElement("p");
    note.className = "tweet-note";
    note.textContent = item.note;
    wrap.appendChild(note);
  }
  list.appendChild(wrap);
});

watchEmbeds();

const doodles = document.querySelectorAll(".doodle");
if (reducedMotion() || !("IntersectionObserver" in window)) {
  doodles.forEach(function (el) { el.classList.add("is-drawn"); });
} else {
  doodles.forEach(function (el) {
    el.querySelectorAll("path").forEach(function (path) {
      path.style.strokeDashoffset = "1";
    });
  });
  const drawer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-drawn");
      drawer.unobserve(entry.target);
    });
  }, { threshold: 0.7 });
  doodles.forEach(function (el) { drawer.observe(el); });
}

const cue = document.querySelector(".scroll-cue");
const marks = Array.prototype.slice.call(document.querySelectorAll("[data-mark]"));

function placeCue() {
  const line = window.scrollY + window.innerHeight * 0.62;
  let next = null;
  marks.forEach(function (mark) {
    if (next) return;
    const top = mark.getBoundingClientRect().top + window.scrollY;
    if (top > line) next = mark;
  });
  const atEnd = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 160;
  cue.classList.toggle("is-hidden", atEnd || !next);
  if (next) cue.setAttribute("href", "#" + next.id);
}

placeCue();
window.addEventListener("scroll", placeCue, { passive: true });
window.addEventListener("resize", placeCue);
