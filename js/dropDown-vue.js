
// vue component to load dynamic menu items filtering by clicked category
var menu = new Vue({
    el: '#drop-down-menu',
    delimiters: ['${', '}$'],
    //template: "#menu",
    data: {
        topics: [],
        showDropDown:'',
        activeMenu: '',
        loading: '', // stores network state, use this to show loading process
        busy: false,
        loaded: false,
        loadingTimeout: null,
        accompaniments: [],
        defaultImageSrc: 'empty-menu-item.png'
    },
    mounted: function () {

    },
    methods: {
    }

});