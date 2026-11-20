![Vortisil](https://raw.githubusercontent.com/khitezza/vortisil/trunk/images/banner.png)

## Features

- Light / Dark theme
- All articles search
- Full-text RSS feed
- Responsive design
- Rendering mathematical formulas with MathJax.js
- Optional Google Analytics (GA4, production only)

## Quick Start

Before start, make sure [Git](https://git-scm.com/) and [Hugo](https://gohugo.io/) are installed.



Create and enter `Website` folder and run the `git init` command:

```bash
git init
```

### Add and Update Theme

Add theme by git submodule:

```bash
git submodule add https://github.com/khitezza/vortisil themes/vortisil
```

And updated Theme:

```bash
git submodule update --remote --merge
```

### Content Management

Add a new common article:

```bash
hugo new content posts/20xx-xx-xx-Titile.md
```

Or easily manage images:

```bash
hugo new content posts/20xx-xx-xx-Titile/index.md
mv ~/images/cover.webp content/posts/20xx-xx-xx-Titile/cover.webp
```

Hugo article head archetype configurations:

```
+++
title = 'Example Post Title'    <!-- Automatic generation according to file name.-->
date = 2025-02-09T12:37:00+08:00    <!-- Auto get the date this article was created. -->
lastmodified = ""    <!-- Please fill in the date yourself when editing this article. -->
author = "Single Name or You, Name1, Name2"
description = ""
license = "CC BY-NC-SA 4.0"
license_url = "https://creativecommons.org/licenses/by-nc-sa/4.0/"
cover = ""    <!-- Cover image url. -->
math = false    <!-- Set true if you need to use mathematical formulas in your posts. -->
draft = false
+++
```

## Custom

Site config `hugo.toml`:

```toml
baseURL = "https://example.com"
languageCode = "en" # <html lang> ==> data/l10n.toml
title = "Example Site" # Website Title
copyright = "Name" # Footer copyright.
theme = "vortisil"
pagination.pagerSize = 9
hasCJKLanguage = true
enableEmoji = true
disableKinds = ["taxonomy","term"] # DO NOT MODIFY

[params]
    author = "Name" # Author name of the article.
    logoImg = true # If false, the site title will display.
    logoInvert = true # If the image logo needs to be turned on Image Colour Inversion.
    math = true

[params.meta]
    description = "A fast, minimal and restrained Hugo theme." # Site description


[[menus.main]]
    identifier = "home"
    url = "/"
    weight = 1

[[menus.main]]
    identifier = "about"
    url = "/about"
    weight = 2

[[menus.main]]
    identifier = "archives"
    url = "/posts"
    weight = 3

# Custom menu items can set `name` directly without modifying data/l10n.toml:
# [[menus.main]]
#     identifier = "friendlink"
#     name = "Friendlinks"
#     url = "/friendlink"
#     weight = 4

[module]
    [module.hugoVersion]
        extended = true
        min = "0.142.0"

[markup]
    [markup.goldmark]
        [markup.goldmark.parser]
            wrapStandAloneImageWithinParagraph = false
            [markup.goldmark.parser.attribute]
                block = true
    [markup.highlight]
        style = "evergarden"
        tabWidth = 4
        codeFences = true
        guessSyntax = true

[outputs]
    home = ["HTML", "RSS", "JSON"]

[services]
    # [services.rss]
    #     limit = 20
    [services.googleAnalytics]
        # Set your GA4 Measurement ID (e.g. "G-XXXXXXXXXX") to enable in production builds;
        # leave empty to disable. Also respects Hugo's [privacy.googleAnalytics] settings.
        ID = ""
```

The Position of the logo,hero and favicon:

```bash
assets/assets/imgs/logo.png
assets/assets/imgs/hero.webp

static/assets/imgs/favicon.ico
static/assets/imgs/favicon-16x16.png
static/assets/imgs/favicon-32x32.png
static/assets/imgs/apple-touch-icon.png
```

Create `assets/assets/scss/custom.scss` and change the primary color:

```scss
[data-theme="light"] {
    --color-primary: #297d7a !important;
}

[data-theme="dark"] {
    --color-primary: #68bdae !important;
}
```

After much thought, I dropped the i18n system and added `data/l10n.toml`.

You can use a git patch or pull request to help complete the translation of l10n.toml.

```toml
# Language: English (en, en_US)
#
home = 'Home'
about = 'About'
archives = 'Archives'
search = 'Search'
rss = 'RSS'
blogs = 'Blogs'
latest_posts = 'Latest Posts'
by = 'by'
posted_on = 'Posted on'
last_modified = 'Last modified'
pagenotfound_title = 'Page Not Found'
pagenotfound_desc = 'The page you requested cannot be found'
return_home = 'Return to the home page'
all_rights_reserved = 'All rights reserved'
powered_by = 'Powered by <a href="https://gohugo.io">Hugo</a> & <a href="https://github.com/khitezza/vortisil/">Vortisil</a>'
license = 'This article is licensed under <a href="%s" target="_blank" rel="license noopener noreferrer">__license__</a>'
```

## Copyright

Licensed under [The GNU General Public License v3.0](LICENSE)