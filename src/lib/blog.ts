export const BLOG_PATH_PREFIX = "/tin-tuc/bai-viet";

export function getBlogHref(slug: string): string {
  return `${BLOG_PATH_PREFIX}/${slug}`;
}
