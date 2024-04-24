import { IconBrandGithub } from "@tabler/icons-react";
import {  LinkIcon } from "lucide-react";

interface LinkProps{
    githubUrl : string;
    Link: string;
}

export default function Link({githubUrl, Link} : LinkProps){
    return(
        <>
            <div className="flex gap-2">
                <a href={githubUrl} target="_blank"><IconBrandGithub width={25}/></a>
                <a href={Link} target="_blank"><LinkIcon width={20}/></a>
            </div>
        </>
    )
}