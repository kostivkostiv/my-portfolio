import { JSX } from "react";



interface Props {
  icon: JSX.Element;
  content: string | number;
}

export default function ResumeHeader({ icon, content }: Props) {

  return (
  <div className="flex items-center gap-1">
    {icon && (
      <div className="">{icon}</div>
    )}
    <span>{content}</span>
  </div>
  )
}
