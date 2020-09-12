import crayon from "crayon";
import transition from "crayon-transition";
import animate from "crayon-animate";
import svelte from "crayon-svelte";
import Background from "./pages/Background.svelte";
import BeforeAfter from "./pages/BeforeAfter.svelte";
import CustomFocus from "./pages/CustomFocus.svelte";
import FocusWithin from "./pages/FocusWithin.svelte";

const target = document.getElementById("app");
const nav = crayon.create();

nav.use(svelte.router(target));
nav.use(transition.loader());
nav.use(
  animate.defaults({
    name: transition.fade,
    duration: 350,
  })
);

nav.path("/", (req, res) => req.redirect("/background"));

nav.path("/background", (req, res) => req.mount(Background, { nav }));

nav.path("/beforeafter", (req, res) => req.mount(BeforeAfter, { nav }));

nav.path("/customfocus", (req, res) => req.mount(CustomFocus, { nav }));

nav.path("/focuswithin", (req, res) => req.mount(FocusWithin, { nav }));

nav.load();
