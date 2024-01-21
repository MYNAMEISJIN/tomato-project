import React, { useEffect, useState } from 'react'
import { FaAngleUp } from "react-icons/fa";
import classes from "./Button.module.css"
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';


const Button = (props) => {

    const harvestIsLoading = useSelector((state) => state.tomatoDataReducer.harvestLoading)
    const renewalIsLoading = useSelector((state) => state.tomatoDataReducer.renewalLoading)


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("수확하기");
    const [isLoading, setIsLoading] = useState(false)
    const [loadingContent, setLoadingContent] = useState("")


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const dataSendButtonHandler = () => {
        if (selectedOption === "수확하기") {
            props.ButtonSendHarvest()

        }
        else {
            props.ButtonSendRenewal()

        }
    }

    useEffect(() => {
        if (harvestIsLoading || renewalIsLoading) {
            if (harvestIsLoading) {
                setLoadingContent("수확 중")
            }
            else {
                setLoadingContent("갱신 중")
            }
            setIsLoading(true)
        }
        else {
            setIsLoading(false)
        }
    }, [harvestIsLoading, renewalIsLoading]);


    return (
        <div
            className={classes.container}
        >
            <button
                className={classes.buttonLeft}
                onClick={dataSendButtonHandler}
                style={{
                    // backgroundColor: `${selectedOption === "수확하기" ? "#BB3636" : "#368BBB"}`,
                    backgroundColor: `${isLoading ? "#6BAE16" : (selectedOption === "수확하기" ? "#BB3636" : "#368BBB")}`,
                    cursor: `${isLoading ? "context-menu" : "pointer"}`
                }}
                disabled={isLoading}
            >
                {isLoading ? loadingContent : selectedOption}
            </button>
            <button
                className={classes.buttonRight}
                onClick={toggleDropdown}
                style={{
                    backgroundColor: `${isLoading ? "#588E13" : (selectedOption === "수확하기" ? "#9C2B2B" : "#2D769F")}`,
                    cursor: `${isLoading ? "context-menu" : "pointer"}`
                }}
                disabled={isLoading}
            >

                <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                    <FaAngleUp size="23" />
                </motion.div>

            </button>
            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={classes.dropdownContainer}

                    >

                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li
                                className={classes.dropdownLists}
                                onClick={() => handleOptionClick("수확하기")}
                                style={{
                                    backgroundColor:
                                        selectedOption === "수확하기" ? "#1F1F1F" : "none",
                                    color: selectedOption === "수확하기" && "white"
                                }}
                            >
                                수확하기
                            </li>
                            <li
                                className={classes.dropdownLists}
                                onClick={() => handleOptionClick("갱신하기")}
                                style={{
                                    backgroundColor:
                                        selectedOption === "갱신하기" ? "#1F1F1F" : "none",
                                    color: selectedOption === "갱신하기" && "white"
                                }}
                            >
                                갱신하기
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </div >
    )
}

export default Button