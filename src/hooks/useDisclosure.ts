import { useCallback, useState } from 'react'

export const useDisclosure = (initiallyOpen = false) => {
  const [isOpen, setOpen] = useState(initiallyOpen)

  const onClose = useCallback(() => setOpen(false), [])
  const onOpen = useCallback(() => setOpen(true), [])
  const onToggle = useCallback(() => setOpen((isOpen) => (isOpen ? false : true)), [])

  return [isOpen, onToggle, onClose, onOpen] as const
}
