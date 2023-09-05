import styles from "~/styles/project-card.module.css";
import classNames from "classnames";

import { anchorValidate, domainExtractor } from "~/utils";
import { Star } from "./icons/star";
import { Fork } from "./icons/fork";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  color: string;
  url: string;
  star: number;
  fork: number;
}


export default function ProjectCard(props: ProjectCardProps) {
  const cn = classNames;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const option = {
      root: document,
      rootMargin: '4px',
      threshold: 1.0
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio >= 1 && !element.classList.contains(styles.active))
        element.classList.add(styles.active);
    }, option);

    observer.observe(element);
  }, []);

  return (
    <div
      className={cn(
        styles.card,
        "border-dotted border-2 p-4 w-full h-[130px] sm:h-[160px]"
      )}
      ref={cardRef}
      onClick={() => {
        window.open(`https://github.com/kraken-afk/${props.title}`, '_blank');
      }}
    >
      <span
        className={`text-white underline underline-offset-4 cursor-pointer mb-3 relative z-10`}
      >
        {props.title}
      </span>
      <p className={styles.truncate}>{props.description}</p>
      {
      props.url !== ""
        ? <a
            className="inline-block truncate"
            target="_blank"
            href={anchorValidate(props.url)}
            onClick={(event) => event.stopPropagation()}
          >
            {domainExtractor(props.url)}
          </a>
        : <div className="mt-3"></div>
      }
      <div className="flex gap-2 absolute right-2 top-2">
        {!!props.star && <span className="text-neutral-300 flex gap-1 items-center text-sm">{props.star} <Star className="fill-neutral-300" /></span>}
        {!!props.fork && <span className="text-neutral-300 flex gap-1 items-center text-sm">{props.fork} <Fork className="fill-neutral-300" /></span>}
      </div>
      <div
        style={{ backgroundColor: props.color }}
        className={`lang w-[3rem] h-[1.2rem] my-3 absolute top-[6px] left-[.8rem] z-0`}
      ></div>
    </div>
  );
}
