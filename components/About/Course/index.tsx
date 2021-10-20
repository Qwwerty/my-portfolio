import React, {ReactElement} from "react";

interface CourseProps {
  title: string;
  children: ReactElement[] | ReactElement;
}

export function Course ({ title, children }: CourseProps) {
  if (React.Children.count(children)) {
    return (
      <>
        <h5>{title}</h5>
        {children}
      </>
    )
  }
}