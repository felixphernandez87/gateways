import { validateIP } from './validateIP';

describe('validateIP.js', () => {
	test('properly ip entry', () => {
		expect(validateIP('192.168.1.1')).toBe(true);
	});

	test('entry numbers instead of string', () => {
		expect(validateIP(123123)).toBe(false);
	});

	test('entry wrong ip address', () => {
		expect(validateIP('260.888.1.1')).toBe(false);
	});
});
