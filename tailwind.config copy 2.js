/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
	plugins: [
	],
	theme: {
	  extend: {
		container: {
		  center: true,
		},
		colors: {
		  "blue-light":'#5E91AD',
		  blue:'#0262BA',
		  "neutro-50":'#F5F5F5',
		  "neutro-100":'#D9D9D9',
		  "neutro-200":'#CBCBCB',
		  "neutro-400":'#B1B1B1',
		  "neutro-600":'#808184',
		  "neutro-500":'#737373',
		  "neutro-700":'#484848',
  
		  "primary-50":'#FFFBE7',
		  "primary-100":'#FFF5B9',
		  "primary-200":'#FFED85',
		  "primary-500":'#F4D210',
		  "primary-600":'#e9c600',
  
		  "secondary":'#231F20',
  
		  "success-500":'#06864B',
		  "success-200":'#5EAD82',
		  "success-50":'#8ECCAF',
  
		  "danger-500":'#FF3232',
		  "danger-200":'#FF5151',
		  "danger-50":'#FF7878',
  
		  "dashboard-blue":"#2AA5EB",
		  "dashboard-purple":"#9747FF",
		  "dashboard-orange":"#FB8904",
  
		},
		//boxShadow: {},
		//backgroundImage: {}
		//gridColumn: {}
	  },
	}
  }
  