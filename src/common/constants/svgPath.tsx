import "../../pages/home/svgPath.scss";
import { Link } from "react-router-dom";
import { route } from "../config/routes/routesName";

export const Computer = () => {
  return (
    <Link to={route.HOME} className="svg-container">
      <svg
        width="109"
        height="83"
        viewBox="0 0 109 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-hero"
      >
        <path
          d="M40.6559 42.6037L49.5161 38.6967M58.9301 35.9059L64.4677 33.6733M56.1613 41.4874L61.6989 49.3016M52.2849 30.8825V21.3939"
          stroke="#00BFA6"
          strokeWidth="4"
          className="hover-effect"
        />
        <ellipse
          cx="52.8387"
          cy="36.4642"
          rx="7.75269"
          ry="7.81414"
          fill="#00BFA6"
          className="hover-effect hover-fill"
        />
        <ellipse
          cx="66.6828"
          cy="32.5569"
          rx="4.98387"
          ry="5.02337"
          fill="#00BFA6"
          className="hover-effect hover-fill"
        />
        <ellipse
          cx="64.4678"
          cy="53.7668"
          rx="8.30644"
          ry="8.37229"
          fill="#00BFA6"
          className="hover-effect hover-fill"
        />
        <path
          d="M3 80H106M16.2903 3.05944C13.5215 3.05948 7.4589 1.97032 7.4589 9.11467C7.4589 16.259 7.98387 46.8829 7.98387 61.0228C8.53763 62.1391 7.21971 66.6044 12.0928 66.6044C16.9659 66.6044 71.8513 66.6044 97.1398 66.6044C98.8011 66.7904 101.57 66.3812 101.57 63.2555C101.57 60.1298 101.57 25.8593 101.57 9.11469C101.385 6.3239 100.212 3.05951 96.0323 3.0595C88.2796 3.05949 43.4247 3.05944 16.2903 3.05944Z"
          stroke="#00BFA6"
          strokeWidth="6"
          strokeLinecap="square"
          className="hover-effect"
        />
        <ellipse
          cx="51.7312"
          cy="16.3705"
          rx="7.75269"
          ry="7.81414"
          fill="#00BFA6"
          className="hover-effect hover-fill"
        />
        <ellipse
          cx="36.7796"
          cy="43.7201"
          rx="6.0914"
          ry="6.13968"
          fill="#00BFA6"
          className="hover-effect hover-fill"
        />
      </svg>
      <h1>Science</h1>
      <p>Using evidence to drive solutions</p>
    </Link>
  );
};

export const Chart = () => {
  return (
    <Link to={route.HOME} className="svg-container">
      <svg
        width="114"
        height="109"
        viewBox="0 0 114 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-hero"
      >
        <path
          d="M2 90.3537L44.8016 47.6707C46.3709 46.248 50.1089 44.2561 52.5058 47.6707C54.5603 50.061 56.786 51.7967 57.642 52.3659C58.7834 52.6504 61.4942 52.7927 63.2062 51.0854C64.9183 49.378 96.4488 17.5081 112 2M112 2V23.3415M112 2H102.156H92.3113M14.4125 107H25.9689M102.156 107H37.9533M25.9689 107V84.8049H37.9533V107M25.9689 107H37.9533"
          stroke="#00BFA6"
          className="hover-effect"
          strokeWidth="4"
        />
        <path
          d="M44.8016 107V65.1707H55.93V107H62.7782V69.439H74.3346V107H81.6109V50.2317H93.1673V107"
          stroke="#00BFA6"
          strokeWidth="4"
          className="hover-effect"
        />
      </svg>
      <h1>Economics</h1>
      <p>Rewarding people who protect nature</p>
    </Link>
  );
};

