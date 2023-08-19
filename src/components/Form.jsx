import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ onSubmit }) {
  const [categories, setCategories] = useState([]);
  const [enteredText, setEnteredText] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      if (enteredCategory.trim() !== '') {
        if (categories.includes(enteredCategory)) {
          alert('دسته بندی تکراری مجاز نیست');
        } else {
          setCategories((c) => [...c, enteredCategory]);
          setEnteredCategory('');
        }
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      id: Math.random(),
      text: enteredText,
      likes: 0,
      dislikes: 0,
      spoiler: isChecked,
      categories: [...categories],
    };

    onSubmit(newPost);

    setEnteredText('');
    setCategories([]);
    setIsChecked(false);
  };
  return (
    <div className='form-wrapper'>
      <form onSubmit={submitHandler}>
        <textarea
          onChange={(e) => setEnteredText(e.target.value)}
          rows='5'
          placeholder='متن جدید را وارد کنید'
          value={enteredText}
          required
        />
        <input
          type='text'
          placeholder='دسته بندی های پست'
          value={enteredCategory}
          onChange={(e) => setEnteredCategory(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        <div>
          <input
            type='checkbox'
            id='checkbox'
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor='checkbox'>این پست دارای اسپویلر است ؟</label>
        </div>
        <button type='submit'>ثبت</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
