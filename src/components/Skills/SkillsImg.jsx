
import creative from "../../Assets/mySkillsIcon/creativity1.png"
import backend from "../../Assets/mySkillsIcon/backend.png"
import collabrative from "../../Assets/mySkillsIcon/collabrative.png"
import frontend from "../../Assets/mySkillsIcon/frontend-icon-22.jpg"
import dsa from "../../Assets/mySkillsIcon/DSAA.png"
import problemsolve from "../../Assets/mySkillsIcon/problemSolv.png"
import projectManagement from "../../Assets/mySkillsIcon/projectManagement.png"
import timeManagement from "../../Assets/mySkillsIcon/timeManage.png"



  
export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'frontend':
            return frontend;
        case 'backend':
            return backend;
            case 'dsa':
            return dsa;
            case 'problem solving':
            return problemsolve;
            case 'project management':
            return projectManagement;
            case 'creative thinking':
            return creative;
        case 'collaborative':
            return collabrative;
        case 'time management':
            return timeManagement;
        
                               default:
                            break;
    }
}