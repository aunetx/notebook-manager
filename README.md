# GNOME Shell Extension - Notebook Manager

[<img src="https://github.com/aunetx/files_utils/raw/master/get_it_on_gnome_extensions.png" height="100" align="right">]()

[![License](https://img.shields.io/github/license/aunetx/notebook-manager)](https://github.com/aunetx/notebook-manager/blob/master/LICENSE)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/aunetx/notebook-manager)](https://github.com/aunetx/notebook-manager/releases/latest)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/aunetx)](https://github.com/sponsors/aunetx)

A GNOME Shell extension that permits you to manage your Jupyter notebooks directly from your desktop.

## Participate

If you with to help me with this extension, there are quite a lot you can do!

### Development

To install the extension from source:

```sh
git clone https://github.com/aunetx/notebook-manager
cd notebook-manager
make install
```

You will then need to reload GNOME shell, for example by login out and in again, or under Xorg, `alt+f2` and type `r`.

To debug the extension, you can use Looking Glass (`alt+f2`, type `lg`); I stored the extension object in `global.notebook-manager`.

To see the extension logs, you can use:

```sh
# for debug logs (when Debug is activated in preferences)
sudo journalctl /usr/bin/gnome-shell | grep Notebook Manager

# for crash logs in GNOME shell
sudo journalctl /usr/bin/gnome-shell | grep notebook-manager

# for crash logs in the extension's preferences
sudo journalctl /usr/bin/gjs | grep notebook-manager
```

Just don't hesitate to open issues and pull requests, and sorry if I take some time to answer!

### Donations

If you want to sponsor me, well thank you very much!

You can use either [GitHub Sponsors](https://github.com/sponsors/aunetx) or [Ko-fi](https://ko-fi.com/aunetx); and don't hesitate to ask for more specialized support if you need to!

## Versions support

The current extension supports these GNOME Shell versions:

| Branch | Version |
| :----: | :-----: |
| `main` |   43    |
|        |   42    |

## License

This program is distributed under the terms of the GNU General Public License, version 2 or later.
