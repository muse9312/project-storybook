import '../resource/style/css/common.css';
import '../resource/style/css/table.css';
import '../resource/style/css/form.css';
import '../resource/js/ui_front';
const KBTableStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/Table/Table',
  // 컴포넌트 명
  //   component: ,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {},
};

export default KBTableStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <div class='o-table'>
      <table class='tb-main'>
        <caption>정보</caption>
        <thead>
          <tr>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export const Type01ColTable = () => {
  return (
    <div class='o-table'>
      <table class='tb-main'>
        <caption>정보</caption>
        <tbody>
          <tr>
            <th scope='row'>제목</th>
            <td>내용</td>
            <th scope='row'>제목</th>
            <td>내용</td>
            <th scope='row' colspan='2'>
              제목
            </th>
            <td colspan='2'>내용</td>
          </tr>
          <tr>
            <th scope='row'>제목</th>
            <td>내용</td>
            <th scope='row'>제목</th>
            <td>내용</td>
            <th scope='row'>제목</th>
            <td>내용</td>
            <th scope='row'>제목</th>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export const Type01RowColTable = () => {
  return (
    <div class='o-table'>
      <table class='tb-main'>
        <caption>정보</caption>

        <thead>
          <tr>
            <th></th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>제목</th>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr>
            <th scope='row'>제목</th>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr>
            <th scope='row'>제목</th>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr>
            <th scope='row'>제목</th>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr>
            <th scope='row'>제목</th>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export const Type01RedTrTable = () => {
  return (
    <div class='o-table'>
      <table class='tb-main'>
        <caption>정보</caption>
        <thead>
          <tr>
            <th scope='col' class='required-items'>
              제목
            </th>
            <th scope='col' class='required-items'>
              제목
            </th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export const Type02ToggleTable = () => {
  return (
    <div class='o-table'>
      <table class='tb-main'>
        <caption>정보</caption>
        <thead>
          <tr>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='toggle-table-td'>
              <button type='button' class='o-btn toggle-table-btn'></button>
            </td>
          </tr>
          <tr class='toggle-table-tr'>
            <td colspan='10'>
              <div class='toggle-inner-table-con'>
                <div class='tit-box'>
                  <div class='tit'>제목</div>
                  <div class='option-box'>
                    <div class='form-cpnt check-custom02 type-02'>
                      <div class='form-group'>
                        <div class='form-box form-checkbox'>
                          <div class='form-content'>
                            <div class='fc-inner'>
                              <div class='form fo-col'>
                                <input type='checkbox' name='table-form01' id='table-form01-01' class='form-field' />
                                <label htmlFor='table-form01-01'>간편체</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='con-box'>
                  <div class='o-table'>
                    <table class='tb-main'>
                      <caption>정보</caption>

                      <thead>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class='tit-box'>
                  <div class='tit'>제목</div>
                </div>
                <div class='con-box'>
                  <div class='o-table'>
                    <table class='tb-main'>
                      <caption>정보</caption>

                      <thead>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='toggle-table-td'>
              <button type='button' class='o-btn toggle-table-btn'></button>
            </td>
          </tr>
          <tr class='toggle-table-tr'>
            <td colspan='10'>
              <div class='toggle-inner-table-con'>
                <div class='tit-box'>
                  <div class='tit'>제목</div>
                  <div class='option-box'>
                    <div class='form-cpnt check-custom02 type-02'>
                      <div class='form-group'>
                        <div class='form-box form-checkbox'>
                          <div class='form-content'>
                            <div class='fc-inner'>
                              <div class='form fo-col'>
                                <input type='checkbox' name='table-form02' id='table-form01-02' class='form-field' />
                                <label htmlFor='table-form01-02'>간편체</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='con-box'>
                  <div class='o-table'>
                    <table class='tb-main'>
                      <caption>정보</caption>

                      <thead>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class='tit-box'>
                  <div class='tit'>제목</div>
                </div>
                <div class='con-box'>
                  <div class='o-table'>
                    <table class='tb-main'>
                      <caption>정보</caption>

                      <thead>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='toggle-table-td'>
              <button type='button' class='o-btn toggle-table-btn'></button>
            </td>
          </tr>
          <tr class='toggle-table-tr'>
            <td colspan='10'>
              <div class='toggle-inner-table-con'>
                <div class='tit-box'>
                  <div class='tit'>제목</div>
                  <div class='option-box'>
                    <div class='form-cpnt check-custom02 type-02'>
                      <div class='form-group'>
                        <div class='form-box form-checkbox'>
                          <div class='form-content'>
                            <div class='fc-inner'>
                              <div class='form fo-col'>
                                <input type='checkbox' name='table-form03' id='table-form01-03' class='form-field' />
                                <label htmlFor='table-form01-03'>간편체</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='con-box'>
                  <div class='o-table'>
                    <table class='tb-main'>
                      <caption>정보</caption>

                      <thead>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class='tit-box'>
                  <div class='tit'>제목</div>
                </div>
                <div class='con-box'>
                  <div class='o-table'>
                    <table class='tb-main'>
                      <caption>정보</caption>

                      <thead>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='toggle-table-td'>
              <button type='button' class='o-btn toggle-table-btn'></button>
            </td>
          </tr>
          <tr class='toggle-table-tr'>
            <td colspan='10'>
              <div class='toggle-inner-table-con'>
                <div class='tit-box'>
                  <div class='tit'>제목</div>
                  <div class='option-box'>
                    <div class='form-cpnt check-custom02 type-02'>
                      <div class='form-group'>
                        <div class='form-box form-checkbox'>
                          <div class='form-content'>
                            <div class='fc-inner'>
                              <div class='form fo-col'>
                                <input type='checkbox' name='table-form04' id='table-form01-04' class='form-field' />
                                <label htmlFor='table-form01-04'>간편체</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='con-box'>
                  <div class='o-table'>
                    <table class='tb-main'>
                      <caption>정보</caption>

                      <thead>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class='tit-box'>
                  <div class='tit'>제목</div>
                </div>
                <div class='con-box'>
                  <div class='o-table'>
                    <table class='tb-main'>
                      <caption>정보</caption>

                      <thead>
                        <tr>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                          <th scope='col'>제목</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                          <td>내용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const Type03FormTable = () => {
  return (
    <div class='o-table'>
      <table class='tb-main'>
        <caption>계약액 변경</caption>
        <colgroup>
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: 'auto' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' colspan='5'>
              제목
            </th>
            <th scope='col' colspan='6'>
              제목
            </th>
          </tr>
          <tr>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='txt-algn-left'>24,500</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='txt-algn-left'>24,500</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
          </tr>

          <tr>
            <th scope='col' colspan='7'>
              내용
            </th>
            <td>내용</td>
            <th scope='col' colspan='4'>
              내용
            </th>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export const Type04ScrollTableX = () => {
  return (
    <div class='o-table ty-scroll-x'>
      <table class='tb-main'>
        <caption>계약액 변경</caption>
        <colgroup>
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: 'auto' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' colspan='5'>
              제목
            </th>
            <th scope='col' colspan='6'>
              제목
            </th>
          </tr>
          <tr>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='txt-algn-left'>24,500</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='txt-algn-left'>24,500</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
          </tr>

          <tr>
            <th scope='col' colspan='7'>
              내용
            </th>
            <td>내용</td>
            <th scope='col' colspan='4'>
              내용
            </th>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export const Type04ScrollTableY = () => {
  return (
    <div class='o-table ty-scroll-y'>
      <table class='tb-main'>
        <caption>계약액 변경</caption>
        <colgroup>
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: '76.5px' }} />
          <col style={{ width: 'auto' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' rowspan='2'>
              제목
            </th>
            <th scope='col' colspan='5'>
              제목
            </th>
            <th scope='col' colspan='6'>
              제목
            </th>
          </tr>
          <tr>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
            <th scope='col'>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='txt-algn-left'>24,500</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='txt-algn-left'>24,500</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td>내용</td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
            <td class='td-form'>
              <div class='o-input sty-wht sz-s'>
                <input type='text' placeholder='Text' title='title' />
              </div>
            </td>
          </tr>

          <tr>
            <th scope='col' colspan='7'>
              내용
            </th>
            <td>내용</td>
            <th scope='col' colspan='4'>
              내용
            </th>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
