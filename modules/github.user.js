DarkTip.registerModule('github.user', {
	
	'triggers': {
		'explicit': {
			'match' : /^github\-user:(.+)$/i,
			'params': {
				'1': 'username'
			}
		}
	},
	
	'queries': {
		'user': {
			'required' : true,
			'condition': true,
			'call'     : 'https://api.github.com/users/{username}'
		}
	},
	
	'getParams': {
		'explicit': function(result) {
			var params = DarkTip.mapRegex(result, DarkTip._read(DarkTip.route('github.user', 'triggers.explicit.params')));
			return params;
		}
	},
	
	'prepareData': function(state) {
		if(Object.keys(state['data']).length === 0) {
			return false;
		}
		if((typeof state['data']['user']['meta'] !== 'undefined') && (typeof state['data']['user']['meta']['status'] !== 'undefined') && (state['data']['user']['meta']['status'] === 200)) {
			return state['data']['user']['data'];
		}
		return false;
	},
	
	'layout': {
		'width': {
			'core': 350
		}
	},
	
	'templates': {
		'github_user_main':(
			'<div class="tooltip-github-user">' +
				'<div class="avatar">{>github_user_avatar}</div>' +
				'<div class="col-98">' +
					'{>github_user_headline}' +
					'<div class="githubbed">{>github_user_githubbed}</div>' +
					'<div class="personals">{>github_user_personals}</div>' +
				'</div>' +
				'{?bio}<div class="darktip-row bio">{bio}</div>{/bio}' +
			'</div>'				
		),
		'github_user_avatar':(
		 	'<img src="{avatar_url}" alt="{login}" title="{login}" />'
		),
		'github_user_headline':(
			'{?name}<div class="headline-right realname">{name}</div>{/name}' +
			'<div class="darktip-row headline username">{login}</div>'
		),
		'github_user_githubbed':(
			'{?followers}<div class="followers">{#t count=followers}label.followers{/t}</div>{/followers}' +
			'{?following}<div class="following">{#t count=following}label.following{/t}</div>{/following}' +
			'{?public_repos}<div class="public_repos">{#t count=public_repos}label.public_repos{/t}</div>{/public_repos}' +
			'{?public_gists}<div class="public_gists">{#t count=public_gists}label.public_gists{/t}</div>{/public_gists}'
		),
		'github_user_personals':(
			'{?email}<div class="email">{#t email=email}label.email{/t}</div>{/email}' +
			'{?blog}<div class="blog">{#t url=blog}label.blog{/t}</div>{/blog}' +
			'{?company}<div class="company">{#t name=company}label.company{/t}</div>{/company}' +
			'{?location}<div class="location">{#t location=location}label.location{/t}</div>{/location}'
		),
		'github_user_404':(
			'<div class="tooltip-github-user tooltip-404">' +
				'<div class="title">404<span class="sub"> / {#t}not-found{/t}</span></div>' +
				'<div class="darktip-row">{#t name=username}label.username{/t}</div>' +
		    '</div>'
		)
	},
	
	'i18n': {
		'en_US': {
			'loading'  : 'Loading GitHub user...',
			'not-found': 'GitHub user not found',
			'label'    : {
				'username'    : '<span class="label">User:</span> <span class="value">{name}</span>',
				'followers'   : '<label>Followers:</label> {count}',
				'following'   : '<label>Following:</label> {count}',
				'public_repos': '<label>Public repos:</label> {count}',
				'public_gists': '<label>Public gists:</label> {count}',
				'email'       : '<label>Email:</label> {email}',
				'blog'        : '<label>Blog:</label> {url}',
				'company'     : '<label>Company:</label> {name}',
				'location'    : '<label>Location:</label> {location}'
			}
		},
		'de_DE': {
			'loading'  : 'Lade GitHub Benutzer...',
			'not-found': 'GitHub Benutzer nicht gefunden',
			'label'    : {
				'username'    : '<span class="label">Benutzer:</span> <span class="value">{name}</span>',
				'followers'   : '<label>Gefolgt von:</label> {count}',
				'following'   : '<label>Verfolgt:</label> {count}',
				'public_repos': '<label>Öffentliche Repos:</label> {count}',
				'public_gists': '<label>Öffentliche Gists:</label> {count}',
				'email'       : '<label>E-Mail:</label> {email}',
				'blog'        : '<label>Blog:</label> {url}',
				'company'     : '<label>Unternehmen:</label> {name}',
				'location'    : '<label>Standort:</label> {location}'
			}
		}
	}
	
});