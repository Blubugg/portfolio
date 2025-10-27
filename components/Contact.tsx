import React, { useState } from "react"
import { assets, contactText } from "@/public/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"

// ✅ Define available languages
type Language = "en" | "id"

// ✅ Define structure for contact text translation
interface ContactTextType {
  titleSmall: string
  titleBig: string
  desc: string
  namePlaceholder: string
  emailPlaceholder: string
  messagePlaceholder: string
  submit: string
  sending: string
  success: string
}

// ✅ Define contactText object type
type ContactTextObject = {
  [key in Language]: ContactTextType
}

// ✅ Props for the component
interface ContactProps {
  isDarkMode: boolean
  language: Language
}

const typedContactText = contactText as ContactTextObject

const Contact: React.FC<ContactProps> = ({ isDarkMode, language }) => {
  const [result, setResult] = useState("")

  // 📩 Handle form submission
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult(typedContactText[language].sending)

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "84805ca5-3b13-4a69-87d8-8c8f2e73a42e")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult(typedContactText[language].success)
      event.currentTarget.reset()
    } else {
      console.error("Error", data)
      setResult(data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[8%] py-16 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      {/* Title */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        {typedContactText[language].titleSmall}
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        {typedContactText[language].titleBig}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        {typedContactText[language].desc}
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-auto-fit gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            type="text"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-lightHover dark:bg-darkHover"
            name="name"
            placeholder={typedContactText[language].namePlaceholder}
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            type="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-lightHover dark:bg-darkHover"
            name="email"
            placeholder={typedContactText[language].emailPlaceholder}
            required
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          rows={6}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-lightHover mb-6 dark:bg-darkHover"
          name="message"
          placeholder={typedContactText[language].messagePlaceholder}
          required
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-darkHover text-textDark rounded-full mx-auto hover:bg-darkTheme duration-500 dark:bg-darkHover dark:hover:bg-darkTheme"
        >
          {typedContactText[language].submit}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        <p className="mt-4 text-center">{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
