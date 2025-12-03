import { site } from './site';

export const socialLinks = [
  {
    iconKey: 'github',
    href: site.github,
    label: 'GitHub profile'
  },
  {
    iconKey: 'linkedin',
    href: site.linkedin,
    label: 'LinkedIn profile'
  },
  {
    iconKey: 'mail',
    href: `mailto:${site.email}`,
    label: 'Send email'
  }
];
