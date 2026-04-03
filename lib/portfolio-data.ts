export type PortfolioProjectDefinition = {
  slug: string;
  images: string[];
};

/** Translation key under `portfolio.projects.<key>` */
export const PORTFOLIO_PROJECT_KEYS = ['birouParcAuto'] as const;

export type PortfolioProjectKey = (typeof PORTFOLIO_PROJECT_KEYS)[number];

export const PORTFOLIO_PROJECTS: Record<
  PortfolioProjectKey,
  PortfolioProjectDefinition
> = {
  birouParcAuto: {
    slug: 'birou-parc-auto',
    images: [
      '/images/projects/Larilex/larilex-1.jpeg',
      '/images/projects/Larilex/larilex-2.jpeg',
      '/images/projects/Larilex/larilex-3.jpeg',
      '/images/projects/Larilex/larilex-4.jpeg',
    ],
  },
};

export function getProjectBySlug(
  slug: string
): { key: PortfolioProjectKey; def: PortfolioProjectDefinition } | null {
  const entry = Object.entries(PORTFOLIO_PROJECTS).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return null;
  return { key: entry[0] as PortfolioProjectKey, def: entry[1] };
}
