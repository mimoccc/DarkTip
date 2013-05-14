var DarkTip = (function (window, document, undefined)
{
	var console = window.console || { 'log': function(message) { return false; }};

	/* ########################################################################## *\
	 * ### Factory ############################################################## *
	\* ########################################################################## */

	var Factory = {

		'makePrototypeCheck': function(expected)
		{
			return function(test)
			{
				return (Object.prototype.toString.call(test) === expected);
			};
		}
	};

	/* ########################################################################## *\
	 * ### Validator ############################################################ *
	\* ########################################################################## */

	var Validator = {

		'isUndefined': Factory.makePrototypeCheck('[object Undefined]'),
		'isNumber'   : Factory.makePrototypeCheck('[object Number]'),
		'isString'   : Factory.makePrototypeCheck('[object String]'),
		'isRegExp'   : Factory.makePrototypeCheck('[object RegExp]'),
		'isArray'    : Factory.makePrototypeCheck('[object Array]'),
		'isFunction' : Factory.makePrototypeCheck('[object Function]'),
		'isObject'   : Factory.makePrototypeCheck('[object Object]'),

		'throwError' : function(message, context, context_data)
		{
			var text = '';

			if (!Validator.isUndefined(context))
			{
				text = context;

				if (!Validator.isUndefined(context_data))
				{
					if (Validator.isString(context_data))
					{
						text = text + ' (' + context_data + ')';
					}

					if (Validator.isArray(context_data))
					{
						text = text + ' (' + context_data.join(':') + ')';
					}
				}

				if (!Validator.isUndefined(message))
				{
					text = text + ' >>> ';
				}
			}

			if (!Validator.isUndefined(message))
			{
				text = text + message;
			}

			throw new Error(text);
		}
	};

	/* ########################################################################## *\
	 * ### TriggerGroup ######################################################### *
	\* ########################################################################## */

	var TriggerGroup = function(name, data)
	{
		this.triggers = [];

		if (Validator.isUndefined(name)) { Validator.throwError('required parameter "name" is missing', 'trigger group register'); }
		if (!Validator.isString(name)) { Validator.throwError('required parameter "name" must be a string', 'trigger group register'); }
		if (Core.isTriggerGroupRegistered(name)) { Validator.throwError('name "' + name + '" already exists', 'trigger group register'); }

		if (Validator.isUndefined(data)) { Validator.throwError('required parameter "data" is missing', 'trigger group register', name); }
		if (!Validator.isObject(data)) { Validator.throwError('required parameter "data" must be an object', 'trigger group register', name); }

		if (Validator.isUndefined(data['event'])) { data['event'] = 'mouseenter'; }
		if (!Validator.isString(data['event'])) { Validator.throwError('required parameter "data.event" must be a string', 'trigger group register', name); }

		if (Validator.isUndefined(data['selector'])) { Validator.throwError('required parameter "data.selector" is missing', 'trigger group register', name); }
		if (!Validator.isString(data['selector'])) { Validator.throwError('required parameter "data.selector" must be a string', 'trigger group register', name); }

		if (Validator.isUndefined(data['extractor'])) { Validator.throwError('required parameter "data.extractor" is missing', 'trigger group register', name); }
		if (!Validator.isFunction(data['extractor'])) {  Validator.throwError('required parameter "data.extractor" must be a function', 'trigger group register', name); }

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

		this.registerEvent = function()
		{
			var that = this;

			window.jQuery(document).on(data['event'], data['selector'], function(e)
			{
				that.findTrigger(this);
			});
		};
	};

	/* ########################################################################## *\
	 * ### Trigger ############################################################## *
	\* ########################################################################## */

	var Trigger = function(module, data)
	{
		if (Validator.isUndefined(module)) { Validator.throwError('required parameter "module" is missing', 'trigger register'); }
		if (!Validator.isString(module)) { Validator.throwError('required parameter "module" must be a string', 'trigger register'); }

		if (Validator.isUndefined(data)) { Validator.throwError('required parameter "data" is missing', 'trigger register', module); }
		if (!Validator.isObject(data)) { Validator.throwError('parameter "data" must be an object', 'trigger register', module); }

		if (Validator.isUndefined(data['tester'])) { Validator.throwError('required parameter "data.tester" is missing', 'trigger register', module); }
		if (!Validator.isFunction(data['tester']) && !Validator.isRegExp(data['tester'])) { Validator.throwError('parameter "data.tester" must be a regular expression or function', 'trigger register', module); }

		if (Validator.isUndefined(data['paramizer'])) { Validator.throwError('required parameter "data.paramizer" is missing', 'trigger register', module); }
		if (!Validator.isFunction(data['paramizer']) && !Validator.isObject(data['paramizer'])) { Validator.throwError('parameter "data.paramizer" must be a function or object', 'trigger register', module); }

		if (Validator.isObject(data['paramizer']) && !Validator.isRegExp(data['tester'])) { Validator.throwError('parameter "data.paramizer" must be a function unless "data.tester" is a regular expession', 'trigger register', module); }

		this.module = module;

		if (Validator.isRegExp(data['tester']))
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

		if (Validator.isObject(data['paramizer']))
		{
			this.getParams = function(result)
			{
				var params = {};

				for (var p in data['paramizer'])
				{
					params[data['paramizer'][p]] = result[p];
				}

				return params;
			};
		}
		else
		{
			this.getParams = data['paramizer'];
		}
	};

	/* ########################################################################## *\
	 * ### Module ############################################################### *
	\* ########################################################################## */

	var Module = function(data) {

		var key;

		if (Validator.isUndefined(data)) { Validator.throwError('required parameter "data" is missing', 'module init'); }
		if (!Validator.isObject(data)) { Validator.throwError('required parameter "data" must be an object', 'module init'); }

		if (Validator.isUndefined(data['name'])) { Validator.throwError('required property "data.name" is missing', 'module init'); }
		if (!Validator.isString(data['name'])) { Validator.throwError('required property "data.name" must be a string', 'module init'); }
		if (Core.isModuleRegistered(data['name'])) { Validator.throwError('data.name "' + data['name'] + '" already exists', 'module init'); }

		if (!Validator.isUndefined(data['inherit']))
		{
			if (!Validator.isString(data['inherit']) && !Validator.isArray(data['inherit']))
			{
				Validator.throwError('optional property "data.inherit" must be a string or array', 'module init', data['name']);
			}

			if (Validator.isArray(data['inherit']))
			{
				for(key in data['inherit'])
				{
					if (!Validator.isString(data['inherit'][key]))
					{
						Validator.throwError('optional property "data.inherit.' + key + '" must be a string', 'module init', data['name']);
					}
					else
					{
						if (!Core.isModuleRegistered(data['inherit'][key]))
						{
							Validator.throwError('parent module "' + data['inherit'][key] + '" is invalid', 'module init', data['name']);
						}
					}
				}
			}

			if (Validator.isString(data['inherit']))
			{
				if (!Core.isModuleRegistered(data['inherit']))
				{
					Validator.throwError('parent module "' + data['inherit'] + '" is invalid', 'module init', data['name']);
				}

				data['inherit'] = [data['inherit']];
			}
		}
		else
		{
			data['inherit'] = [];
		}

		if (!Validator.isUndefined(data['triggergroups']))
		{
			if (!Validator.isObject(data['triggergroups']))
			{
				Validator.throwError('optional property "data.triggergroups" must be an object', 'module init', data['name']);
			}

			for (key in data['triggergroups'])
			{
				Core.registerTriggerGroup(key, data['triggergroups'][key]);
			}
		}

		if (!Validator.isUndefined(data['triggers']))
		{
			if (!Validator.isObject(data['triggers'])) { Validator.throwError('optional property "data.triggers" must be an object', 'module init', data['name']); }

			for(var triggergroupname in data['triggers'])
			{
				if (!Validator.isArray(data['triggers'][triggergroupname])) { Validator.throwError('trigger group "' + triggergroupname + '" must be an array', 'module init', data['name']); }

				for (var triggerindex in data['triggers'][triggergroupname])
				{
					Core.getTriggerGroup(triggergroupname).addTrigger(new Trigger(data['name'], data['triggers'][triggergroupname][triggerindex]));
				}
			}
		}

		if (Validator.isUndefined(data['payload'])) { Validator.throwError('required property "data.payload" is missing', 'module init', data['name']); }
		if (!Validator.isString(data['payload']) && !Validator.isObject(data['payload'])) { Validator.throwError('required property "data.payload" must be a string or object', 'module init', data['name']); }

		if(Validator.isObject(data['payload']))
		{
			// maps - object
			// validateApiResponse - function
			// templates - obeject
			//
		}

		this.active = false;

		this.activate = function()
		{
			if (this.active === false)
			{
				if (Validator.isString(data['payload']))
				{
					// Fetch payload from remove JSON source
				}
				else
				{
					// Init normally
				}
			}

			return false;
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
				return Core.modules[modulename].get(key);
			}

			return undefined;
		};

		this.getInheritanceStack = function()
		{
			var seen = [];

			// get all parents

			// foreach parent extract all parents and add them to the stack
		};
	};

	/* ########################################################################## *\
	 * ### Core ################################################################# *
	\* ########################################################################## */

	var Core = {

		/* ****************************************************** *\
		 * Startup
		\* ****************************************************** */

		'init': function()
		{
			// foreach trigger group register it's selectors via jQuery

			for (var key in Core.triggergroups)
			{
				Core.triggergroups[key].registerEvent();
			}
		},

		/* ****************************************************** *\
		 * Triggers
		\* ****************************************************** */

		'triggergroups': {},

		'getTriggerGroup': function(name)
		{
			if (Validator.isUndefined(name)) { Validator.throwError('required parameter "name" is missing', 'trigger group access'); }
			if (!Validator.isString(name)) { Validator.throwError('required parameter "name" must be a string', 'trigger group access'); }
			if (!Core.isTriggerGroupRegistered(name)) { Validator.throwError('trigger group "' + name + '" is invalid', 'trigger group access'); }

			return Core.triggergroups[name];
		},

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

		/* ****************************************************** *\
		 * Module Handling
		\* ****************************************************** */

		'modules': {},

		'registerModule': function(data)
		{
			var module = new Module(data);

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