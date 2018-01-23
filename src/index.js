class Event {
    constructor() {
        /**
         * Holds all of the events.
         * @type {Array}
         */
        this.events = [];
    }

    /**
     * Add the given event listener to the events array.
     * @param {String} event
     * @param {Function} func
     * @returns {Number}
     */
    addListener(event, func) {
        this.events.push({event, func});
        return this.events.length - 1;
    }

    /**
     * Remove all events from the events array.
     */
    removeAllEvents() {
        for (let i = this.events.length - 1; i >= 0; i--) {
            this.removeListener(i);
        }
    }

    /**
     * Remove the given listener from the events array.
     *
     * @param {Number} listener
     */
    removeListener(listener) {
        this.events.splice(listener, 1);
    }

    /**
     * Emit all matching events
     * @param {String} event
     * @param {Object=} data
     */
    emit(event, data) {
        const events = this.events.filter(e => e.event === event);
        events.map(e => e.func(data));
    }
}

export default new Event();
