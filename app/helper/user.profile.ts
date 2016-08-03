export class UserProfile {
    constructor(
    public profile: string)
    {};

    public setUserProfile = function(profile){
        this.profile = profile;
    };
}
