import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/styles/Tab.module.css';


type TabProps = {
  icon?: string
  filename: string
  path: string
  external?: boolean
}

export function Tab({ icon, filename, path, external }: TabProps) {
  const router = useRouter()
  const isActive = !external && router.pathname === path

  const className = 'tab' + (isActive ? ' tab--active' : '')

  const inner = (
    <>
      {icon && <img src={icon} alt="" aria-hidden="true" />}
      <span>{filename}</span>
      {external && (
        <span aria-hidden="true" style={{ opacity: 0.6, marginLeft: '.25rem' }}>↗</span>
      )}
    </>
  )

  if (external) {
    return (
      <a
        href={path}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${filename} (opens in new tab)`}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={path} className={className}>
      {inner}
    </Link>
  )
}
