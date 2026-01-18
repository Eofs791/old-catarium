/**
 * links on website collection page
 */
export interface WebsiteType {
  name: string
  url: string
  avatar: string
  type: string
  reason?: string
}

/**
 * links on friends page
 */
export interface LinkType {
  avatar: string
  name: string
  url: string
  color: string
  blog: string
  desc: string
  bgImg?: string
}

