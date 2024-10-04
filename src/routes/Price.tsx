import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const PriceTab = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AllCard = styled.div`
  flex: 0 0 49%;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 20px 40px;
  border-radius: 15px;
  p {
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const UpDown = styled.div`
  text-align: center;
  &.red {
    color: red;
  }
  &.blue {
    color: blue;
  }
  span {
    margin: 0 5px;
  }
`;

function Price() {
  const { state } = useLocation<any>();

  return (
    <PriceTab>
      <AllCard>
        <p>15m</p>
        <UpDown
          className={
            state.quotes.USD.percent_change_15m > 0
              ? 'red'
              : state.quotes.USD.percent_change_15m < 0
              ? 'blue'
              : ''
          }
        >
          <span>{state.quotes.USD.percent_change_15m}</span>
          <span>
            {state.quotes.USD.percent_change_15m > 0 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : state.quotes.USD.percent_change_15m < 0 ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              ''
            )}
          </span>
        </UpDown>
      </AllCard>
      <AllCard>
        <p>30m</p>
        <UpDown
          className={
            state.quotes.USD.percent_change_30m > 0
              ? 'red'
              : state.quotes.USD.percent_change_30m < 0
              ? 'blue'
              : ''
          }
        >
          <span>{state.quotes.USD.percent_change_30m}</span>
          <span>
            {state.quotes.USD.percent_change_30m > 0 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : state.quotes.USD.percent_change_30m < 0 ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              ''
            )}
          </span>
        </UpDown>
      </AllCard>
      <AllCard>
        <p>1h</p>
        <UpDown
          className={
            state.quotes.USD.percent_change_1h > 0
              ? 'red'
              : state.quotes.USD.percent_change_1h < 0
              ? 'blue'
              : ''
          }
        >
          <span>{state.quotes.USD.percent_change_1h}</span>
          <span>
            {state.quotes.USD.percent_change_1h > 0 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : state.quotes.USD.percent_change_1h < 0 ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              ''
            )}
          </span>
        </UpDown>
      </AllCard>
      <AllCard>
        <p>6h</p>
        <UpDown
          className={
            state.quotes.USD.percent_change_6h > 0
              ? 'red'
              : state.quotes.USD.percent_change_6h < 0
              ? 'blue'
              : ''
          }
        >
          <span>{state.quotes.USD.percent_change_6h}</span>
          <span>
            {state.quotes.USD.percent_change_6h > 0 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : state.quotes.USD.percent_change_6h < 0 ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              ''
            )}
          </span>
        </UpDown>
      </AllCard>
      <AllCard>
        <p>24h</p>
        <UpDown
          className={
            state.quotes.USD.percent_change_24h > 0
              ? 'red'
              : state.quotes.USD.percent_change_24h < 0
              ? 'blue'
              : ''
          }
        >
          <span>{state.quotes.USD.percent_change_24h}</span>
          <span>
            {state.quotes.USD.percent_change_24h > 0 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : state.quotes.USD.percent_change_24h < 0 ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              ''
            )}
          </span>
        </UpDown>
      </AllCard>
      <AllCard>
        <p>7d</p>
        <UpDown
          className={
            state.quotes.USD.percent_change_7d > 0
              ? 'red'
              : state.quotes.USD.percent_change_7d < 0
              ? 'blue'
              : ''
          }
        >
          <span>{state.quotes.USD.percent_change_7d}</span>
          <span>
            {state.quotes.USD.percent_change_7d > 0 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : state.quotes.USD.percent_change_7d < 0 ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              ''
            )}
          </span>
        </UpDown>
      </AllCard>
    </PriceTab>
  );
}

export default Price;
