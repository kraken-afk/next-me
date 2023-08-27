import { title } from "process";
import styles from "~/styles/project-card.module.css";
import { anchorValidate, domainExtractor } from "~/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  color: string;
  url: string
}


export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div
      className={
        styles.card + " border-dotted border-2 p-4 w-full h-[130px] sm:h-[160px]"
      }
      onClick={() => {
        window.open(`https://github.com/kraken-afk/${props.title}`, '_blank');
      }}
    >
      <span
        className={` text-white underline underline-offset-4 cursor-pointer mb-3 relative z-10`}
      >
        {props.title}
      </span>
      <p className={styles.truncate}>{props.description}</p>
      { props.url !== "" ? <a className="inline-block truncate" target="_blank" href={anchorValidate(props.url)} onClick={(event) => event.stopPropagation()}>
        {domainExtractor(props.url)}
      </a> : <div className="mt-3"></div> }
      <div className="flex gap-2">
        <img src={`https://img.shields.io/github/stars/kraken-afk/${props.title}.svg`} alt="total stars" />
        <img src={`https://img.shields.io/github/forks/kraken-afk/${props.title}.svg`} alt="total forks" />
        <img src={`https://img.shields.io/github/watchers/kraken-afk/${props.title}.svg`} alt="total watchers" />
      </div>
      <div
        style={{ backgroundColor: props.color }}
        className={`lang w-[3rem] h-[1.2rem] my-3 absolute top-[6px] left-[.8rem] z-0`}
      ></div>
    </div>
  );
}
