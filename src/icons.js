import React from "react";
import styled from "styled-components";

const Animation = styled.g`
  @keyframes ld-fall {
    0% {
      transform: translate(0, 0px) rotate3d(1, 1, 1, 0deg);
    }
    100% {
      transform: translate(0, 975px) rotate3d(1, 1, 1, 1080deg);
    }
  }
  .ld.ld-fall {
    animation: ld-fall 4s linear infinite;
    animation: ld-fall 1s linear infinite;
  }
`;

const ConfettiWrap = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const SendIcon = () => {
  return (
    <svg height={24} viewBox="0 0 512.005 512.005" width={24}>
      <path d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
    </svg>
  );
};

export const ChatIcon = () => {
  return (
    <svg viewBox="0 0 512.001 512.001" width="24" height="24">
      <path d="M468.53 306.575c-4.14-10.239-15.798-15.188-26.038-11.046-10.241 4.14-15.187 15.797-11.047 26.038L455 379.833l-69.958-30.839a20.002 20.002 0 00-15.917-.095c-23.908 10.201-49.52 15.373-76.124 15.373-107.073 0-179-83.835-179-162.136 0-89.402 80.299-162.136 179-162.136s179 72.734 179 162.136c0 6.975-.65 15.327-1.781 22.913-1.63 10.925 5.905 21.102 16.83 22.732 10.926 1.634 21.103-5.905 22.732-16.83 1.431-9.59 2.219-19.824 2.219-28.815 0-54.33-23.006-105.308-64.783-143.543C405.936 20.809 351.167 0 293.001 0S180.067 20.809 138.784 58.592c-37.332 34.168-59.66 78.516-63.991 126.335C27.836 216.023.001 265.852.001 319.525c0 33.528 10.563 65.34 30.67 92.717L1.459 484.504a19.998 19.998 0 004.621 21.855 19.989 19.989 0 0021.988 3.942l84.229-37.13c21.188 7.887 43.585 11.88 66.703 11.88.5 0 .991-.039 1.482-.075 33.437-.253 65.944-9.048 94.098-25.507 25.218-14.744 45.962-34.998 60.505-58.917a230.144 230.144 0 0041.547-11.551l107.301 47.3a20 20 0 0021.989-3.942 19.998 19.998 0 004.621-21.855L468.53 306.575zM179.002 445c-.273 0-.539.03-.81.041-20.422-.104-40.078-4.118-58.435-11.95a19.991 19.991 0 00-15.916.095l-46.837 20.646 15.109-37.375a20.001 20.001 0 00-3.322-20.47c-18.835-22.097-28.79-48.536-28.79-76.462 0-31.961 13.445-62.244 36.969-85.206 7.324 39.925 27.989 78.117 59.162 108.119 38.791 37.333 90.101 58.961 145.506 61.565C255.626 429.608 218.402 445 179.002 445z" />
      <circle cx={292.001} cy={203} r={20} />
      <circle cx={372.001} cy={203} r={20} />
      <circle cx={212.001} cy={203} r={20} />
    </svg>
  );
};

export const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ transform: "rotate(-180deg)" }}
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
  </svg>
);

export const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 896 896"
  >
    <title>Copy to Clipboard</title>
    <path d="M803.1 0H299.9C248.6 0 207 41.6 207 92.9V206H80c-44.2 0-80 35.8-80 80v530c0 44.2 35.8 80 80 80h530c44.2 0 80-35.8 80-80V690h113.1c51.3 0 92.9-41.6 92.9-92.9V92.9C896 41.6 854.4 0 803.1 0zM610 836H80c-11 0-20-9-20-20V286c0-11 9-20 20-20h530c11 0 20 9 20 20v530c0 11-9 20-20 20zm227-238.9c0 18.2-14.7 32.9-32.9 32.9H691V286c0-44.2-35.8-80-80-80H267V92.9c0-18.2 14.7-32.9 32.9-32.9h504.2c18.2 0 32.9 14.7 32.9 32.9v504.2z" />
    <path d="M478.4 431H213c-15.8 0-29.4 12-30.5 27.8-1.2 16.5 11.2 30.9 27.7 32.2.7.1 1.5.1 2.2.1h265.4c15.8 0 29.4-12 30.5-27.8 1.2-16.5-11.2-30.9-27.7-32.2-.7-.1-1.5-.1-2.2-.1zm0 180H213c-15.8 0-29.4 12-30.5 27.8-1.2 16.5 11.2 30.9 27.7 32.2.7.1 1.5.1 2.2.1h265.4c15.8 0 29.4-12 30.5-27.8 1.2-16.5-11.2-30.9-27.7-32.2-.7-.1-1.5-.1-2.2-.1z" />
  </svg>
);

