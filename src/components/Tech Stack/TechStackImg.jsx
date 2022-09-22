import cpp from "../../Assets/SkillsIcon/cplusplus.svg";
import bootstrap from "../../Assets/SkillsIcon/bootstrap.svg";
import css from "../../Assets/SkillsIcon/css.svg";
import express from "../../Assets/SkillsIcon/express-js-icon.svg";
import git from "../../Assets/SkillsIcon/git.svg";
import hmtl from "../../Assets/SkillsIcon/html.svg";
import javascript from "../../Assets/SkillsIcon/javascript.svg";
import mongodb from "../../Assets/SkillsIcon/mongoDB.svg";
import nodejs from "../../Assets/SkillsIcon/nodejs-icon.svg";
import photoshop from "../../Assets/SkillsIcon/photoshop.svg";
import reacticon from "../../Assets/SkillsIcon/react.svg";
import redux from "../../Assets/SkillsIcon/redux.svg";
import typescript from "../../Assets/SkillsIcon/typescript.svg";
import wordpress from "../../Assets/SkillsIcon/wordpress.svg";
import chakra from "../../Assets/SkillsIcon/chakra.png"

export const TechImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'chakra':
            return chakra;
        case 'mongodb':
            return mongodb;
            case 'typescript':
            return typescript;
            case 'react':
            return reacticon;
            case 'redux':
            return redux;
        case 'cpp':
            return cpp;
        case 'html':
            return hmtl;
        case 'photoshop':
            return photoshop;
        case 'javascript':
            return javascript;
        case 'nodejs':
            return nodejs;

         case 'wordpress':
            return wordpress;   

            case 'bootstrap':
                return bootstrap;   

                case 'css':
                    return css; 
                     case 'expressjs':
                    return express; 
                    
                    case 'git':
                        return git;
                        
                        default:
                            break;
    }
}