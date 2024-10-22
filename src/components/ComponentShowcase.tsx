import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const components: { [key: string]: React.LazyExoticComponent<() => JSX.Element> } = {
  accordion: lazy(() => import('@/components/showcases/AccordionShowcase')),
  'alert-dialog': lazy(() => import('@/components/showcases/AlertDialogShowcase')),
  alert: lazy(() => import('@/components/showcases/AlertShowcase')),
  'aspect-ratio': lazy(() => import('@/components/showcases/AspectRatioShowcase')),
  avatar: lazy(() => import('@/components/showcases/AvatarShowcase')),
  badge: lazy(() => import('@/components/showcases/BadgeShowcase')),
  button: lazy(() => import('@/components/showcases/ButtonShowcase')),
  calendar: lazy(() => import('@/components/showcases/CalendarShowcase')),
  card: lazy(() => import('@/components/showcases/CardShowcase')),
  checkbox: lazy(() => import('@/components/showcases/CheckboxShowcase')),
  collapsible: lazy(() => import('@/components/showcases/CollapsibleShowcase')),
  command: lazy(() => import('@/components/showcases/CommandShowcase')),
  'context-menu': lazy(() => import('@/components/showcases/ContextMenuShowcase')),
  dialog: lazy(() => import('@/components/showcases/DialogShowcase')),
  'dropdown-menu': lazy(() => import('@/components/showcases/DropdownMenuShowcase')),
  'hover-card': lazy(() => import('@/components/showcases/HoverCardShowcase')),
  input: lazy(() => import('@/components/showcases/InputShowcase')),
  label: lazy(() => import('@/components/showcases/LabelShowcase')),
  menubar: lazy(() => import('@/components/showcases/MenubarShowcase')),
  'navigation-menu': lazy(() => import('@/components/showcases/NavigationMenuShowcase')),
  popover: lazy(() => import('@/components/showcases/PopoverShowcase')),
  progress: lazy(() => import('@/components/showcases/ProgressShowcase')),
  'radio-group': lazy(() => import('@/components/showcases/RadioGroupShowcase')),
  'scroll-area': lazy(() => import('@/components/showcases/ScrollAreaShowcase')),
  select: lazy(() => import('@/components/showcases/SelectShowcase')),
  separator: lazy(() => import('@/components/showcases/SeparatorShowcase')),
  sheet: lazy(() => import('@/components/showcases/SheetShowcase')),
  slider: lazy(() => import('@/components/showcases/SliderShowcase')),
  switch: lazy(() => import('@/components/showcases/SwitchShowcase')),
  table: lazy(() => import('@/components/showcases/TableShowcase')),
  tabs: lazy(() => import('@/components/showcases/TabsShowcase')),
  textarea: lazy(() => import('@/components/showcases/TextareaShowcase')),
  toast: lazy(() => import('@/components/showcases/ToastShowcase')),
  toggle: lazy(() => import('@/components/showcases/ToggleShowcase')),
  tooltip: lazy(() => import('@/components/showcases/TooltipShowcase')),
};

interface ComponentShowcaseProps {
  component: string;
}

export default function ComponentShowcase({ component }: ComponentShowcaseProps) {
  const ShowcaseComponent = components[component];

  if (!ShowcaseComponent) {
    return <div className="text-lg">Component not found: {component}</div>;
  }

  return (
    <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
      <ShowcaseComponent />
    </Suspense>
  );
}