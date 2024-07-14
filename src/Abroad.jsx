import React from "react";

// assets
import search from "./assets/search.svg";
import bell from "./assets/bell.png";
import abroadImg from "./assets/abroadImg.png";
import up from "./assets/up.png";
import microsoft from "./assets/microsoft.png";
import koss from "./assets/koss.png";
import adamas from "./assets/adamas.svg";

export default function Abroad() {
  return (
    <div>
      <div className="h-[40vh] border-b py-[3vh]">
        <div className="h-[5vh] text-[22px] font-bold text-gray-400 flex items-center justify-between px-[4vw] mb-[2vh]">
          <div className="flex justify-between w-8/12">
            <div>국내</div>
            <div className="text-black">해외</div>
            <div>상품/연금</div>
            <div>자산</div>
          </div>
          <div className="flex items-center justify-end flex-1 gap-3">
            <img src={search} alt="search" className="w-[6.5vw] h-[6.5vw]" />
            <img src={bell} alt="bell" className="w-[8vw] h-[8vw]" />
          </div>
        </div>
        <div className="w-full h-[20vh] pl-[4vw] flex items-center gap-3 overflow-auto mb-[2vh]">
          <img src={abroadImg} className="w-[36vw]" />
          <img src={abroadImg} className="w-[36vw]" />
          <img src={abroadImg} className="w-[36vw]" />
        </div>
        <div className="h-[5vh] px-[4vw] flex items-center">
          <div className="px-3 py-1 border rounded-[30vw] w-fit h-fit text-[13px] font-bold">
            해외시황
          </div>
          <span className="ml-[2vw] text-[15px] text-gray-500">
            뉴욕증시는 시장 금리 하락 속 혼조세
          </span>
        </div>
      </div>
      <div className="w-full px-[4vw] py-[4vh]">
        <div className="font-bold text-[18px]">최근/관심</div>
        <div className="my-[3vh] flex items-center">
          <img
            src={microsoft}
            className="border rounded-[35px] w-[12vw] mr-[3vw]"
          />
          <div className="flex-1">
            <p className="text-[17px]">마이크로소프트</p>
            <span className="text-gray-400 text-[16px]">MSFT</span>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[17px] font-bold">460.77달러</p>
            <span className="text-[16px] text-[#ff0000] flex items-center">
              <img src={up} className="w-[2.5vw] h-[1vh] mr-[1vw]" />
              1.49달러 +0.32%
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center border py-[1vh] rounded-md">
          더보기
        </div>
      </div>
      <div className="w-full px-[4vw]">
        <div className="flex items-center justify-between">
          <span className="font-bold text-[18px] ">미국 실시간 랭킹</span>
          <div className="flex items-center">
            <span className="text-gray-500 mr-[1vw]">원화</span>
            <div className="w-[10vw] px-[1vw] py-[0.2vh] bg-gray-200 rounded-[35px] h-[2.7vh] flex items-center">
              <div className="w-[4.8vw] h-full rounded-[35px] bg-white" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 w-fit my-[1.5vh] font-bold text-[17px] text-gray-400">
          <span className="text-black border-b-[3px] border-black">상승</span>
          <span>하락</span>
          <span>거래량</span>
          <span>시가총액</span>
        </div>
        <div>
          <div className="flex border-b py-[1.5vh]">
            <img
              src={koss}
              className="border rounded-[35px] w-[12vw] mr-[3vw]"
            />
            <div className="flex-1">
              <p className="text-[17px]">코스</p>
              <span className="text-gray-400 text-[16px]">KOSS</span>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[17px] font-bold">10.63달러</p>
              <span className="text-[16px] text-[#ff0000] flex items-center">
                <img src={up} className="w-[2.5vw] h-[1vh] mr-[1vw]" />
                6.27달러 +143.81%
              </span>
            </div>
          </div>
          <div className="flex border-b py-[1.5vh]">
            <img
              src={adamas}
              className="object-cover border rounded-[35px] w-[12vw] mr-[3vw]"
            />
            <div className="flex-1">
              <p className="text-[17px]">애더마스 원</p>
              <span className="text-gray-400 text-[16px]">JEWL</span>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[17px] font-bold">0.46달러</p>
              <span className="text-[16px] text-[#ff0000] flex items-center">
                <img src={up} className="w-[2.5vw] h-[1vh] mr-[1vw]" />
                0.21달러 +89.14%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
