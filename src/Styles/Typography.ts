import { Colours } from 'src/Utils/Settings';
import { createGlobalStyle } from 'styled-components';
import * as BillaBongR from '@fonts/billabong_regular.otf';

const Typography = createGlobalStyle`
html {
  font-size: 10px;
  font-family: sans-serif;
}
p {
  font-size: 1.6rem;
  line-height: 1.5;
}
h1 {
  font-family: billabong, 'billabongregular';
  text-align: center;
  font-weight: 100;
  font-size: 13rem;
  margin: 2rem 0;
  letter-spacing: -1px;
  text-shadow: 0px 4px 0 rgba(18,86,136,0.11);
}
h1 a {
  color: ${Colours.Blue};
  text-decoration: none;
}
h1 a:focus {
  outline: 0;
}
@font-face {
  font-family: 'billabongregular';
  src: url(${BillaBongR.default});
  font-style: normal;
}


`;

export default Typography;
