import React, { Fragment, useState } from 'react';
import Layout from '../components/layout';
import { useForm } from 'react-hook-form';
import { NextPage } from 'next';
import clsx from 'clsx';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface IForm {
	username: string;
	email: string;
	password: string;
	confirm: string;
}

const SignUp: NextPage = () => {
	const [loading, setLoading] = useState(false);

	const { register, handleSubmit, errors, formState, watch } = useForm<IForm>(
		{
			defaultValues: {
				username: '',
				email: '',
				password: '',
				confirm: '',
			},
		}
	);

	const password = watch('password', '');

	const onSubmit = (data: IForm) => {
		console.log(data);
		setLoading(true);

		window.setTimeout(() => setLoading(false), 2000);
	};

	return (
		<Fragment>
			<Layout>
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12 offset-xs-0">
						<div className="card shadow-sm">
							<div className="card-body p-0">
								<div className="bg-light border-bottom card-title p-3">
									<h3 className={'m-0'}>
										{'Create an Account'}
									</h3>
								</div>

								<form
									className={'p-3'}
									onSubmit={handleSubmit(onSubmit)}
								>
									<div className="form-group row">
										<label
											className={
												'col-md-4 col-xs-12 col-form-label'
											}
											htmlFor="username"
										>
											{'Username'}
										</label>
										<div className="col-md-8 col-xs-12">
											<input
												id={'username'}
												type="text"
												className={clsx({
													'form-control': true,
													'is-valid':
														formState.isSubmitted &&
														!errors.username,
													'is-invalid':
														formState.isSubmitted &&
														!!errors.username,
												})}
												placeholder={'Username'}
												name={'username'}
												ref={register({
													required: true,
													minLength: 6,
													maxLength: 20,
												})}
											/>
											{errors.username && (
												<div
													id="validationServer03Feedback"
													className="invalid-feedback"
												>
													{errors.username.type ===
														'required' &&
														'Username is required!'}
													{errors.username.type ===
														'minLength' &&
														'Username must be between 6 and 20 characters'}
													{errors.username.type ===
														'maxLength' &&
														'Username must be between 6 and 20 characters'}
												</div>
											)}
										</div>
									</div>

									<div className="form-group row">
										<label
											className={
												'col-md-4 col-xs-12 col-form-label'
											}
											htmlFor="email"
										>
											{'Email'}
										</label>
										<div className="col-md-8 col-xs-12">
											<input
												id={'email'}
												type="text"
												className={clsx({
													'form-control': true,
													'is-valid':
														formState.isSubmitted &&
														!errors.email,
													'is-invalid':
														formState.isSubmitted &&
														!!errors.email,
												})}
												placeholder={'Email'}
												name={'email'}
												ref={register({
													required: true,
													validate: (input) =>
														isEmail(input),
												})}
											/>
											{errors.email && (
												<div
													id="validationServer03Feedback"
													className="invalid-feedback"
												>
													{errors.email.type ===
														'required' &&
														'Email is required!'}
													{errors.email.type ===
														'validate' &&
														'Email is not valid!'}
												</div>
											)}
										</div>
									</div>

									<div className="form-group row">
										<label
											htmlFor="password"
											className="col-md-4 col-xs-12 col-form-label"
										>
											{'Password'}
										</label>
										<div className="col-md-8 col-xs-12">
											<input
												id={'password'}
												type="password"
												className={clsx({
													'form-control': true,
													'is-valid':
														formState.isSubmitted &&
														!errors.password,
													'is-invalid':
														formState.isSubmitted &&
														!!errors.password,
												})}
												placeholder={'Password'}
												name={'password'}
												ref={register({
													required: true,
													minLength: 6,
													maxLength: 20,
												})}
											/>
											{errors.password && (
												<div
													id="validationServer03Feedback"
													className="invalid-feedback"
												>
													{errors.password.type ===
														'required' &&
														'Password is required!'}
													{errors.password.type ===
														'minLength' &&
														'Password must be between 6 and 20 characters'}
													{errors.password.type ===
														'maxLength' &&
														'Password must be between 6 and 20 characters'}
												</div>
											)}
										</div>
									</div>

									<div className="form-group row">
										<label
											htmlFor="confirm"
											className="col-md-4 col-xs-12 col-form-label"
										>
											{'Confirm Password'}
										</label>
										<div className="col-md-8 col-xs-12">
											<input
												id={'confirm'}
												type="password"
												className={clsx({
													'form-control': true,
													'is-valid':
														formState.isSubmitted &&
														!errors.confirm,
													'is-invalid':
														formState.isSubmitted &&
														!!errors.confirm,
												})}
												placeholder={'Confirm Password'}
												name={'confirm'}
												ref={register({
													required: true,
													validate: (input) =>
														equals(input, password),
												})}
											/>
											{errors.confirm && (
												<div
													id="validationServer03Feedback"
													className="invalid-feedback"
												>
													{errors.confirm.type ===
														'required' &&
														'Confirm Password is required!'}
													{errors.confirm.type ===
														'validate' &&
														'Confirmation does not match the Password!'}
												</div>
											)}
										</div>
									</div>

									<div className="form-group row">
										<div className="col-12">
											<button
												type="submit"
												role={'button'}
												className={
													'btn btn-primary btn-block shadow-sm'
												}
												disabled={loading}
											>
												{loading && (
													<FontAwesomeIcon
														icon={faSpinner}
														pulse={true}
													/>
												)}
												<span className={'ml-2'}>
													{'Sign Up'}
												</span>
											</button>
										</div>
									</div>

									<div className="form-group row mb-0">
										<div className="col-12">
											<div className="alert alert-success mb-0 shadow-sm">
												<strong>
													<span>
														{
															'Sign up successful! Click '
														}
													</span>
													<Link href="/login">
														{'here'}
													</Link>
													<span>{' to login.'}</span>
												</strong>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</Fragment>
	);
};

export default SignUp;
