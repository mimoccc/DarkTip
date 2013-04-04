var DarkTip = {

	/* ****************************************************** *\
	 * Triggers
	\* ****************************************************** */

	'triggers': {},

	'registerTriggerGroup': function(name, data)
	{
		//
	},

	'registerTrigger': function(module, data)
	{
		// check if modulename is loaded, else: throw error
		// check if triggergroup exists, else: throw error
		// insert trigger
	}

	/* ****************************************************** *\
	 * Module Init
	\* ****************************************************** */

	'modules': {},

	'registerModule': function(data)
	{
		// check if name is already taken: throw error
		// check if inheriting modules are loaded, else: throw error
		// check if required fields are present, else: throw error
		// insert module payload
		// foreach triggergroup, regsiter it -> this.registerTriggerGroup(...)
		// foreach trigger, regsiter it -> this.registerTrigger(...)
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

	'dummyFunc': function() {}
};