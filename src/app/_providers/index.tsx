'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

import { AuthProvider } from '../_providers/Auth'
import { MenuOpenProvider } from './Context/Page/menuOpenContext'
import { MouseProvider } from './Context/Page/mouseContext'
import { PageProvider } from './Context/Page/pageContext'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <PageProvider>
          <MenuOpenProvider>
            <MouseProvider>{children}</MouseProvider>
          </MenuOpenProvider>
        </PageProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
