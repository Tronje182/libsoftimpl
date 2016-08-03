export class PlatformProfile {
    constructor(
    public type: string)
    {};

    public setPlatformType = function(type){
        this.type = type;
    };
}
