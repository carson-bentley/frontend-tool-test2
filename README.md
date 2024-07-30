# Frontend Tool
## Local setup
- Clone repo, then `npm i` and `npx quartz create`
- To generate website, add markdown pages to content folder.
- run `npx quartz build --serve`
- Local server runs on `http://localhost:8080`

## Comments
- Giscus used for comments. 
- These comments are stored in the GitHub Discussions tab, and uses GitHub Discussions API
- To configure on a locally hosted site, check `giscus.app`
> Note: When changing Giscus config settings, change in both Comments Component and comments script
