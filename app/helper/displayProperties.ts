export class DisplayProperties {
    private type: string;
    private role: string;


    //General Layout
    public headerBarClass: string;
    public routerOutletClass: string;

    //tables
    public tableClass: string;

    //navigation
    public navbarContainerClass: string;
    public navbarWrapperClass: string;
    public navbarHeaderClass: string;
    public navbarCollapseClass: string;
    public navbarItemListClass: string;

    constructor()
    {
        this.type = '';
        this.role = '';
        
        //General Layout
        this.headerBarClass = '';
        this.routerOutletClass = '';

        //tables
        this.tableClass = ''

        //navigation
        this.navbarContainerClass = '';
        this.navbarWrapperClass = '';
        this.navbarHeaderClass = '';
        this.navbarCollapseClass = '';
        this.navbarItemListClass = '';
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
