import { motion } from 'framer-motion'

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const base = 'btn'

  const variants = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }

  const Tag = href ? 'a' : motion.button

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      <Tag
        href={href}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
