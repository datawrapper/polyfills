# @datawrapper/polyfills [![CircleCI](https://circleci.com/gh/datawrapper/polyfills.svg?style=svg)](https://circleci.com/gh/datawrapper/polyfills)

> Cached per-useragent polyfills from polyfills.io

## Publishing & Deployment

All polyfills will get deployed to AWS S3 when pushing a version tag to Github and increasing the version number in `package.json`. This is done with the following commands:

```sh
# update version and create git tag
> npm version {major|minor|patch}
#push new version with tag to Github
> git push --follow-tags
```

These 2 commands will tell CircleCI to publish the new version to npm and deploy the polyfills to the Datawrapper CDN.

---

*There is no need to set up the `aws` CLI and deploy manually. It is still possible if needed! To manually deploy polyfills run `make upload`. Make sure the `aws` CLI is properly configured.*
