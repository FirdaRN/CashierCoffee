var styles = {
    data(){
        return {
            css_vuetable:{
                tableClass: "table table-striped table-border-top table-hover",
                tableWrapper: "table-responsive"
            },
            css_pagination: {
                wrapperClass: 'vuetable-pagination-component right floated right aligned six wide column',
                icons: {
                    first: '',
                    prev: '',
                    next: '',
                    last: ''
                },                
                activeClass: '',
                linkClass: 'btn paginate_button',
                pageClass: 'btn paginate_button'
            },
        }
    }
}

export default styles
