import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

class BaseStore extends EventEmitter {
  // boilerplate
  addChangeListener(callback: () => void) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback: () => void) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

export default BaseStore;
