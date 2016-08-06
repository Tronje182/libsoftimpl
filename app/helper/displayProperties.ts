export class DisplayProperties {
    private type: string;
    private role: string;


    //General Layout
    public headerBarClass: string;
    public routerOutletClass: string;
    public hideOnMobile: string;
    public hideOnDesktop: string;

    //tables
    public tableClass: string;

    //navigation
    public navbarContainerClass: string;
    public navbarWrapperClass: string;
    public navbarHeaderClass: string;
    public navbarCollapseClass: string;
    public navbarItemListClass: string;

    //search
    public searchInputGroupClass: string;

    //boolean
    public isMobile: boolean;

    constructor()
    {
        this.type = '';
        this.role = '';
        
        //General Layout
        this.headerBarClass = '';
        this.routerOutletClass = '';
        this.hideOnMobile = '';
        this.hideOnDesktop = '';

        //tables
        this.tableClass = ''

        //navigation
        this.navbarContainerClass = '';
        this.navbarWrapperClass = '';
        this.navbarHeaderClass = '';
        this.navbarCollapseClass = '';
        this.navbarItemListClass = '';

        //search
        this.searchInputGroupClass = '';
    };

    public setType(v: string){
        this.type = v;
    }

    public setRole(v:string){
        this.role = v;
    }

    public setTableClass(v:string){
        this.tableClass = v;
    }
}
