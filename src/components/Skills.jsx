import "./Skills.css"

export default function Skills() {
    return (
        <>
            <div className="sec-hds">
                <h2>SKILLS</h2>
            </div>
            <div className="icon-img">
                <img id="icons" src="https://skillicons.dev/icons?i=js,react,cs,dotnet,aws,py,django,nodejs,express,html,css,mongodb,postgres,docker,figma"></img>
            </div>
            <div className="sec-hds">
                <h2>CERTIFICATIONS</h2>
            </div>
            <div className="certs-cont">
                <div className="cert-box">
                    <div className="img-box">
                        <img id='cert1' src="./AWS-GCP-Badge.png" alt="" />
                    </div>
                    <p>AWS Cloud Practioner</p>
                </div>
                <div className="cert-box">
                    <div className="img-box">
                        <img id='cert2' src="./C-Certification.jpg" alt="" />
                    </div>
                    <p>Foundational C# with Microsoft</p>
                </div>
            </div>
        </>
    )
}
