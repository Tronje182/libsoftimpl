// platform context
export class PlatformProfile {
    constructor(
    private type: string)
    {};

    // set platform type to 'mobile' or 'desktop'
    public setPlatformType(type: string){
        this.type = type;
    };

    // get platform type
    public getPlatformType(): string{
        return this.type;
    };
}
