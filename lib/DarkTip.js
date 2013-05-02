var DarkTip = (function (window, document, undefined)
{
	var console = window.console || { 'log': function(message) { return false; }};

	var Factory = {

		'makePrototypeCheck': function(expected)
		{
			return function(test)
			{
				return (Object.prototype.toString.call(test) === expected);
			};
		}
	};

	var TriggerGroup = function(name, data)
	{
		this.triggers = [];

		if (Core.isUndefined(name)) { throw new Error('trigger group register >>> required parameter "name" is missing'); }
		if (!Core.isString(name)) { throw new Error('trigger group register >>> required parameter "name" must be a string'); }
		if (Core.isTriggerGroupRegistered(name)) { throw new Error('trigger group register >>> name "' + name + '" already exists'); }

		if (Core.isUndefined(data)) { throw new Error('trigger group regsiter (' + name + ') >>> required parameter "data" is missing'); }
		if (!Core.isObject(data)) { throw new Error('trigger group regsiter (' + name + ') >>> required parameter "data" must be an object'); }

		if (Core.isUndefined(data['selector'])) { throw new Error('trigger group register (' + name + ') >>> required parameter "data.selector" is missing'); }
		if (!Core.isString(data['selector'])) { throw new Error('trigger group register (' + name + ') >>> required parameter "data.selector" must be a string'); }

		if (Core.isUndefined(data['extractor'])) { throw new Error('trigger group register (' + name + ') >>> required parameter "data.extractor" is missing'); }
		if (!Core.isFunction(data['extractor'])) { throw new Error('trigger group register (' + name + ') >>> required parameter "data.extractor" must be a function'); }

		this.addTrigger = function(trigger)
		{
			this.triggers.push(trigger);

			console.log('added trigger to triggergroup "' + name + '".');
			console.log(trigger);
		};

		this.findTrigger = function(element)
		{
			var triggercount = this.triggers.length;
			var testthis     = data['extractor'](element);

			for (var i = (triggercount - 1); i >= 0; i--)
			{
				var result = this.triggers[i].doesApply(testthis);

				if (result)
				{
					var params = this.triggers[i].getParams(result);

					Core.initTooltip();

					break;
				}
			}
		};

		// func: get trigger to apply (later added = higher priority)
	};

	var Trigger = function(module, triggergroup, data)
	{
		if (Core.isUndefined(module)) { throw new Error('trigger regsiter >>> required parameter "module" is missing'); }

		if (Core.isUndefined(triggergroup)) { throw new Error('trigger regsiter (' + module + ') >>> required parameter "triggergroup" is missing'); }
		if (!Core.isTriggerGroupRegistered(triggergroup)) { throw new Error('trigger regsiter (' + module + ') >>> triggergroup "' + triggergroup + '" does not exist'); }

		if (Core.isUndefined(data)) { throw new Error('trigger regsiter (' + module + ':' + triggergroup + ') >>> required parameter "data" is missing'); }
		if (!Core.isObject(data)) { throw new Error('trigger regsiter (' + module + ':' + triggergroup + ') >>> parameter "data" must be an object'); }

		if (Core.isUndefined(data['tester'])) { throw new Error('trigger register (' + module + ':' + triggergroup + ') >>> required parameter "data.tester" is missing'); }
		if (!Core.isFunction(data['tester']) && !Core.isRegExp(data['tester'])) { throw new Error('trigger register (' + module + ':' + triggergroup + ') >>> parameter "data.tester" must be a regular expression or function'); }

		if (Core.isUndefined(data['paramizer'])) { throw new Error('trigger register (' + module + ':' + triggergroup + ') >>> required parameter "data.paramizer" is missing'); }
		if (!Core.isFunction(data['paramizer']) && !Core.isObject(data['paramizer'])) { throw new Error('trigger register (' + module + ':' + triggergroup + ') >>> parameter "data.paramizer" must be a function or object'); }

		if (Core.isObject(data['paramizer']) && !Core.isRegExp(data['tester'])) { throw new Error('trigger register (' + module + ':' + triggergroup + ') >>> parameter "data.paramizer" must be a function unless "data.tester" is a regular expession'); }

		this.module = module;

		if (Core.isRegExp(data['tester']))
		{
			this.doesApply = function(testthis)
			{
				return String(testthis).match(data['tester']);
			};
		}
		else
		{
			this.doesApply = data['tester'];
		}

		if (Core.isObject(data['paramizer']))
		{
			this.getParams = function() {};
		}
		else
		{
			this.getParams = data['paramizer'];
		}
	};

	var Core = {

		/* ****************************************************** *\
		 * Startup
		\* ****************************************************** */

		'init': function()
		{
			// foreach trigger group register it's selectors via jQuery

			for (var key in this.triggers)
			{
				var trigger = this.triggers[key];

				console.log(trigger);
			}
		},

		/* ****************************************************** *\
		 * Helpers
		\* ****************************************************** */

		'isUndefined': Factory.makePrototypeCheck('[object Undefined]'),
		'isNumber'   : Factory.makePrototypeCheck('[object Number]'),
		'isString'   : Factory.makePrototypeCheck('[object String]'),
		'isRegExp'   : Factory.makePrototypeCheck('[object RegExp]'),
		'isArray'    : Factory.makePrototypeCheck('[object Array]'),
		'isFunction' : Factory.makePrototypeCheck('[object Function]'),
		'isObject'   : Factory.makePrototypeCheck('[object Object]'),

		/* ****************************************************** *\
		 * Triggers
		\* ****************************************************** */

		'triggergroups': {},

		'isTriggerGroupRegistered': function(name)
		{
			if (typeof this.triggergroups[name] !== 'undefined')
			{
				return true;
			}

			return false;
		},

		'registerTriggerGroup': function(name, data)
		{
			var triggergroup = new TriggerGroup(name, data);

			this.triggergroups[name] = triggergroup;
		},

		'registerTrigger': function(module, triggergroup, data)
		{
			var trigger = new Trigger(module, triggergroup, data);

			this.triggergroups[triggergroup].addTrigger(trigger);
		},

		/* ****************************************************** *\
		 * Module
		\* ****************************************************** */

		'BaseModule': (function()
		{
			var Module = function(data) {

				this.active = false;

				this.activate = function()
				{
					if (this.active === false)
					{
						// if payload is string: fetch content from remote file
						// else: init normally
					}

					return false;
				};

				this.init = function(data)
				{
					var key = '';

					if (!DarkTip.isObject(data))                  { throw new Error('module init >>> No valid data object given'); }
					if (DarkTip.isUndefined(data['name']))        { throw new Error('module init >>> required property "name" is missing'); }
					if (!DarkTip.isString(data['name']))          { throw new Error('module init (' + data['name'] + ') >>> required property "name" must be a string'); }
					if (DarkTip.isModuleRegistered(data['name'])) { throw new Error('module init (' + data['name'] + ') >>> "name" is already in use'); }

					if (!DarkTip.isUndefined(data['inherit']))
					{
						if (!DarkTip.isString(data['inherit']) && !DarkTip.isArray(data['inherit']))
						{
							throw new Error('module init (' + data['name'] + ') >>> optional property "inherit" must be either string or array');
						}

						if (DarkTip.isArray(data['inherit']))
						{
							for(key in data['inherit'])
							{
								if (!DarkTip.isString(data['inherit'][key]))
								{
									throw new Error('module init (' + data['name'] + ') >>> optional property "inherit" must be an array of strings');
								}
								else
								{
									if (!DarkTip.isModuleRegistered(data['inherit'][key]))
									{
										throw new Error('module init (' + data['name'] + ') >>> parent module "' + data['inherit'][key] + '" is missing');
									}
								}
							}
						}

						if (DarkTip.isString(data['inherit']))
						{
							if (!DarkTip.isModuleRegistered(data['inherit']))
							{
								throw new Error('module init (' + data['name'] + ') >>> parent module "' + data['inherit'] + '" is missing');
							}
						}
					}

					var triggergroup = '';

					if (!DarkTip.isUndefined(data['triggergroups']))
					{
						if (!DarkTip.isObject(data['triggergroups']))
						{
							throw new Error('module init (' + data['name'] + ') >>> optional property "triggergroups" must be an object');
						}

						for (key in data['triggergroups'])
						{
							triggergroup = data['triggergroups'][key];

							DarkTip.registerTriggerGroup(key, triggergroup);
						}
					}

					if (DarkTip.isUndefined(data['triggers'])) { throw new Error('module init (' + data['name'] + ') >>> required property "triggers" is missing'       ); }
					if (!DarkTip.isObject(data['triggers']))   { throw new Error('module init (' + data['name'] + ') >>> required property "triggers" must be an object'); }

					for(var triggergroupname in data['triggers'])
					{
						triggergroup = data['triggers'][triggergroupname];

						if (!DarkTip.isArray(triggergroup)) { throw new Error('module init (' + data['name'] + ') >>> trigger group "' + triggergroupname + '" is not an array'); }

						for (key in triggergroup)
						{
							DarkTip.registerTrigger(data['name'], triggergroupname, triggergroup[key]);
						}
					}







					// insert module payload
				};

				this.get = function(key)
				{
					// look in this module
					if (typeof this[key] !== 'undefined')
					{
						return this[key];
					}

					// look in each parent module
					var parents = this.getParentModuleNames();

					for (var modulename in parents)
					{
						// return the lowest depth result, parent module order matters (take first)
						return DarkTip.modules[modulename].get(key);
					}

					return undefined;
				};

				this.getParentModuleNames = function()
				{
					// return all parent module names in order of definition
				};
			};

			return new Module();
		}
		)(),

		/* ****************************************************** *\
		 * Module Handling
		\* ****************************************************** */

		'modules': {},

		'registerModule': function(data)
		{
			var SubModule = function(data)
			{
				this.init(data);
			};

			SubModule.prototype             = this.BaseModule;
			SubModule.prototype.constructor = SubModule;

			var module = new SubModule(data);

			this.modules[data.name] = module;

			// foreach triggergroup, regsiter it -> this.registerTriggerGroup(...)
			// foreach trigger, regsiter it -> this.registerTrigger(...)
		},

		'isModuleRegistered': function(name)
		{
			if (typeof this.modules[name] !== 'undefined')
			{
				return true;
			}

			return false;
		},

		/* ****************************************************** *\
		 * Templating
		\* ****************************************************** */

		/* ****************************************************** *\
		 * Internationalization
		\* ****************************************************** */

		'i18n': {
			'formaters': {},
			'messages' : {}
		},

		'addLocale': function(locale)
		{
			this.i18n.formaters[locale] = new window.MessageFormat(locale);
			this.i18n.messages[locale]  = {};
		},

		'addLocaleString': function(locale, key, string)
		{
			if (typeof this.i18n.formaters[locale] === 'undefined')
			{
				throw new Error('Locale not found: '+locale);
			}
			else
			{
				this.i18n.messages[locale][key] = this.i18n.formaters[locale].compile(string);

				return true;
			}
		},

		'getLocaleString': function(locale, key, params)
		{
			if (typeof this.i18n.messages[locale][key] === 'undefined')
			{
				throw new Error('Locale key not found: '+key+' ('+locale+')');
			}
			else
			{
				return this.i18n.messages[locale][key](params);
			}
		},

		/* ****************************************************** *\
		 * Internationalization
		\* ****************************************************** */

		'executeTrigger': function(a, b, c)
		{

		}

		/* ****************************************************** *\
		 * End
		\* ****************************************************** */

	};

	return Core;

})(window, window.document);