// import React, {useState} from "react";
// import "./sponsor.css";
// import datasponsor from "./datasponsor";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import {  Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';

// const Sponsor = () => {
//     const [sponno, setSponno] = useState(0);
//     if (sponno === 12) {
//         setSponno(0);
//     }
//     // setTimeout(() => {
//     //   setSponno(sponno + 1);
//     // }, 3000);
//     return (
//         <div className="sponsorWrapper">
//             {/*<div className="sponsor"><h1 className="sponshead">SPONSORS</h1></div>*/}

//             <div className="sponsor-wrapper">
//                  <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         loop={true}
//         centeredSlides={true}
//         slidesOffsetBefore={-110}
//         slidesPerView={1.35}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//          autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={false}
//         modules={[Autoplay,EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//                 <SwiperSlide> <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno].spontitle}</h1>
//                       <p>{datasponsor[sponno].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                 </SwiperSlide>
//                      <SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 1].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 1].spontitle}</h1>
//                       <p>{datasponsor[sponno + 1].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 2].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 2].spontitle}</h1>
//                       <p>{datasponsor[sponno + 2].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 3].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 3].spontitle}</h1>
//                       <p>{datasponsor[sponno + 3].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 4].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 4].spontitle}</h1>
//                       <p>{datasponsor[sponno + 4].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 5].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 5].spontitle}</h1>
//                       <p>{datasponsor[sponno + 5].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 6].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 6].spontitle}</h1>
//                       <p>{datasponsor[sponno + 6].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 7].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 7].spontitle}</h1>
//                       <p>{datasponsor[sponno + 7].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 8].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 8].spontitle}</h1>
//                       <p>{datasponsor[sponno + 8].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 9].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 9].spontitle}</h1>
//                       <p>{datasponsor[sponno + 9].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 10].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 10].spontitle}</h1>
//                       <p>{datasponsor[sponno + 10].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 11].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 11].spontitle}</h1>
//                       <p>{datasponsor[sponno + 11].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide><SwiperSlide>
//                 <div className="sponsor-wholecontainer1">
//                   <div className="sponsor-wholecontainer1img">
//                     <img src={datasponsor[sponno + 12].url} alt="" />
//                   </div>
//                   <div className="sponsor-body">
//                     <div className="sponsor-info">
//                       {" "}
//                       <h1>{datasponsor[sponno + 12].spontitle}</h1>
//                       <p>{datasponsor[sponno + 12].sponbody}</p>
//                       <button className="know-morebtn">Know more</button>
//                     </div>
//                   </div>
//                 </div>
//                      </SwiperSlide>
//                  </Swiper>
//             </div>
//         </div>
//     );
// };

// export default Sponsor;
