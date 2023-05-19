import React, { useState } from 'react'





const CarSellFormValidation = () => {
    const [carMake, setCarMake] = React.useState('');
    const [carModel, setCarModel] = React.useState('');
    const [year, setYear] = React.useState('');
    const [mileage, setMileage] = useState('');
    const [condition, setCondition] = useState('');
    const [features, setFeatures] = useState([]);
    const [transmission, setTransmission] = useState('');
    const [priceRange, setPriceRange] = useState(0);
    const [contactNumber, setContactNumber] = useState('');
    const [formErrors, setFormErrors] = useState({});



    const FormValidate = () => {
        const errors = {};

        if (carMake.trim() === '') {
            errors.carMake = 'Car Make is required';
        }

        if (carModel.trim() === '') {
            errors.carModel = 'Car Model is required';
        }

        if (year.trim() === '') {
            errors.year = 'Year is required';
        } else if (isNaN(year) || +year < 2000 || +year > 2099) {
            errors.year = 'Year must be a valid number between 2000 and 2099';
        }

        if (mileage.trim() === '') {
            errors.mileage = 'Mileage is required';
        } else if (isNaN(mileage) || +mileage < 0) {
            errors.mileage = 'Mileage must be a valid positive number';
        }

        if (condition === '') {
            errors.condition = 'Condition is required';
        }

        if (features.length === 0) {
            errors.features = 'At least one feature must be selected';
        }

        if (transmission === '') {
            errors.transmission = 'Transmission is required';
        }

        if (priceRange.toString().trim() === '') {
            errors.priceRange = 'Price Range is required';
        }

        if (contactNumber.trim() === '') {
            errors.contactNumber = 'Contact Number is required';
        } else if (!/^\d+$/.test(contactNumber)) {
            errors.contactNumber = 'Contact Number must be a valid number';
        }

        return errors;


    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ carMake, carModel, year, mileage, condition, features, transmission, priceRange, contactNumber });

        const errors = FormValidate();
        setFormErrors(errors);



        
        if (Object.keys(errors).length === 0) {
            console.log('Form submitted successfully');
            
        }
    };

    return (
        <>
        
            <h2>Car Sell Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form">

                    <div className="side1">
                        <div>
                            <label htmlFor="carMake-input">Car Make</label><br />
                            <input type="text" id="carMake-input" value={carMake} onChange={(e) => setCarMake(e.target.value)} />
                            {formErrors.carMake && <span className="error">{formErrors.carMake}</span>}<br />


                        </div>

                        <div>
                            <label htmlFor="carModel-input">Car Model</label><br />
                            <input type="text" id="carModle-input" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
                            {formErrors.carModel && <span className="error">{formErrors.carModel}</span>}<br />
                        </div>
                    </div>
                    <div className='side2'>

                        <div>
                            <label htmlFor="year-input">Year</label><br />
                            <input type="number" id="year-input" min="2000" max="2099" value={year} onChange={(e) => setYear(e.target.value)} />
                            {formErrors.year && <span className="error">{formErrors.year}</span>}<br />
                        </div>

                        <div>
                            <label htmlFor="mileage-input">Mileage</label><br />
                            <input type="number" id="mileage-input" value={mileage} onChange={(e) => setMileage(e.target.value)} />
                            {formErrors.mileage && <span className="error">{formErrors.mileage}</span>}<br />
                        </div>
                    </div>
                    <div className="side3">
                        <div className="condition">
                            <label>Condition</label><br />
                            <div className='radio'>
                                <div className='radio1'>
                                    <input type="radio" value="Excellent" checked={condition === 'Excellent'} onChange={() => setCondition('Excellent')} />Excellent<br />
                                    <input type="radio" value="Good" checked={condition === 'Good'} onChange={() => setCondition('Good')} />Good<br />
                                </div>
                                <div className='radio2'>
                                    <input type="radio" value="Fair" checked={condition === 'Fair'} onChange={() => setCondition('Fair')} />Fair<br />
                                    <input type="radio" value="Poor" checked={condition === 'Poor'} onChange={() => setCondition('Poor')} />Poor<br />
                                </div>
                                {formErrors.condition && <span className="error">{formErrors.condition}</span>}<br />
                            </div>
                        </div>


                        <div className="features">
                            <label>Features</label><br />
                            <div className='check'>
                                <div className='check1'>
                                    <input type="checkbox" value="Air Conditioning" checked={features.includes('Air Conditioning')}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setFeatures([...features, 'Air Conditioning']);
                                            } else {
                                                setFeatures(features.filter((f) => f !== 'Air Conditioning'));
                                            }
                                        }} />Air Conditioning<br />
                                    <input type="checkbox" value="Power Steering" checked={features.includes('Power Steering')}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setFeatures([...features, 'Power Steering']);
                                            } else {
                                                setFeatures(features.filter((f) => f !== 'Power Steering'));
                                            }
                                        }} />Power Steering<br />

                                    <input type="checkbox" value="Power Windows" checked={features.includes('Power Windows')}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setFeatures([...features, 'Power Windows']);
                                            } else {
                                                setFeatures(features.filter((f) => f !== 'Power Windows'));
                                            }
                                        }} />Power Windows<br />
                                </div>
                                <div className='check2'>
                                    <input type="checkbox" value="ABS" checked={features.includes('ABS')}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setFeatures([...features, 'ABS']);
                                            } else {
                                                setFeatures(features.filter((f) => f !== 'ABS'));
                                            }
                                        }} />ABS<br />
                                    <input type="checkbox" value="Navigation System" checked={features.includes('Navigation System')}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setFeatures([...features, 'Navigation System']);
                                            } else {
                                                setFeatures(features.filter((f) => f !== 'Navigation System'));
                                            }
                                        }} />Navigation System
                                </div>
                                {formErrors.features && <span className="error">{formErrors.features}</span>}<br />
                            </div>

                        </div>
                    </div>
                    <div className="side4">
                        <div>
                            <label>Transmission</label><br />
                            <select className='option' value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                                <option value="">Select an option</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                                </select>
                            {formErrors.transmission && <span className="error">{formErrors.transmission}</span>}<br />
                        </div>

                        <div>
                            <label htmlFor="priceRange-input">Price Range</label><br />
                            <input type="range" id="priceRange-input" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} /><br />
                            {formErrors.priceRange && <span className="error">{formErrors.priceRange}</span>}<br />
                        </div>
                        <div>
                            <label htmlFor="contact-input">Contact Number</label><br />
                            <input type="text" id="contact-input" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                            {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}<br />
                        </div>
                    </div>

                    <div className='submit'>
                        <button type="submit">Submit</button>
                    </div>

                </div>


            </form>
        </>
    )

};


export default CarSellFormValidation;