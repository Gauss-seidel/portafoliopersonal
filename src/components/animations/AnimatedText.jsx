import { motion } from 'framer-motion'

export default function AnimatedText({ text, className = '', once = true }) {
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.04,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}{'\u00A0'}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
