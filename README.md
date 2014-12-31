Stream web-site
================
## ToDo
- alpha release by Dec, 28
- decide a domain to host

## Current workflow
1. Markdown sources are located in `pages` named by convention `page-chapter`. Currently, they are parsed on-the-fly
in the browser and rendered as html. Eventually, I'd prefer to have only html
if possible, as it provides more control over layout and appearance.
2. In order to see the site, run a local server, e.g. `python -m SimpleHTTPServer
8000` and open the browser at 'localhost:8000'
