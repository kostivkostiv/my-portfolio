interface Props {
  heading: string;
  skills: string[];
  styling: string;
}

export default function ResumeInfo({ heading, skills, styling }: Props) {
  return (
    <div>
      <h3>{heading}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span className={styling} key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
