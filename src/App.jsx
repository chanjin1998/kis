import React from "react";
import { useState } from "react";
import back from "./assets/back.png";
import search from "./assets/search.png";
import dot from "./assets/dots-vertical.svg";
import heart from "./assets/heart.svg";
import redbar from "./assets/redbar.png";
import redarrow from "./assets/redarrow.png";
import chart from "./assets/image.png";
import npay from "./assets/npay.png";
import hamburger from "./assets/menu.svg";
import bell from "./assets/bell.svg";
import star from "./assets/star.svg";
import cog from "./assets/cog.svg";
import pencil from "./assets/pencil.svg";
function App() {
  return (
    <>
      <div className="mx-auto w-full mt-[5vh]">
        <div className="flex w-[88vw] items-center justify-between mx-auto">
          <img src={back} alt="back" className="w-[5vw] h-[5vw]" />
          <div className="border-black border-b-[1px] w-[50vw] flex justify-between h-[7vw] items-center gap-6">
            <div>삼성전자</div>
            <img src={search} alt="search" className="w-[5vw] h-[5vw]" />
          </div>
          <button className="border-gray-400 border-[1px] bg-white px-2 py-1 rounded-[6px]">
            주문
          </button>
          <img src={dot} alt="search" className="w-[5vw] h-[5vw]" />
        </div>
        <div className="flex w-[88vw] justify-between items-center mt-[1.5vh] mx-auto">
          <div className="flex text-sm text-gray-500 gap-1 items-center">
            <div className="h-[2vh]">024910</div>
            <div className="h-[2vh] border-gray-500 border-l-[1px] border-r-[1px] pr-1 pl-1 text-center">
              코스피
            </div>
            <div className="h-[2vh]">전자통신부문</div>
          </div>
          <img src={heart} alt="heart" className="w-[7vw] h-[7vw]" />
        </div>
        <div className="flex w-[88vw] mt-[1.5vh] justify-between mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={redbar} alt="red" className="w-[2.5vw] h-[9vw]" />
              <div className="text-[#FF0505] text-[35px] font-bold ml-[4vw]">
                3,120
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center">
                <img src={redarrow} alt="red" className="w-[3.5vw] h-[4.5vw]" />
                <div className="text-[#FF0505] ml-[1vw] font-bold">720</div>
              </div>
              <div className="text-[#FF0505] ml-[5vw] font-bold">30.00%</div>
            </div>
            <div className="flex">
              <div className="text-[15px] font-bold">19,881,026주</div>
              <span className="text-[#bbbbbb]">(11,814.60%)</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={chart} alt="chart" className="w-[30vw] h-[20vw]" />
            <div className="flex justify-end gap-1">
              <div className="text-[#bbbbbb]">증</div>
              <div>60</div>
              <div className="text-[#bbbbbb]">신</div>
              <div>70</div>
            </div>
          </div>
        </div>
        <div className="flex w-[88vw] mt-[1.5vh] text-[18px] text-[#969696] gap-4 mx-auto">
          <div>리서치</div>
          <div>기업정보</div>
          <div>뉴스</div>
          <div>투자의견</div>
          <div className="text-black font-bold border-black border-b-2">
            종목토론
          </div>
        </div>
        <div className="flex w-full bg-[#f6f6f6] h-[9vh] justify-center items-center border-[#e1e1e1] border-y-[1px]">
          <div className="flex w-[20vw] h-[5vh] text-center bg-white items-center justify-center border-black border-[1.5px] rounded-tl-md rounded-bl-md">
            <span>네이버</span>
          </div>
          <div className="flex w-[20vw] h-[5vh] text-center bg-white items-center justify-center border-[#aeaeae] border-[1px]">
            <span>다음</span>
          </div>
          <div className="flex w-[20vw] h-[5vh] text-center bg-white items-center justify-center border-[#aeaeae] border-[1px]">
            <span>싱크폴</span>
          </div>
          <div className="flex w-[20vw] h-[5vh] text-center bg-white items-center justify-center border-[#aeaeae] border-[1px] rounded-tr-md rounded-br-md">
            <span>팍스넷</span>
          </div>
        </div>
        <div className="flex w-[88vw] mx-auto mt-[1.5vh] items-center justify-between">
          <img src={npay} alt="npay" className="w-[30vw] h-[4vh]" />
          <div className="flex gap-4">
            <img src={search} alt="" className="w-[8vw] h-[8vw]" />
            <img src={hamburger} alt="" className="w-[8vw] h-[8vw]" />
          </div>
        </div>
        <div className="flex w-[88vw] mt-[2.5vh] text-[18px] text-[#969696] justify-between mx-auto">
          <div>홈</div>
          <div className="text-black font-bold border-black border-b-2">
            국내
          </div>
          <div>해외</div>
          <div>지표</div>
          <div>가상자산</div>
          <div>투자정보</div>
        </div>
        <div className="flex w-full h-[20vh] mx-auto justify-between">
          <div className="flex flex-col mt-[3vh] ml-[5vw]">
            <div className="flex gap-2">
              <div className="font-bold">024910</div>
              <div className="text-[#757575]">코스피</div>
            </div>
            <div className="font-bold text-[20px]">삼성전자</div>
            <div className="text-[35px]">
              3,120<span className="text-[15px]">원</span>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center">
                <img src={redarrow} alt="red" className="w-[3.5vw] h-[4.5vw]" />
                <div className="text-[#FF0505] ml-[1vw] font-bold">720</div>
              </div>
              <div className="text-[#FF0505] ml-[4vw] font-bold">+30.00%</div>
            </div>
          </div>
          <div className="flex flex-col mt-[3vh] mr-[5vw] gap-4">
            <img src={chart} alt="chart" className="w-[30vw] h-[20vw]" />
            <div className="flex justify-end gap-2">
              <img src={bell} alt="" className="w-[8vw] h-[8vw]" />
              <img src={star} alt="" className="w-[8vw] h-[8vw]" />
            </div>
          </div>
        </div>
        <div className="flex w-[88vw] mt-[0.5vh] mx-auto justify-between border-[#dbdbdb] border-t-[1px] pt-[1vh]">
          <div>내 증권사 설정하고 빠르게 주문하세요.</div>
          <div className="flex items-center gap-1 ">
            <img src={cog} alt="" className="w-[5vw] h-[5vw]" />
            <div>설정</div>
          </div>
        </div>
        <div className="flex w-full mt-[2.5vh] text-[18px] text-[#969696] justify-between mx-auto bg-[#f6f6f6] py-[1vh]">
          <div className="flex w-[88vw] justify-between mx-auto">
            <div>종합</div>
            <div className="text-black font-bold border-black border-b-2">
              토론
            </div>
            <div>뉴스·공시</div>
            <div>시세</div>
            <div>재무</div>
            <div>리서치</div>
          </div>
        </div>
        <div className="flex w-[88vw] mt-[1.5vh] text-[18px] mx-auto justify-between">
          <div>주주글만</div>
          <div className="flex gap-3">
            <div>주주인증&gt;</div>
            <div>내 토론글&gt;</div>
            <img src={pencil} alt="" className="w-[8vw] h-[8vw]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
