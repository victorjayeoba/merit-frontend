"use client";
import React from "react";
import { useState } from "react";
import Head from "next/head";
import Overlay from "../common/Overlay";

function Aggregate() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };
  const [formData, setFormData] = useState({
    university: "",
    jambScore: "",
    olevelResults: {
      mathematics: "",
      english: "",
      subject1: "",
      subject2: "",
      subject3: "",
      subject4: "",
    },
    postUtmeScore: "",
  });

  const universities = [
    "Select your University",
    "University of Ibadan (UI)",
    "University of Lagos (UNILAG) ",
    "University of Nigeria, Nsukka (UNN)",
    "Obafemi Awolowo University (OAU)",
    " University of Ilorin (UNILORIN) ",
    "The Federal University of Technology, Akure(FUTA)",
    "Nnamdi Azikiwe University (UNIZIK)",
    ,
    "University of Benin (UNIBEN)",
    // Add more universities as needed
  ];

  const grades = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "F9"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      name === "university" ||
      name === "jambScore" ||
      name === "postUtmeScore"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name.startsWith("subject")) {
      const subjectIndex = name.split("subject")[1]; // Extract subject number
      setFormData((prevData) => ({
        ...prevData,
        olevelResults: {
          ...prevData.olevelResults,
          [`subject${subjectIndex}`]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        olevelResults: {
          ...prevData.olevelResults,
          [name]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Here you can save or send the form data
    alert("Form submitted!"); // Just for user feedback

    setError("");
    setResponse(null);

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/unsiversities/faculties/courses`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setResponse(data);
    } catch (error) {
      setError("Failed to calculate aggregate score");
    }
  };
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className=" py-2 bg-gray-50">
      <Head>
        <title>MERIT App</title>
        <meta
          name="description"
          content="Calculate your university aggregate scores"
        />
      </Head>
      <div className="text-center my-8 px-3">
        <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Calculate Your Aggregate Score
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover your chances of admission by calculating your aggregate score
          based on your JAMB, O'Level, and Post-UTME results. Our easy-to-use
          tool provides accurate results to help you plan your next steps and
          make informed decisions about your educational future.
        </p>
      </div>

      <div className="flex items-center justify-center  ">
        <form
          id="aggregatecalculator"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
        >
          <h2 className="text-2xl font-semibold text-center mb-4 lg:text-start">
            Calculate your university aggregate scores
          </h2>

          <label className="block mb-2">
            <span className="text-gray-700">
              Select the university of your choice
            </span>
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              {universities.map((university, index) => (
                <option key={index} value={university} disabled={index === 0}>
                  {university}
                </option>
              ))}
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">JAMB Score</span>
            <input
              type="number"
              name="jambScore"
              value={formData.jambScore}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </label>

          <h3 className="text-lg font-semibold mb-2">O-Level Results</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <label className="block">
              <span className="text-gray-700">Mathematics</span>
              <select
                name="mathematics"
                value={formData.olevelResults.mathematics}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              >
                <option value="">Select Grade</option>
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700">English</span>
              <select
                name="english"
                value={formData.olevelResults.english}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              >
                <option value="">Select Grade</option>
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </label>

            {/* Additional Subjects */}
            {[1, 2, 3, 4].map((subjectNumber) => (
              <label className="block" key={subjectNumber}>
                <span className="text-gray-700">
                  Subject {subjectNumber + 2}
                </span>
                <select
                  name={`subject${subjectNumber}`}
                  value={formData.olevelResults[`subject${subjectNumber}`]}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                  required
                >
                  <option value="">Select Grade</option>
                  {grades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <label className="block mb-4">
            <span className="text-gray-700">Post-UTME Score</span>
            <input
              type="number"
              name="postUtmeScore"
              value={formData.postUtmeScore}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </label>

          <button
            type="submit"
            onClick={toggleOverlay}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
      {error}
    </div>
  );
}

export default Aggregate;
