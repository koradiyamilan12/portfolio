import { createElement } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Star,
  Menu,
  X,
  Sun,
  Moon,
  Download,
  Copyright,
  ArrowUp,
} from 'lucide-react';

// Named exports: import only what you need from `src/utils/icons.js`.
export {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Star,
  Menu,
  X,
  Sun,
  Moon,
  Download,
  Copyright,
  ArrowUp,
};

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

export const renderIcon = (key, sizeClass = 'w-5 h-5') => {
  const Icon = components[key];
  return Icon ? createElement(Icon, { className: sizeClass }) : null;
};
