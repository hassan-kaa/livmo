import React, { useState } from "react";
import { MyGrid } from "../components/CustomStyled";

import FileUploader from "../components/FileUploader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ImageUploading from "react-images-uploading";

function ImageAdder({ text }) {
  const [images, setImages] = useState([]);
  const onChange = (imageList) => {
    // data for submit
    setImages(imageList);
  };
  return (
    <div>
      <h2>{text} :</h2>
      <MyGrid container spacing={3}>
        <MyGrid item xs={8}>
          <Splide
            options={{
              perPage: 2,
              arrows: false,
              pagination: true,
              gap: "2rem",
              drag: "free",
              //   type: "loop",
              height: "30vh",
            }}
          >
            {images.map((image) => (
              <SplideSlide>
                <img src={image} alt="" />
              </SplideSlide>
            ))}

            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </SplideSlide>
          </Splide>
        </MyGrid>
        <MyGrid item xs={4}>
          {/* <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={6}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload }) => (
              // write your building UI
              <div>
                <FileUploader onClickFunction={onImageUpload} />
                <Splide>
                  {imageList.map((image, index) => (
                    <SplideSlide key={index}>
                      <img src={image} alt="" />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            )}
          </ImageUploading> */}
          <FileUploader />
        </MyGrid>
      </MyGrid>
    </div>
  );
}

export default ImageAdder;
