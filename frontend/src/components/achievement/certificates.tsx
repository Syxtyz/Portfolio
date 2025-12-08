import { CertificateForm } from "@/components/reusableUI/certificate";

export default function CertificateSection() {
    return (
        <div className="grid px-4">
            <CertificateForm title="Operating System Basics" certificate="Completion" date="2025" imageSrc="/certificates/OSCisco.png"/>
            <CertificateForm title="DevFest GDG Davao" certificate="Participation" date="2025" imageSrc="/certificates/devfest.png"/>
            <CertificateForm title="World of Adventurers Travel and Tours" certificate="Completion" date="2025" imageSrc="/certificates/WATT.jpg"/>
            <CertificateForm title="Relational Database" certificate="Completion" date="2025" imageSrc="/certificates/FCCRD.png"/>
            <CertificateForm title="Responsive Web Design" certificate="Completion" date="2025" imageSrc="/certificates/FCCRWD.png"/>
            <CertificateForm title="Gemini" certificate="Completion" date="2025" imageSrc="/certificates/GCS.png"/>
            <CertificateForm title="Information Management" certificate="Completion" date="2025" imageSrc="/certificates/CCIM.png"/>
            <CertificateForm title="National Programming Competition" certificate="Participation" date="2024" imageSrc="/certificates/CCNP.png"/>
        </div>
    )
}