export const Handshake = () => {
  return (
    <Link to={route.HOME} className="svg-container">
      <svg
        width="145"
        height="111"
        viewBox="0 0 145 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-hero"
      >
        <path
          d="M35.2024 61.7399L54.4799 53.727C56.4355 52.8835 60.9336 51.7027 63.2804 53.727L65.7949 56.2574M65.7949 56.2574C62.0232 58.366 56.5752 63.4268 64.9567 66.8006C67.1918 66.9412 71.9972 66.9693 73.3383 65.9572L77.7385 64.0594M65.7949 56.2574L78.7862 49.9314C80.1832 49.2286 84.0666 48.2445 88.425 49.9314C92.7834 51.6184 104.769 55.4139 110.217 57.1008M82.1388 62.1616L77.7385 64.0594M77.7385 64.0594L90.9394 81.9829C91.6197 85.4057 91.6374 90.7196 88.425 92.2742M82.1388 91.6827L77.1099 86.2002M82.1388 91.6827C82.977 95.1971 82.3065 101.804 72.9192 100.117M82.1388 91.6827C84.9958 92.9149 87.0195 92.9543 88.425 92.2742M72.9192 100.117L67.4712 95.0566M72.9192 100.117C72.6398 103.351 70.3209 109.395 63.2804 107.708L47.3556 89.9958C46.7968 89.4335 45.344 88.3089 44.003 88.3089C42.6619 88.3089 37.5772 88.3089 35.2024 88.3089M88.425 92.2742L110.217 88.3089"
          stroke="#00BFA6"
          strokeWidth="6"
          className="hover-effect"
        />
        <path
          d="M17 54C18.0026 37 30.4062 3 72 3"
          stroke="#00BFA6"
          strokeWidth="6"
          className="hover-effect"
        />
        <path
          d="M145 92.1044H113.488C112.397 91.6874 110.217 89.8479 110.217 87.5127C110.217 85.1776 110.217 66.8021 110.217 57.9063C110.217 56.2573 112.833 54.5704 113.488 54.5704C114.142 54.5704 135.188 54.5704 145 54.5704"
          stroke="#00BFA6"
          strokeWidth="6"
          className="hover-effect"
        />
        <path
          d="M71 3.03336C88.0691 2.36053 123.566 11.6119 129 54"
          stroke="#00BFA6"
          strokeWidth="6"
          className="hover-effect"
        />
        <path
          d="M0 54.1487H31.5124C32.6026 54.5657 34.7832 56.4052 34.7832 58.7403C34.7832 61.0755 34.7832 79.4509 34.7832 88.3467C34.7832 89.9957 32.1665 91.6827 31.5124 91.6827C30.8582 91.6827 9.8125 91.6827 0 91.6827"
          stroke="#00BFA6"
          strokeWidth="6"
          className="hover-effect"
        />
      </svg>
      <h1>Partnerships</h1>
      <p>Building alliances across sectors</p>
    </Link>
  );
};

export const House = () => {
  return (
    <Link to={route.HOME} className="svg-container">
      <svg
        width="97"
        height="105"
        viewBox="0 0 97 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-hero"
      >
        <path
          d="M3.95266 102H92.9184M3.95266 88.3299H10.3489M92.9184 88.3299H85.9407M10.3489 88.3299V62.0412M10.3489 88.3299H26.0487M10.3489 62.0412H85.9407M10.3489 62.0412C-2.67616 59.0969 4.53414 54.5052 9.76741 52.5773L18.4896 49.87M26.0487 88.3299V62.0412M26.0487 88.3299H40.5856M40.5856 88.3299V62.0412M40.5856 88.3299H55.704M55.704 88.3299V62.0412M55.704 88.3299H70.8223M70.8223 88.3299V62.0412M70.8223 88.3299H85.9407M85.9407 88.3299V62.0412M85.9407 62.0412C91.7554 60.9897 100.129 57.7299 87.1036 53.1031L77.8001 49.9485M18.4896 49.87L48.7263 40.4845L77.8001 49.9485M18.4896 49.87V34.701M18.4896 34.701H33.6079M18.4896 34.701C19.8464 25.7629 23.1414 14.1959 41.7486 7.8866H48.1448M48.1448 7.8866V0M48.1448 7.8866C52.7966 7.36082 74.8927 8.41237 77.8001 32.0722V34.701M77.8001 49.9485V34.701M77.8001 34.701H63.2632"
          stroke="#00BFA6"
          strokeWidth="6"
          className="hover-effect"
        />
      </svg>
      <h1>Advocacy</h1>
      <p>Shaping policy and taking legal action</p>
    </Link>
  );
};
