import { PlatformProfile } from '../helper/platform.profile';
import { UserProfile } from '../helper/user.profile';
import {DisplayProperties} from '../helper/displayProperties'

export class Profile {
    private user: UserProfile;
    private platform: PlatformProfile;
    public displayProperties: DisplayProperties;

    constructor()
    {
        this.user = new UserProfile('');
        this.platform = new PlatformProfile ('');
        this.displayProperties = new DisplayProperties();
    };
 
    public setUserProfile(v : string) {
        this.user.profile = v;
    }

    public setPlatformType(v : string){
        this.platform.type = v;
    }
    
    public getUserProfile() : string {
        return this.user.profile;
    }
    
    public getPlatformType() : string {
        return this.platform.type;
    }
}
