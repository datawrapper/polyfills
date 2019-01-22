upload:
	aws s3 cp --acl public-read --recursive polyfills/ s3://datawrapper.dwcdn.net/lib/polyfills/
