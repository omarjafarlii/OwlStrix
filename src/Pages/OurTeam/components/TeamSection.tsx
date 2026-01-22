import CardForTeam from '../../../Components/CardForTeam'
import type { CardProps } from '../../AboutUs/components/WelcomeSection'
import MichaelDoeLogo from "../../../assets/the-four-business-cyberix.webp";
import EllisaLogo from "../../../assets/the-four-business-people.webp";
import JohnyLogo from "../../../assets/the-four-business.webp";
import DonnyLogo from "../../../assets/portrait-of-young-businessman-in-office-smiling.webp";
import CeciliLogo from "../../../assets/smiling-female-corporate-manager-in-the-office (1).webp";
import DavidLogo from "../../../assets/serious-male-cybersecurity-e1753220662428.webp";

const teamData: CardProps[] = [
  {
    id: 1,
    name: "Michael Doe",
    image: MichaelDoeLogo,
    headline: "CEO Cyberix",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 2,
    name: "Ellisa William",
    image: EllisaLogo,
    headline: "Cyber Analyst",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 3,
    name: "Johny Harris",
    image: JohnyLogo,
    headline: "IT Specialist",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 4,
    name: "Donny Darwis",
    image: DonnyLogo,
    headline: "Network Security",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 5,
    name: "Cecilia Frans",
    image: CeciliLogo,
    headline: "IT Specialist",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
  {
    id: 6,
    name: "David Rins",
    image: DavidLogo,
    headline: "Programmer",
    social_links: {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  },
];

const TeamSection = () => {
  return (
    <div>
      <div className="my-10">
        <section>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto w-full py-20`}>
            {teamData.map(item => (<CardForTeam item={item} />))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeamSection