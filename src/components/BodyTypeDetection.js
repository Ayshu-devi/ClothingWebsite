import React, { useState } from 'react';
import axios from 'axios';
import './BodyTypeDetection.css'; // Import the CSS for styling

const BodyShapeDetector = () => {
  const [height, setHeight] = useState('');
  const [hipSize, setHipSize] = useState('');
  const [shoulderLength, setShoulderLength] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [bustSize, setBustSize] = useState('');
  const [bodyShape, setBodyShape] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/body-shape', {
        height: parseFloat(height),
        hipSize: parseFloat(hipSize),
        shoulderLength: parseFloat(shoulderLength),
        waistSize: parseFloat(waistSize),
        bustSize: parseFloat(bustSize),
      });
      setBodyShape(response.data.shape);
    } catch (error) {
      console.error('Error fetching body shape:', error);
    }
  };

  const handleChange = (e, setter) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && !isNaN(Number(value)))) {
      setter(value);
    }
  };

  return (
    <div className="body-shape-detector-container">
      <div className="form-container">
        <h1>Body Shape Detector</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Height (feet):
            <input
              type="number"
              value={height}
              onChange={(e) => handleChange(e, setHeight)}
              placeholder="Enter height in feet"
            />
          </label>
          <br />
          <label>
            Hip Size (inch):
            <input
              type="number"
              value={hipSize}
              onChange={(e) => handleChange(e, setHipSize)}
              placeholder="Enter hip size in inch"
            />
          </label>
          <br />
          <label>
            Shoulder Length (inch):
            <input
              type="number"
              value={shoulderLength}
              onChange={(e) => handleChange(e, setShoulderLength)}
              placeholder="Enter shoulder length in inch"
            />
          </label>
          <br />
          <label>
            Waist Size (inch):
            <input
              type="number"
              value={waistSize}
              onChange={(e) => handleChange(e, setWaistSize)}
              placeholder="Enter waist size in inch"
            />
          </label>
          <br />
          <label>
            Bust Size (inch):
            <input
              type="number"
              value={bustSize}
              onChange={(e) => handleChange(e, setBustSize)}
              placeholder="Enter bust size in inch"
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {bodyShape && (
          <div>
            <br></br>
            <h2>Your Body Shape: {bodyShape}</h2>
            
          </div>
        )}
       
      </div>
      <div className="image-container">
        <img src="../assets/img/shape8.jpg" alt="Static Image" className="static-image" />
      </div>
    </div>
  );
};

export default BodyShapeDetector;