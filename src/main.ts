import crayon from "crayon";
import transition from "crayon-transition";
import animate from "crayon-animate";
import svelte from "crayon-svelte";
import Background from "./pages/Background.svelte";
import BeforeAfter from "./pages/BeforeAfter.svelte";
import CustomFocus from "./pages/CustomFocus.svelte";
import FocusWithin from "./pages/FocusWithin.svelte";
import FlipCard from "./pages/FlipCard.svelte";
import SnakeHover from "./pages/SnakeHover.svelte";

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
nav.path("/flipcard", (req, res) => req.mount(FlipCard, { nav }));
nav.path("/snakehover", (req, res) => req.mount(SnakeHover, { nav }));
nav.load();
