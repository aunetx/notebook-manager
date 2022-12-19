'use strict';

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const { Type } = Me.imports.conveniences.settings;

// This lists the preferences keys
var Keys = [
    {
        component: "general", schemas: [
            { type: Type.B, name: "debug" },
        ]
    }
];