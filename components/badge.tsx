import styles from '~/styles/badge.module.css';

interface BadgeProps {
  badgeType: 'warn' | 'err' | 'reguler'
  children: React.ReactNode
  className?: string
}

export default function Badge(props: BadgeProps) {
  let classes = ''

  if (props.badgeType === 'err')
    classes += 'bg-red-600'
  else if (props.badgeType === 'warn')
    classes += 'bg-yellow-600'
  else
    classes += 'border-[1px] border-solid border-white'

  classes += ' py-1 px-2 text-sm m-[.5px] ' + styles.badge

  return (
    <span className={classes.concat(props.className ? ' '.concat(props.className) : '')}>
      {props.children}
    </span>
  );
}
