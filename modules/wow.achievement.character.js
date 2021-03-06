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

DarkTip.registerModule('wow.achievement.character', {

	'triggers': {
		'explicit': {
			'match' : /wow\.achievement\.character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|pt|it|ko|zh)\)/i,
			'params': {
				'1': 'region',
				'2': 'realm',
				'3': 'character',
				'4': 'achievementid',
				'5': 'lang'
			}
		},
		'implicit': {
			'match' : /(?:https?:\/\/)?(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|cn\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|pt|it|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/achievement#[0-9]+:a([0-9]+)/i,
			'params': {
				'1': 'host',
				'2': 'lang',
				'3': 'realm',
				'4': 'character',
				'5': 'achievementid'
			}
		}
	},

	'queries': {
		'character': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=achievements&locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 1)
		},
		'achievement': {
			'required' : true,
			'condition': true,
			'call'     : '//<%= this["host"] %>/api/wow/achievement/<%= this["achievementid"] %>?locale=<%= this["locale"] %>',
			'caching'  : (60 * 60 * 24 * 90)
		}
	},

	'prepareData': function(state) {

		if(Object.keys(state['data']).length === 0)
		{
			return false;
		}

		return state['data'];
	},

	'getParams': {
		'explicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.achievement', 'triggers.explicit.params')));
			params['host']   = DarkTip.map('wow', 'maps.region.host', params['region']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		},
		'implicit': function(result) {
			var params       = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('wow.achievement', 'triggers.implicit.params')));
			params['region'] = DarkTip.map('wow', 'maps.host.region', params['host']);
			params['locale'] = DarkTip.map('wow', 'maps.region+lang.locale', (params['region'] + '+' + params['lang']));
			return params;
		}
	},

	'layout': {
		'width': {
			'core': 425
		}
	},

	'templates': {
		'core': (
			'<div class="tooltip-achievement">' +
				'<img class="icon" src="<%= this["_meta"]["path_host_media"] %>/wow/icons/56/<% if(this["achievement"]["icon"]) { %><%= this["achievement"]["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
				'<div class="col-70">' +
					'<div class="headline-right"><span class="icon-achievenemtpoints"><%= this["achievement"]["points"] %></span></div>' +
					'<div class="darktip-row headline"><%= this["achievement"]["title"] %></div>' +
					'<div class="darktip-row highlight-reduced"><%= this["achievement"]["description"] %></div>' +
				'</div>' +
			'</div>'
		),
		'404': (
			'<div class="tooltip-achievement tooltip-404">' +
				'<div class="title">404<span class="sub"> / <%= this._loc("not-found") %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.achievement") %></span> <span class="value"><%= this["achievementid"] %></span></div>' +
				'<div class="darktip-row"><span class="label"><%= this._loc("label.region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			'</div>'
		)
	},

	'i18n': {
		'en_US': {
			'loading'       : 'Loading Achievement...',
			'not-found'     : 'Achievement not found'
		},
		'de_DE': {
			'loading'       : 'Lade Erfolg...',
			'not-found'     : 'Erfolg nicht gefunden'
		},
		'fr_FR': {
			'loading'       : 'Chargement Avantage...',
			'not-found'     : 'Haut fait introuvable'
		},
		'es_ES': {
			'loading'       : 'Cargando ventaja...',
			'not-found'     : 'Ventaja no encontrada'
		}
	}

});