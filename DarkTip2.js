/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 *
 * Copyright (C) 2012  Martin Gelder
 * (darkspotinthecorner {at} gmail {dot} com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/gpl.html.
 * ************************************************************************** */

(function(window, document, undefined) {

	window.DarkTip = {};

	window.DarkTip.log = function(stuff) {

		console.log(stuff);

	};

	window.DarkTip.modules = {};

	window.DarkTip.modules.base = {
		'options': {
			'triggers': {
				'implicit': true,
				'explicit': true
			},
			'extendedMode': {
				'active'      : true,
				'keyCode'     : 16,
				'keyCodeLabel': 'SHIFT'
			},
			'layout': {
				'position': {
					'my'    : 'bottom middle',
					'at'    : 'top middle',
					'target': false
				},
				'width': {
					'core': 300,
					'404' : 250
				}
			}
		}
	};

	window.DarkTip.linkDeep = function(obj, proto) {
		for(var key in obj) {
			if(obj.hasOwnProperty(key)) {
				if((typeof obj[key] === 'object') && (typeof proto[key] === 'object')) {
					obj[key]['__proto__'] = proto[key];
					window.DarkTip.linkDeep(obj[key], proto[key]);
				}
			}
		}
	};

	window.DarkTip.registerModule = function(proto, name, data) {

		data = (typeof data === 'object') ? data : {};

		// Check if the module name is a string, if not, cancel
		if(typeof name !== 'string') {

			window.DarkTip.log('Module name is no string!');

			return undefined;

		}

		// Check if the module name is still available, if not, cancel
		if(typeof window.DarkTip.modules[name] !== 'undefined') {

			window.DarkTip.log('Module name "' + name + '" is already in use!');

			return undefined;

		}

		// Check if the prototype module is available , if not, fall back to the base module prototype
		if(typeof window.DarkTip.modules[proto] !== 'object') {

			proto = window.DarkTip.modules['base'];

		}

		window.DarkTip.modules[name] = Object.create(proto);

		for(var key in data) {
			if(data.hasOwnProperty(key)) {
				window.DarkTip.modules[name][key] = data[key];
			}
		}

		window.DarkTip.linkDeep(window.DarkTip.modules[name], Object.getPrototypeOf(window.DarkTip.modules[name]));

		return window.DarkTip.modules[name];
	};

})(this, document);