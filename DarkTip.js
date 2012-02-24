/* **************************************************************************
 * The DarkTip plugin is a javascript based tooltip framework that enables
 * quick and easy development of modules that hook into specific aspects of a
 * webpage and display context sensitive tooltips.
 * 
 * Copyright (C) 2011  Martin Gelder
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

// Paul Irish's console.log() wrapper // http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
if(!window.log)
{
	window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
}

// Check if yepnope.js is defined, if not, we need to define it
if(!window.yepnope)
{
	/*yepnope1.5.3|WTFPL*/
	(function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
	
}

if(typeof window.___DarkTipSettings === 'undefined')
{
	window.___DarkTipSettings = {};
}

window.DarkTip = {
	
	'jq': undefined,
	
	'debug': true,
	
	'version': {
		'major': 1,
		'minor': 1,
		'patch': 1
	},
	
	'data': {
		'settings': {
			'jquery'   : 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
			'resources': {
				'qtip2'  : [
					'qtip2/jquery.qtip.min.js',
					'qtip2/jquery.qtip.min.css'
				],
				'extras': []
			},
			'applyTo': {
				'explicit': true,
				'implicit': true
			},
			'extendedMode': {
				'active'      : true,
				'keyCode'     : 16,
				'keyCodeLabel': 'SHIFT'
			}
		},
		
		'triggers': {
			'explicit': [],
			'implicit': []
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
		},
		
		'templates': {
			'tools': {
				'_sub': function(route, data) {
					if(typeof data === 'undefined')
					{
						data = this;
					}
					else
					{
						data['_meta'] = {};
						DarkTip.jq.extend(true, data['_meta'], this['_meta']);
					}
					var template = DarkTip.read(this['_meta']['module'], route);
					if(DarkTip.isTemplateString(template))
					{
						return DarkTip.jq.jqote(
							template,
							DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), data)
						);
					}
					else
					{
						return template;
					}
				},
				'_subLoop': function(route, data, concat) {
					if(typeof concat === 'undefined')
					{
						concat = '';
					}
					var template = DarkTip.read(this['_meta']['module'], route);
					var collect  = [];
					if(DarkTip.isTemplateString(template))
					{
						for (var i = 0; i < data.length; i++)
						{
							if(typeof data[i] !== 'object')
							{
								data[i] = { '_value': data[i] }
							}
							
							data[i]['_meta'] = {};
							DarkTip.jq.extend(true, data[i]['_meta'], this['_meta']);
							
							collect.push(DarkTip.jq.jqote(
								template,
								DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), { '_loop': i }, data[i])
							));
						}
					}
					else
					{
						for (var i = 0; i < data.length; i++)
						{
							collect.push(template);
						}
					}
					return collect.join(concat);
				},
				'_loc': function(route, data, fuzzy) {
					if(typeof data === 'undefined')
					{
						data = this;
					}
					else
					{
						data['_meta'] = {};
						DarkTip.jq.extend(true, data['_meta'], this['_meta']);
					}
					var template = DarkTip.localize(this['_meta']['module'], this['_meta']['locale'], route, fuzzy);
					if(DarkTip.isTemplateString(template))
					{
						return DarkTip.jq.jqote(
							template,
							DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), data)
						);
					}
					else
					{
						return template;
					}
				},
				'_locLoop': function(route, data, concat) {
					if(typeof concat === 'undefined')
					{
						concat = '';
					}
					var template = DarkTip.localize(this['_meta']['module'], this['_meta']['locale'], route);
					var collect  = [];
					if(DarkTip.isTemplateString(template))
					{
						for (var i = 0; i < data.length; i++)
						{
							if(typeof data[i] !== 'object')
							{
								data[i] = { '_value': data[i] }
							}
							
							data[i]['_meta'] = {};
							DarkTip.jq.extend(true, data[i]['_meta'], this['_meta']);
							
							collect.push(DarkTip.jq.jqote(
								template,
								DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(this['_meta']['module'], this['_meta']['locale']), { '_loop': i }, data[i])
							));
						}
					}
					else
					{
						for (var i = 0; i < data.length; i++)
						{
							collect.push(template);
						}
					}
					return collect.join(concat);
				}
			}
		},
		
		'i18n': {
			'en_US': {
				'loading'         : 'Loading...',
				'not-found'       : 'Nothing found',
				'extendedInactive': 'Hold [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to switch modes',
				'extendedActive'  : 'Release [<%= this["_meta"]["extendedKeyCodeLabel"] %>] to switch modes'
			},
			'en_GB': {
				'meta': {
					'redirect': 'en_US'
				}
			},
			'de_DE': {
				'loading'         : 'Laden...',
				'not-found'       : 'Nichts gefunden',
				'extendedInactive': '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] gedrückt halten um den Modus zu wechseln',
				'extendedActive'  : '[<%= this["_meta"]["extendedKeyCodeLabel"] %>] loslassen um den Modus zu wechseln!'
			},
			'fr_FR': {
				'loading'         : 'Chargement...',
				'not-found'       : 'Aucun résultat',
				'extendedInactive': 'Appuyer [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour changer de mode',
				'extendedActive'  : 'Relacher [<%= this["_meta"]["extendedKeyCodeLabel"] %>] pour changer de mode'
			},
			'es_ES': {
				'loading'         : 'Cargando...',
				'not-found'       : 'No he encontrado nada',
				'extendedInactive': '¡Manten pulsado [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para cambiar de modo!',
				'extendedActive'  : '¡Suelta [<%= this["_meta"]["extendedKeyCodeLabel"] %>] para cambiar de modo!'
			},
			'es_MX': {
				'meta': {
					'fallback': 'es_ES'
				}
			},
			'ru_RU': {
				
			},
			'ko_KR': {
				
			},
			'zh_TW': {
				
			},
			'zh_CN': {
				
			}
		},
		
		'modules': {}
	},
	
	'activeTooltips': [],
	
	'cacheStorage': {},
	
	'dataCollectStates': [],
	
	'log': function(message) {
		if((typeof this['debug'] !== 'undefined') && (this['debug'] === true))
		{
			window.log(message);
		}
	},
	
	'setting': function(route)
	{
		if(route != '')
		{
			return this._read('data.settings.' + route);
		}
		return this._read('data.settings');
	},
	
	'compareRule': function(data, rule)
	{
		// mandatory always true
		if(rule === true)
		{
			return true;
		}
		// simple existance check (aaa.bbb.ccc)
		if(rule.match(/^[a-z0-9_\-]+(\.[a-z0-9_\-]+)*$/i))
		{
			var segments = rule.split('.');
			var current  = data;

			for(var i = 0; i < segments.length; i++)
			{
				if(typeof current[segments[i]] === 'undefined')
				{
					return undefined;
				}
				else
				{
					current = current[segments[i]];
				}
			}
			return current;		
		}
		return undefined;
	},
	
	'_read': function(route, fuzzy)
	{
		if(typeof fuzzy === 'undefined')
		{
			fuzzy = 0;
		}
		
		if(route === '')
		{
			return this;
		}
		
		var segments = route.split('.');
		var current  = this;
		
		for(var i = 0; i < segments.length; i++)
		{
			if(typeof current[segments[i]] === 'undefined')
			{
				if((i + fuzzy) >= segments.length)
				{
					return current;
				}
				// this.log('Reading of route "'+route+'" (fuzzy: '+fuzzy+') failed!');
				return undefined;
			}
			else
			{
				current = current[segments[i]];
			}
		}
		return current;		
	},
	
	'read': function(module, route, fuzzy)
	{
		var modules    = module.split('.');
		var baseRoutes = ['data'];
		
		for (var i = 0; i < modules.length; i++)
		{
			var temp = baseRoutes[0];
			baseRoutes.unshift(temp + '.modules.' + modules[i]);
		}
		
		for (var i = 0; i < baseRoutes.length; i++)
		{
			var currentRoute = baseRoutes[i] + '.' + route;
			var result       = this._read(currentRoute, fuzzy);
			
			if(result !== undefined)
			{
				return result;
			}
		}
		
		return undefined;
	},
	
	'collect': function(module, route)
	{
		var modules    = module.split('.');
		var baseRoutes = ['data'];
		
		for (var i = 0; i < modules.length; i++)
		{
			var temp = baseRoutes[0];
			baseRoutes.unshift(temp + '.modules.' + modules[i]);
		}
		
		var collector = {};
		
		for (var i = 0; i < baseRoutes.length; i++)
		{
			var currentRoute = baseRoutes[i] + '.' + route;
			var result       = this._read(currentRoute);
			if(result !== undefined)
			{
				this.jq.extend(true, collector, result);
			}
		}
		
		return collector;
	},
	
	'route': function(module, route)
	{
		var modules = module.split('.');
		var builder = 'data';
		
		for (var i = 0; i < modules.length; i++)
		{
			if(modules[i] != '')
			{
				builder = builder + '.modules.' + modules[i];
			}
		}
		
		if(typeof route !== 'undefined')
		{
			builder = builder + '.' + route;
		}
		
		return(builder);
	},
	
	'localize': function(module, locale, route, fuzzy)
	{
		var activeLocale = locale;
		var redirect     = this.read(module, ('i18n.' + locale + '.meta.redirect'));
		var fallback     = this.read(module, ('i18n.' + locale + '.meta.fallback'));
		
		if(redirect != undefined)
		{
			activeLocale = redirect;
		}
		
		var result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);
		
		if((result === undefined) && (fallback != undefined))
		{
			activeLocale = fallback;
			result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);
		}
		
		if((result === undefined) && (fallback != 'en_US'))
		{
			activeLocale = 'en_US';
			result = this.read(module, ('i18n.' + activeLocale + '.' + route), fuzzy);
		}
		
		if(result === undefined) {
			this.log('Translation missing! Module: "' + module + '", Locale: "' + locale + '", Route: "' + route + '" (Fuzzy: '+fuzzy+')');
			return '';
		}
		
		return result;
	},
	
	'write': function(route, data)
	{
		var segments = route.split('.');
		var current  = this;
		
		for(var i = 0; i < segments.length; i++)
		{
			if(i == (segments.length - 1))
			{
				// if last segment ends with "+", data container is an array and data will be pushed
				if(segments[i].match(/^.+\+$/))
				{
					segments[i] = segments[i].slice(0, (segments[i].length - 1));
					if(typeof current[segments[i]] === 'undefined')
					{
						current[segments[i]] = [];
					}
					current[segments[i]].push(data);
				}
				// if last segment starts with "+", data container is an array and data will be unshifted
				else if(segments[i].match(/^\+.+$/))
				{
					segments[i] = segments[i].slice(1, segments[i].length);
					if(typeof current[segments[i]] === 'undefined')
					{
						current[segments[i]] = [];
					}
					current[segments[i]].unshift(data);
				}				
				else
				{
					current[segments[i]] = data;
				}
				return true;
			}
			else
			{
				if(typeof current[segments[i]] === 'undefined')
				{
					current[segments[i]] = {};
				}
				current = current[segments[i]];
			}
		}
		return false;
	},
	
	'cache': function(apicall, data)
	{
		if(typeof data === 'undefined')
		{
			// read mode
			if(typeof this['cacheStorage'][apicall] !== 'undefined')
			{
				return this['cacheStorage'][apicall];
			}
			return undefined;
		}
		else
		{
			// write mode
			this['cacheStorage'][apicall] = data;
			
			return true;
		}
	},
	
	'buildSettings': function() {
		jQuery.extend(true, this['data']['settings'], window.___DarkTipSettings);
	},
	
	'map': function(module, route, value)
	{
		var map = this.read(module, route);
		if(map)
		{
			if(typeof map[value] !== 'undefined')
			{
				return map[value];
			}
		}
		return undefined;
	},
	
	'mapRegex': function(result, map)
	{
		var params = {};
		if(map) {
			for(var p in map){
				params[map[p]]=result[p];
			}
			return params;
		}
		return {};
	},
	
	'isTemplateString': function(test)
	{
		if(typeof test === 'string')
		{
			if(test.match(/<%=?.+%>/i))
			{
				return true;
			}
		}
		return false;
	},
	
	'startUp': function() {
		var filesToLoad = [];
		if(!window.jQuery.qtip) {
			var files = this.setting('resources.qtip2');
			for(var i = 0; i < files.length; i++) {
				filesToLoad.push(files[i]);
			}
		}
		var files = this.setting('resources.extras');
		for (var i = 0; i < files.length; i++) {
			filesToLoad.push(files[i]);
		}
		yepnope({
			'load': filesToLoad,	
			'complete': function() {
				
				DarkTip.jq = jQuery.noConflict(DarkTip.setting('unbindJQuery'));
				
				DarkTip.jq(function() {
					
					if(DarkTip.setting('extendedMode.active'))
					{
						DarkTip.jq(document).keydown(function(event) {
							if(event.keyCode == DarkTip.setting('extendedMode.keyCode'))
							{
								DarkTip.jq('body').addClass('darktip-extended-mode');
								DarkTip.repositionActiveTooltips();
							}
						});
						
						DarkTip.jq(document).keyup(function(event) {
							if(event.keyCode == DarkTip.setting('extendedMode.keyCode'))
							{
								DarkTip.jq('body').removeClass('darktip-extended-mode');
								DarkTip.repositionActiveTooltips();
							}
						});
					}
					
					if(DarkTip.setting('applyTo.explicit'))
					{
						DarkTip.jq('[data-darktip]').live('mouseover', function() {
							DarkTip.handleHover('explicit', this);
						});
					}
					
					if(DarkTip.setting('applyTo.implicit'))
					{
						DarkTip.jq('[href]').live('mouseover', function() {
							DarkTip.handleHover('implicit', this);
						});
					}
				});
			}
		});		
	},
	
	'handleHover': function(type, element)
	{
		if(typeof this.jq(element).data('qtip') === 'object')
		{
			this.jq(element).qtip('show');
		}
		else
		{
			var triggers = this._read(this.route('', 'triggers.' + type));
			
			if(triggers !== undefined)
			{
				for(var i = 0; i < triggers.length; i++)
				{
					if(type === 'explicit')
					{
						var testme = new String(this.jq(element).data('darktip'));
					}
					if(type === 'implicit')
					{
						var testme = new String(this.jq(element).attr('href'));
					}
					var result = testme.match(triggers[i]['pattern']['match']);
					
					if(result)
					{
						var paramFunc = this._read(this.route(triggers[i]['module'], 'getParams.' + type));
						if(paramFunc)
						{
							var params = paramFunc(result);
						}
						else
						{
							var params = {};
						}
						this.initTooltip(triggers[i]['module'], type, params, element);
						break;
					}
				}
			}
		}
	},
	
	'initTooltip': function(module, type, params, element)
	{
		if(typeof params['locale'] === 'undefined')
		{
			params['locale'] = 'en_US';
		}
		var content = this.localize(module, params['locale'], 'loading');
		
		this.attachTooltip(element, content, module);
		
		this.startDataCollect(module, params, element);
	},
	
	'initDataCollectState': function(module, params, element)
	{
		var id = this['dataCollectStates'].length;
		
		this['dataCollectStates'][id] = {
			
			'id'  : id,
			
			'repo': {
				'module'       : module,
				'params'       : params,
				'element'      : element,
				'templateTools': this.getTemplateTools(module, params['locale']),
				'callbackParam': this.read(module, 'triggers.apiParams.callback'),
				'requiredData' : []
			},
			
			'status' : 'pending',
			
			'queries': {
				'sleeping': {},
				'running' : {},
				'done'    : {}
			},
			
			'data': {},
			
			'awakenQuery': function(key)
			{
				if(typeof this['queries']['sleeping'][key] !== 'undefined')
				{
					this['queries']['running'][key] = this['queries']['sleeping'][key];
					return delete this['queries']['sleeping'][key];
				}
				return false;
			},
			
			'awakenCachedQuery': function(key)
			{
				if(typeof this['queries']['sleeping'][key] !== 'undefined')
				{
					this['queries']['done'][key] = this['queries']['sleeping'][key];
					return delete this['queries']['sleeping'][key];
				}
				return false;
			},
			
			'completeQuery': function(key)
			{
				if(typeof this['queries']['running'][key] !== 'undefined')
				{
					this['queries']['done'][key] = this['queries']['running'][key];
					return delete this['queries']['running'][key];
				}
				return false;
			},
			
			'buildCallbackQuerySuccess': function(id, key, apicall)
			{
				return function(data, options)
				{
					state = DarkTip.getDataCollectionState(id);
					
					DarkTip.cache(apicall, data);
					
					state['data'][key] = data;
					
					state.completeQuery(key);
					
					state.run();
					
					state.finish();
				}
			},
			
			'buildCallbackQueryError': function(id, key)
			{
				return function(options)
				{
					state = DarkTip.getDataCollectionState(id);
					
					if(state['queries']['running'][key]['required'])
					{
						state['status'] = 'error';
					}
					
					state.completeQuery(key);
					
					state.run();
					
					state.finish();
				}
			},
			
			'done': function()
			{
				if(Object.keys(this['queries']['running']).length === 0)
				{
					return true;
				}
				return false;
			},
			
			'finish': function()
			{
				if(this.done())
				{
					if((this['status'] === 'error') || (this['status'] === 'pending'))
					{
						this['status'] = 'done';
						
						DarkTip.renderTooltip(this);
					}
				}
			},
			
			'run': function()
			{
				var state = this;
				
				DarkTip.jq.each(this['queries']['sleeping'], function(key, query) {
					
					if(DarkTip.isTemplateString(query['condition']))
					{
						var result = DarkTip.compareRule(state['data'], DarkTip.jq.jqote(query['condition'], DarkTip.jq.extend(true, {}, state['repo']['params'], state['repo']['templateTools'])));
					}
					else
					{
						var result = DarkTip.compareRule(state['data'], query['condition']);
					}
					
					if(typeof result !== 'undefined')
					{
						var apicall = DarkTip.jq.jqote(query['call'], DarkTip.jq.extend(true, {}, state['repo']['params'], {'condition': result}, state['repo']['templateTools']));
						var cache   = DarkTip.cache(apicall);
						
						if(cache)
						{
							state.awakenCachedQuery(key);
							
							state['data'][key] = cache;
						}
						else
						{
							state.awakenQuery(key);
							
							DarkTip.jq.jsonp({
								'url'              : apicall,
								'callbackParameter': state['repo']['callbackParam'],
								'success'          : state.buildCallbackQuerySuccess(id, key, apicall),
								'error'            : state.buildCallbackQueryError(id, key)
							});				
						}
					}
					
				});
				
				this.finish();
			}
			
		};
		
		var apicalls    = this._read(this.route(module, 'queries'));
		var apicallback = this.read(module, 'triggers.apiParams.callback');
		
		this.jq.each(apicalls, function(key, payload)
		{
			if(typeof payload === 'object')
			{
				if(typeof payload['required'] === 'undefined')
				{
					payload['required'] = true;
				}
				
				if(typeof payload['condition'] === 'undefined')
				{
					payload['condition'] = true;
				}
				
				DarkTip['dataCollectStates'][id]['queries']['sleeping'][key] = {
					'required' : payload['required'] == true,
					'condition': payload['condition'],
					'call'     : payload['call']
				};
			}
			else
			{
				DarkTip['dataCollectStates'][id]['queries']['sleeping'][key] = {
					'required' : true,
					'condition': true,
					'call'     : payload
				};
			}
			
			if(DarkTip['dataCollectStates'][id]['queries']['sleeping'][key]['required'])
			{
				DarkTip['dataCollectStates'][id]['repo']['requiredData'].push(key);
			}
			
		});
		
		return this.getDataCollectionState(id);
	},
	
	'getDataCollectionState': function(id)
	{
		return this['dataCollectStates'][id] || false;
	},
	
	'startDataCollect': function(module, params, element)
	{
		var state = this.initDataCollectState(module, params, element);
		
		state.run();
	},
	
	'renderTooltip': function(state)
	{
		var module  = state['repo']['module'];
		var params  = state['repo']['params'];
		var element = state['repo']['element'];
		var data    = state['data'];
		var error   = false;
		var content = '';
		
		DarkTip.jq.each(state['repo']['requiredData'], function(nothing, key) {
			
			if(typeof state['data'][key] === 'undefined')
			{
				error = true;
			}

		});
		
		var prepareDataFunc = this.read(module, 'prepareData');
		
		if(typeof prepareDataFunc !== 'undefined')
		{
			data = prepareDataFunc(state);
		}
		
		if(!error && data)
		{
			// call module func to enhance template data
			var enhanceDataFunc = this.read(module, 'enhanceData');
			
			if(typeof enhanceDataFunc !== 'undefined')
			{
				data = enhanceDataFunc(module, params, data);
			}
			
			this.jq(element).qtip('api').set('style.width', this.read(module, 'layout.width.core'));
			
			content = this.jq.jqote(
				this.read(module, 'templates.core'),
				this.jq.extend(true, {}, this.getTemplateTools(module, params['locale']), data)
			);
		}
		else
		{
			this.jq(element).qtip('api').set('style.width', this.read(module, 'layout.width.404'));
			
			content = this.jq.jqote(
				this.read(module, 'templates.404'),
				this.jq.extend(true, {}, this.getTemplateTools(module, params['locale']), params)
			);
		}
		
		this.jq(element).qtip('api').set('content.text', content);
	},
	
	'attachTooltip': function(element, content, module){
		var width    = this.read(module, 'layout.width.core');
		if(width == undefined) {
			width = 300;
		}
		var cssclass = this.read(module, 'layout.css.class');
		if(cssclass == undefined) {
			cssclass = '';
		}
		this.jq(element).qtip({
			'overwrite': false,
			'show': {
				'ready': true
			},
			'events': {
				'render':function(event, api){
					var tooltip = api['elements']['tooltip'];
					tooltip.bind('tooltipshow', function(event, api) {
						DarkTip.addToActiveTooltips(api['id']);
					});
					tooltip.bind('tooltiphide', function(event, api) {
						DarkTip.removeFromActiveTooltips(api['id']);
					});
				}
			},
			'content': {
				'text': content
			},
			'position': {
				'my'      : DarkTip.read(module, 'layout.position.my'),
				'at'      : DarkTip.read(module, 'layout.position.at'),
				'target'  : DarkTip.read(module, 'layout.position.target'),
				'viewport': this.jq(window),
				'effect'  : false
			},
			'hide' :'mouseout',
			'style': {
				'width'  : width+'px',
				'classes': ('ui-tooltip-cluetip darktip-tooltip ' + cssclass)
			}
		});
	},
	
	'addToActiveTooltips': function(id)
	{
		var found = false;
		for (var i = 0; i < this.activeTooltips.length; i++)
		{
			if(this.activeTooltips[i] === id)
			{
				found = true;
			}
		}
		if(found === false)
		{
			this.activeTooltips.push(id);
		}
	},
	
	'removeFromActiveTooltips': function(id)
	{
		var found = false;
		for (var i = 0; i < this['activeTooltips'].length; i++)
		{
			if(this['activeTooltips'][i] === id)
			{
				found = i;
			}
		}
		if(found !== false)
		{
			this['activeTooltips'].splice(found, 1);
		}
	},
	
	'repositionActiveTooltips': function()
	{
		for (var i = 0; i < this.activeTooltips.length; i++)
		{
			this.jq('#ui-tooltip-' + this['activeTooltips'][i]).qtip('reposition');
		}
	},
	
	'getTemplateTools': function(module, locale) {
		var tools = {
			'_meta': {
				'extendedActive'      : this.setting('extendedMode.active'),
				'extendedKeyCodeLabel': this.setting('extendedMode.keyCodeLabel'),
				'locale'              : locale,
				'module'              : module
			}
		}
		var collection = this.collect(module, 'templates.tools');
		if(collection)
		{
			this.jq.extend(true, tools, collection);
		}
		return tools;
	},
	
	'verifyParentModule': function(module)
	{
		var segments = module.split('.');
		if(segments.length < 2)
		{
			return true;
		}
		segments.pop();
		var parentModule = segments.join('.');
		if(this._read(this.route(parentModule, 'registered')))
		{
			return true;
		}
		this.log('Parent module missing! Module: "' + module + '", Parent: "' + parentModule + '"');
		return false;
	},
	
	'registerModule': function(moduleKey, moduleData)
	{
		var submodules = {};
		// The module seems to come with included submodules, split the off, to include them later
		if(typeof moduleData['modules'] !== 'undefined')
		{
			this.jq.extend(true, submodules, moduleData['modules']);
		}
		
		// Sanitize - clean submodules
		moduleData['modules']    = {};
		moduleData['registered'] = true;
		
		// check if parent modules are loaded
		if(this.verifyParentModule(moduleKey))
		{
			this.write(this.route(moduleKey), moduleData);
			
			var patternExplicit = this._read(this.route(moduleKey, 'triggers.explicit'));
			if(patternExplicit)
			{
				this.write(('data.triggers.+explicit'), {
					'module' : moduleKey,
					'pattern': patternExplicit
				});
			}
			
			var patternImplicit = this._read(this.route(moduleKey, 'triggers.implicit'));
			if(patternImplicit)
			{
				this.write(('data.triggers.+implicit'), {
					'module' : moduleKey,
					'pattern': patternImplicit
				});
			}
			
			// Recursively jump into the submodules and register them
			for (module in submodules) {
				this.registerModule((moduleKey + '.' + module), submodules[module]);
			}
		}
	},
	
	'init': function() {
		this.buildSettings();
		this.startUp();
	}
	
}

