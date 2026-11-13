import {
  Calculator,
  Code2,
  FileSpreadsheet,
  FileText,
  Image as ImageIcon,
  SearchCheck,
  Share2,
} from 'lucide-react';
import type { ToolCategory } from '../../types/tool';

interface CategoryIconProps {
  name: ToolCategory['iconName'];
  className?: string;
}

export function CategoryIcon({ name, className = 'w-5 h-5' }: CategoryIconProps) {
  switch (name) {
    case 'FileText':
      return <FileText className={className} aria-hidden="true" />;
    case 'Code2':
      return <Code2 className={className} aria-hidden="true" />;
    case 'Calculator':
      return <Calculator className={className} aria-hidden="true" />;
    case 'Share2':
      return <Share2 className={className} aria-hidden="true" />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} aria-hidden="true" />;
    case 'SearchCheck':
      return <SearchCheck className={className} aria-hidden="true" />;
    case 'Image':
      return <ImageIcon className={className} aria-hidden="true" />;
  }
}