export const Confetti = () => {
  return (
    <ConfettiWrap>
      <svg
        viewBox="0 0 1920 975"
        preserveAspectRatio="xMidYMid"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "170%",
          height: "100%",
          zIndex: 1,
          transform: "rotate(0deg) translate(-50%, -50%)",
        }}
        width={1920}
      >
        <Animation transform="">
          <g transform="translate(0 280.64502622999976)">
            <g transform="translate(76.2029048431485 0)">
              <g className="ld ld-fall" style={{ animationDuration: "4s" }}>
                <rect
                  x="-4.766917699735915"
                  y="-3.724911285515274"
                  width="9.53383539947183"
                  height="7.449822571030548"
                  style={{ transform: "scale(2.1307603942302493)" }}
                  fill="#34bbe6"
                ></rect>
              </g>
            </g>
            <g transform="translate(628.0554446854591 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.7470992967912595s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.385346399205986"
                  y="-5.23057512338983"
                  width="10.770692798411972"
                  height="10.46115024677966"
                  style={{ transform: "scale(2.197907727729092)" }}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1051.3620322331099 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.4579212511984165s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.91759665244505"
                  y="-4.51774604191513"
                  width="11.8351933048901"
                  height="9.03549208383026"
                  style={{ transform: "scale(3.161016626197947)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(197.50809593099277 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.646560186619931s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-4.935759358914048"
                  y="-4.4359853657190165"
                  width="9.871518717828096"
                  height="8.871970731438033"
                  style={{ transform: "scale(2.143083943018241)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1620.8886042837612 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.09466551055122574s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.87732689253551"
                  y="-5.792892369613526"
                  width="11.75465378507102"
                  height="11.585784739227051"
                  style={{ transform: "scale(1.622749109220245)" }}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(991.0627449040005 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.15446009320468024s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.505695261182713"
                  y="-4.751648919600823"
                  width="7.011390522365426"
                  height="9.503297839201647"
                  style={{ transform: "scale(1.6292185027420265)" }}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1756.5070976956194 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.5738872174155385s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.3953195716162723"
                  y="-3.4366623488460197"
                  width="6.790639143232545"
                  height="6.8733246976920395"
                  style={{ transform: "scale(1.747533585264248)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1014.7016776805981 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.141055090989739s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.341113502865551"
                  y="-5.001523728022294"
                  width="10.682227005731102"
                  height="10.003047456044587"
                  style={{ transform: "scale(2.1751275615796217)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1410.2273868037555 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.829981476087561s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-5.379822474262539"
                  y="-5.953396594524586"
                  width="10.759644948525079"
                  height="11.906793189049171"
                  style={{ transform: "scale(2.9237102433014863)" }}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(586.9440078056334 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-3.9565762604952512s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.5901591812415736"
                  y="-3.07085784537849"
                  width="7.180318362483147"
                  height="6.14171569075698"
                  style={{ transform: "scale(1.8314767165361232)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(445.7556920516471 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.7659655618660128s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.062990563649949"
                  y="-3.8261086152029247"
                  width="6.125981127299898"
                  height="7.652217230405849"
                  style={{ transform: "scale(2.1245527387942995)" }}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(1539.4255843307699 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.8771358321204001s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.7645820767203837"
                  y="-5.70478297013469"
                  width="7.529164153440767"
                  height="11.40956594026938"
                  style={{ transform: "scale(3.0219071854295314)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1142.6378786357247 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.2969254611136622s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-4.439373490258488"
                  y="-5.247411437061523"
                  width="8.878746980516976"
                  height="10.494822874123045"
                  style={{ transform: "scale(2.9996217441770923)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1399.8656445826484 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.6360366684262928s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-4.331047636309998"
                  y="-3.159366225853575"
                  width="8.662095272619997"
                  height="6.31873245170715"
                  style={{ transform: "scale(3.430285106529233)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(480.3805511379741 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.8922942102492648s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-3.4383800843186316"
                  y="-3.0336845405802433"
                  width="6.876760168637263"
                  height="6.067369081160487"
                  style={{ transform: "scale(3.356727549917121)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1805.3671328834114 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.8345914247479413s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.599462632668674"
                  y="-5.466915420778446"
                  width="11.198925265337348"
                  height="10.933830841556892"
                  style={{ transform: "scale(3.411664005259214)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1357.8488717950556 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.005727121274387681s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.124860049845679"
                  y="-4.539097708475467"
                  width="10.249720099691357"
                  height="9.078195416950933"
                  style={{ transform: "scale(3.080357051701965)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(889.1585333118096 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.423841286913516s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-4.4336118354137195"
                  y="-4.5937034382157185"
                  width="8.867223670827439"
                  height="9.187406876431437"
                  style={{ transform: "scale(1.5449802804899784)" }}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1092.6925456393806 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.8402238975998677s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.927060731280971"
                  y="-4.53108039680051"
                  width="11.854121462561942"
                  height="9.06216079360102"
                  style={{ transform: "scale(2.7288238761622727)" }}
                  fill="#a3e048"
                ></rect>
              </g>
            </g>
            <g transform="translate(23.462443001555613 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.717028752015708s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.529500586609534"
                  y="-3.710866378498138"
                  width="11.059001173219068"
                  height="7.421732756996276"
                  style={{ transform: "scale(2.432681944289455)" }}
                  fill="#f7d038"
                ></rect>
              </g>
            </g>
            <g transform="translate(755.7601430358387 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.922335006088033s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-5.931553146929144"
                  y="-5.517587911370663"
                  width="11.863106293858287"
                  height="11.035175822741326"
                  style={{ transform: "scale(2.0555571130285837)" }}
                  fill="#34bbe6"
                ></rect>
              </g>
            </g>
            <g transform="translate(884.9492040499341 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-3.914737327332583s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-4.172510102298994"
                  y="-5.824924834703157"
                  width="8.345020204597988"
                  height="11.649849669406313"
                  style={{ transform: "scale(1.974070707032764)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1076.6799842771647 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-3.341456023608722s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-3.0160576840794606"
                  y="-3.5085869465315205"
                  width="6.032115368158921"
                  height="7.017173893063041"
                  style={{ transform: "scale(3.128453487798505)" }}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1184.3498593796762 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.2902468654198831s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.570009077532047"
                  y="-3.531299668616427"
                  width="11.140018155064094"
                  height="7.062599337232854"
                  style={{ transform: "scale(3.4107272648618956)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1265.9790215361709 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.17088379492074646s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.56954988020458"
                  y="-5.137204312598396"
                  width="11.13909976040916"
                  height="10.274408625196791"
                  style={{ transform: "scale(1.9230427441734217)" }}
                  fill="#a3e048"
                ></rect>
              </g>
            </g>
          </g>
          <g transform="translate(0 -694.3549737700002)">
            <g transform="translate(76.2029048431485 0)">
              <g className="ld ld-fall" style={{ animationDuration: "4s" }}>
                <rect
                  x="-4.766917699735915"
                  y="-3.724911285515274"
                  width="9.53383539947183"
                  height="7.449822571030548"
                  style={{ transform: "scale(2.1307603942302493)" }}
                  fill="#34bbe6"
                ></rect>
              </g>
            </g>
            <g transform="translate(628.0554446854591 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.7470992967912595s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.385346399205986"
                  y="-5.23057512338983"
                  width="10.770692798411972"
                  height="10.46115024677966"
                  style={{ transform: "scale(2.197907727729092)" }}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1051.3620322331099 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.4579212511984165s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.91759665244505"
                  y="-4.51774604191513"
                  width="11.8351933048901"
                  height="9.03549208383026"
                  style={{ transform: "scale(3.161016626197947)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(197.50809593099277 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.646560186619931s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-4.935759358914048"
                  y="-4.4359853657190165"
                  width="9.871518717828096"
                  height="8.871970731438033"
                  style={{ transform: "scale(2.143083943018241)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1620.8886042837612 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.09466551055122574s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.87732689253551"
                  y="-5.792892369613526"
                  width="11.75465378507102"
                  height="11.585784739227051"
                  style={{ transform: "scale(1.622749109220245)" }}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(991.0627449040005 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.15446009320468024s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.505695261182713"
                  y="-4.751648919600823"
                  width="7.011390522365426"
                  height="9.503297839201647"
                  style={{ transform: "scale(1.6292185027420265)" }}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1756.5070976956194 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.5738872174155385s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.3953195716162723"
                  y="-3.4366623488460197"
                  width="6.790639143232545"
                  height="6.8733246976920395"
                  style={{ transform: "scale(1.747533585264248)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1014.7016776805981 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.141055090989739s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.341113502865551"
                  y="-5.001523728022294"
                  width="10.682227005731102"
                  height="10.003047456044587"
                  style={{ transform: "scale(2.1751275615796217)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1410.2273868037555 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.829981476087561s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-5.379822474262539"
                  y="-5.953396594524586"
                  width="10.759644948525079"
                  height="11.906793189049171"
                  style={{ transform: "scale(2.9237102433014863)" }}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(586.9440078056334 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-3.9565762604952512s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.5901591812415736"
                  y="-3.07085784537849"
                  width="7.180318362483147"
                  height="6.14171569075698"
                  style={{ transform: "scale(1.8314767165361232)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(445.7556920516471 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.7659655618660128s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.062990563649949"
                  y="-3.8261086152029247"
                  width="6.125981127299898"
                  height="7.652217230405849"
                  style={{ transform: "scale(2.1245527387942995)" }}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(1539.4255843307699 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.8771358321204001s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-3.7645820767203837"
                  y="-5.70478297013469"
                  width="7.529164153440767"
                  height="11.40956594026938"
                  style={{ transform: "scale(3.0219071854295314)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1142.6378786357247 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.2969254611136622s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-4.439373490258488"
                  y="-5.247411437061523"
                  width="8.878746980516976"
                  height="10.494822874123045"
                  style={{ transform: "scale(2.9996217441770923)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1399.8656445826484 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.6360366684262928s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-4.331047636309998"
                  y="-3.159366225853575"
                  width="8.662095272619997"
                  height="6.31873245170715"
                  style={{ transform: "scale(3.430285106529233)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(480.3805511379741 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.8922942102492648s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-3.4383800843186316"
                  y="-3.0336845405802433"
                  width="6.876760168637263"
                  height="6.067369081160487"
                  style={{ transform: "scale(3.356727549917121)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1805.3671328834114 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.8345914247479413s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.599462632668674"
                  y="-5.466915420778446"
                  width="11.198925265337348"
                  height="10.933830841556892"
                  style={{ transform: "scale(3.411664005259214)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1357.8488717950556 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.005727121274387681s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.124860049845679"
                  y="-4.539097708475467"
                  width="10.249720099691357"
                  height="9.078195416950933"
                  style={{ transform: "scale(3.080357051701965)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(889.1585333118096 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.423841286913516s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-4.4336118354137195"
                  y="-4.5937034382157185"
                  width="8.867223670827439"
                  height="9.187406876431437"
                  style={{ transform: "scale(1.5449802804899784)" }}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1092.6925456393806 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.8402238975998677s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.927060731280971"
                  y="-4.53108039680051"
                  width="11.854121462561942"
                  height="9.06216079360102"
                  style={{ transform: "scale(2.7288238761622727)" }}
                  fill="#a3e048"
                ></rect>
              </g>
            </g>
            <g transform="translate(23.462443001555613 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.717028752015708s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.529500586609534"
                  y="-3.710866378498138"
                  width="11.059001173219068"
                  height="7.421732756996276"
                  style={{ transform: "scale(2.432681944289455)" }}
                  fill="#f7d038"
                ></rect>
              </g>
            </g>
            <g transform="translate(755.7601430358387 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-1.922335006088033s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-5.931553146929144"
                  y="-5.517587911370663"
                  width="11.863106293858287"
                  height="11.035175822741326"
                  style={{ transform: "scale(2.0555571130285837)" }}
                  fill="#34bbe6"
                ></rect>
              </g>
            </g>
            <g transform="translate(884.9492040499341 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-3.914737327332583s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-4.172510102298994"
                  y="-5.824924834703157"
                  width="8.345020204597988"
                  height="11.649849669406313"
                  style={{ transform: "scale(1.974070707032764)" }}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1076.6799842771647 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-3.341456023608722s",
                  animationDuration: "4s",
                }}
              >
                <rect
                  x="-3.0160576840794606"
                  y="-3.5085869465315205"
                  width="6.032115368158921"
                  height="7.017173893063041"
                  style={{ transform: "scale(3.128453487798505)" }}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1184.3498593796762 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.2902468654198831s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.570009077532047"
                  y="-3.531299668616427"
                  width="11.140018155064094"
                  height="7.062599337232854"
                  style={{ transform: "scale(3.4107272648618956)" }}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1265.9790215361709 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: "-0.17088379492074646s",
                  animationDuration: "2s",
                }}
              >
                <rect
                  x="-5.56954988020458"
                  y="-5.137204312598396"
                  width="11.13909976040916"
                  height="10.274408625196791"
                  style={{ transform: "scale(1.9230427441734217)" }}
                  fill="#a3e048"
                ></rect>
              </g>
            </g>
          </g>
        </Animation>
      </svg>
    </ConfettiWrap>
  );
};

export const HelpIcon = () => (
  <svg viewBox="0 0 512 512" width="20" height="20">
    <circle cx={256} cy={378.5} r={25} />
    <path d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z" />
    <path d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z" />
  </svg>
);
