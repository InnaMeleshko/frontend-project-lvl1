install: #установка пакета npm 
		npm ci

make brain-games: 
						node bin/brain-games.js

make brain-even: #запуск игры
						node bin/brain-even.js

publish:
			npm publish --dry-run

make lint:
				npx eslint .