if(window.jQuery)
{
	window.___DarkTipSettings['unbindJQuery'] = true;
}
else
{
	window.___DarkTipSettings['unbindJQuery'] = false;
}

yepnope([{
	'load'    : window.___DarkTipSettings['jquery'] || 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
	'complete': function() {
		
		if(!window.jQuery.jsonp) {
			/* jquery.jsonp 2.2.0 (c) 2010 Julian Aubourg | MIT License | http://code.google.com/p/jquery-jsonp/ */
			(function(a){function b(){}function c(a){A=[a]}function d(a,b,c,d){try{d=a&&a.apply(b.context||b,c)}catch(e){d=!1}return d}function e(a){return/\?/.test(a)?"&":"?"}function D(l){function V(a){O++||(P(),I&&(y[K]={s:[a]}),E&&(a=E.apply(l,[a])),d(l.success,l,[a,t]),d(D,l,[l,t]))}function W(a){O++||(P(),I&&a!=u&&(y[K]=a),d(l.error,l,[l,a]),d(D,l,[l,a]))}l=a.extend({},B,l);var D=l.complete,E=l.dataFilter,F=l.callbackParameter,G=l.callback,H=l.cache,I=l.pageCache,J=l.charset,K=l.url,L=l.data,M=l.timeout,N,O=0,P=b,Q,R,S,T,U;return l.abort=function(){!(O++)&&P()},d(l.beforeSend,l,[l])===!1||O?l:(K=K||h,L=L?typeof L=="string"?L:a.param(L,l.traditional):h,K+=L?e(K)+L:h,F&&(K+=e(K)+encodeURIComponent(F)+"=?"),!H&&!I&&(K+=e(K)+"_"+(new Date).getTime()+"="),K=K.replace(/=\?(&|$)/,"="+G+"$1"),I&&(N=y[K])?N.s?V(N.s[0]):W(N):(v[G]=c,S=a(s)[0],S.id=k+z++,J&&(S[g]=J),C&&C.version()<11.6?(T=a(s)[0]).text="document.getElementById('"+S.id+"')."+n+"()":S[f]=f,!(o in S)&&p in S&&(S.htmlFor=S.id,S.event=m),S[o]=S[n]=S[p]=function(a){if(!S[q]||/loaded|complete/.test(S[q])){try{S[m]&&S[m]()}catch(b){}a=A,A=0,a?V(a[0]):W(i)}},S.src=K,P=function(a){U&&clearTimeout(U),S[p]=S[o]=S[n]=null,w[r](S),T&&w[r](T)},w[j](S,x),T&&w[j](T,x),U=M>0&&setTimeout(function(){W(u)},M)),l)}var f="async",g="charset",h="",i="error",j="insertBefore",k="_jqjsp",l="on",m=l+"click",n=l+i,o=l+"load",p=l+"readystatechange",q="readyState",r="removeChild",s="<script>",t="success",u="timeout",v=window,w=a("head")[0]||document.documentElement,x=w.firstChild,y={},z=0,A,B={callback:k,url:location.href},C=v.opera;D.setup=function(b){a.extend(B,b)},a.jsonp=D})(jQuery)
		}
		
		if(!window.dust) {
			/* Dust - Asynchronous Templating v0.3.0 (c) 2010, Aleksander Williams | MIT License | http://akdubya.github.com/dustjs */
			window.dust={};
			(function(o){function z(e,k,l){this.stack=e;this.global=k;this.blocks=l}function H(e,k,l,x){this.tail=k;this.isObject=!o.isArray(e)&&e&&typeof e==="object";this.head=e;this.index=l;this.of=x}function p(e){this.head=new B(this);this.callback=e;this.out=""}function J(){this.head=new B(this)}function B(e,k,l){this.root=e;this.next=k;this.data="";this.flushable=false;this.taps=l}function r(e,k){this.head=e;this.tail=k}o.cache={};o.register=function(e,k){if(e)o.cache[e]=k};o.render=function(e,k,l){l=(new p(l)).head;
			o.load(e,l,z.wrap(k)).end()};o.stream=function(e,k){var l=new J;o.nextTick(function(){o.load(e,l.head,z.wrap(k)).end()});return l};o.renderSource=function(e,k,l){return o.compileFn(e)(k,l)};o.compileFn=function(e,k){var l=o.loadSource(o.compile(e,k));return function(x,C){var E=C?new p(C):new J;o.nextTick(function(){l(E.head,z.wrap(x)).end()});return E}};o.load=function(e,k,l){var x=o.cache[e];if(x)return x(k,l);else{if(o.onLoad)return k.map(function(C){o.onLoad(e,function(E,M){if(E)return C.setError(E);
			o.cache[e]||o.loadSource(o.compile(M,e));o.cache[e](C,l).end()})});return k.setError(Error("Template Not Found: "+e))}};o.loadSource=function(e){return eval(e)};o.isArray=Array.isArray?Array.isArray:function(e){return Object.prototype.toString.call(e)=="[object Array]"};o.nextTick=function(e){setTimeout(e,0)};o.isEmpty=function(e){if(o.isArray(e)&&!e.length)return true;if(e===0)return false;return!e};o.filter=function(e,k,l){if(l)for(var x=0,C=l.length;x<C;x++){var E=l[x];if(E==="s")k=null;else e=
			o.filters[E](e)}if(k)e=o.filters[k](e);return e};o.filters={h:function(e){return o.escapeHtml(e)},j:function(e){return o.escapeJs(e)},u:encodeURI,uc:encodeURIComponent};o.makeBase=function(e){return new z(new H,e)};z.wrap=function(e){if(e instanceof z)return e;return new z(new H(e))};z.prototype.get=function(e){for(var k=this.stack,l;k;){if(k.isObject){l=k.head[e];if(l!==undefined)return l}k=k.tail}return this.global?this.global[e]:undefined};z.prototype.getPath=function(e,k){var l=this.stack,x=k.length;
			if(e&&x===0)return l.head;if(l.isObject){l=l.head;for(var C=0;l&&C<x;){l=l[k[C]];C++}return l}};z.prototype.push=function(e,k,l){return new z(new H(e,this.stack,k,l),this.global,this.blocks)};z.prototype.rebase=function(e){return new z(new H(e),this.global,this.blocks)};z.prototype.current=function(){return this.stack.head};z.prototype.getBlock=function(e){var k=this.blocks;if(k)for(var l=k.length,x;l--;)if(x=k[l][e])return x};z.prototype.shiftBlocks=function(e){var k=this.blocks;if(e){newBlocks=
			k?k.concat([e]):[e];return new z(this.stack,this.global,newBlocks)}return this};p.prototype.flush=function(){for(var e=this.head;e;){if(e.flushable)this.out+=e.data;else{if(e.error){this.callback(e.error);this.flush=function(){}}return}this.head=e=e.next}this.callback(null,this.out)};J.prototype.flush=function(){for(var e=this.head;e;){if(e.flushable)this.emit("data",e.data);else{if(e.error){this.emit("error",e.error);this.flush=function(){}}return}this.head=e=e.next}this.emit("end")};J.prototype.emit=
			function(e,k){var l=this.events;l&&l[e]&&l[e](k)};J.prototype.on=function(e,k){if(!this.events)this.events={};this.events[e]=k;return this};B.prototype.write=function(e){var k=this.taps;if(k)e=k.go(e);this.data+=e;return this};B.prototype.end=function(e){e&&this.write(e);this.flushable=true;this.root.flush();return this};B.prototype.map=function(e){var k=new B(this.root,this.next,this.taps),l=new B(this.root,k,this.taps);this.next=l;this.flushable=true;e(l);return k};B.prototype.tap=function(e){var k=
			this.taps;this.taps=k?k.push(e):new r(e);return this};B.prototype.untap=function(){this.taps=this.taps.tail;return this};B.prototype.render=function(e,k){return e(this,k)};B.prototype.reference=function(e,k,l,x){if(typeof e==="function"){e=e(this,k,null,{auto:l,filters:x});if(e instanceof B)return e}return o.isEmpty(e)?this:this.write(o.filter(e,l,x))};B.prototype.section=function(e,k,l,x){if(typeof e==="function"){e=e(this,k,l,x);if(e instanceof B)return e}var C=l.block;l=l["else"];if(x)k=k.push(x);
			if(o.isArray(e)){if(C){x=e.length;l=this;for(var E=0;E<x;E++)l=C(l,k.push(e[E],E,x));return l}}else if(e===true){if(C)return C(this,k)}else if(e||e===0){if(C)return C(this,k.push(e))}else if(l)return l(this,k);return this};B.prototype.exists=function(e,k,l){var x=l.block;l=l["else"];if(o.isEmpty(e)){if(l)return l(this,k)}else if(x)return x(this,k);return this};B.prototype.notexists=function(e,k,l){var x=l.block;l=l["else"];if(o.isEmpty(e)){if(x)return x(this,k)}else if(l)return l(this,k);return this};
			B.prototype.block=function(e,k,l){l=l.block;if(e)l=e;if(l)return l(this,k);return this};B.prototype.partial=function(e,k){if(typeof e==="function")return this.capture(e,k,function(l,x){o.load(l,x,k).end()});return o.load(e,this,k)};B.prototype.helper=function(e,k,l,x){return o.helpers[e](this,k,l,x)};B.prototype.capture=function(e,k,l){return this.map(function(x){var C=new p(function(E,M){E?x.setError(E):l(M,x)});e(C.head,k).end()})};B.prototype.setError=function(e){this.error=e;this.root.flush();
			return this};o.helpers={sep:function(e,k,l){if(k.stack.index===k.stack.of-1)return e;return l.block(e,k)},idx:function(e,k,l){return l.block(e,k.push(k.stack.index))}};r.prototype.push=function(e){return new r(e,this)};r.prototype.go=function(e){for(var k=this;k;){e=k.head(e);k=k.tail}return e};var K=RegExp(/[&<>\"]/),q=/&/g,j=/</g,w=/>/g,t=/\"/g;o.escapeHtml=function(e){if(typeof e==="string"){if(!K.test(e))return e;return e.replace(q,"&amp;").replace(j,"&lt;").replace(w,"&gt;").replace(t,"&quot;")}return e};
			var y=/\\/g,A=/\r/g,F=/\u2028/g,L=/\u2029/g,N=/\n/g,V=/\f/g,I=/'/g,Q=/"/g,T=/\t/g;o.escapeJs=function(e){if(typeof e==="string")return e.replace(y,"\\\\").replace(Q,'\\"').replace(I,"\\'").replace(A,"\\r").replace(F,"\\u2028").replace(L,"\\u2029").replace(N,"\\n").replace(V,"\\f").replace(T,"\\t");return e}})(dust);if(typeof exports!=="undefined"){typeof process!=="undefined"&&require("./server")(dust);module.exports=dust}
			(function(o){function z(q,j){for(var w=[j[0]],t=1,y=j.length;t<y;t++){var A=o.filterNode(q,j[t]);A&&w.push(A)}return w}function H(q,j){return j}function p(){}function J(q,j){for(var w="",t=1,y=j.length;t<y;t++)w+=o.compileNode(q,j[t]);return w}function B(q,j,w){return"."+w+"("+o.compileNode(q,j[1])+","+o.compileNode(q,j[2])+","+o.compileNode(q,j[4])+","+o.compileNode(q,j[3])+")"}o.compile=function(q,j){var w,t=o.parse(q);w=o.filterNode({},t);t={name:j,bodies:[],blocks:{},index:0,auto:"h"};w="(function(){dust.register("+
			(j?'"'+j+'"':"null")+","+o.compileNode(t,w)+");";var y;var A=[],F=t.blocks;for(y in F)A.push(y+":"+F[y]);if(A.length){t.blocks="ctx=ctx.shiftBlocks(blocks);";y="var blocks={"+A.join(",")+"};"}else y=t.blocks="";y=w+y;w=[];A=t.bodies;t=t.blocks;F=0;for(var L=A.length;F<L;F++)w[F]="function body_"+F+"(chk,ctx){"+t+"return chk"+A[F]+";}";t=w.join("");return y+t+"return body_0;})();"};o.filterNode=function(q,j){return o.optimizers[j[0]](q,j)};o.optimizers={body:function(q,j){for(var w=[j[0]],t,y=1,A=
			j.length;y<A;y++){var F=o.filterNode(q,j[y]);if(F)if(F[0]==="buffer")if(t)t[1]+=F[1];else{t=F;w.push(F)}else{t=null;w.push(F)}}return w},buffer:H,special:function(q,j){return["buffer",r[j[1]]]},format:p,reference:z,"#":z,"?":z,"^":z,"<":z,"+":z,"@":z,"%":z,partial:z,context:z,params:z,bodies:z,param:z,filters:H,key:H,path:H,literal:H,comment:p};o.pragmas={esc:function(q,j,w){var t=q.auto;j||(j="h");q.auto=j==="s"?"":j;j=J(q,w.block);q.auto=t;return j}};var r={s:" ",n:"\n",r:"\r",lb:"{",rb:"}"};o.compileNode=
			function(q,j){return o.nodes[j[0]](q,j)};o.nodes={body:function(q,j){var w=q.index++,t="body_"+w;q.bodies[w]=J(q,j);return t},buffer:function(q,j){return".write("+K(j[1])+")"},format:function(q,j){return".write("+K(j[1]+j[2])+")"},reference:function(q,j){return".reference("+o.compileNode(q,j[1])+",ctx,"+o.compileNode(q,j[2])+")"},"#":function(q,j){return B(q,j,"section")},"?":function(q,j){return B(q,j,"exists")},"^":function(q,j){return B(q,j,"notexists")},"<":function(q,j){for(var w=j[4],t=1,y=
			w.length;t<y;t++){var A=w[t];if(A[1][1]==="block"){q.blocks[j[1].text]=o.compileNode(q,A[2]);break}}return""},"+":function(q,j){return".block(ctx.getBlock("+K(j[1].text)+"),"+o.compileNode(q,j[2])+","+o.compileNode(q,j[4])+","+o.compileNode(q,j[3])+")"},"@":function(q,j){return".helper("+K(j[1].text)+","+o.compileNode(q,j[2])+","+o.compileNode(q,j[4])+","+o.compileNode(q,j[3])+")"},"%":function(q,j){var w=j[1][1];if(!o.pragmas[w])return"";for(var t=j[4],y={},A=1,F=t.length;A<F;A++){var L=t[A];y[L[1][1]]=
			L[2]}t=j[3];L={};A=1;for(F=t.length;A<F;A++){var N=t[A];L[N[1][1]]=N[2][1]}return o.pragmas[w](q,j[2][1]?j[2][1].text:null,y,L)},partial:function(q,j){return".partial("+o.compileNode(q,j[1])+","+o.compileNode(q,j[2])+")"},context:function(q,j){if(j[1])return"ctx.rebase("+o.compileNode(q,j[1])+")";return"ctx"},params:function(q,j){for(var w=[],t=1,y=j.length;t<y;t++)w.push(o.compileNode(q,j[t]));if(w.length)return"{"+w.join(",")+"}";return"null"},bodies:function(q,j){for(var w=[],t=1,y=j.length;t<
			y;t++)w.push(o.compileNode(q,j[t]));return"{"+w.join(",")+"}"},param:function(q,j){return o.compileNode(q,j[1])+":"+o.compileNode(q,j[2])},filters:function(q,j){for(var w=[],t=1,y=j.length;t<y;t++)w.push('"'+j[t]+'"');return'"'+q.auto+'"'+(w.length?",["+w.join(",")+"]":"")},key:function(q,j){return'ctx.get("'+j[1]+'")'},path:function(q,j){for(var w=j[1],t=j[2],y=[],A=0,F=t.length;A<F;A++)y.push('"'+t[A]+'"');return"ctx.getPath("+w+",["+y.join(",")+"])"},literal:function(q,j){return K(j[1])}};var K=
			typeof JSON==="undefined"?function(q){return'"'+o.escapeJs(q)+'"'}:JSON.stringify})(typeof exports!=="undefined"?exports:window.dust);
			(function(o){var z=function(){var H={parse:function(p){function J(n){var b=n.charCodeAt(0);if(b<255){n="x";var c=2}else{n="u";c=4}n="\\"+n;var d=b.toString(16).toUpperCase();b=d;c=c-d.length;for(d=0;d<c;d++)b="0"+b;return n+b}function B(n){return'"'+n.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/[\x80-\uFFFF]/g,J)+'"'}function r(n){if(!(a<R)){if(a>R){R=a;W=[]}W.push(n)}}function K(){var n="body@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=[];for(var c=
			q();c!==null;){b.push(c);c=q()}b=b!==null?["body"].concat(b):null;v[n]={nextPos:a,result:b};return b}function q(){var n="part@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=l();if(b!==null)b=b;else{b=j();if(b!==null)b=b;else{b="partial@"+a;var c=v[b];if(c){a=c.nextPos;b=c.result}else{c=h;h=false;var d=a,g=C();if(g!==null){if(p.substr(a,1)===">"){var f=">";a+=1}else{f=null;h&&r('">"')}if(f!==null){var i=I();i=i!==null?["literal",i]:null;if(i!==null)i=i;else{i=Q();i=i!==null?i:null}if(i!==null){var m=
			y();if(m!==null){if(p.substr(a,1)==="/"){var s="/";a+=1}else{s=null;h&&r('"/"')}if(s!==null){var u=E();if(u!==null)g=[g,f,i,m,s,u];else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}d=g!==null?["partial",g[2],g[3]]:null;(h=c)&&d===null&&r("partial");v[b]={nextPos:a,result:d};b=d}if(b!==null)b=b;else{b=L();if(b!==null)b=b;else{b=F();if(b!==null)b=b;else{b="buffer@"+a;if(c=v[b]){a=c.nextPos;b=c.result}else{c=h;h=false;d=a;g=M();if(g!==null){f=[];for(i=
			U();i!==null;){f.push(i);i=U()}if(f!==null)g=[g,f];else{g=null;a=d}}else{g=null;a=d}d=g!==null?["format",g[0],g[1].join("")]:null;if(d!==null)d=d;else{i=g=a;f=h;h=false;m=x();h=f;if(m===null)f="";else{f=null;a=i}if(f!==null){m=a;i=h;h=false;s=M();h=i;if(s===null)i="";else{i=null;a=m}if(i!==null){m=a;s=h;h=false;u=l();h=s;if(u===null)s="";else{s=null;a=m}if(s!==null){if(p.length>a){m=p.charAt(a);a++}else{m=null;h&&r("any character")}if(m!==null)f=[f,i,s,m];else{f=null;a=g}}else{f=null;a=g}}else{f=
			null;a=g}}else{f=null;a=g}g=f!==null?f[3]:null;if(g!==null)for(d=[];g!==null;){d.push(g);i=g=a;f=h;h=false;m=x();h=f;if(m===null)f="";else{f=null;a=i}if(f!==null){m=a;i=h;h=false;s=M();h=i;if(s===null)i="";else{i=null;a=m}if(i!==null){m=a;s=h;h=false;u=l();h=s;if(u===null)s="";else{s=null;a=m}if(s!==null){if(p.length>a){m=p.charAt(a);a++}else{m=null;h&&r("any character")}if(m!==null)f=[f,i,s,m];else{f=null;a=g}}else{f=null;a=g}}else{f=null;a=g}}else{f=null;a=g}g=f!==null?f[3]:null}else d=null;d=d!==
			null?["buffer",d.join("")]:null;d=d!==null?d:null}(h=c)&&d===null&&r("buffer");v[b]={nextPos:a,result:d};b=d}b=b!==null?b:null}}}}}v[n]={nextPos:a,result:b};return b}function j(){var n="section@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a,d=w();if(d!==null){var g=E();if(g!==null){var f=K();if(f!==null){var i=A();if(i!==null){var m=t();if(m!==null){var s=d[1].text===m.text?"":null;if(s!==null)d=[d,g,f,i,m,s];else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}}else{d=
			null;a=c}}else{d=null;a=c}c=d!==null?function(u,D,O){O.push(["param",["literal","block"],D]);u.push(O);return u}(d[0],d[2],d[3],d[4]):null;if(c!==null)c=c;else{c=a;d=w();if(d!==null){if(p.substr(a,1)==="/"){g="/";a+=1}else{g=null;h&&r('"/"')}if(g!==null){f=E();if(f!==null)d=[d,g,f];else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}c=d!==null?function(u){u.push(["bodies"]);return u}(d[0]):null;c=c!==null?c:null}(h=b)&&c===null&&r("section");v[n]={nextPos:a,result:c};return c}function w(){var n="sec_tag_start@"+
			a,b=v[n];if(b){a=b.nextPos;return b.result}b=a;var c=C();if(c!==null){if(p.substr(a).match(/^[#?^<+@%]/)!==null){var d=p.charAt(a);a++}else{d=null;h&&r("[#?^<+@%]")}if(d!==null){var g=N();if(g!==null){var f=y();if(f!==null){var i;i="params@"+a;var m=v[i];if(m){a=m.nextPos;i=m.result}else{m=h;h=false;var s=[],u=a,D=U();if(D!==null){var O=I();if(O!==null){if(p.substr(a,1)==="="){var P="=";a+=1}else{P=null;h&&r('"="')}if(P!==null){var G=N();if(G!==null)G=G;else{G=Q();G=G!==null?G:null}if(G!==null)D=
			[D,O,P,G];else{D=null;a=u}}else{D=null;a=u}}else{D=null;a=u}}else{D=null;a=u}for(u=D!==null?["param",["literal",D[1]],D[3]]:null;u!==null;){s.push(u);u=a;D=U();if(D!==null){O=I();if(O!==null){if(p.substr(a,1)==="="){P="=";a+=1}else{P=null;h&&r('"="')}if(P!==null){G=N();if(G!==null)G=G;else{G=Q();G=G!==null?G:null}if(G!==null)D=[D,O,P,G];else{D=null;a=u}}else{D=null;a=u}}else{D=null;a=u}}else{D=null;a=u}u=D!==null?["param",["literal",D[1]],D[3]]:null}s=s!==null?["params"].concat(s):null;(h=m)&&s===
			null&&r("params");v[i]={nextPos:a,result:s};i=s}if(i!==null)c=[c,d,g,f,i];else{c=null;a=b}}else{c=null;a=b}}else{c=null;a=b}}else{c=null;a=b}}else{c=null;a=b}b=c!==null?[c[1],c[2],c[3],c[4]]:null;v[n]={nextPos:a,result:b};return b}function t(){var n="end_tag@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a,d=C();if(d!==null){if(p.substr(a,1)==="/"){var g="/";a+=1}else{g=null;h&&r('"/"')}if(g!==null){var f=N();if(f!==null){var i=E();if(i!==null)d=[d,g,f,i];else{d=null;a=c}}else{d=null;
			a=c}}else{d=null;a=c}}else{d=null;a=c}c=d!==null?d[2]:null;(h=b)&&c===null&&r("end tag");v[n]={nextPos:a,result:c};return c}function y(){var n="context@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=a;if(p.substr(a,1)===":"){var c=":";a+=1}else{c=null;h&&r('":"')}if(c!==null){var d=N();if(d!==null)c=[c,d];else{c=null;a=b}}else{c=null;a=b}b=c!==null?c[1]:null;b=b!==null?b:"";b=b!==null?b?["context",b]:["context"]:null;v[n]={nextPos:a,result:b};return b}function A(){var n="bodies@"+a,b=v[n];if(b){a=
			b.nextPos;return b.result}b=h;h=false;var c=[],d=a,g=C();if(g!==null){if(p.substr(a,1)===":"){var f=":";a+=1}else{f=null;h&&r('":"')}if(f!==null){var i=I();if(i!==null){var m=E();if(m!==null){var s=K();if(s!==null)g=[g,f,i,m,s];else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}for(d=g!==null?["param",["literal",g[2]],g[4]]:null;d!==null;){c.push(d);d=a;g=C();if(g!==null){if(p.substr(a,1)===":"){f=":";a+=1}else{f=null;h&&r('":"')}if(f!==null){i=I();if(i!==null){m=
			E();if(m!==null){s=K();if(s!==null)g=[g,f,i,m,s];else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}}else{g=null;a=d}d=g!==null?["param",["literal",g[2]],g[4]]:null}c=c!==null?["bodies"].concat(c):null;(h=b)&&c===null&&r("bodies");v[n]={nextPos:a,result:c};return c}function F(){var n="reference@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a,d=C();if(d!==null){var g=N();if(g!==null){var f;f="filters@"+a;var i=v[f];if(i){a=i.nextPos;f=i.result}else{i=h;h=false;var m=
			[],s=a;if(p.substr(a,1)==="|"){var u="|";a+=1}else{u=null;h&&r('"|"')}if(u!==null){var D=I();if(D!==null)u=[u,D];else{u=null;a=s}}else{u=null;a=s}for(s=u!==null?u[1]:null;s!==null;){m.push(s);s=a;if(p.substr(a,1)==="|"){u="|";a+=1}else{u=null;h&&r('"|"')}if(u!==null){D=I();if(D!==null)u=[u,D];else{u=null;a=s}}else{u=null;a=s}s=u!==null?u[1]:null}m=m!==null?["filters"].concat(m):null;(h=i)&&m===null&&r("filters");v[f]={nextPos:a,result:m};f=m}if(f!==null){i=E();if(i!==null)d=[d,g,f,i];else{d=null;
			a=c}}else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}c=d!==null?["reference",d[1],d[2]]:null;(h=b)&&c===null&&r("reference");v[n]={nextPos:a,result:c};return c}function L(){var n="special@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a,d=C();if(d!==null){if(p.substr(a,1)==="~"){var g="~";a+=1}else{g=null;h&&r('"~"')}if(g!==null){var f=I();if(f!==null){var i=E();if(i!==null)d=[d,g,f,i];else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}c=d!==null?["special",d[2]]:
			null;(h=b)&&c===null&&r("special");v[n]={nextPos:a,result:c};return c}function N(){var n="identifier@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=V();c=c!==null?X(["path"].concat(c),n):null;if(c!==null)c=c;else{c=I();c=c!==null?X(["key",c],n):null;c=c!==null?c:null}(h=b)&&c===null&&r("identifier");v[n]={nextPos:a,result:c};return c}function V(){var n="path@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a,d=I();d=d!==null?d:"";if(d!==null){var g=a;if(p.substr(a,1)===
			"."){var f=".";a+=1}else{f=null;h&&r('"."')}if(f!==null){var i=I();if(i!==null)f=[f,i];else{f=null;a=g}}else{f=null;a=g}g=f!==null?f[1]:null;if(g!==null)for(var m=[];g!==null;){m.push(g);g=a;if(p.substr(a,1)==="."){f=".";a+=1}else{f=null;h&&r('"."')}if(f!==null){i=I();if(i!==null)f=[f,i];else{f=null;a=g}}else{f=null;a=g}g=f!==null?f[1]:null}else m=null;if(m!==null)d=[d,m];else{d=null;a=c}}else{d=null;a=c}c=d!==null?function(s,u){if(s){u.unshift(s);return[false,u]}return[true,u]}(d[0],d[1]):null;if(c!==
			null)c=c;else{if(p.substr(a,1)==="."){c=".";a+=1}else{c=null;h&&r('"."')}c=c!==null?[true,[]]:null;c=c!==null?c:null}(h=b)&&c===null&&r("path");v[n]={nextPos:a,result:c};return c}function I(){var n="key@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a;if(p.substr(a).match(/^[a-zA-Z_$]/)!==null){var d=p.charAt(a);a++}else{d=null;h&&r("[a-zA-Z_$]")}if(d!==null){var g=[];if(p.substr(a).match(/^[0-9a-zA-Z_$]/)!==null){var f=p.charAt(a);a++}else{f=null;h&&r("[0-9a-zA-Z_$]")}for(;f!==null;){g.push(f);
			if(p.substr(a).match(/^[0-9a-zA-Z_$]/)!==null){f=p.charAt(a);a++}else{f=null;h&&r("[0-9a-zA-Z_$]")}}if(g!==null)d=[d,g];else{d=null;a=c}}else{d=null;a=c}c=d!==null?d[0]+d[1].join(""):null;(h=b)&&c===null&&r("key");v[n]={nextPos:a,result:c};return c}function Q(){var n="inline@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a;if(p.substr(a,1)==='"'){var d='"';a+=1}else{d=null;h&&r('"\\""')}if(d!==null){if(p.substr(a,1)==='"'){var g='"';a+=1}else{g=null;h&&r('"\\""')}if(g!==null)d=[d,
			g];else{d=null;a=c}}else{d=null;a=c}c=d!==null?["literal",""]:null;if(c!==null)c=c;else{c=a;if(p.substr(a,1)==='"'){d='"';a+=1}else{d=null;h&&r('"\\""')}if(d!==null){g=e();if(g!==null){if(p.substr(a,1)==='"'){var f='"';a+=1}else{f=null;h&&r('"\\""')}if(f!==null)d=[d,g,f];else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}c=d!==null?["literal",d[1]]:null;if(c!==null)c=c;else{c=a;if(p.substr(a,1)==='"'){d='"';a+=1}else{d=null;h&&r('"\\""')}if(d!==null){f=T();if(f!==null)for(g=[];f!==null;){g.push(f);
			f=T()}else g=null;if(g!==null){if(p.substr(a,1)==='"'){f='"';a+=1}else{f=null;h&&r('"\\""')}if(f!==null)d=[d,g,f];else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}c=d!==null?["body"].concat(d[1]):null;c=c!==null?c:null}}(h=b)&&c===null&&r("inline");v[n]={nextPos:a,result:c};return c}function T(){var n="inline_part@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=L();if(b!==null)b=b;else{b=F();if(b!==null)b=b;else{b=e();b=b!==null?["buffer",b]:null;b=b!==null?b:null}}v[n]={nextPos:a,result:b};return b}
			function e(){var n="literal@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a,d=a,g=h;h=false;var f=x();h=g;if(f===null)g="";else{g=null;a=d}if(g!==null){f=a;d=h;h=false;var i=M();h=d;if(i===null)d="";else{d=null;a=f}if(d!==null){f=k();if(f!==null)f=f;else{if(p.substr(a).match(/^[^"]/)!==null){f=p.charAt(a);a++}else{f=null;h&&r('[^"]')}f=f!==null?f:null}if(f!==null)g=[g,d,f];else{g=null;a=c}}else{g=null;a=c}}else{g=null;a=c}c=g!==null?g[2]:null;if(c!==null)for(var m=[];c!==null;){m.push(c);
			d=c=a;g=h;h=false;f=x();h=g;if(f===null)g="";else{g=null;a=d}if(g!==null){f=a;d=h;h=false;i=M();h=d;if(i===null)d="";else{d=null;a=f}if(d!==null){f=k();if(f!==null)f=f;else{if(p.substr(a).match(/^[^"]/)!==null){f=p.charAt(a);a++}else{f=null;h&&r('[^"]')}f=f!==null?f:null}if(f!==null)g=[g,d,f];else{g=null;a=c}}else{g=null;a=c}}else{g=null;a=c}c=g!==null?g[2]:null}else m=null;m=m!==null?m.join(""):null;(h=b)&&m===null&&r("literal");v[n]={nextPos:a,result:m};return m}function k(){var n="esc@"+a,b=v[n];
			if(b){a=b.nextPos;return b.result}if(p.substr(a,2)==='\\"'){b='\\"';a+=2}else{b=null;h&&r('"\\\\\\""')}b=b!==null?'"':null;v[n]={nextPos:a,result:b};return b}function l(){var n="comment@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=h;h=false;var c=a;if(p.substr(a,2)==="{!"){var d="{!";a+=2}else{d=null;h&&r('"{!"')}if(d!==null){var g=[],f=a,i=a,m=h;h=false;if(p.substr(a,2)==="!}"){var s="!}";a+=2}else{s=null;h&&r('"!}"')}h=m;if(s===null)m="";else{m=null;a=i}if(m!==null){if(p.length>a){i=p.charAt(a);
			a++}else{i=null;h&&r("any character")}if(i!==null)i=[m,i];else{i=null;a=f}}else{i=null;a=f}for(f=i!==null?i[1]:null;f!==null;){g.push(f);i=f=a;m=h;h=false;if(p.substr(a,2)==="!}"){s="!}";a+=2}else{s=null;h&&r('"!}"')}h=m;if(s===null)m="";else{m=null;a=i}if(m!==null){if(p.length>a){i=p.charAt(a);a++}else{i=null;h&&r("any character")}if(i!==null)i=[m,i];else{i=null;a=f}}else{i=null;a=f}f=i!==null?i[1]:null}if(g!==null){if(p.substr(a,2)==="!}"){f="!}";a+=2}else{f=null;h&&r('"!}"')}if(f!==null)d=[d,g,
			f];else{d=null;a=c}}else{d=null;a=c}}else{d=null;a=c}c=d!==null?["comment",d[1].join("")]:null;(h=b)&&c===null&&r("comment");v[n]={nextPos:a,result:c};return c}function x(){var n="tag@"+a,b=v[n];if(b){a=b.nextPos;return b.result}b=a;var c=C();if(c!==null){if(p.substr(a).match(/^[#?^><+%:@\/~%]/)!==null){var d=p.charAt(a);a++}else{d=null;h&&r("[#?^><+%:@\\/~%]")}if(d!==null){var g=a,f=a,i=h;h=false;var m=E();h=i;if(m===null)i="";else{i=null;a=f}if(i!==null){f=a;m=h;h=false;var s=M();h=m;if(s===null)m=
			"";else{m=null;a=f}if(m!==null){if(p.length>a){f=p.charAt(a);a++}else{f=null;h&&r("any character")}if(f!==null)i=[i,m,f];else{i=null;a=g}}else{i=null;a=g}}else{i=null;a=g}if(i!==null)for(var u=[];i!==null;){u.push(i);f=g=a;i=h;h=false;m=E();h=i;if(m===null)i="";else{i=null;a=f}if(i!==null){f=a;m=h;h=false;s=M();h=m;if(s===null)m="";else{m=null;a=f}if(m!==null){if(p.length>a){f=p.charAt(a);a++}else{f=null;h&&r("any character")}if(f!==null)i=[i,m,f];else{i=null;a=g}}else{i=null;a=g}}else{i=null;a=g}}else u=
			null;if(u!==null){g=E();if(g!==null)c=[c,d,u,g];else{c=null;a=b}}else{c=null;a=b}}else{c=null;a=b}}else{c=null;a=b}if(c!==null)b=c;else{b=F();b=b!==null?b:null}v[n]={nextPos:a,result:b};return b}function C(){var n="ld@"+a,b=v[n];if(b){a=b.nextPos;return b.result}if(p.substr(a,1)==="{"){b="{";a+=1}else{b=null;h&&r('"{"')}v[n]={nextPos:a,result:b};return b}function E(){var n="rd@"+a,b=v[n];if(b){a=b.nextPos;return b.result}if(p.substr(a,1)==="}"){b="}";a+=1}else{b=null;h&&r('"}"')}v[n]={nextPos:a,result:b};
			return b}function M(){var n="eol@"+a,b=v[n];if(b){a=b.nextPos;return b.result}if(p.substr(a,1)==="\n"){b="\n";a+=1}else{b=null;h&&r('"\\n"')}if(b!==null)b=b;else{if(p.substr(a,2)==="\r\n"){b="\r\n";a+=2}else{b=null;h&&r('"\\r\\n"')}if(b!==null)b=b;else{if(p.substr(a,1)==="\r"){b="\r";a+=1}else{b=null;h&&r('"\\r"')}if(b!==null)b=b;else{if(p.substr(a,1)==="\u2028"){b="\u2028";a+=1}else{b=null;h&&r('"\\u2028"')}if(b!==null)b=b;else{if(p.substr(a,1)==="\u2029"){b="\u2029";a+=1}else{b=null;h&&r('"\\u2029"')}b=
			b!==null?b:null}}}}v[n]={nextPos:a,result:b};return b}function U(){var n="ws@"+a,b=v[n];if(b){a=b.nextPos;return b.result}if(p.substr(a).match(/^[\t\u000b\u000c \xA0\uFEFF]/)!==null){b=p.charAt(a);a++}else{b=null;h&&r("[\t\u000b\u000c \\xA0\\uFEFF]")}v[n]={nextPos:a,result:b};return b}function Y(){var n=function(c){c.sort();for(var d=null,g=[],f=0;f<c.length;f++)if(c[f]!==d){g.push(c[f]);d=c[f]}switch(g.length){case 0:return"end of input";case 1:return g[0];default:return g.slice(0,g.length-1).join(", ")+
			" or "+g[g.length-1]}}(W),b=Math.max(a,R);b=b<p.length?B(p.charAt(b)):"end of input";return"Expected "+n+" but "+b+" found."}function Z(){for(var n=1,b=1,c=false,d=0;d<R;d++){var g=p.charAt(d);if(g==="\n"){c||n++;b=1;c=false}else if(g==="\r"|g==="\u2028"||g==="\u2029"){n++;b=1;c=true}else{b++;c=false}}return{line:n,column:b}}function X(n,b){n.text=p.substring(b.split("@")[1],a);return n}var a=0,h=true,R=0,W=[],v={},S=K();if(S===null||a!==p.length){S=Z();throw new SyntaxError(Y(),S.line,S.column);
			}return S},toSource:function(){return this._source}};H.SyntaxError=function(p,J,B){this.name="SyntaxError";this.message=p;this.line=J;this.column=B};H.SyntaxError.prototype=Error.prototype;return H}();o.parse=z.parse})(typeof exports!=="undefined"?exports:window.dust);		
		}
		
		if(!window.jQuery.jqote) {
			/* jQote2 - client-side Javascript templating engine | Copyright (C) 2010, aefxx | http://aefxx.com/ | Dual licensed under the WTFPL v2 or MIT (X11) licenses | WTFPL v2 Copyright (C) 2004, Sam Hocevar | Date: Thu, Oct 21st, 2010 | Version: 0.9.7 */
			(function($){var _=false,E1="UndefinedTemplateError",E2="TemplateCompilationError",E3="TemplateExecutionError",A="[object Array]",S="[object String]",F="[object Function]",n=1,c="%",q=/^[^<]*(<[\w\W]+>)[^>]*$/,ts=Object.prototype.toString;function r(e,x){throw ($.extend(e,x),e)}function dns(f) {var a=[];if(ts.call(f)!==A)return _;for(var i=0,l=f.length;i<l;i++)a[i]=f[i].jqote_id;return a.length?a.sort().join('.').replace(/(\b\d+\b)\.(?:\1(\.|$))+/g,"$1$2"):_}function l(s,t){var f,g=[],t=t||c,x=ts.call(s);if(x===F)return s.jqote_id?[s]:_;if(x!==A)return[$.jqotec(s,t)];if(x===A)for(var i=0,l=s.length;i<l;i++)return g.length?g:_}$.fn.extend({jqote:function(x,y){var x=ts.call(x)===A?x:[x],d="";this.each(function(i){var f=$.jqotec(this,y);for(var j=0;j<x.length;j++)d+=f.call(x[j],i,j,x,f)});return d}});$.each({app:"append",pre:"prepend",sub:"html"},function(x,y){$.fn["jqote"+x]=function(e,d,t){var p,r,s=$.jqote(e,d,t),$$=!q.test(s)?function(s){return $(document.createTextNode(s))}:$;if(!!(p=dns(l(e))))r=new RegExp("(^|\\.)"+p.split(".").join("\\.(.*)?")+"(\\.|$)");return this.each(function(){var z=$$(s);$(this)[y](z);(z[0].nodeType===3?$(this):z).trigger("jqote."+x,[z,r])})}});$.extend({jqote:function(e,d,t){var s="",t=t||c,f=l(e);if(f===_)r(new Error("Empty or undefined template passed to $.jqote"),{type:E1});d=ts.call(d)!==A?[d]:d;for(var i=0,m=f.length;i<m;i++)for(var j=0;j<d.length;j++)s+=f[i].call(d[j],i,j,d,f[i]);return s},jqotec:function(x,t){var h,e,y,t=t||c,z=ts.call(x);if(z===S&&q.test(x)){e=y=x;if(h=$.jqotecache[x])return h}else{e=z===S||x.nodeType?$(x):x instanceof jQuery?x:null;if(!e[0]||!(y=e[0].innerHTML)&&!(y=e.text()))r(new Error("Empty or undefined template passed to $.jqotec"),{type:E1});if(h=$.jqotecache[$.data(e[0],"jqote_id")])return h}var s="",i,a=y.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g,"").split("<"+t).join(t+">\x1b").split(t+">");for(var m=0,k=a.length;m<k;m++)s+=a[m].charAt(0)!=="\x1b"?"out+='"+a[m].replace(/(\\|["'])/g,"\\$1")+"'":(a[m].charAt(1)==="="?";out+=("+a[m].substr(2)+");":(a[m].charAt(1)==="!"?";out+=$.jqotenc(("+a[m].substr(2)+"));":";"+a[m].substr(1)));s="try{"+('var out="";'+s+";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=")+'}catch(e){e.type="'+E3+'";e.args=arguments;e.template=arguments.callee.toString();throw e;}';try{var f=new Function("i, j, data, fn",s)}catch(e){r(e,{type:E2})}i=e instanceof jQuery?$.data(e[0],"jqote_id",n):e;return $.jqotecache[i]=(f.jqote_id=n++,f)},jqotefn:function(e){var t=ts.call(e),i=t===S&&q.test(e)?e:$.data($(e)[0],"jqote_id");return $.jqotecache[i]||_},jqotetag:function(s){if(ts.call(s)===S)c=s},jqotenc:function(s){return s.toString().replace(/&(?!\w+;)/g,'&#38;').split('<').join('&#60;').split('>').join('&#62;').split('"').join('&#34;').split("'").join('&#39;')},jqotecache:{}});$.event.special.jqote={add:function(o){var n,h=o.handler,d=!o.data?[]:ts.call(o.data)!==A?[o.data]:o.data;if(!o.namespace)o.namespace="app.pre.sub";if(!d.length||!(n=dns(l(d))))return;o.handler=function(e,m,r){return !r||r.test(n)?h.apply(this,[e,m]):null}}}})(jQuery);
		}
		
		console.log(window.dust);
		
		DarkTip.init();
	}
}]);
