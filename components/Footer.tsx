import React from "react"
import Image, { StaticImageData } from "next/image"
import { assets, socialLinks } from "@/public/assets/assets"

// ✅ Define props type
interface FooterProps {
  isDarkMode: boolean
}

// ✅ Update SocialLink type — use StaticImageData for icon fields
interface SocialLink {
  name: string
  link: string
  icon: StaticImageData
  icon_dark: StaticImageData
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          valentino.banyubiru.vbb@gmail.com
        </div>
      </div>

      <hr className="mt-12" />

      <div className="max-w-[100rem] mx-auto text-center sm:flex items-center justify-between py-6 bg-opacity-50 backdrop-blur-lg shadow-sm">
        <p>&copy; 2025 Valentino Banyu Biru. All rights reserved.</p>
        <ul className="flex items-center gap-5 justify-center mt-4 sm:mt-0">
          {(socialLinks as SocialLink[]).map((social) => (
            <li key={social.name}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={social.link}
                className="flex items-center gap-2 hover:opacity-80 transition"
              >
                <Image
                  src={isDarkMode ? social.icon_dark : social.icon}
                  alt={social.name}
                  className="w-6 h-6 object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
