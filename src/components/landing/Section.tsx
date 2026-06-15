import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, image, imageCaption, facts, isActive, showButton, buttonText }: SectionProps) {
  const hasImage = !!image

  return (
    <section id={id} className={`relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 ${hasImage ? 'md:flex-row md:items-center md:gap-16' : ''}`}>
      <div className={`flex flex-col justify-center ${hasImage ? 'md:w-1/2' : ''}`}>
        {subtitle && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}
        {facts && facts.length > 0 && (
          <motion.ul
            className="mt-6 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {facts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-300 text-base md:text-lg">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#FF4D00] shrink-0" />
                {fact}
              </li>
            ))}
          </motion.ul>
        )}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>

      {hasImage && (
        <motion.div
          className="hidden md:flex md:w-1/2 flex-col items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full max-h-[60vh] object-cover border border-neutral-800"
          />
          {imageCaption && (
            <p className="mt-3 text-sm text-neutral-500 text-center">{imageCaption}</p>
          )}
        </motion.div>
      )}
    </section>
  )
}
