import { Dispatcher } from "flux";
import Action from "./types/flux.action";

const dispatcher = new Dispatcher<Action>();
export default dispatcher;
