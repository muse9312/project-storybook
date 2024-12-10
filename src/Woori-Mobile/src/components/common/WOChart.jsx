import React from 'react';
import styled from 'styled-components';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

// type OptionsType = {} // 차트 데이터 및 옵션들을 위한 highCharts형식의 데이터
// type type = 'fds' | 'column?'

const WOChart = ({ options, type }) => {
  // logic
  // view
  return (
    <Wrap className={`chart-wrap ${type || ''}`}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Wrap>
  );
};

export default WOChart;

const Wrap = styled.div`
  position: relative;
  overflow: hidden;

  .highcharts-container,
  .highcharts-container > svg {
    overflow: visible !important;
  }

  rect.highcharts-point {
    display: none;
  }

  .highcharts-legend-item span {
    margin-left: -10px !important;
  }

  .highcharts-legend-item[data-z-index='1'] {
    display: none;
  }
  .highcharts-series-0 {
    left: -20px !important;
    top: 28px !important;

    &.highcharts-legend-item span {
      margin-left: -5px !important;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #fff;
      z-index: 20;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 14px;
      height: 2px;
      background: #fc8686;
      margin-top: 3px;
      margin-left: -4px;
    }
  }

  .highcharts-series-1 {
    left: -27px !important;
    top: 24px !important;

    &::before {
      content: '';
      display: inline-block;
      vertical-align: 1px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #249a9a;
    }
  }

  .highcharts-series-2 {
    left: -27px !important;
    top: 24px !important;

    &::before {
      content: '';
      display: inline-block;
      vertical-align: 1px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #a964a6;
    }
  }
  .highcharts-series-3 {
    left: -27px !important;
    top: 25px !important;

    &::before {
      content: '';
      display: inline-block;
      vertical-align: 1px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #5c80db;
    }
  }

  .highcharts-legend-item-hidden {
    &::before {
      background: #666;
    }

    &::after {
      background: #666;
    }
  }

  .highcharts-legend-item {
    position: relative;
    span {
      color: #fff !important;
      font-size: 12px !important;
      font-weight: 400 !important;
      font-family: 'Pretendard', sans-serif !important;
    }
  }

  .highcharts-credits {
    display: none;
  }

  &.fds {
    div[data-highcharts-chart] {
      width: calc(100% + 20px);
      overflow-x: auto !important;
      overflow-y: hidden !important;
      margin-bottom: 68px;

      &::-webkit-scrollbar {
        height: 3px;
      }
      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.12);
      }
      &::-webkit-scrollbar-thumb {
        border: 0;
      }
    }
    svg {
      overflow: visible !important;
    }

    .highcharts {
      &-container {
        height: 191px !important;
      }
      &-background {
        fill: transparent;
      }
      &-axis {
        &.highcharts-xaxis {
          display: none;
        }
      }

      &-axis-labels {
        text {
          color: var(--White) !important;
          fill: var(--White) !important;
          font-size: 12px !important;
          font-weight: 400;
          opacity: 0.6;
        }
      }
      &-yaxis-grid {
        .highcharts-grid-line {
          stroke-width: 1px;
          stroke: var(--White);
          background: #fff;
          opacity: 0.1;
        }
      }
      &-column-series {
        .highcharts-point {
          stroke-width: 0;
        }
      }
      &-legend {
        width: 100%;
        left: 50% !important;
        transform: translate(-25%, 250px);
        text {
          color: var(--White) !important;
          fill: var(--White) !important;
          font-size: 12px !important;
          font-weight: 400;
        }
        .highcharts-series-1 {
          transform: translate(95px, -14px);
        }
        .highcharts-series-2 {
          transform: translate(95px, 3px);
        }
        .highcharts-series-3 {
          transform: translate(95px, 20px);
        }
        &-item {
          .highcharts-point {
            stroke-width: 0;
          }
          &.highcharts-column-series {
            .highcharts-point {
              x: 10;
              y: 11;
            }
          }
        }
      }
    }
  }
  &.column {
    .highcharts-axis-labels {
      text {
        font-size: 10px !important;
        font-weight: 400;
      }
    }
    .highcharts-legend-item {
      text {
        font-size: 14px !important;
        font-weight: 400;
      }
    }
    .highcharts-tooltip {
      filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3)) !important;
      &-box {
        padding: 12px 16px;
      }
      text {
        tspan {
          /* font-size: 14px !important; */
          &:first-child {
            padding: 4px 0;
            display: block;
            // category
            font-size: 100% !important;
            font-weight: 700;
          }
          &.highcharts-br {
            & + tspan {
              // point
              font-size: 9px !important;
            }
          }
        }
      }
      > span {
        height: 200px;
      }
    }
  }
`;
