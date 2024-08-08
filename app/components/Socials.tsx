import { BsFacebook, BsTwitter, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from "react-icons/fa"

const Socials = () => {
  const socials = [
    {
      id: 1,
      title: "Github",
      icon: BsGithub,
      link_url: "https://github.com/ngwesinsandar2",
    },
    {
      id: 2,
      title: "Linkedin",
      icon: BsLinkedin,
      link_url: "https://www.linkedin.com/in/ngwe-sin-san-dar-760009247",
    },
    {
      id: 3,
      title: "Twitter",
      icon: BsTwitter,
      link_url: "https://twitter.com/SandarSin",
    },
    {
      id: 4,
      title: "Facebook",
      icon: BsFacebook,
      link_url: "https://www.facebook.com/profile.php?id=100052980773543",
    },
    // {
    //   id: 5,
    //   title: "Instagram",
    //   icon: BsInstagram,
    //   link_url: "/about",
    // },
    // {
    //   id: 6,
    //   title: "Telegram",
    //   icon: FaTelegramPlane,
    //   link_url: "/about",
    // },
  ]

  return (
    <>
      <ul className="flex gap-4">
        {
          socials.map(social => {
            return (
              <li key={social.id}>
                <a href={social.link_url} className="group" target='_blank'>
                  <social.icon className="text-xl text-[--primary-color]" />
                </a>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default Socials;