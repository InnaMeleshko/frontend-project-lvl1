install:
	npm ci

make brain-games:
	node bin/brain-games.js

make brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .


