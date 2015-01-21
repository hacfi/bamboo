module.exports = {
	example: {
		src: ['./temp/*.twig'],          // source files array (supports minimatch)
		overwrite : true,
		replacements: [{
				from: 'StoreTemplateBundle::Layout/',                   // string replacement
				to: ''
			},
			{
				from: 'StoreTemplateBundle::Modules/',                   // string replacement
				to: ''
			},
			{
				from: 'StoreTemplateBundle::Pages/',                   // string replacement
				to: ''
			},
			{
				from: 'StoreTemplateBundle::',                   // string replacement
				to: ''
			},
			{
				from: '@StoreTemplate/Layout/',                   // string replacement
				to: ''
			},
			{
				from: '@StoreTemplate/Modules/',                   // string replacement
				to: ''
			},
			{
				from: '@StoreTemplate/Pages/',                   // string replacement
				to: ''
			},
			{
				from: '@StoreTemplate/',                   // string replacement
				to: ''
			},
			{
				from: "render url('store_currency_nav')",                   // string replacement
				to: "include ('currency-list.html.twig')"
			},			{
				from: "render url('store_user_nav')",                   // string replacement
				to: "include ('user-nav.html.twig')"
			},
			{
				from: "render url('store_user_top')",                   // string replacement
				to: "include ('topbar.html.twig')"
			},
			{
				from: "render url('store_cart_nav')",                   // string replacement
				to: "include ('cart-nav.html.twig')"
			},
			{
				from: "render url('store_categories_nav')",                   // string replacement
				to: "include ('category-list.html.twig')"
			},
			{
				from: 'src="//',                   // string replacement
				to: 'src="http://'
			}]
	}
}