import WOButton from '../components/common/WOButton';
import WOIcon from '../components/common/WOIcon';
import SubHeader from '../components/layout/SubHeader';
import * as S from '../styles/subPage.styled';
import WOTag from '../components/common/WOTag';
import SubFooter from '../components/layout/SubFooter';
import WOTabs from '../components/common/WOTabs';
import { BrowserRouter } from 'react-router-dom';

const WOLayoutStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Layout/Layout',
    // 컴포넌트 명
    component: WOButton,
    // 스토리북 컴포넌트 뷰 레이아웃
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div style={{ width: '360px', height: '800px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Story />
                    </div>
                </div>
            </BrowserRouter>
        ),
    ],
    tags: ['autodocs'],
    // props 속성 docs 정리
    argTypes: {
        // props 명
    },
};

export default WOLayoutStory;

export const SubPage = () => {
    return (
        <>
            <SubHeader title={'Title'} />
            <S.Main>
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>
            </S.Main>
            <SubFooter>
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">
                    계좌현황 상세내역
                </WOButton>
            </SubFooter>
        </>
    );
};
export const Tabs = () => {
    return (
        <>
            <SubHeader title={'Title'} />
            <S.Main>
                <S.TopArea>
                    <S.TopAreaTab>
                        <WOTabs
                            onChange={() => {}}
                            tabs={[
                                {
                                    id: 1,
                                    name: 'tab1',
                                },
                                {
                                    id: 2,
                                    name: 'tab2',
                                },
                            ]}
                        />
                    </S.TopAreaTab>
                </S.TopArea>
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>
            </S.Main>

            <SubFooter>
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">
                    계좌현황 상세내역
                </WOButton>
            </SubFooter>
        </>
    );
};
export const Filters = () => {
    return (
        <>
            <SubHeader title={'Title'} />
            <S.Main>
                <S.TopArea>
                    <S.TopAreaFilter>
                        <S.FilterListWrap>
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                        </S.FilterListWrap>
                        <S.FilterBtnWrap>
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">
                                필터
                            </WOButton>
                        </S.FilterBtnWrap>
                    </S.TopAreaFilter>
                </S.TopArea>
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>
            </S.Main>

            <SubFooter>
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">
                    계좌현황 상세내역
                </WOButton>
            </SubFooter>
        </>
    );
};
export const Filters2 = () => {
    return (
        <>
            <SubHeader title={'Title'} />
            <S.Main>
                <S.TopArea>
                    <S.TopAreaFilter>
                        <S.FilterListWrap>
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                        </S.FilterListWrap>
                        <S.FilterListWrap>
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                        </S.FilterListWrap>
                        <S.FilterBtnWrap>
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">
                                필터
                            </WOButton>
                        </S.FilterBtnWrap>
                    </S.TopAreaFilter>
                </S.TopArea>
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>
            </S.Main>

            <SubFooter>
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">
                    계좌현황 상세내역
                </WOButton>
            </SubFooter>
        </>
    );
};
export const Data = () => {
    return (
        <>
            <SubHeader title={'Title'} />
            <S.Main>
                <S.TopArea>
                    <S.TopAreaFilter>
                        <S.FilterListWrap>
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                        </S.FilterListWrap>
                        <S.FilterListWrap>
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                        </S.FilterListWrap>
                        <S.FilterBtnWrap>
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">
                                필터
                            </WOButton>
                        </S.FilterBtnWrap>
                    </S.TopAreaFilter>
                </S.TopArea>
                <S.MiddleArea>
                    <S.SupportingData className="supporting-data">데이터 영역이에요</S.SupportingData>
                </S.MiddleArea>
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>
            </S.Main>

            <SubFooter>
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">
                    계좌현황 상세내역
                </WOButton>
            </SubFooter>
        </>
    );
};
export const SupportingText = () => {
    return (
        <>
            <SubHeader title={'Title'} />
            <S.Main>
                <S.TopArea>
                    <S.TopAreaTab>
                        <WOTabs
                            onChange={() => {}}
                            tabs={[
                                {
                                    id: 1,
                                    name: 'tab1',
                                },
                                {
                                    id: 2,
                                    name: 'tab2',
                                },
                            ]}
                        />
                    </S.TopAreaTab>
                    <S.TopAreaFilter>
                        <S.FilterListWrap>
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                        </S.FilterListWrap>
                        <S.FilterBtnWrap>
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">
                                필터
                            </WOButton>
                        </S.FilterBtnWrap>
                    </S.TopAreaFilter>
                </S.TopArea>
                <S.MiddleArea>
                    <S.SupportingText className="supporting-text">*Supoorting text</S.SupportingText>
                </S.MiddleArea>
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>
            </S.Main>

            <SubFooter>
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">
                    계좌현황 상세내역
                </WOButton>
            </SubFooter>
        </>
    );
};
export const Scroll = () => {
    return (
        <>
            <SubHeader title={'Title'} />
            <S.Main>
                <S.TopArea>
                    <S.TopAreaTab>
                        <WOTabs
                            onChange={() => {}}
                            tabs={[
                                {
                                    id: 1,
                                    name: 'tab1',
                                },
                                {
                                    id: 2,
                                    name: 'tab2',
                                },
                            ]}
                        />
                    </S.TopAreaTab>
                    <S.TopAreaFilter>
                        <S.FilterListWrap>
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                            <WOTag label="label" text="text" />
                        </S.FilterListWrap>
                        <S.FilterBtnWrap>
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">
                                필터
                            </WOButton>
                        </S.FilterBtnWrap>
                    </S.TopAreaFilter>
                </S.TopArea>
                <S.MiddleArea>
                    <S.SupportingText className="supporting-text">*Supoorting text</S.SupportingText>
                </S.MiddleArea>
                <S.ContentWrap>
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </S.ContentWrap>
            </S.Main>

            <SubFooter>
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">
                    계좌현황 상세내역
                </WOButton>
            </SubFooter>
        </>
    );
};
