import React, { useEffect, useState } from 'react';
import WODialog from '../common/WODialog';
import WOButton from '../common/WOButton';
import WOEditWorkTopic from '../common/WOEditWorkTopic';

const EditWorkTopicDialog = ({ isOpen, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen || false);

  const handleClose = () => {
    onClose && onClose();
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsPopupOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <WODialog
        title='업무주제 편집'
        fullScreen
        isOpen={isPopupOpen}
        onClose={() => handleClose()}
        buttons={
          <>
            <WOButton onClick={() => handleClose()} size='lg' variant='primary-sub'>
              확인
            </WOButton>
          </>
        }>
        <WOEditWorkTopic />
      </WODialog>
    </>
  );
};

export default EditWorkTopicDialog;
