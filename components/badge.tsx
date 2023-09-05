import styles from '~/styles/badge.module.css';
import classNames from "classnames";

interface BadgeProps {
  badgeType: 'warn' | 'err' | 'reguler'
  children: React.ReactNode
  className?: string
}

export default function Badge(props: BadgeProps) {
  const cn = classNames;
  const variant: Record<BadgeProps['badgeType'], string> = {
    'err': 'bg-red-600',
    'warn': 'bg-yellow-600',
    'reguler': 'border-[1px] border-solid border-white'
  }

  return (
    <span
      className={cn(
        'py-1 px-2 text-sm m-[.5px]',
        styles.badge,
        variant[props.badgeType],
        props.className
      )}
    >
      {props.children}
    </span>
  );
}
