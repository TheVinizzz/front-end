/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		
	},
	plugins: [
		/*plugin(function({ addBase, theme }) {
			addBase({
			  'h1': { fontSize: "35px" },
			  'h2': { fontSize: "30px" },
			  'h4': { fontSize: "25px" },
			  'h5': { fontSize: "20px" },
			  'h6': { fontSize: "16px" },
			  'label': { fontSize: "12px" },
			})
		})*/
	],
	extend: {
		colors: {
			"primary-light":'#FDF7EB',
			"primary-light-hover":'#FCF3E1',
			"primary-light-active":'#F8E7C1',

			"primary-normal":'#E8B237',
			"primary-normal-hover":'#D1A032',
			"primary-normal-active":'#BA8E2C',

			"primary-dark":'#AE8629',
			"primary-dark-hover":'#8B6B21',
			"primary-dark-active":'#685019',

			"primary-darker":'#513E13',

			//----------------------------

			"secundary-light":'#F2EBF4',
			"secundary-light-hover":'#EBE0EE',
			"secundary-light-active":'#D5C0DB',

			"secundary-normal":'#79338C',
			"secundary-normal-hover":'#6D2E7E',
			"secundary-normal-active":'#612970',

			"secundary-dark":'#5B2669',
			"secundary-dark-hover":'#491F54',
			"secundary-dark-active":'#36173F',

			"secundary-darker":'#2A1231',

			//----------------------------

			"success-light":'#E6F8EB',
			"success-light-hover":'#D9F4E1',
			"success-light-active":'#B0E9C0',

			"success-normal":'#01B835',
			"success-normal-hover":'#01A630',
			"success-normal-active":'#01932A',

			"success-dark":'#018A28',
			"success-dark-hover":'#016E20',
			"success-dark-active":'#005318',

			"success-darker":'#004013',

			//----------------------------

			"warning-light":'#FDF2E6',
			"warning-light-hover":'#FCECD9',
			"warning-light-active":'#F8D7B0',

			"warning-normal":'#EA7E00',
			"warning-normal-hover":'#D37100',
			"warning-normal-active":'#BB6500',

			"warning-dark":'#B05F00',
			"warning-dark-hover":'#8C4C00',
			"warning-dark-active":'#693900',

			"warning-darker":'#522C00',		

			//----------------------------

			"danger-light":'#FFE6E6',
			"danger-light-hover":'#FFD9D9',
			"danger-light-active":'#FEB1B1',

			"danger-normal":'#FD0404',
			"danger-normal-hover":'#E40404',
			"danger-normal-active":'#CA0303',

			"danger-dark":'#BE0303',
			"danger-dark-hover":'#980202',
			"danger-dark-active":'#720202',

			"danger-darker":'#590101',		

			//----------------------------

			"black-white-light":'#E6E6E6',
			"black-white-light-hover":'#D9D9D9',
			"black-white-light-active":'#B0B0B0',

			"black-white-normal":'#000000',
			"black-white-normal-hover":'#000000',
			"black-white-normal-active":'#000000',

			"black-white-dark":'#000000',
			"black-white-dark-hover":'#000000',
			"black-white-dark-active":'#000000',

			"black-white-darker":'#000000',		

			//----------------------------

			"neutral-light":'#EAECED',
			"neutral-light-hover":'#E0E2E4',
			"neutral-light-active":'#BEC3C7',

			"neutral-normal":'#2E3E4B',
			"neutral-normal-hover":'#293844',
			"neutral-normal-active":'#25323C',

			"neutral-dark":'#232F38',
			"neutral-dark-hover":'#1C252D',
			"neutral-dark-active":'#151C22',

			"neutral-darker":'#10161A',		

		},
	},
};
