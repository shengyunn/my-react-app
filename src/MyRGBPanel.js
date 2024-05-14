import React from "react";
import { useState } from "react";
import MySlider from "./Myslider";

function MyRGBPanel() {
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    const rgbCss = {
        border: "3px solid white",
        borderRadius: "25px",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundColor: "rgba(255, 255, 255, 0.3)", // 使用 rgba() 函數設置半透明的白色背景，最後一個參數是透明度（範圍從 0 到 1）
        backdropFilter: "blur(1px)" // 使用 backdrop-filter 屬性添加模糊效果，值越高越模糊，這裡的參數需要帶單位(px)
      };
  return (
    <>
      <div
        style={rgbCss}
      >
        <h3 style={{color: "white"}}>
          目前色彩
        </h3>
        <div
          style={{
            width: "300px",
            height: "150px",
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            borderRadius: "35px",
          }}
        />
        <span>R: </span>
        <MySlider onChange={updateR} />
        <span>G: </span>
        <MySlider onChange={updateG} />
        <span>B: </span>
        <MySlider onChange={updateB} />
      </div>
    </>
  );
}

export default MyRGBPanel;