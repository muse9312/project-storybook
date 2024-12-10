import React, { useEffect, useState } from 'react';
import WODialog from '../common/WODialog';
import WOButton from '../common/WOButton';
import { selectWorkData } from '../../data/common';
import WOSelectWorkList from '../common/WOSelectWorkList';

const SelectedWorkDialog = ({ isOpen, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen || false);

  const handleClose = () => {
    onClose && onClose();
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsPopupOpen(isOpen);
  }, [isOpen]);

  return (
    <WODialog
      title='선택된 업무'
      totalCount={4}
      bgColor='gradient'
      fullScreen
      isOpen={isPopupOpen}
      onClose={() => handleClose()}
      buttons={
        <>
          <WOButton onClick={() => {}} size='lg' variant='primary'>
            조회
          </WOButton>
        </>
      }>
      {selectWorkData.map((item) => (
        <WOSelectWorkList key={item.id} favoriteStatus={item.favoriteStatus} depth1={item.depth1} depth2={item.depth2} depth3={item.depth3} />
      ))}
    </WODialog>
  );
};

export default SelectedWorkDialog;
