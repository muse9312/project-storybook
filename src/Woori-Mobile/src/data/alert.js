import Swal from 'sweetalert2';

export const confirm = async (title, text) => {
  try {
    const htmlText = text.replace(/\n/g, '<br>');
    const result = await Swal.fire({
      title,
      html: htmlText,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '변경',
      cancelButtonText: '취소',
      reverseButtons: true,
      closeButtonHtml: '<img src="/assets/woori-mobile/icon/close-20.svg" alt="close" />',
    });

    return result.isConfirmed; // true: 변경 클릭시, false: 취소 클릭시
  } catch (error) {
    console.error('다이얼로그 오류:', error);
    return false;
  }
};

export const alert = async (title, text) => {
  try {
    const htmlText = text.replace(/\n/g, '<br>');
    const result = await Swal.fire({
      title,
      html: htmlText,
      showCloseButton: true,
      showCancelButton: false,
      confirmButtonText: '확인',
      reverseButtons: true,
      closeButtonHtml: '<img src="/assets/woori-mobile/icon/close-20.svg" alt="close" />',
    });

    return result.isAlerted;
  } catch (error) {
    console.error('다이얼로그 오류:', error);
    return false;
  }
};
