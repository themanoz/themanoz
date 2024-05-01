import { IconBrandGithub } from "@tabler/icons-react";

interface LinkProps{
    githubUrl : string;
}

export default function Link({githubUrl} : LinkProps){
    return(
        <>
            <div className="flex gap-2">
                <a href={githubUrl} target="_blank"><IconBrandGithub width={25}/></a>
            </div>
        </>
    )
}