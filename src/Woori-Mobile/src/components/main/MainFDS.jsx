import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as M from '../../styles/mainPage.styled';
import WOComboBox from '../common/WOComboBox';
import WOMap from '../common/WOMap';
import WOChart from '../../components/common/WOChart';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { occurrenceList, fdsChartOptions, liveEventList, eventItemList } from './../../data/data';
import WOEventItem from '../common/WOEventItem';
import WOOccurrenceItem from '../common/WOOccurrenceItem';
import WOFdsEventTab from '../common/WOFdsEventTab';
import WOAbnormalityCard from '../common/WOAbnormalityCard';
import WOTabContent from '../common/WOTabContent';
import WOScrollTopButton from '../common/WOScrollTopButton';
import 'swiper/css';
import 'swiper/css/pagination';

const MainFds = ({ user }) => {
  // user = 1 ( 우리은행 총괄 ) / user = 2 ( 시금고 총괄 )

  const [activeTabId, setActiveTabId] = useState(1);
  const [selectedOccurence, setSelectedOccurence] = useState(null);

  const targetButton = document.querySelector('.scroll-top-button');
  const fdsScrollArea = document.getElementById('mainFdsWrap');
  const result = document?.querySelector('div.highcharts-legend');

  if (result !== null) {
    const wrap = document.querySelector('.chart-wrap');
    wrap.append(result);
  }
  const handleOccurenceClick = (selectedItem) => {
    setSelectedOccurence(selectedItem);
  };
  // 스크롤 Top 컴포넌트 클릭시 스크롤 상단으로 이동
  const handleScrollTop = (e) => {
    fdsScrollArea.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  fdsScrollArea?.addEventListener('scroll', (e) => {
    if (e.target.scrollTop < 10) {
      targetButton.style.display = 'none';
      fdsScrollArea.style.setProperty('--display-shadow', 'none');
    } else {
      targetButton.style.display = 'block';
      fdsScrollArea.style.setProperty('--display-shadow', 'block');
    }
  });

  useEffect(() => {
    setSelectedOccurence(occurrenceList[0]);
  }, [user]);

  return (
    <>
      <MainFdsWrap id='mainFdsWrap'>
        <MainFdsInner>
          <LinkArea>
            <M.WorkingSelectOpenButton to='/' />
          </LinkArea>
          <TopArea>
            <TopAreaTitle>
              <TopAreaDate>Today. 2023.09.18</TopAreaDate>
              <span>FDS 현황</span>
            </TopAreaTitle>
            {user === 1 ? (
              <WOComboBox
                type='fds'
                onChange={() => {}}
                optionList={[
                  {
                    id: 1,
                    label: '전체',
                  },
                  {
                    id: 2,
                    label: '강동구청',
                  },
                  {
                    id: 3,
                    label: '강동구청',
                  },
                ]}
              />
            ) : (
              <WOComboBox
                type='fds'
                readonly
                onChange={() => {}}
                defaultValue={{
                  id: 1,
                  label: '강동구청',
                }}
                optionList={[
                  {
                    id: 1,
                    label: '강동구청',
                  },
                  {
                    id: 2,
                    label: '성동구청',
                  },
                ]}
              />
            )}
          </TopArea>
          <SectionWrap>
            {/* FDS 맵 */}
            <Section>
              <SectionContent>
                <WOMap />
              </SectionContent>
            </Section>
            {/* //FDS 맵 */}
            {/* 세`부 발생 항목 */}
            <Section>
              <SectionTitle>세부 발생 항목</SectionTitle>
              <SectionContent>
                <OccurrenceArea className={user === 1 ? '' : 'type-cell'}>
                  {occurrenceList.map((occurrence) => (
                    <WOOccurrenceItem
                      key={occurrence.id}
                      item={occurrence}
                      isActive={selectedOccurence && selectedOccurence.id === occurrence.id}
                      onClick={handleOccurenceClick}
                    />
                  ))}
                  {/* //count >= 10 ? count : `0${count}` */}
                </OccurrenceArea>
                <OccurrenceContent>
                  <AbnormalityCardTitle className={selectedOccurence && selectedOccurence.severity}>
                    {selectedOccurence && selectedOccurence.title}
                    <span className='count'> {selectedOccurence && selectedOccurence.count}건</span>
                  </AbnormalityCardTitle>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: '.swiper-pagination', type: 'fraction' }}
                    onSwiper={(slide) => console.log(slide.slides[0].className)}>
                    {occurrenceList.map((occurrence) => (
                      <SwiperSlide key={occurrence.id}>
                        {selectedOccurence && <WOAbnormalityCard severity={selectedOccurence.severity} dataList={selectedOccurence.dataList} />}
                      </SwiperSlide>
                    ))}
                    <div className='swiper-pagination'></div>
                  </Swiper>
                </OccurrenceContent>
              </SectionContent>
            </Section>
            {/* //세부 발생 항목 */}
            {/* //실시간 이벤트 */}
            <Section>
              <SectionTitle>실시간 이벤트</SectionTitle>
              <SectionContent>
                <ul>
                  {liveEventList.map((event) => (
                    <WOEventItem key={event.id} event={event} type='live' />
                  ))}
                </ul>

                <DetailButton>실시간 이벤트 더보기</DetailButton>
              </SectionContent>
            </Section>
            {/* //실시간 이벤트 */}
            {/* 최근 30일 기준 */}
            <Section>
              <SectionTitle>
                월별 추이 <SupportingText>최근 30일 기준</SupportingText>
              </SectionTitle>
              <SectionContent>
                <ChartWrap>
                  <WOChart options={fdsChartOptions} type={'fds'} />
                </ChartWrap>
              </SectionContent>
            </Section>
            {/* //최근 30일 기준 */}
            {/* 금일 기준 거래 이벤트 */}
            <Section>
              <SectionTitle>금일 기준 거래 이벤트</SectionTitle>
              <SectionContent>
                <WOFdsEventTab
                  onChange={(selectedTabID) => setActiveTabId(selectedTabID)}
                  tabs={[
                    {
                      id: 1,
                      name: '전체',
                    },
                    {
                      id: 2,
                      name: '일상경비',
                    },
                    {
                      id: 3,
                      name: '보통예금',
                    },
                    {
                      id: 4,
                      name: '공금계좌',
                    },
                  ]}
                />
                <WOTabContent id={1} activeTabId={activeTabId}>
                  {eventItemList.map((item) => (
                    <ContentWrap key={item.id}>
                      <ContentBox>
                        <LfContent>
                          <TopTextBox>
                            {item.title}
                            <Spline />
                            {item.agency}
                          </TopTextBox>

                          <BottomAreaData>
                            {item.date}
                            <Spline />
                            {item.name}
                          </BottomAreaData>
                        </LfContent>
                        <RgContent>{item.subject}</RgContent>
                      </ContentBox>
                    </ContentWrap>
                  ))}
                </WOTabContent>
                <WOTabContent id={2} activeTabId={activeTabId}>
                  {eventItemList.map((item) => (
                    <ContentWrap key={item.id}>
                      <ContentBox>
                        <LfContent>
                          <TopTextBox>
                            {item.title}
                            <Spline />
                            {item.agency}
                          </TopTextBox>

                          <BottomAreaData>
                            {item.date}
                            <Spline />
                            {item.name}
                          </BottomAreaData>
                        </LfContent>
                        <RgContent>{item.subject}</RgContent>
                      </ContentBox>
                    </ContentWrap>
                  ))}
                </WOTabContent>
                <WOTabContent id={3} activeTabId={activeTabId}>
                  {eventItemList.map((item) => (
                    <ContentWrap key={item.id}>
                      <ContentBox>
                        <LfContent>
                          <TopTextBox>
                            {item.title}
                            <Spline />
                            {item.agency}
                          </TopTextBox>

                          <BottomAreaData>
                            {item.date}
                            <Spline />
                            {item.name}
                          </BottomAreaData>
                        </LfContent>
                        <RgContent>{item.subject}</RgContent>
                      </ContentBox>
                    </ContentWrap>
                  ))}
                </WOTabContent>
                <WOTabContent id={4} activeTabId={activeTabId}>
                  {eventItemList.map((item) => (
                    <ContentWrap key={item.id}>
                      <ContentBox>
                        <LfContent>
                          <TopTextBox>
                            {item.title}
                            <Spline />
                            {item.agency}
                          </TopTextBox>

                          <BottomAreaData>
                            {item.date}
                            <Spline />
                            {item.name}
                          </BottomAreaData>
                        </LfContent>
                        <RgContent>{item.subject}</RgContent>
                      </ContentBox>
                    </ContentWrap>
                  ))}
                </WOTabContent>

                <DetailButton>금일 기준 거래 이벤트 더보기</DetailButton>
              </SectionContent>
            </Section>
            {/* //금일 기준 거래 이벤트 */}
          </SectionWrap>
        </MainFdsInner>
        <WOScrollTopButton type={'fds'} onClick={handleScrollTop} customClass='scroll-top-button' />
      </MainFdsWrap>
    </>
  );
};

