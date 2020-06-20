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

export const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
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
          transform: "rotate(0deg) translate(-50%, -50%)"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "4s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "4s"
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
                  animationDuration: "4s"
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
                  animationDuration: "4s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "4s"
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
                  animationDuration: "4s"
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
                  animationDuration: "4s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "4s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "4s"
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
                  animationDuration: "4s"
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
                  animationDuration: "4s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
                  animationDuration: "4s"
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
                  animationDuration: "4s"
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
                  animationDuration: "4s"
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
                  animationDuration: "2s"
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
                  animationDuration: "2s"
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
