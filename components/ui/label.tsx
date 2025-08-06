import React from 'react';

type LabelProps = React.ComponentPropsWithoutRef<'label'>;

export const Label = (props: LabelProps) => {
  return <label {...props} className="block text-sm font-medium mb-1" />;
};

export default Label;