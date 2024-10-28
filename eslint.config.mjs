export default [
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				window: 'readonly',
				document: 'readonly',
				console: 'readonly'
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: true
		},
		rules: {
			'indent': ['error', 2], // Отступы в 2 пробела
			'linebreak-style': ['error', 'unix'], // Стиль переноса строки - Unix
			'quotes': ['error', 'single'], // Использование одинарных кавычек
			'semi': ['error', 'always'], // Требование точки с запятой в конце строки
			// 'no-unused-vars': ['warn'], // Предупреждать о неиспользуемых переменных
			'no-console': 'off', // Разрешить использование console
			'comma-dangle': ['error', 'always-multiline'], // Требование запятой в конце многократных строк
			'eol-last': ['error', 'always'], // Требовать пустую строку в конце файла
			'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}], // Ограничение на количество пустых строк: максимум одна
			'spaced-comment': ['error', 'always'], // Требовать пробел после комментария
			'eqeqeq': ['error', 'always'], // Требовать использование строгого сравнения (===)
			'curly': ['error', 'multi-or-nest'], // Требовать фигурные скобки для многострочных блоков или вложенных конструкций // Требовать использование фигурных скобок только для многострочных блоков // Требовать использование фигурных скобок для всех блоков
			'no-else-return': 'error', // Запретить else после return
			'consistent-return': 'error', // Требовать, чтобы все return в функции были консистентными
			'no-param-reassign': 'error', // Запретить присвоение значений параметрам функции
			'no-use-before-define': ['error', {functions: false}], // Запретить использование переменных до их объявления, за исключением функций
			'prefer-const': 'error', // Предпочитать использование const там, где возможно
			'no-var': 'error', // Запретить использование var
			'one-var': ['error', 'never'], // Разрешать объявление одной переменной за раз
			'no-eval': 'error', // Запретить использование eval()
			'no-implied-eval': 'error', // Запретить использование косвенного eval()
			'no-alert': 'warn', // Предупреждать о использовании alert, confirm и prompt
			'no-debugger': 'warn', // Предупреждать об использовании debugger
			'arrow-body-style': ['error', 'as-needed'], // Использование тела стрелочной функции только при необходимости
			'no-empty-function': 'error', // Запретить пустые функции
			'no-loop-func': 'error', // Запретить функции внутри циклов
			'brace-style': ['error', '1tbs'] // Требовать использование фигурных скобок в "однолинейном" стиле (однострочный блок)
		}
	}
];
