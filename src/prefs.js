'use strict';

const { Adw, Gdk, GLib, Gtk, GObject, Gio } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();
const { Prefs } = Me.imports.conveniences.settings;
const { Keys } = Me.imports.conveniences.keys;

const { addMenu } = Me.imports.preferences.menu;
const { General } = Me.imports.preferences.general;


function init() {
    ExtensionUtils.initTranslations(Me.metadata.uuid);

    // load the icon theme
    let iconPath = Me.dir.get_child("icons").get_path();
    let iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default());
    iconTheme.add_search_path(iconPath);
}

function fillPreferencesWindow(window) {
    addMenu(window);

    const preferences = new Prefs(Keys);

    window.add(new General(preferences));

    window.search_enabled = true;
}
