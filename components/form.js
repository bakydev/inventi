import React, {useContext} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import WeatherContext from '../context/weatherContext';
import {
	FormikWrapper,
	StyledForm,
	StyledLabel,
	StyledInput,
	StyledButton,
	StyledError,
} from './styled';


/**
 * Validation schema for city name.
 * 
 * @return {object} Yup
 */
const CitySchema = Yup.object().shape({
	cityName: Yup.string()
		.min(2, 'Please type at least 2 characters!')
		.max(30, 'Please type maximum 30 characters!')
		.required('Please fill out the field with the city name')
});

/**
 * Renders form.
 * 
 * @param {object} props
 * @return {*}
 */
const CityForm = () => {

	const weatherContext = useContext(WeatherContext);

	const {getDailyWeather} = weatherContext;

	/**
	 * Fetch weather by city.
	 * 
	 * @param {string} city
	 */
	const fetchWeather = (city) => {
		getDailyWeather(city);
	}

	return (
		<FormikWrapper>
			<Formik
				initialValues={{
					cityName: '',
				}}
				validationSchema={CitySchema}
				onSubmit={values => {
					const valuesArray = Object.values(values);
					const city = valuesArray[0];
					fetchWeather(city);
				}}
				render = {({
					touched,
					errors,
					values,
					handleChange,
					handleBlur,
					handleSubmit
				}) => (
					<StyledForm onSubmit={handleSubmit}>
						<div>
							<StyledLabel htmlFor='cityName'>
								<i className="fas fa-city"></i>
							</StyledLabel>
							<StyledInput
								id='cityName'
								type='text'
								name='cityName'
								onBlur={handleBlur}
								value={values.cityName}
								onChange={handleChange}
								placeholder='Please type your city...'
							/>
							<StyledButton type='submit'>Find</StyledButton>
							{errors.cityName && touched.cityName ? (
								<StyledError>{errors.cityName}</StyledError>
							) : null}
						</div>
					</StyledForm>
				)}
			/>
		</FormikWrapper>
	);
};

export default CityForm;
