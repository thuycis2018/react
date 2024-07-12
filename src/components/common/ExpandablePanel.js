import { useState } from 'react';
import classNames from 'classnames';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function ExpandablePanel({ header, children, className, ...rest }) {
  const [expanded, setExpanded] = useState(false);
  const finalClassNames = classNames(
    'p-2 border-t',
    className
  );
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div {...rest} className={finalClassNames}>{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
