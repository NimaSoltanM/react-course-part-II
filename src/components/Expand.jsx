import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Expand({ children }) {
  const [substringChars, setSubstringChars] = useState(150);

  const toggleExpand = () => {
    if (substringChars === 150) {
      setSubstringChars(children.length);
    } else {
      setSubstringChars(150);
    }
  };

  if (children.length < 150) {
    return <p>{children}</p>;
  }

  return (
    <div>
      <p>{children.substring(0, substringChars)}</p>
      <Button className='expand-button' onClick={toggleExpand}>
        {substringChars === 150 ? 'ادامه مطالب' : 'مخفی کردن'}
      </Button>
    </div>
  );
}

Expand.propTypes = {
  children: PropTypes.string.isRequired,
};
