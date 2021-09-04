import { FaTwitter,FaDribbble,FaGithub} from "react-icons/fa"
const Footer = ()=>{
    return(
        <div className = "footer">
        <div className = "wrapper">
            <div className ="copyright">
            Designed and developed by Grace Ajadi.<br/>
            Built with <strong>React</strong>. Hosted on<strong> Netlify</strong>. Type set in <strong>Jost*</strong>.
            </div>
            <div className="SocialMedia-icons">
                <div><FaTwitter/></div>
                <div><FaDribbble/></div>
                <div><FaGithub/></div>
            </div>
        </div>
        </div>
    )
}

export default Footer