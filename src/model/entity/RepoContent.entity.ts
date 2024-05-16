

export class RepoContentEntity{
    name?: string;
    path?: string;
    download_url?: string; 

    constructor(this_class?: RepoContentEntity){
        if(this_class){
            Object.assign(this, this_class)
        }
    }
}