export default MainFds;

//=========================================================

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  border-bottom: 1px solid var(--C-Dark-09);

  &:last-child {
    border-bottom: 0;
  }
`;
const ContentBox = styled.div`
  display: flex;
  padding: 12px 0;
  justify-content: space-between;
  align-items: center;
`;

const Spline = styled.div`
  width: 1px;
  height: 10px;
  opacity: 0.3;
  background: var(--Blue-04);
  margin: 0 8px;
`;

const LfContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px 0;
  color: var(--Blue-04);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const TopTextBox = styled.div`
  display: flex;
  align-items: center;
`;
const BottomAreaData = styled.div`
  display: flex;
  align-items: center;
`;

const RgContent = styled.div`
  color: var(--White);
  text-align: right;
  font-size: 14px;
  font-weight: 700;
`;

// ========================================================

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px 20px;
  margin-bottom: 10px;
  min-height: 56px;
`;

const TopAreaTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  font-size: 20px;
  font-weight: 700;
  color: var(--White);
`;

const TopAreaDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--C-Dark-05);
  line-height: 16px;
`;

const MainFdsWrap = styled.div`
  margin-top: 44px;
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 106px;

  &::-webkit-scrollbar {
    display: none;
  }

  &::before {
    content: '';
    display: var(--display-shadow);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    box-shadow: 0px 3px 10.399999618530273px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
`;

