/**
 * Landing on a shared link (or a refresh, or a back/forward navigation).
 *
 * The browser cannot do this alone in this app: the markup is drawn by React
 * after the bundle runs, so by the time the browser tries its anchor jump the
 * section does not exist yet and it never retries. Measured on a cold load of
 * `/#contact`: `scrollY` stayed at 0, and `/#skills` only moved 11s later.
 *
 * So the retry happens here, once the sections are mounted. There is no
 * animation and no arithmetic: `scrollIntoView({ behavior: "instant" })`
 * makes the browser do the jump, which means it honours the `scroll-margin-top`
 * on the target exactly like a native anchor click would, while a shared link
 * still lands immediately instead of riding there.
 */
const scrollToHashOnLoad = () => {
  // Untouched when there is nothing to do (the common case), and no need to
  // tell the browser what it is already doing.
  const { hash } = window.location;
  if (!hash || hash === "#") return;

  // `getElementById` and not `querySelector`: the latter parses its argument as
  // a CSS selector and throws on hashes that are not valid ones (`#1`, `#a b`),
  // which would break the page on load.
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;

  // `behavior: "instant"` and not a plain `scrollIntoView()`: the page sets
  // `scroll-behavior: smooth`, and a shared link should land immediately
  // instead of riding there. "instant" is honoured here because it is passed
  // per call and this call is the only scroll happening.
  target.scrollIntoView({ behavior: "instant" });
};

export default scrollToHashOnLoad;
