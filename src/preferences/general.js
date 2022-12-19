'use strict';

const { Adw, GLib, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();


var General = GObject.registerClass({
    GTypeName: 'General',
    Template: `file://${GLib.build_filenamev([Me.path, 'ui', 'general.ui'])}`,
    InternalChildren: [
        'debug',
        'reset'
    ],
}, class General extends Adw.PreferencesPage {
    constructor(preferences) {
        super({});

        this.preferences = preferences;

        this.preferences.settings.bind(
            'debug', this._debug, 'state',
            Gio.SettingsBindFlags.DEFAULT
        );

        this._reset.connect('clicked', _ => this.preferences.reset());
    }
});