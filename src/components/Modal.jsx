import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function Modal({ id, open = false, onClose, oldText, onEdit }) {
  const [newText, setNewText] = useState(oldText);

  if (!open) return null;

  const editPostHandler = () => {
    if (!newText) return;

    onEdit(id, { type: 'EDIT', payload: newText });
    onClose();
  };

  return createPortal(
    <>
      <div onClick={onClose} className='overlay'></div>
      <div className='modal'>
        <div className='modal-header'>
          <h4>ویرایش پست</h4>
          <button onClick={onClose}>X</button>
        </div>
        <div className='modal-body'>
          <p>متن جدید را وارد کنید</p>
          <textarea
            rows='4'
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </div>
        <div className='modal-footer'>
          <div className='buttons-wrapper'>
            <button onClick={editPostHandler}>ثبت</button>
            <button onClick={onClose}>لغو</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  oldText: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};
