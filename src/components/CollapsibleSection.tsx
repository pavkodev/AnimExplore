import { ReactNode } from "react";

const CollapsibleSection = (props: {
  heading: string;
  content: ReactNode;
  openByDefault: boolean;
}) => {
  return (
    <details className="mt-12" open={props.openByDefault ? true : false}>
      <summary className="cursor-pointer p-2 text-orange-400 hover:bg-slate-700">
        <strong className="p-2 text-2xl font-extrabold text-white">
          {props.heading}
        </strong>
      </summary>
      {props.content}
    </details>
  );
};
export default CollapsibleSection;
