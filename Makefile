install: #установка пакета npm 
		npm ci

make brain-games: 
						node bin/brain-games.js

brain-even: #запуск игры
						node bin/brain-even.js

brain-calc: #запуск калькулятора 
					node bin/brain-calc.js

publish:
			npm publish --dry-run

make lint:
				npx eslint .

brain-prime:
				node bin/brain-prime.js
brain-gcd:
				node bin/brain-gcd.js

brain-progression:
				node bin/brain-progression.js


