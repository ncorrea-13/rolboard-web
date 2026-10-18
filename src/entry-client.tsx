import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import type { PageId } from "./site";
import "./styles/index.css";

const root = document.getElementById("root")!;
const page = (document.body.dataset.page ?? "index") as PageId;
hydrateRoot(root, <App page={page} />);
