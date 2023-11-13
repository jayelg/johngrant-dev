import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

// import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-24 py-0 bg-zinc-950">
      <Gutter className="flex justify-between flex-wrap h-16 gap-x-3 gap-y-6">
        {/* <Link href="/">
          <picture>
            <img
              alt="Payload Logo"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
              className="w-36 dark:invert"
            />
          </picture>
        </Link> */}
        {/* this nav is for cms defined links */}
        <nav>
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
        </nav>
        <div className="flex gap-x-10 gap-y-6 items-center flex-wrap opacity-100 transition-opacity visible">
          John Grant &copy; {currentYear}
          <div>
            Built with&nbsp;
            <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              NextJS
            </Link>
            &nbsp;and&nbsp;
            <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
              Payload
            </Link>
          </div>
          <Link
            href="https://github.com/jayelg/johngrant-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </Link>
          <ThemeSelector />
        </div>
      </Gutter>
    </footer>
  )
}
