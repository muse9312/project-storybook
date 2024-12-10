import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WODatePicker from '../../components/common/WODatePicker';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { FXP_04_breadCrumbList } from '../../data/response';

const FXP0401V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={FXP_04_breadCrumbList} />
          <S.Title>대사현황 모니터링</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WODatePicker label='기준일자' value={'2023-06-14'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>* 전일 이전 조회가능하며, 전일 원장 기준으로 조회(기산일 거래 익영업일 반영)됩니다.</S.Notice>
          <S.EditorArea>
            <div className='img-wrap'>
              <img src='assets/images/temp/editor-page.svg' alt='임시 에디터' />
            </div>
          </S.EditorArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default FXP0401V01;