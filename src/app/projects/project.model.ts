export class Project {
    public projectName: string;
    public projectDesc: string;
    public projectImagePath: string;
    public projectPath: string;
    public projectLiveUrl: string;

    constructor(
        projectName: string, 
        projectDesc: string, 
        projectImagePath: string, 
        projectPath: string, 
        projectLiveUrl: string) {
            this.projectName = projectName;
            this.projectDesc = projectDesc;
            this.projectImagePath = projectImagePath;
            this.projectPath = projectPath;
            this.projectLiveUrl = projectLiveUrl;
    }
}