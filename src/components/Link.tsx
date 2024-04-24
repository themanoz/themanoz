import { IconBrandGithub } from "@tabler/icons-react";
import {  LinkIcon } from "lucide-react";

export default function Link({githubUrl, Link}){
    return(
        <>
            <div className="flex gap-2">
                <a href={githubUrl} target="_blank"><IconBrandGithub width={25}/></a>
                <a href={Link} target="_blank"><LinkIcon width={20}/></a>
            </div>
        </>
    )
}