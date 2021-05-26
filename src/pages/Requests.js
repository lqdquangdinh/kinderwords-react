import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
import { requestActions } from "../redux/actions/request.actions";
import BackBtn from "../components/BackBtn";
import BeatLoader from "react-spinners/BeatLoader";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.request.requests);
  const loadingRequests = useSelector((state) => state.request.loadingRequests);

  useEffect(() => {
    dispatch(requestActions.getRequests());
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="requests-page">
      <BackBtn />
      {loadingRequests ? (
        <BeatLoader color={"white"} />
      ) : (
        <div className="slider-container">
          <Slider {...settings}>
            {requests.map((request) => (
              <div className="slide" key={request._id}>
                <div className="letter-container">
                  <img className="request-bg" src="request.png" />
                  <p className="letter-content">{request.content}</p>
                  <div className="letter-btn-bar">
                    <button className="default btn">
                      <span className="material-icons">arrow_left</span>
                    </button>
                    <button className="default btn">Reply</button>
                    <button className="default btn">
                      <span className="material-icons">arrow_right</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Requests;
