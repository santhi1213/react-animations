import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import  Goo from '../Images/goo.jpg';

gsap.registerPlugin(ScrollTrigger);

function ServiceType() {
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

			const animation = gsap.to(".photo:not(:first-child)", {
				opacity: 1, scale: 1, duration: 1, stagger: 1
			})

			ScrollTrigger.create({
				trigger: ".gallery",
				start: "top top",
				end: "bottom bottom",
				pin: ".rightblock",
				animation: animation,
				scrub: true,
				markers: true,
			})
		})
		return () => ctx.revert();
	}, [])
	return (
        <>
        <h1 className="text-center" style={{fontSize:'60px', fontWeight:'700'}}>Make it yours and take<br/>it with you</h1>
		<React.Fragment>
			<Box className="gallery" sx={{ display: "flex" }}>
				<Box className="left" sx={{
					width: "50%",
					marginLeft: "auto",
					"& .details": {
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						width: "40vw",
						marginLeft: "auto",
						color: "#000",
						fontSize: "3rem",
						fontWeight: 900,
					}
				}}>
					<Box className="details">
						Google Apps
					</Box>
					<Box className="details">
						Google Search Engine
					</Box>
					<Box className="details">
						Google Maps
                    </Box>
				</Box>
				<Box className="rightblock" sx={{
					width: "100%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}>
					<Box sx={{
						width: "60vw",
						height: "40vw",
						position: "relative",
						"& .photo": {
							position: "absolute",
							width: "100%",
							height: "100%",
							"& img": {
								height: "100%",
								width: "100%",
							}
						}
					}}>
						<Box className="photo">
							<img
								src="https://images.pexels.com/photos/10774600/pexels-photo-10774600.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="img-1" />
						</Box>
						<Box className="photo">
							<img
								src="https://images.pexels.com/photos/18530501/pexels-photo-18530501/free-photo-of-google-in-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="img-2" />
						</Box>
						<Box className="photo">
							<img
								src="https://images.pexels.com/photos/7738879/pexels-photo-7738879.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="img-3" />
						</Box>
					</Box>
				</Box>
			</Box>
		</React.Fragment >
        </>
	);
}

export default ServiceType;