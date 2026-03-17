import "./Skills.css";

import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaGitAlt,
FaGithub,
FaPython
} from "react-icons/fa";

import {
SiMysql,
SiDjango,
} from "react-icons/si";

function Skills(){

return(

<div className="skills">
<div className="skills-slider">
<div className="skills-track">

<FaHtml5/>
<FaCss3Alt/>
<FaJs/>
<FaReact/>

<FaPython/>
<SiMysql/>

<FaGitAlt/>
<FaGithub/>
<SiDjango/>
</div>

</div>

</div>

)

}

export default Skills;