import styles from "~/styles/project-card.module.css";

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
        styles.card + " border-dotted border-2 p-4 h-full w-full"
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
      <p>{props.description}</p>
      { props.url !== "" ? <a className="inline-block mt-3" target="_blank" href={`https://${props.url}`} onClick={(event) => event.stopPropagation()}>
        {props.url}
      </a> : <div className="mt-3"></div> }
      <div
        style={{ backgroundColor: props.color }}
        className={`lang w-[3rem] h-[1.2rem] my-3 absolute top-[6px] left-[.8rem] z-0`}
      ></div>
    </div>
  );
}
