({
    block: 'page',
    title: 'Рассылка Guitareffects.ru',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'js', url: '_index.js' }
    ],
    content:[
    	{
    		block: 'content',
    		content: [
    			{
    				block: 'header'
    			},
    			{
    				block: 'user',
    				content: 'Добрый день + USER'
    			},
    			{
    				block: 'mess',
    				content: 'mess'
    			}
    		]
    	}
    ]
})