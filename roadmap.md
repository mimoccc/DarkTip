


* Module style
	name		(required, unique)
	inherit		(optional				one or more modules to act a parents to this module)
	trigger		(required				last loaded module wins)
	payload		(required				{} = data || STRING = filename to fetch async on module triggering)

var moduledata = {
	'name'   : STRING,
	'inherit': [ STRING, ... ],
	'trigger': { TRIGGERGROUP: ARRAY OF OBJECTS, ... },
	'payload': { ... } || STRING
};

DarkTip.registerModule(moduledata);