const MainFdsInner = styled.div``;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Section = styled.section`
  padding: 0 20px;
`;

const SectionTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: var(--White);
`;

const SupportingText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--Blue-04);
`;

const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionContent = styled.div``;

const ChartWrap = styled.div`
  width: 100%;
`;

/** */
const OccurrenceArea = styled.div`
  width: calc(100% + 20px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 6px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  &.type-cell {
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, 100px);

    .count {
      margin-top: 6px;
    }

    .occurrence-item {
      height: 100px;
      overflow: hidden;

      .location {
        display: none;
      }
    }
  }
  .occurrence {
    &-item {
      position: relative;
      &.active::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 12px;
        padding: 1px;
        background: linear-gradient(343.06deg, #b0ebcc -1.81%, #99a3ff 46.2%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }
    }
    &__detail {
      width: 100%;

      &-list {
        display: flex;
        align-items: stretch;
        gap: 8px;
        .occurrence-item {
          width: 120px;
          height: 215px;
        }
      }

      &__content {
        overflow: auto;
        display: flex;
        align-items: stretch;
        height: 250px;
        gap: 24px;
      }
      &__account {
        width: 100%;
        /* min-width: 344px; */
      }
    }
  }
`;

const OccurrenceContent = styled.div`
  position: relative;
  height: 316px;
  overflow: hidden;
  margin-top: 20px;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(343.06deg, #b0ebcc -1.81%, #99a3ff 46.2%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .swiper {
    z-index: 90;
    height: calc(100% - 44px);
  }

  .swiper-slide .abnornality-card-title {
    visibility: hidden;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    bottom: 17px;
    width: 24px;
    height: 24px;
    opacity: 1;
    z-index: 100;
  }

  .swiper-button-prev {
    background: url(/assets/woori-mobile/icon/slider-button-prev-active.svg) no-repeat center / cover;
    left: 100px;

    &.swiper-button-disabled {
      background: url(/assets/woori-mobile/icon/slider-button-prev.svg) no-repeat center / cover;
    }
  }
  .swiper-button-next {
    background: url(/assets/woori-mobile/icon/slider-button-next-active.svg) no-repeat center / cover;
    right: 100px;

    &.swiper-button-disabled {
      background: url(/assets/woori-mobile/icon/slider-button-next.svg) no-repeat center / cover;
    }
  }

  .swiper-pagination {
    width: auto;
    font-size: 12px;
    font-weight: 700;
    color: var(--C-Dark-04);
    line-height: 24px;
    transform: translateX(-50%);
    left: 50%;
    bottom: 17px;
    margin: 0 auto;
    z-index: 100;
  }
`;

const DetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 12px;
  width: 100%;
  height: 38px;
  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('/assets/woori-mobile/icon/detail-button-arrow.svg') no-repeat center / cover;
  }
`;
const AbnormalityCardTitle = styled.div`
  color: var(--White);
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  margin-top: 12px;
  padding-left: 16px;

  &.advisory .count {
    color: #ff8f5f;
  }
  &.caution .count {
    color: #fab530;
  }
  &.warning .count {
    color: #ff5d5d;
  }
`;
