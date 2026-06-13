import generated from './generated/content.json'
import { mergeDefined, replaceArrayIfNonEmpty } from '../lib/cms/merge'
import {
  aboutPage as staticAboutPage,
  awardGroups as staticAwardGroups,
  getAwardYears,
  type AwardGroup,
  type AwardInstance,
  type TeamMember,
} from './about'
import { contactPage } from './contact'
import { careersPage } from './careers'
import {
  formatPostDate,
  getAllTags as getAllTagsFromModule,
  getPostBySlug as getPostBySlugFromModule,
  getPostsByTag as getPostsByTagFromModule,
  newsroom as staticNewsroom,
  type BlogPost,
  type BlogPostBlock,
  type BlogTag,
} from './newsroom'
import {
  site as staticSite,
  type NavItem,
  type PortfolioItem,
  type Service,
  type Stat,
  type ValuePillar,
} from './site'

type CmsStatItem = { value: string; label: string; description?: string }
type CmsGenerated = {
  site: Partial<typeof staticSite> | null
  aboutPage: (Partial<typeof staticAboutPage> & { recognitionBar?: CmsStatItem[] }) | null
  newsroom: (Partial<typeof staticNewsroom> & { posts?: BlogPost[] | null }) | null
  awardGroups: AwardGroup[] | null
  teamMembers: TeamMember[] | null
}

const cms = generated as CmsGenerated

function mapRecognitionBar(items: CmsStatItem[] | undefined) {
  if (!items?.length) return staticAboutPage.recognitionBar
  return items.map((item) => ({
    label: item.value,
    sublabel: item.label,
  }))
}

const mergedAbout = cms.aboutPage ? mergeDefined(staticAboutPage, cms.aboutPage) : staticAboutPage

export const aboutPage = {
  ...mergedAbout,
  recognitionBar: cms.aboutPage?.recognitionBar
    ? mapRecognitionBar(cms.aboutPage.recognitionBar)
    : staticAboutPage.recognitionBar,
  leadership: {
    ...mergedAbout.leadership,
    members: replaceArrayIfNonEmpty(staticAboutPage.leadership.members, cms.teamMembers ?? undefined),
  },
}

export const site = cms.site ? mergeDefined(staticSite, cms.site) : staticSite

export const awardGroups = replaceArrayIfNonEmpty(staticAwardGroups, cms.awardGroups ?? undefined)

const mergedNewsroom = cms.newsroom ? mergeDefined(staticNewsroom, cms.newsroom) : staticNewsroom

export const newsroom = {
  ...mergedNewsroom,
  posts: cms.newsroom?.posts
    ? replaceArrayIfNonEmpty(staticNewsroom.posts, cms.newsroom.posts)
    : staticNewsroom.posts,
  tags: cms.newsroom?.tags?.length ? ([...cms.newsroom.tags] as BlogTag[]) : staticNewsroom.tags,
}

export {
  contactPage,
  careersPage,
  getAwardYears,
  formatPostDate,
}

export function getPostBySlug(slug: string) {
  return getPostBySlugFromModule(slug, newsroom.posts)
}

export function getPostsByTag(tag: BlogTag | null) {
  return getPostsByTagFromModule(tag, newsroom.posts)
}

export function getAllTags() {
  return getAllTagsFromModule(newsroom.tags)
}

export type {
  AwardGroup,
  AwardInstance,
  TeamMember,
  BlogPost,
  BlogPostBlock,
  BlogTag,
  NavItem,
  PortfolioItem,
  Service,
  Stat,
  ValuePillar,
}
