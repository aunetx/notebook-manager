'use strict';

const { St, Shell, Gio, Gtk, Meta, Clutter } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();

const { Connections } = Me.imports.conveniences.connections;
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;



/// The main extension class, created when the GNOME Shell is loaded.
class Extension {
    constructor() { }

    /// Enables the extension
    enable() {
        // add the extension to global to make it accessible to other extensions
        // create it first as it is very useful when debugging crashes

        global.notebook_manager = this;

        // create a Prefs instance, to manage extension's preferences
        // it needs to be loaded before logging, as it checks for DEBUG

        this._prefs = new Prefs(Keys);

        this._log("enabling extension...");

        // create main extension Connections instance

        this._connection = new Connections;

        // enable every component
        // if the shell is still starting up, wait for it to be entirely loaded;
        // this should prevent bugs like #136 and #137
        if (Main.layoutManager._startingUp) {
            this._connection.connect(
                Main.layoutManager,
                'startup-complete',
                _ => this._start()
            );
        } else {
            this._enable_components();
        }
    }

    /// Starts the extension.
    start() {

    }

    /// Disables the extension.
    disable() {
        this._log("disabling extension...");

        // make sure no settings change can re-enable them

        this._prefs.disconnect_all_settings();

        // force disconnecting every signal, even if component crashed

        this._connection.disconnect_all();


        // remove the extension from GJS's global

        delete global.notebook_manager;

        this._log("extension disabled.");

        this._prefs = null;
    }

    /// Restart the extension.
    _restart() {
        this._log("restarting...");

        this.disable();
        this.enable();

        this._log("restarted.");
    }

    _log(str) {
        if (this._prefs.DEBUG)
            log(`[Notebook Manager > extension]    ${str}`);
    }
}


// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}