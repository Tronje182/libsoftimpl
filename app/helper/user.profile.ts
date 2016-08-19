// user context
export class UserProfile {
    constructor(
    private role: string,
    private weakVision: boolean,
    private computerSelfEfficiacy: boolean)
    {};

    // Set role of user
    public setUserRole(role: string){
        this.role = role;
    };

    // True if user has weak eyesight, false otherwise
    public setWeakVision(hasWeakVision: boolean){
        this.weakVision = hasWeakVision;
    };

    // True if user has high computer self-efficiacy, false otherwise
    public setComputerSelfEfficiacy(computerSelfEfficiacy: boolean){
        this.computerSelfEfficiacy = computerSelfEfficiacy;
    };

    // Get role of user
    public getUserRole(): string{
        return this.role;
    };

    // Get if user has weak vision
    public hasWeakVision(): boolean{
        return this.weakVision;
    };

    // Get if user has high computer self-efficiacy
    public hasHighComputerSelfEfficiacy(): boolean{
        return this.computerSelfEfficiacy;
    };
}
