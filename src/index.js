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
            this.listeners.splice(i, 1);
        }

        this.listeners.map(listener => this.removeListener(listener.id));
    }

    /**
     * Remove the given listener from the listeners array.
     *
     * @param {Number} listener
     */
    removeListener(listener) {
        for (let i = this.listeners.length - 1; i >= 0; i--) {
            if (this.listeners[i].id === listener) {
                this.listeners.splice(i, 1);
            }
        }
    }

    /**
     * Emit all matching listeners.
     * @param {String} event
     * @param {Object=} data
     */
    emit(event, data) {
        this.listeners.map(listener => {
            if (listener.event === event) {
                listener.func(data);
            }
        });
    }
}

export default new Event();
