class Event {
    constructor() {
        /**
         * Holds all listeners.
         * @type {Array}
         */
        this.listeners = [];
    }

    /**
     * Add the given event listener to the listeners array.
     * @param {String} event
     * @param {Function} func
     * @returns {Number}
     */
    addListener(event, func) {
        const id = Date.now();
        this.listeners.push({event, func, id});
        return id;
    }

    /**
     * Remove all events from the events array.
     */
    removeAllListeners() {
        for (let i = this.listeners.length - 1; i >= 0; i--) {
            this.removeListener(this.listeners[i].id);
        }
    }

    /**
     * Remove the given listener from the listeners array.
     *
     * @param {Number} listener
     */
    removeListener(listener) {
        this.listeners.splice(listener, 1);
    }

    /**
     * Emit all matching listeners.
     * @param {String} event
     * @param {Object=} data
     */
    emit(event, data) {
        const events = this.listeners.filter(e => e.event === event);
        events.map(e => e.func(data));
    }
}

export default new Event();
